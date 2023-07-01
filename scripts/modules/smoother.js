import { world, system, MinecraftBlockTypes} from "@minecraft/server"
import * as editor from "@minecraft/server-editor";

const ow = world.getDimension('overworld');

export default function registerSmootherExtension(){
    editor.registerEditorExtension(
        'Smoother',
        uiSession=>{
            const previewSelection = uiSession.extensionContext.selectionManager.create();
            previewSelection.visible = true;
            previewSelection.setOutlineColor({ red: 0, green: 0.5, blue: 1, alpha: 0.2 });
            previewSelection.setFillColor({ red: 0, green: 0.5, blue: 1, alpha: 0.1 });

            const previewSelection2 = uiSession.extensionContext.selectionManager.create();
            previewSelection2.visible = true;
            previewSelection2.setOutlineColor({ red: 1, green: 0.5, blue: 0, alpha: 0.2 });
            previewSelection2.setFillColor({ red: 1, green: 0.5, blue: 0, alpha: 0.1 });
            
            uiSession.scratchStorage = {
                previewSelection,
                previewSelection2
            };

            //ツールバーに追加
            const tool = uiSession.toolRail.addTool({
                displayAltText: '平滑化ブラシ',
                displayStringId: 'test.smoother.tool.title',
                icon: 'pack://textures/smoother.png',
                tooltipAltText: '左クリックで平滑化ブラシを使用',
                tooltipStringId: 'test.smoother.tool.tooltip',
            });

            
            //ウィンドウ表示
            const pane = uiSession.createPropertyPane({
                titleStringId: 'test.smoother.pane.title',
                titleAltText: '平滑化ブラシ',
            });

            //オブジェクトバインド
            const settings = editor.bindDataSource(pane,{
                size: 8,
                set_block:true,
                block:MinecraftBlockTypes.stone,
                set_air:true
            })

            pane.addNumber(settings, 'size', {
                titleAltText: 'サイズ',
                min: 2,
                max: 16,
                showSlider: true,
            });
            pane.addBool(settings, 'set_air', {
                titleAltText: '削る'
            });
            pane.addBool(settings, 'set_block', {
                titleAltText: '置く'
            });
            pane.addBlockPicker(settings, 'block', {
                titleAltText: 'ブロック',
            });
            tool.bindPropertyPane(pane);


            //クリック制御
            const executeExampleMouseButtonAction = uiSession.actionManager.createAction({
                actionType: editor.ActionTypes.MouseRayCastAction,
                onExecute: async (mouseRay, mouseProps) => {
                    if (uiSession.scratchStorage === undefined) {
                        console.error('Smoother storage was not initialized.');
                        return;
                    }
                    if (mouseProps.mouseAction === editor.MouseActionType.LeftButton) {
                        if (mouseProps.inputType === editor.MouseInputType.ButtonDown) {
                            uiSession.extensionContext.transactionManager.openTransaction('Transaction group smooth brush');
                            uiSession.scratchStorage.previewSelection.clear();
                            uiSession.scratchStorage.previewSelection2.clear();
                            onExecuteBrush();
                        }
                        else if (mouseProps.inputType === editor.MouseInputType.ButtonUp) {
                            if(uiSession.scratchStorage.previewSelection && !uiSession.scratchStorage.previewSelection.isEmpty)
                                uiSession.extensionContext.transactionManager.trackBlockChangeSelection(uiSession.scratchStorage.previewSelection);
                            if(uiSession.scratchStorage.previewSelection2 && !uiSession.scratchStorage.previewSelection2.isEmpty)    
                                uiSession.extensionContext.transactionManager.trackBlockChangeSelection(uiSession.scratchStorage.previewSelection2);
                            
                            const player = uiSession.extensionContext.player;
                            const dimension = player.dimension;

                            
                            await (0,editor.executeLargeOperation)(uiSession.scratchStorage.previewSelection, blockLocation => {
                                const block = dimension.getBlock(blockLocation);
                                if (block) {
                                    block.isWaterlogged = false;
                                    block.setType(MinecraftBlockTypes.air);
                                }
                                
                            },
                            (0,editor.executeLargeOperation)(uiSession.scratchStorage.previewSelection2, blockLocation => {
                                if(uiSession.scratchStorage.previewSelection2 && !uiSession.scratchStorage.previewSelection2.isEmpty){
                                    const block = dimension.getBlock(blockLocation);
                                    if (block) {
                                        block.isWaterlogged = false;
                                        block.setType(settings.block);
                                    }
                                }
                            })
                            )
                                .catch(e => {
                                console.error(e);
                                uiSession.extensionContext.transactionManager.discardOpenTransaction();
                                uiSession.scratchStorage?.previewSelection.clear();
                                uiSession.scratchStorage?.previewSelection2.clear();
                            })
                                .then(() => {
                                    uiSession.extensionContext.transactionManager.commitOpenTransaction();
                                    uiSession.scratchStorage?.previewSelection.clear();
                                    uiSession.scratchStorage?.previewSelection2.clear();
                                
                            });
                            if(settings.set_block){
                                
                            }  
                        }
                    }
                },
            });
            tool.registerMouseButtonBinding(executeExampleMouseButtonAction);

            //マウスドラッグ制御
            const executeBrushRayAction = uiSession.actionManager.createAction({
                actionType: editor.ActionTypes.MouseRayCastAction,
                onExecute:  (mouseRay, mouseProps) => {
                    if (mouseProps.inputType === editor.MouseInputType.Drag) {
                        onExecuteBrush();
                    }
                },
            });
            tool.registerMouseDragBinding(executeBrushRayAction);

            const onExecuteBrush= () =>{
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
                    y:location.y - d - even +1,
                    z:location.z - d - even +1,  
                }
                let to = {
                    x:location.x + d ,
                    y:location.y + d ,
                    z:location.z + d ,  
                }
                let height_arr = createHeightMap(from,to,player.dimension);
                let avg_arr = avg_9(height_arr);
                for(let x = from.x; x< to.x + 1; x++){
                    for(let z = from.z; z < to.z + 1; z++){
                        let num = height_arr[x-from.x+1][z-from.z+1];
                        let avg = avg_arr[x-from.x][z-from.z];
                        if(num!=-1 && num != avg){
                            if(num-avg>0 ){
                                if(settings.set_air){
                                    previewSelection.pushVolume({
                                        action:0,
                                        volume:{
                                            from : {
                                                x:x,
                                                y:from.y + num,
                                                z:z
                                            },
                                            to : {
                                                x:x,
                                                y:from.y + avg+1,
                                                z:z
                                            }
                                        }
                                    });
                                }
                            }
                            else if(settings.set_block){
                                previewSelection2.pushVolume({
                                    action:0,
                                    volume:{
                                        from : {
                                            x:x,
                                            y:from.y + avg-1,
                                            z:z
                                        },
                                        to : {
                                            x:x,
                                            y:from.y + num+1,
                                            z:z
                                        }
                                    }
                                });
                            }
                            
                        }   
                    }
                }
            }
        },
        uiSession => {
            uiSession.log.debug(
                `Shutting down extension [${uiSession.extensionContext.extensionName}] for player [${uiSession.extensionContext.player.name}]`
            );
        },
        {
            description: 'Smoother',
            notes: '',
        }
    );
}


function createHeightMap(from,to,dimension){ //from to　の一回り大きいやつ作る
    let height = [];
    for(let x = from.x-1; x <= to.x + 1; x++){
        let arr = [];
        for(let z = from.z-1; z <= to.z + 1; z++){
            let y = to.y - from.y;
            for(y ; y >= 0; y--){
                if(!dimension.getBlock({x:x,y:y+from.y,z:z}).isAir()) break;
            }
            arr.push(y);
        }
        
        height.push(arr);
    }
    
    return height
}

function avg_9(arr){
    let return_arr = [];
    for(let i = 1; i<arr.length-1 ; i++){
        let median_arr = [];
        for(let j = 1; j<arr.length-1;j++){
            let values = [
                arr[i-1][j-1], arr[i-1][j], arr[i-1][j+1],
                arr[i][j-1], arr[i][j], arr[i][j+1],
                arr[i+1][j-1], arr[i+1][j], arr[i+1][j+1]
            ];
            let sum = 0;
            let n = 1;
            values.forEach(value => {
                if(value!=-1) {
                    sum += value;
                    n++;
                }
            });
            /*
            let filteredArr = values.filter(num => num !== -1);
            filteredArr.sort(function(a, b){return a-b});
            let mid = Math.floor(filteredArr.length / 2 - 0.1);
            if (filteredArr.length % 2 === 0) {
                median_arr.push(filteredArr[mid - 1]);
            } else {
                median_arr.push(filteredArr[mid]);
            }
            */
            median_arr.push(Math.round(sum / (n-1) -0.01));//-0.01は0.5の部分を削る方に回したいため 
        }
        return_arr.push(median_arr);
    }
    return return_arr;
}