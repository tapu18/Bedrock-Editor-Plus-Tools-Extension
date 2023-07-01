import {MinecraftBlockTypes} from "@minecraft/server"
import {bindDataSource, registerEditorExtension,ActionTypes,MouseInputType,MouseActionType,executeLargeOperation} from "@minecraft/server-editor";


let cylinder_location=[];


function registerCylinderExtension() {
    registerEditorExtension(
        'cylinder blush',
        uiSession => {
            const player = uiSession.extensionContext.player;
            const cursor = uiSession.extensionContext.cursor;
            uiSession.log.debug(
                `Start for player [${uiSession.extensionContext.player.name}]`
            );
            const previewSelection = uiSession.extensionContext.selectionManager.create();
            previewSelection.setOutlineColor( {red: 0, green: 0, blue: 1, alpha: 0.2 });
            previewSelection.setFillColor( { red: 0, green: 0.5, blue: 1, alpha: 0 });
            previewSelection.clear()
            previewSelection.visible = true;
            
            uiSession.scratchStorage = {
                //currentCursorState,
                previewSelection,
            };

            //ツール登録
            const tool = uiSession.toolRail.addTool({
                displayAltText: '円柱ブラシ',
                displayStringId: 'test.cylinder.tool.title',
                icon: 'pack://textures/cylinder_blush.png',
                tooltipAltText: '左クリックで円柱のブラシを使用',
                tooltipStringId: 'test.cylinder.tool.tooltip',
            });

            //操作UI周り
            const pane = uiSession.createPropertyPane({
                titleStringId: 'test.cylinder.pane.title',
                titleAltText: '円柱ブラシ',
            });
            const data = bindDataSource(pane,{
                size: 5,
                height:5,
                block: MinecraftBlockTypes.stone,
            })
            pane.addBlockPicker(data,"block",{
                    titleAltText:"ブロック",
                    titleStringId:"test.cylinder.pane.blockpicker",
                    visible:true,
            });
            pane.addNumber(data, 'size', {
                titleAltText: '半径',
                min: 2,
                max: 16,
                showSlider: true,
            });
            pane.addNumber(data, 'height', {
                titleAltText: '高さ',
                min: 2,
                max: 16,
                showSlider: true,
            });
            tool.bindPropertyPane(pane);
            
            //ブラシ実行関数
            const onExecuteBrush= (view_loc) => {
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
                
                uiSession.scratchStorage.lastVolumePlaced = targetBlock.location; //最後に置いた場所の更新
                cylinder_location.forEach(loc => { //各座標でボリューム設置
                    previewSelection.pushVolume({
                        action:0,
                        volume:{
                            from : {
                                x:loc.from.x+location.x,
                                y:loc.from.y+location.y,
                                z:loc.from.z+location.z
                            },
                            to : {
                                x:loc.to.x+location.x,
                                y:loc.to.y+location.y,
                                z:loc.to.z+location.z
                            }
                        }
                    });
                });
            }
            
            //マウスクリック制御
            const executeExampleMouseButtonAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.MouseRayCastAction,
                onExecute: async (mouseRay, mouseProps) => {
                    if (uiSession.scratchStorage === undefined) {
                        console.error('cylinder blush was not initialized.');
                        return;
                    }
                    if (mouseProps.mouseAction === MouseActionType.LeftButton) {
                        if (mouseProps.inputType === MouseInputType.ButtonDown) {
                            uiSession.extensionContext.transactionManager.openTransaction('Transaction group cylinder brush');
                            uiSession.scratchStorage.previewSelection.clear();
        
                            createCylinder(0,0,0,data.size,data.height); //球体の計算を先にしておく
                            onExecuteBrush(cursor.getPosition());
                        }
                        else if (mouseProps.inputType === MouseInputType.ButtonUp) {
                            
                            if(uiSession.scratchStorage.previewSelection && !uiSession.scratchStorage.previewSelection.isEmpty)
                            uiSession.extensionContext.transactionManager.trackBlockChangeSelection(uiSession.scratchStorage.previewSelection);
                            
                            const dimension = player.dimension;
                            await executeLargeOperation(uiSession.scratchStorage.previewSelection, blockLocation => {
                                try {
                                    const block = dimension.getBlock(blockLocation);
                                    //block.isWaterlogged = false;
                                    block.setType(data.block);     
                                }
                                catch {}
                            })
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
                    }
                },
            });
            tool.registerMouseButtonBinding(executeExampleMouseButtonAction);

            //ドラッグアクション登録
            const executeBrushRayAction = uiSession.actionManager.createAction({
                actionType: ActionTypes.MouseRayCastAction,
                onExecute: (mouseRay, mouseProps) => {
                    if (mouseProps.inputType === MouseInputType.Drag) {
                        onExecuteBrush(mouseRay.cursorBlockLocation);
                    }
                },
            });
            tool.registerMouseDragBinding(executeBrushRayAction);
            return [];
        },

        uiSession => {
            uiSession.log.debug(
                `Shutting down extension [${uiSession.extensionContext.extensionName}] for player [${uiSession.extensionContext.player.name}]`
            );
        },
        {
            description: 'cylinder blush',
            notes: '',
        }
    )
}


function createCylinder(centerX, centerY, centerZ, radius, height) {
    cylinder_location = [];

    for (let x = centerX - radius; x <= centerX + radius; x++) {
        let startZ = centerZ - radius;
        let inCylinder = false;
        for (let z = centerZ - radius; z <= centerZ + radius; z++) {
            let dx = x - centerX;
            let dz = z - centerZ;
            if (dx * dx + dz * dz < radius * radius) {
                if (!inCylinder) {
                    startZ = z;
                    inCylinder = true;
                }
            } else if (inCylinder) {
                cylinder_location.push({
                    from:{
                        x:x,
                        y:centerY,
                        z:startZ
                    },
                    to:{
                        x:x,
                        y:centerY + height - 1,
                        z: z - 1,
                    }, 
                });
                inCylinder = false;
            }
        }
        if (inCylinder) {
            cylinder_location.push({
                from:{
                    x:x,
                    y:centerY,
                    z:startZ
                },
                to:{
                    x:x,
                    y:centerY + height - 1,
                    z: centerZ+radius,
                }, 
            });
        }
    }
}

export default registerCylinderExtension;

