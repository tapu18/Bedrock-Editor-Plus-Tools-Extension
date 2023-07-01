import { world, system, MinecraftBlockTypes} from "@minecraft/server"
import * as editor from "@minecraft/server-editor";

const ow = world.getDimension('overworld');

export default function registerBlendExtension(){
    editor.registerEditorExtension(
        'blend blush',
        uiSession=>{
                        //ウィンドウ表示
            let pane = uiSession.createPropertyPane({
                titleStringId: 'test.blend.pane.title',
                titleAltText: 'ブレンドブラシ',
            });

            //ツールバーに追加
            const tool = uiSession.toolRail.addTool({
                displayAltText: 'ブレンドブラシ',
                displayStringId: 'test.blend.tool.title',
                icon: 'pack://textures/blend.png',
                tooltipAltText: '左クリックでブレンドブラシを使用',
                tooltipStringId: 'test.blend.tool.tooltip',
            })

            //オブジェクトバインド
            const settings = editor.bindDataSource(pane,{
                size: 6,
                height:6,
                block1:MinecraftBlockTypes.stone,
                weight1:100,
                block2:MinecraftBlockTypes.dirt,
                weight2:100,
                block3:MinecraftBlockTypes.grass,
                weight3:0,
                block4:MinecraftBlockTypes.stone,
                weight4:0,
                block5:MinecraftBlockTypes.stone,
                weight5:0,
            })
            pane.addNumber(settings, 'size', {
                titleAltText: 'サイズ',
                min: 1,
                max: 32,
                showSlider: true,
            });
            const arr = [
                ['block1','ブロック1','weight1'],
                ['block2','ブロック2','weight2'],
                ['block3','ブロック3','weight3'],
                ['block4','ブロック4','weight4'],
                //['block5','ブロック5','weight5']
            ];
            arr.forEach(element => {        
                pane.addBlockPicker(settings, element[0], {
                    titleAltText: element[1],
                });
                pane.addNumber(settings, element[2], {
                    titleAltText: '重み',
                    min: 0,
                    max: 100,
                    showSlider: false,
                });
            });
            tool.bindPropertyPane(pane);


            //ボリューム
            const previewSelection = uiSession.extensionContext.selectionManager.create();
            previewSelection.visible = true;
            previewSelection.setOutlineColor({ red: 1, green: 0.5, blue: 0, alpha: 0.2 });
            previewSelection.setFillColor({ red: 1, green: 0.5, blue: 0, alpha: 0.2 });

            uiSession.scratchStorage = {
                previewSelection,
            };

            //クリック制御
            const executeExampleMouseButtonAction = uiSession.actionManager.createAction({
                actionType: editor.ActionTypes.MouseRayCastAction,
                onExecute: async (mouseRay, mouseProps) => {
                    if (uiSession.scratchStorage === undefined) {
                        console.error('Blend fill was not initialized.');
                        return;
                    }
                    if (mouseProps.mouseAction === editor.MouseActionType.LeftButton) {
                        if (mouseProps.inputType === editor.MouseInputType.ButtonDown) {
                            uiSession.extensionContext.transactionManager.openTransaction('Transaction group blend fill brush');
                            uiSession.scratchStorage.previewSelection.clear();
                            onExecuteBrush();
                        }
                        else if (mouseProps.inputType === editor.MouseInputType.ButtonUp) {
                            if(uiSession.scratchStorage.previewSelection && !uiSession.scratchStorage.previewSelection.isEmpty)
                                uiSession.extensionContext.transactionManager.trackBlockChangeSelection(uiSession.scratchStorage.previewSelection);
                            
                            const player = uiSession.extensionContext.player;
                            const dimension = player.dimension;

                            await (0,editor.executeLargeOperation)(uiSession.scratchStorage.previewSelection, blockLocation => {
                                const block = dimension.getBlock(blockLocation);
                                if (block) {
                                    block.isWaterlogged = false;      
                                    block.setType(mygetblock());
                                }
                                
                            }
                            )
                                .catch(e => {
                                console.error(e);
                                uiSession.extensionContext.transactionManager.discardOpenTransaction();
                                uiSession.scratchStorage?.previewSelection.clear();
                            })
                                .then(() => {
                                    uiSession.extensionContext.transactionManager.commitOpenTransaction();
                                    uiSession.scratchStorage?.previewSelection.clear();
                                
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
                onExecute: (mouseRay, mouseProps) => {
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
                previewSelection.pushVolume({
                    action:0,
                    volume:{
                        from : {
                            x:location.x - d - even +1,
                            y:location.y - d - even +1,
                            z:location.z - d - even +1,  
                        },
                        to : {
                            x:location.x + d ,
                            y:location.y + d ,
                            z:location.z + d ,  
                        }
                    }
                })

            }
            
            function mygetblock(){
                let rand = Math.random();
                const arr = [settings.weight1,settings.weight2,settings.weight3,settings.weight4]
                let sumAll = 0;
                arr.forEach(num=>{sumAll+=num})
                
                if(rand < arr[0]/sumAll){
                    return settings.block1;
                }
                else if(rand < (arr[0]+arr[1])/sumAll){
                    return settings.block2;
                }
                else if(rand < (arr[0]+arr[1]+arr[2])/sumAll){
                    return settings.block3;
                }
                else{
                    return settings.block4;
                }
            }
        },
        uiSession => {
            uiSession.log.debug(
                `Shutting down extension [${uiSession.extensionContext.extensionName}] for player [${uiSession.extensionContext.player.name}]`
            );
        },
        {
            description: 'Blend Fill',
            notes: '',
        }
    )
}


