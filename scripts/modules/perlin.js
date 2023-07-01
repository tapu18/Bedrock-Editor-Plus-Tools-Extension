import { world, system, MinecraftBlockTypes} from "@minecraft/server"
import * as editor from "@minecraft/server-editor";
import {Noise} from "./lib/noisejs-master/perlin";




export default function registerPerlinExtension(){
    editor.registerEditorExtension(
        'perlin generator',
        uiSession =>{
                
            const noise = new Noise()

            //ウィンドウ表示
            const pane = uiSession.createPropertyPane({
                displayAltText: 'ノイズ地形',
                displayStringId: 'test.perlin.tool.title',
                icon: 'pack://textures/perlin.png',
                tooltipAltText: 'クリックで正方形のランダムな地形を生成',
                tooltipStringId: 'test.perlin.tool.tooltip',
            });

            //ツールバーに追加
            const tool = uiSession.toolRail.addTool({
                titleStringId: 'test.perlin.pane.title',
                titleAltText: 'ノイズ地形',
            })

            //オブジェクトバインド
            const settings = editor.bindDataSource(
                pane,
                {
                    size: 50,
                    height:16,
                    freq:3,
                    block:MinecraftBlockTypes.stone,
                    seed:-1
                }
            );
            pane.addNumber(settings, 'size', {
                titleAltText: 'サイズ',
                min: 1,
                max: 256,
                showSlider: true,
            });
            pane.addNumber(settings, 'height', {
                titleAltText: '高さ',
                min: 1,
                max: 32,
                showSlider: true,
            });
            pane.addNumber(settings, 'freq', {
                titleAltText: 'スケール',
                min: 1,
                max: 8,
                showSlider: true,
            });
            pane.addBlockPicker(settings, 'block', {
                titleAltText: 'ブロック',
            });
            pane.addNumber(settings, 'seed', {
                titleAltText: 'シード',
                min: -1,
                max: 65535,
            });
            tool.bindPropertyPane(pane);

            //ボリュームの色とか

            const previewSelection = uiSession.extensionContext.selectionManager.create();
            previewSelection.visible = true;
            previewSelection.borderColor ={ red: 1, green: 0.5, blue: 0, alpha: 0.2 };
            previewSelection.fillColor = { red: 1, green: 0.5, blue: 0, alpha: 0.2 };

            uiSession.scratchStorage = {
                previewSelection,
            };

            //クリック制御
            const executeExampleMouseButtonAction = uiSession.actionManager.createAction({
                actionType: editor.ActionTypes.MouseRayCastAction,
                onExecute:  (mouseRay, mouseProps) => {
                    if (uiSession.scratchStorage === undefined) {
                        console.error('Blend fill was not initialized.');
                        return;
                    }
                    if (mouseProps.mouseAction === editor.MouseActionType.LeftButton) {
                        if (mouseProps.inputType === editor.MouseInputType.ButtonDown) {
                            uiSession.extensionContext.transactionManager.discardOpenTransaction();
                            uiSession.extensionContext.transactionManager.openTransaction('Transaction group perlin');
                            uiSession.scratchStorage.previewSelection.clear();
                            onExecuteBrush();
                        }
                    }
                },
            });
            tool.registerMouseButtonBinding(executeExampleMouseButtonAction);

            const onExecuteBrush= async () =>  {
                const player = uiSession.extensionContext.player;
                const targetBlock = player.dimension.getBlock(uiSession.extensionContext.cursor.getPosition());
                if (targetBlock === undefined) {
                    return;
                }
                let location = targetBlock.location;

                // 最後に置いた場所と同じならスキップ
                
                if (uiSession.scratchStorage.lastVolumePlaced?.x == targetBlock.location.x &&
                    uiSession.scratchStorage.lastVolumePlaced?.y == targetBlock.location.y &&
                    uiSession.scratchStorage.lastVolumePlaced?.z == targetBlock.location.z
                    ){
                    return;
                }       
                uiSession.scratchStorage.lastVolumePlaced = targetBlock.location;
                
                
                let even = 0;
                let d = Math.floor(settings.size / 2);
                if(settings.size%2 == 1){
                    even = 1
                }
                let from = {
                    x:location.x - d - even +1,
                    y:location.y ,
                    z:location.z - d - even +1,  
                }
                
                if(settings.seed==-1){     
                    noise.seed(Math.random());
                }
                else{
                    noise.seed(settings.seed);
                }
                const heightmap = generate_map(settings.size,settings.height,settings.freq);
                previewSelection.pushVolume({
                    action:0,
                    volume:{
                        from : from,
                        to : {
                            x:location.x + d ,
                            y:location.y + settings.height ,
                            z:location.z + d ,
                        }
                    }
                })
                
                if(uiSession.scratchStorage?.previewSelection && !uiSession.scratchStorage.previewSelection.isEmpty){
                    uiSession.extensionContext.transactionManager.trackBlockChangeSelection(uiSession.scratchStorage.previewSelection);
                }
                            
                await fillWithTimeout(heightmap,settings.size,player.dimension,from,settings.block)
                
                    .catch(e => {
                    console.error(e);
                    uiSession.extensionContext.transactionManager.discardOpenTransaction();
                    uiSession.scratchStorage?.previewSelection.clear();
                    })
                    .then(() => {
                        uiSession.extensionContext.transactionManager.commitOpenTransaction();
                        uiSession.scratchStorage?.previewSelection.clear();

                });


                

            }


            function generate_map(size,height,freq){
                let map = [];
                for(let x = 0; x < size; x++){
                    let arr = [];
                    for(let z = 0; z < size; z++){
                        
                        let value = combinedPerlinNoise(x/256*freq, z/256*freq)
                        arr.push(Math.floor(Math.abs(value)* height));
                    }
                    map.push(arr);
                }
                return map
            }

            function combinedPerlinNoise(x, z) {
                let total = 0;
                let frequency = 1;
                let amplitude = 1;
                let maxValue = 0;
                const octaves = 4; // オクターブ数
                const persistence = 0.4; // パーシステンス (0 < persistence < 1)
                
                for (let i = 0; i < octaves; i++) {
                    total += (noise.perlin2(x * frequency, z * frequency)+1)*0.5 * amplitude;
                    maxValue += amplitude;
                    amplitude *= persistence;
                    frequency *= 2;
                }
                
                return total / maxValue ;
                }

            function fill(heightmap,size,dimension,from,block){
                return new Promise((resolove,reject) => {
                    for(let x = 0; x < size; x++){
                        for(let z = 0; z < size; z++){
                            dimension.fillBlocks({
                                x:from.x+x,
                                y:from.y,
                                z:from.z+z
                            },{
                                x:from.x+x,
                                y:from.y+heightmap[x][z],
                                z:from.z+z
                            },
                            block
                            )      
                        }
                    }
                    resolove();
                })
                
            }


            function fillWithTimeout(heightmap, size, dimension, from, block) {
                const fillPromise = fill(heightmap, size, dimension, from, block);
                const timeoutPromise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                    reject(new Error('Timeout error'));
                    }, 10000);
                });
                
                return Promise.race([fillPromise, timeoutPromise]);
                }
        },
        uiSession => {
            uiSession.log.debug(
                `Shutting down extension [${uiSession.extensionContext.extensionName}] for player [${uiSession.extensionContext.player.name}]`
            );
        },
        {
            description: 'perlin generator',
            notes: '',
        }
    )
}
