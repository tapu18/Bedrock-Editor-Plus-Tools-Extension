import {MinecraftBlockTypes} from "@minecraft/server"
import {bindDataSource, registerEditorExtension,ActionTypes,MouseInputType,MouseActionType,executeLargeOperation} from "@minecraft/server-editor";


let sphere_location=[];


function registerSphereExtension() {
    registerEditorExtension(
        'Sphere blush',
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
                displayAltText: '球体ブラシ',
                displayStringId: 'test.sphere.tool.title',
                icon: 'pack://textures/sphere_blush.png',
                tooltipAltText: '左クリックで球体のブラシを使用',
                tooltipStringId: 'test.sphere.tool.tooltip',
            });

            //操作UI周り
            const pane = uiSession.createPropertyPane({
                titleStringId: 'test.sphere.pane.title',
                titleAltText: '球体ブラシ',
            });
            const data = bindDataSource(pane,{
                size: 5,
                block: MinecraftBlockTypes.stone,
            })
            pane.addBlockPicker(data,"block",{
                    titleAltText:"ブロック",
                    titleStringId:"test.sphere.pane.blockpicker",
                    visible:true,
            });
            pane.addNumber(data, 'size', {
                titleAltText: '半径',
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
                sphere_location.forEach(loc => { //各座標でボリューム設置
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
                        console.error('Sphere blush was not initialized.');
                        return;
                    }
                    if (mouseProps.mouseAction === MouseActionType.LeftButton) {
                        if (mouseProps.inputType === MouseInputType.ButtonDown) {
                            uiSession.extensionContext.transactionManager.openTransaction('Transaction group sphere brush');
                            uiSession.scratchStorage.previewSelection.clear();
        
                            createSphere(0,0,0,data.size); //球体の計算を先にしておく
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
            description: 'Sphere blush',
            notes: '',
        }
    )
}



function isSurface(x, y, z, r) {
    const innerRadiusSquared = (r - 1) * (r - 1);
    const outerRadiusSquared = r * r;
    const distanceSquared = x * x + y * y + z * z;
  
    return distanceSquared > innerRadiusSquared && distanceSquared < outerRadiusSquared;
}

function createSphere(cx, cy, cz, r) {
    sphere_location=[];

    const surfaceCoordinates = [];
  
    for (let y = -r; y <= 0; y++) {
      for (let z = -r; z <= 0; z++) {
        for (let x = -r; x <= 0; x++) {
          if (isSurface(x, y, z, r)) {
            surfaceCoordinates.push({ x, y, z });
          }
        }
      }
    }
  
    for (let i = 0; i < surfaceCoordinates.length; i++) {
      const { x, y, z } = surfaceCoordinates[i];
      let x1 = x;
      let x2 = x;
      let z1 = z;
      let z2 = z;
  
      // x方向のチェック
      for (let j = i + 1; j < surfaceCoordinates.length; j++) {
        const next = surfaceCoordinates[j];
  
        if (next.y === y && next.z === z && next.x === x2 + 1) {
          x2 = next.x;
          i = j;
        } else {
          break;
        }
      }
  
      // z方向のチェック
      let k = i + 1;
      while (k < surfaceCoordinates.length) {
        const next = surfaceCoordinates[k];
  
        if (next.y === y && next.z === z2 + 1 && next.x === x1) {
          z2 = next.z;
          i = k;
  
          // 繋げたやつをさらにまとめる
          for (let j = k + 1; j < surfaceCoordinates.length; j++) {
            const nextX = surfaceCoordinates[j];
  
            if (nextX.y === y && nextX.z === z2 && nextX.x === x2 + 1) {
              x2 = nextX.x;
              i = j;
            } else {
              break;
            }
          }
  
          k = i + 1;
        } else {
          break;
        }
      }

      sphere_location.push({
            from:{
                x:cx + x1,
                y:cy + y,
                z:cz + z1,
            },
            to:{
                x:cx -x1,
                y:cy - y,
                z:cz - z1,
            }
        })

    }
}
export default registerSphereExtension;

