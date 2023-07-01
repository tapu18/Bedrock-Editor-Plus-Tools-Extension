import * as __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__ from "@minecraft/server";
import * as __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__ from "@minecraft/server-editor";
/******/ var __webpack_modules__ = ({

/***/ "../../core/editor-utils/lib/blockvolume.js":
/*!**************************************************!*\
  !*** ../../core/editor-utils/lib/blockvolume.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "growVolumeAlongAbsoluteAxis": () => (/* binding */ growVolumeAlongAbsoluteAxis),
/* harmony export */   "growVolumeAlongViewAxis": () => (/* binding */ growVolumeAlongViewAxis),
/* harmony export */   "shrinkVolumeAlongAbsoluteAxis": () => (/* binding */ shrinkVolumeAlongAbsoluteAxis),
/* harmony export */   "shrinkVolumeAlongViewAxis": () => (/* binding */ shrinkVolumeAlongViewAxis)
/* harmony export */ });
/* harmony import */ var editor = __webpack_require__(/*! @minecraft/server-editor */ "@minecraft/server-editor");
/* harmony import */ var _direction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./direction */ "../../core/editor-utils/lib/direction.js");


/**
 * shrinkVolumeAlongAbsoluteAxis
 * @beta
 * @remarks
 * Shrink a block volume along a single axis (represented by a Direction enum)
 * Resultant volume will be [amount] units smaller (but never less than 1) along the
 * specified axis.
 * Note, the min/max values of the volume may change, and the volume position in the world
 * may change to compensate for the dimension change, in order to keep the relative position
 * in the world constant
 */
function shrinkVolumeAlongAbsoluteAxis(volume, direction, amount) {
    const bounds = volume.boundingBox;
    const min = bounds.min;
    const max = bounds.max;
    const spanX = bounds.spanX;
    const spanY = bounds.spanY;
    const spanZ = bounds.spanZ;
    switch (direction) {
        case _direction__WEBPACK_IMPORTED_MODULE_1__.Direction.Up: // +Y Axis
            if (spanY > amount) {
                max.y -= amount;
            }
            break;
        case _direction__WEBPACK_IMPORTED_MODULE_1__.Direction.Down: // -Y Axis
            if (spanY > amount) {
                min.y += amount;
            }
            break;
        case _direction__WEBPACK_IMPORTED_MODULE_1__.Direction.Forward: // +Z Axis
            if (spanZ > amount) {
                max.z -= amount;
            }
            break;
        case _direction__WEBPACK_IMPORTED_MODULE_1__.Direction.Back: // -Z Axis
            if (spanZ > amount) {
                min.z += amount;
            }
            break;
        case _direction__WEBPACK_IMPORTED_MODULE_1__.Direction.Left: // +X Axis
            if (spanX > amount) {
                max.x -= amount;
            }
            break;
        case _direction__WEBPACK_IMPORTED_MODULE_1__.Direction.Right: // -X Axis
            if (spanX > amount) {
                min.x += amount;
            }
            break;
    }
    const newVolume = new editor.BlockVolume(min, max);
    return newVolume;
}
/**
 * shrinkVolumeAlongViewAxis
 * @beta
 * @remarks
 * Shrink a block volume along a single axis (represented by a Direction enum). The specified enum is adjusted
 * internally to an axis aligned direction, based on the value of the specified rotation.
 * Resultant volume will be [amount] units smaller (but never less than 1) along the
 * specified axis.
 * Note, the min/max values of the volume may change, and the volume position in the world
 * may change to compensate for the dimension change, in order to keep the relative position
 * in the world constant
 */
function shrinkVolumeAlongViewAxis(volume, rotationY, direction, amount) {
    const relativeDirection = (0,_direction__WEBPACK_IMPORTED_MODULE_1__.getRotationCorrectedDirection)(rotationY, direction);
    return shrinkVolumeAlongAbsoluteAxis(volume, relativeDirection, amount);
}
/**
 * growVolumeAlongAbsoluteAxis
 * @beta
 * @remarks
 * Grow a block volume along a single axis (represented by a Direction enum)
 * Resultant volume will be [amount] units larger along the specified axis.
 * Note, the min/max values of the volume may change, and the volume position in the world
 * may change to compensate for the dimension change, in order to keep the relative position
 * in the world constant
 */
function growVolumeAlongAbsoluteAxis(volume, direction, amount) {
    const maxAxialLength = 32;
    if (amount > maxAxialLength) {
        amount = maxAxialLength;
    }
    const bounds = volume.boundingBox;
    const min = bounds.min;
    const max = bounds.max;
    const spanX = bounds.spanX;
    const spanY = bounds.spanY;
    const spanZ = bounds.spanZ;
    switch (direction) {
        case _direction__WEBPACK_IMPORTED_MODULE_1__.Direction.Up: // +Y Axis
            if (spanY + amount > maxAxialLength) {
                amount = maxAxialLength - spanY;
            }
            max.y += amount;
            break;
        case _direction__WEBPACK_IMPORTED_MODULE_1__.Direction.Down: // -Y Axis
            if (spanY + amount > maxAxialLength) {
                amount = maxAxialLength - spanY;
            }
            min.y -= amount;
            break;
        case _direction__WEBPACK_IMPORTED_MODULE_1__.Direction.Forward: // +Z Axis
            if (spanZ + amount > maxAxialLength) {
                amount = maxAxialLength - spanZ;
            }
            max.z += amount;
            break;
        case _direction__WEBPACK_IMPORTED_MODULE_1__.Direction.Back: // -Z Axis
            if (spanZ + amount > maxAxialLength) {
                amount = maxAxialLength - spanZ;
            }
            min.z -= amount;
            break;
        case _direction__WEBPACK_IMPORTED_MODULE_1__.Direction.Left: // +X Axis
            if (spanX + amount > maxAxialLength) {
                amount = maxAxialLength - spanX;
            }
            max.x += amount;
            break;
        case _direction__WEBPACK_IMPORTED_MODULE_1__.Direction.Right: // -X Axis
            if (spanX + amount > maxAxialLength) {
                amount = maxAxialLength - spanX;
            }
            min.x -= amount;
            break;
    }
    const newVolume = new editor.BlockVolume(min, max);
    return newVolume;
}
/**
 * growVolumeAlongViewAxis
 * @beta
 * @remarks
 * Grow a block volume along a single axis (represented by a Direction enum).  The specified enum is adjusted
 * internally to an axis aligned direction, based on the value of the specified rotation.
 * Resultant volume will be [amount] units larger along the specified axis.
 * Note, the min/max values of the volume may change, and the volume position in the world
 * may change to compensate for the dimension change, in order to keep the relative position
 * in the world constant
 */
function growVolumeAlongViewAxis(volume, rotationY, direction, amount) {
    const relativeDirection = (0,_direction__WEBPACK_IMPORTED_MODULE_1__.getRotationCorrectedDirection)(rotationY, direction);
    return growVolumeAlongAbsoluteAxis(volume, relativeDirection, amount);
}
//# sourceMappingURL=blockvolume.js.map

/***/ }),

/***/ "../../core/editor-utils/lib/direction.js":
/*!************************************************!*\
  !*** ../../core/editor-utils/lib/direction.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Direction": () => (/* binding */ Direction),
/* harmony export */   "getDirectionVector": () => (/* binding */ getDirectionVector),
/* harmony export */   "getRotationCorrectedDirection": () => (/* binding */ getRotationCorrectedDirection),
/* harmony export */   "getRotationCorrectedDirectionVector": () => (/* binding */ getRotationCorrectedDirectionVector),
/* harmony export */   "getScaledDirectionVector": () => (/* binding */ getScaledDirectionVector)
/* harmony export */ });
/* harmony import */ var _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/server-wrapper */ "../../module-wrappers/server-wrapper/index.js");

/**
 * Direction
 * @beta
 * @remarks
 * Direction maps to C++ Direction::FacingID
 */
var Direction;
(function (Direction) {
    Direction[Direction["Forward"] = 0] = "Forward";
    Direction[Direction["Right"] = 1] = "Right";
    Direction[Direction["Back"] = 2] = "Back";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Up"] = 4] = "Up";
    Direction[Direction["Down"] = 5] = "Down";
})(Direction || (Direction = {}));
/**
 * directionLookup
 * @private
 * @remarks
 * Unit direction vectors representing enum Direction
 * Yes, I know Left/Right are reversed here -- that's because something is wrong, and I haven't been able to track
 * it down.  I blame Tom's dodgy code, tbh.
 */
const directionLookup = {
    [Direction.Forward]: _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.forward,
    [Direction.Right]: _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.left,
    [Direction.Back]: _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.back,
    [Direction.Left]: _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.right,
    [Direction.Up]: _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.up,
    [Direction.Down]: _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.down,
};
/**
 * getRotationCorrectedDirection
 * @beta
 * @remarks
 * Convert a given absolute Direction enum to one which is relative to the specified Y rotation
 *  (Generally Player view vector Y component)
 */
function getRotationCorrectedDirection(rotationY, realDirection) {
    if (realDirection === Direction.Up || realDirection === Direction.Down) {
        // Up and Down are ALWAY up and down
        return realDirection;
    }
    // 405 is the amount to do a full circle to remove negative rotations
    // Plus 45° to put the end of the first quadrant at 45 degrees.
    // Modulo to lock to [0, 360], then divide to convert to [0, 1, 2, 3] indices
    const directionQuadrant = Math.floor(((rotationY + 405 + realDirection * 90) % 360) / 90);
    return directionQuadrant;
}
/**
 * getRotationCorrectedDirectionVector
 * @beta
 * @remarks
 * Convert a given absolute Direction enum to a direction vector which is relative to the Y rotation
 *  (Generally Player view vector Y component)
 */
function getRotationCorrectedDirectionVector(rotationY, realDirection) {
    const relativeDirection = getRotationCorrectedDirection(rotationY, realDirection);
    return directionLookup[relativeDirection];
}
/**
 * getDirectionVector
 * @beta
 * @remarks
 * Return a unit vector for a given Direction
 */
function getDirectionVector(direction) {
    return directionLookup[direction];
}
/**
 * getScaledDirectionVector
 * @beta
 * @remarks
 * Return a scaled vector for a given Direction
 */
function getScaledDirectionVector(direction, scale) {
    const vec = getDirectionVector(direction);
    vec.x = vec.x * scale;
    vec.y = vec.y * scale;
    vec.z = vec.z * scale;
    return vec;
}
//# sourceMappingURL=direction.js.map

/***/ }),

/***/ "../../core/editor-utils/lib/index.js":
/*!********************************************!*\
  !*** ../../core/editor-utils/lib/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AxisPlanes": () => (/* reexport safe */ _ray__WEBPACK_IMPORTED_MODULE_2__.AxisPlanes),
/* harmony export */   "Direction": () => (/* reexport safe */ _direction__WEBPACK_IMPORTED_MODULE_0__.Direction),
/* harmony export */   "VectorDot": () => (/* reexport safe */ _ray__WEBPACK_IMPORTED_MODULE_2__.VectorDot),
/* harmony export */   "VectorScale": () => (/* reexport safe */ _ray__WEBPACK_IMPORTED_MODULE_2__.VectorScale),
/* harmony export */   "axisNormalLookup": () => (/* reexport safe */ _ray__WEBPACK_IMPORTED_MODULE_2__.axisNormalLookup),
/* harmony export */   "getAxisNormal": () => (/* reexport safe */ _ray__WEBPACK_IMPORTED_MODULE_2__.getAxisNormal),
/* harmony export */   "getDirectionVector": () => (/* reexport safe */ _direction__WEBPACK_IMPORTED_MODULE_0__.getDirectionVector),
/* harmony export */   "getRelativeXYAxisAsNormal": () => (/* reexport safe */ _ray__WEBPACK_IMPORTED_MODULE_2__.getRelativeXYAxisAsNormal),
/* harmony export */   "getRotationCorrectedDirection": () => (/* reexport safe */ _direction__WEBPACK_IMPORTED_MODULE_0__.getRotationCorrectedDirection),
/* harmony export */   "getRotationCorrectedDirectionVector": () => (/* reexport safe */ _direction__WEBPACK_IMPORTED_MODULE_0__.getRotationCorrectedDirectionVector),
/* harmony export */   "getScaledDirectionVector": () => (/* reexport safe */ _direction__WEBPACK_IMPORTED_MODULE_0__.getScaledDirectionVector),
/* harmony export */   "growVolumeAlongAbsoluteAxis": () => (/* reexport safe */ _blockvolume__WEBPACK_IMPORTED_MODULE_1__.growVolumeAlongAbsoluteAxis),
/* harmony export */   "growVolumeAlongViewAxis": () => (/* reexport safe */ _blockvolume__WEBPACK_IMPORTED_MODULE_1__.growVolumeAlongViewAxis),
/* harmony export */   "intersectRayPlane": () => (/* reexport safe */ _ray__WEBPACK_IMPORTED_MODULE_2__.intersectRayPlane),
/* harmony export */   "shrinkVolumeAlongAbsoluteAxis": () => (/* reexport safe */ _blockvolume__WEBPACK_IMPORTED_MODULE_1__.shrinkVolumeAlongAbsoluteAxis),
/* harmony export */   "shrinkVolumeAlongViewAxis": () => (/* reexport safe */ _blockvolume__WEBPACK_IMPORTED_MODULE_1__.shrinkVolumeAlongViewAxis)
/* harmony export */ });
/* harmony import */ var _direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./direction */ "../../core/editor-utils/lib/direction.js");
/* harmony import */ var _blockvolume__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockvolume */ "../../core/editor-utils/lib/blockvolume.js");
/* harmony import */ var _ray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ray */ "../../core/editor-utils/lib/ray.js");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../core/editor-utils/lib/ray.js":
/*!******************************************!*\
  !*** ../../core/editor-utils/lib/ray.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AxisPlanes": () => (/* binding */ AxisPlanes),
/* harmony export */   "VectorDot": () => (/* binding */ VectorDot),
/* harmony export */   "VectorScale": () => (/* binding */ VectorScale),
/* harmony export */   "axisNormalLookup": () => (/* binding */ axisNormalLookup),
/* harmony export */   "getAxisNormal": () => (/* binding */ getAxisNormal),
/* harmony export */   "getRelativeXYAxisAsNormal": () => (/* binding */ getRelativeXYAxisAsNormal),
/* harmony export */   "intersectRayPlane": () => (/* binding */ intersectRayPlane)
/* harmony export */ });
/* harmony import */ var _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/server-wrapper */ "../../module-wrappers/server-wrapper/index.js");
/* harmony import */ var _direction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./direction */ "../../core/editor-utils/lib/direction.js");


/**
 * @beta
 */
var AxisPlanes;
(function (AxisPlanes) {
    AxisPlanes[AxisPlanes["XZ"] = 0] = "XZ";
    AxisPlanes[AxisPlanes["XY"] = 1] = "XY";
    AxisPlanes[AxisPlanes["YZ"] = 2] = "YZ";
})(AxisPlanes || (AxisPlanes = {}));
/**
 * @beta
 */
const axisNormalLookup = {
    [AxisPlanes.XZ]: _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.up,
    [AxisPlanes.XY]: _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.forward,
    [AxisPlanes.YZ]: _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.left,
};
/**
 * @beta
 */
function getAxisNormal(axis) {
    return axisNormalLookup[axis];
}
/**
 * @beta
 */
function getRelativeXYAxisAsNormal(rotation) {
    const direction = (0,_direction__WEBPACK_IMPORTED_MODULE_1__.getRotationCorrectedDirection)(rotation, _direction__WEBPACK_IMPORTED_MODULE_1__.Direction.Forward);
    switch (direction) {
        case _direction__WEBPACK_IMPORTED_MODULE_1__.Direction.Forward:
        case _direction__WEBPACK_IMPORTED_MODULE_1__.Direction.Back:
            return axisNormalLookup[AxisPlanes.XY];
        case _direction__WEBPACK_IMPORTED_MODULE_1__.Direction.Right:
        case _direction__WEBPACK_IMPORTED_MODULE_1__.Direction.Left:
            return axisNormalLookup[AxisPlanes.YZ];
        default:
            throw 'Invalid quadrant';
    }
}
/**
 * @beta
 */
function VectorDot(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
}
/**
 * @beta
 */
function VectorScale(a, s) {
    const v = new _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector(a.x, a.y, a.z);
    v.x *= s;
    v.y *= s;
    v.z *= s;
    return v;
}
/**
 * @beta
 */
function intersectRayPlane(rayLocation, rayDirection, planeNormal, planeDistance) {
    const denominator = VectorDot(rayDirection, planeNormal);
    if (denominator !== 0) {
        const t = -(VectorDot(rayLocation, planeNormal) + planeDistance) / denominator;
        if (t < 0) {
            return undefined;
        }
        const scaledDirection = VectorScale(rayDirection, t);
        const result = _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.add(rayLocation, scaledDirection);
        return result;
    }
    else if (VectorDot(planeNormal, rayLocation) + planeDistance === 0) {
        return rayLocation;
    }
    return undefined;
}
//# sourceMappingURL=ray.js.map

/***/ }),

/***/ "../../module-wrappers/server-wrapper/index.js":
/*!*****************************************************!*\
  !*** ../../module-wrappers/server-wrapper/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeforeChatEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BeforeChatEvent),
/* harmony export */   "BeforeChatEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BeforeChatEventSignal_deprecated),
/* harmony export */   "BeforeDataDrivenEntityTriggerEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BeforeDataDrivenEntityTriggerEvent),
/* harmony export */   "BeforeDataDrivenEntityTriggerEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BeforeDataDrivenEntityTriggerEventSignal_deprecated),
/* harmony export */   "BeforeExplosionEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BeforeExplosionEvent),
/* harmony export */   "BeforeExplosionEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BeforeExplosionEventSignal_deprecated),
/* harmony export */   "BeforeItemDefinitionEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BeforeItemDefinitionEventSignal_deprecated),
/* harmony export */   "BeforeItemDefinitionTriggeredEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BeforeItemDefinitionTriggeredEvent),
/* harmony export */   "BeforeItemUseEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BeforeItemUseEvent),
/* harmony export */   "BeforeItemUseEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BeforeItemUseEventSignal_deprecated),
/* harmony export */   "BeforeItemUseOnEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BeforeItemUseOnEvent),
/* harmony export */   "BeforeItemUseOnEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BeforeItemUseOnEventSignal_deprecated),
/* harmony export */   "BeforePistonActivateEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BeforePistonActivateEvent),
/* harmony export */   "BeforePistonActivateEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BeforePistonActivateEventSignal_deprecated),
/* harmony export */   "BeforeWatchdogTerminateEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BeforeWatchdogTerminateEvent),
/* harmony export */   "BeforeWatchdogTerminateEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BeforeWatchdogTerminateEventSignal_deprecated),
/* harmony export */   "Block": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.Block),
/* harmony export */   "BlockAreaSize": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockAreaSize),
/* harmony export */   "BlockBreakEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockBreakEvent),
/* harmony export */   "BlockBreakEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockBreakEventSignal_deprecated),
/* harmony export */   "BlockComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockComponent),
/* harmony export */   "BlockEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockEvent),
/* harmony export */   "BlockExplodeEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockExplodeEvent),
/* harmony export */   "BlockExplodeEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockExplodeEventSignal_deprecated),
/* harmony export */   "BlockFillOptions": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockFillOptions),
/* harmony export */   "BlockHitInformation": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockHitInformation),
/* harmony export */   "BlockInventoryComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockInventoryComponent),
/* harmony export */   "BlockLavaContainerComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockLavaContainerComponent),
/* harmony export */   "BlockLiquidContainerComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockLiquidContainerComponent),
/* harmony export */   "BlockPermutation": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockPermutation),
/* harmony export */   "BlockPistonComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockPistonComponent),
/* harmony export */   "BlockPlaceEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockPlaceEvent),
/* harmony export */   "BlockPlaceEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockPlaceEventSignal_deprecated),
/* harmony export */   "BlockPotionContainerComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockPotionContainerComponent),
/* harmony export */   "BlockProperties": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockProperties),
/* harmony export */   "BlockProperty": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockProperty),
/* harmony export */   "BlockPropertyType": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockPropertyType),
/* harmony export */   "BlockRaycastOptions": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockRaycastOptions),
/* harmony export */   "BlockRecordPlayerComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockRecordPlayerComponent),
/* harmony export */   "BlockSignComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockSignComponent),
/* harmony export */   "BlockSnowContainerComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockSnowContainerComponent),
/* harmony export */   "BlockType": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockType),
/* harmony export */   "BlockWaterContainerComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.BlockWaterContainerComponent),
/* harmony export */   "ButtonPushEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ButtonPushEvent),
/* harmony export */   "ButtonPushEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ButtonPushEventSignal_deprecated),
/* harmony export */   "ChatEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ChatEvent),
/* harmony export */   "ChatEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ChatEventSignal_deprecated),
/* harmony export */   "Color": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.Color),
/* harmony export */   "CommandResult": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.CommandResult),
/* harmony export */   "Component": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   "Container": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.Container),
/* harmony export */   "ContainerSlot": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ContainerSlot),
/* harmony export */   "DataDrivenEntityTriggerEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.DataDrivenEntityTriggerEvent),
/* harmony export */   "DataDrivenEntityTriggerEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.DataDrivenEntityTriggerEventSignal_deprecated),
/* harmony export */   "DefinitionModifier": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.DefinitionModifier),
/* harmony export */   "Dimension": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.Dimension),
/* harmony export */   "Direction": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.Direction),
/* harmony export */   "DirectionBlockProperty": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.DirectionBlockProperty),
/* harmony export */   "DisplaySlotId": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.DisplaySlotId),
/* harmony export */   "DyeColor": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.DyeColor),
/* harmony export */   "DynamicPropertiesDefinition": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.DynamicPropertiesDefinition),
/* harmony export */   "Effect": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.Effect),
/* harmony export */   "EffectAddEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EffectAddEvent),
/* harmony export */   "EffectAddEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EffectAddEventSignal_deprecated),
/* harmony export */   "EffectType": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EffectType),
/* harmony export */   "Enchantment": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.Enchantment),
/* harmony export */   "EnchantmentList": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EnchantmentList),
/* harmony export */   "EnchantmentSlot": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EnchantmentSlot),
/* harmony export */   "EnchantmentType": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EnchantmentType),
/* harmony export */   "Entity": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.Entity),
/* harmony export */   "EntityAddRiderComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityAddRiderComponent),
/* harmony export */   "EntityAgeableComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityAgeableComponent),
/* harmony export */   "EntityAttributeComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityAttributeComponent),
/* harmony export */   "EntityBaseMovementComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityBaseMovementComponent),
/* harmony export */   "EntityBreathableComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityBreathableComponent),
/* harmony export */   "EntityCanClimbComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityCanClimbComponent),
/* harmony export */   "EntityCanFlyComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityCanFlyComponent),
/* harmony export */   "EntityCanPowerJumpComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityCanPowerJumpComponent),
/* harmony export */   "EntityColorComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityColorComponent),
/* harmony export */   "EntityComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityComponent),
/* harmony export */   "EntityDamageCause": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityDamageCause),
/* harmony export */   "EntityDamageSource": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityDamageSource),
/* harmony export */   "EntityDataDrivenTriggerEventOptions": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityDataDrivenTriggerEventOptions),
/* harmony export */   "EntityDefinitionFeedItem": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityDefinitionFeedItem),
/* harmony export */   "EntityDieEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityDieEvent),
/* harmony export */   "EntityDieEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityDieEventSignal_deprecated),
/* harmony export */   "EntityEventOptions": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityEventOptions),
/* harmony export */   "EntityFireImmuneComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityFireImmuneComponent),
/* harmony export */   "EntityFloatsInLiquidComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityFloatsInLiquidComponent),
/* harmony export */   "EntityFlyingSpeedComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityFlyingSpeedComponent),
/* harmony export */   "EntityFrictionModifierComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityFrictionModifierComponent),
/* harmony export */   "EntityGroundOffsetComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityGroundOffsetComponent),
/* harmony export */   "EntityHealableComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityHealableComponent),
/* harmony export */   "EntityHealthComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityHealthComponent),
/* harmony export */   "EntityHitEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityHitEvent),
/* harmony export */   "EntityHitEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityHitEventSignal_deprecated),
/* harmony export */   "EntityHitInformation": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityHitInformation),
/* harmony export */   "EntityHurtEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityHurtEvent),
/* harmony export */   "EntityHurtEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityHurtEventSignal_deprecated),
/* harmony export */   "EntityInventoryComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityInventoryComponent),
/* harmony export */   "EntityIsBabyComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityIsBabyComponent),
/* harmony export */   "EntityIsChargedComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityIsChargedComponent),
/* harmony export */   "EntityIsChestedComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityIsChestedComponent),
/* harmony export */   "EntityIsDyableComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityIsDyableComponent),
/* harmony export */   "EntityIsHiddenWhenInvisibleComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityIsHiddenWhenInvisibleComponent),
/* harmony export */   "EntityIsIgnitedComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityIsIgnitedComponent),
/* harmony export */   "EntityIsIllagerCaptainComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityIsIllagerCaptainComponent),
/* harmony export */   "EntityIsSaddledComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityIsSaddledComponent),
/* harmony export */   "EntityIsShakingComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityIsShakingComponent),
/* harmony export */   "EntityIsShearedComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityIsShearedComponent),
/* harmony export */   "EntityIsStackableComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityIsStackableComponent),
/* harmony export */   "EntityIsStunnedComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityIsStunnedComponent),
/* harmony export */   "EntityIsTamedComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityIsTamedComponent),
/* harmony export */   "EntityItemComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityItemComponent),
/* harmony export */   "EntityIterator": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityIterator),
/* harmony export */   "EntityLavaMovementComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityLavaMovementComponent),
/* harmony export */   "EntityLeashableComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityLeashableComponent),
/* harmony export */   "EntityMarkVariantComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityMarkVariantComponent),
/* harmony export */   "EntityMountTamingComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityMountTamingComponent),
/* harmony export */   "EntityMovementAmphibiousComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityMovementAmphibiousComponent),
/* harmony export */   "EntityMovementBasicComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityMovementBasicComponent),
/* harmony export */   "EntityMovementComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityMovementComponent),
/* harmony export */   "EntityMovementFlyComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityMovementFlyComponent),
/* harmony export */   "EntityMovementGenericComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityMovementGenericComponent),
/* harmony export */   "EntityMovementGlideComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityMovementGlideComponent),
/* harmony export */   "EntityMovementHoverComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityMovementHoverComponent),
/* harmony export */   "EntityMovementJumpComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityMovementJumpComponent),
/* harmony export */   "EntityMovementSkipComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityMovementSkipComponent),
/* harmony export */   "EntityMovementSwayComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityMovementSwayComponent),
/* harmony export */   "EntityNavigationClimbComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityNavigationClimbComponent),
/* harmony export */   "EntityNavigationComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityNavigationComponent),
/* harmony export */   "EntityNavigationFloatComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityNavigationFloatComponent),
/* harmony export */   "EntityNavigationFlyComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityNavigationFlyComponent),
/* harmony export */   "EntityNavigationGenericComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityNavigationGenericComponent),
/* harmony export */   "EntityNavigationHoverComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityNavigationHoverComponent),
/* harmony export */   "EntityNavigationWalkComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityNavigationWalkComponent),
/* harmony export */   "EntityOnFireComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityOnFireComponent),
/* harmony export */   "EntityPushThroughComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityPushThroughComponent),
/* harmony export */   "EntityQueryOptions": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityQueryOptions),
/* harmony export */   "EntityQueryScoreOptions": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityQueryScoreOptions),
/* harmony export */   "EntityRaycastOptions": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityRaycastOptions),
/* harmony export */   "EntityRideableComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityRideableComponent),
/* harmony export */   "EntityRidingComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityRidingComponent),
/* harmony export */   "EntityScaleComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityScaleComponent),
/* harmony export */   "EntitySkinIdComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntitySkinIdComponent),
/* harmony export */   "EntitySpawnEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntitySpawnEvent),
/* harmony export */   "EntitySpawnEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntitySpawnEventSignal_deprecated),
/* harmony export */   "EntityStrengthComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityStrengthComponent),
/* harmony export */   "EntityTameableComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityTameableComponent),
/* harmony export */   "EntityType": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityType),
/* harmony export */   "EntityTypeIterator": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityTypeIterator),
/* harmony export */   "EntityTypes": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityTypes),
/* harmony export */   "EntityUnderwaterMovementComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityUnderwaterMovementComponent),
/* harmony export */   "EntityVariantComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityVariantComponent),
/* harmony export */   "EntityWantsJockeyComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.EntityWantsJockeyComponent),
/* harmony export */   "Events": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.Events),
/* harmony export */   "ExplosionEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ExplosionEvent),
/* harmony export */   "ExplosionEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ExplosionEventSignal_deprecated),
/* harmony export */   "ExplosionOptions": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ExplosionOptions),
/* harmony export */   "FeedItem": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.FeedItem),
/* harmony export */   "FeedItemEffect": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.FeedItemEffect),
/* harmony export */   "FilterGroup": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.FilterGroup),
/* harmony export */   "FluidContainer": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.FluidContainer),
/* harmony export */   "FluidType": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.FluidType),
/* harmony export */   "GameMode": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.GameMode),
/* harmony export */   "IBeforeChatEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IBeforeChatEventSignal),
/* harmony export */   "IBeforeDataDrivenEntityTriggerEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IBeforeDataDrivenEntityTriggerEventSignal),
/* harmony export */   "IBeforeExplosionEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IBeforeExplosionEventSignal),
/* harmony export */   "IBeforeItemDefinitionEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IBeforeItemDefinitionEventSignal),
/* harmony export */   "IBeforeItemUseEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IBeforeItemUseEventSignal),
/* harmony export */   "IBeforeItemUseOnEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IBeforeItemUseOnEventSignal),
/* harmony export */   "IBeforePistonActivateEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IBeforePistonActivateEventSignal),
/* harmony export */   "IBeforeWatchdogTerminateEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IBeforeWatchdogTerminateEventSignal),
/* harmony export */   "IBlockBreakEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IBlockBreakEventSignal),
/* harmony export */   "IBlockExplodeEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IBlockExplodeEventSignal),
/* harmony export */   "IBlockPlaceEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IBlockPlaceEventSignal),
/* harmony export */   "IButtonPushEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IButtonPushEventSignal),
/* harmony export */   "IChatEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IChatEventSignal),
/* harmony export */   "IDataDrivenEntityTriggerEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IDataDrivenEntityTriggerEventSignal),
/* harmony export */   "IEffectAddEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IEffectAddEventSignal),
/* harmony export */   "IEntityDieEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IEntityDieEventSignal),
/* harmony export */   "IEntityHitEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IEntityHitEventSignal),
/* harmony export */   "IEntityHurtEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IEntityHurtEventSignal),
/* harmony export */   "IEntitySpawnEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IEntitySpawnEventSignal),
/* harmony export */   "IExplosionEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IExplosionEventSignal),
/* harmony export */   "IItemCompleteChargeEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IItemCompleteChargeEventSignal),
/* harmony export */   "IItemDefinitionEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IItemDefinitionEventSignal),
/* harmony export */   "IItemReleaseChargeEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IItemReleaseChargeEventSignal),
/* harmony export */   "IItemStartChargeEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IItemStartChargeEventSignal),
/* harmony export */   "IItemStartUseOnEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IItemStartUseOnEventSignal),
/* harmony export */   "IItemStopChargeEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IItemStopChargeEventSignal),
/* harmony export */   "IItemStopUseOnEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IItemStopUseOnEventSignal),
/* harmony export */   "IItemUseEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IItemUseEventSignal),
/* harmony export */   "IItemUseOnEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IItemUseOnEventSignal),
/* harmony export */   "ILeverActionEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ILeverActionEventSignal),
/* harmony export */   "IPistonActivateEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IPistonActivateEventSignal),
/* harmony export */   "IPlayerJoinEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IPlayerJoinEventSignal),
/* harmony export */   "IPlayerLeaveEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IPlayerLeaveEventSignal),
/* harmony export */   "IPlayerSpawnEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IPlayerSpawnEventSignal),
/* harmony export */   "IProjectileHitEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IProjectileHitEventSignal),
/* harmony export */   "IScriptEventCommandMessageSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IScriptEventCommandMessageSignal),
/* harmony export */   "IServerMessageSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IServerMessageSignal),
/* harmony export */   "IWeatherChangeEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IWeatherChangeEventSignal),
/* harmony export */   "IWorldInitializeEventSignal": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.IWorldInitializeEventSignal),
/* harmony export */   "ItemCompleteChargeEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemCompleteChargeEvent),
/* harmony export */   "ItemCompleteChargeEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemCompleteChargeEventSignal_deprecated),
/* harmony export */   "ItemComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemComponent),
/* harmony export */   "ItemCooldownComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemCooldownComponent),
/* harmony export */   "ItemDefinitionEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemDefinitionEventSignal_deprecated),
/* harmony export */   "ItemDefinitionTriggeredEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemDefinitionTriggeredEvent),
/* harmony export */   "ItemDurabilityComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemDurabilityComponent),
/* harmony export */   "ItemEnchantsComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemEnchantsComponent),
/* harmony export */   "ItemFoodComponent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemFoodComponent),
/* harmony export */   "ItemLockMode": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemLockMode),
/* harmony export */   "ItemReleaseChargeEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemReleaseChargeEvent),
/* harmony export */   "ItemReleaseChargeEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemReleaseChargeEventSignal_deprecated),
/* harmony export */   "ItemStack": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemStack),
/* harmony export */   "ItemStartChargeEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemStartChargeEvent),
/* harmony export */   "ItemStartChargeEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemStartChargeEventSignal_deprecated),
/* harmony export */   "ItemStartUseOnEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemStartUseOnEvent),
/* harmony export */   "ItemStartUseOnEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemStartUseOnEventSignal_deprecated),
/* harmony export */   "ItemStopChargeEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemStopChargeEvent),
/* harmony export */   "ItemStopChargeEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemStopChargeEventSignal_deprecated),
/* harmony export */   "ItemStopUseOnEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemStopUseOnEvent),
/* harmony export */   "ItemStopUseOnEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemStopUseOnEventSignal_deprecated),
/* harmony export */   "ItemType": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemType),
/* harmony export */   "ItemTypeIterator": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemTypeIterator),
/* harmony export */   "ItemTypes": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemTypes),
/* harmony export */   "ItemUseEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemUseEvent),
/* harmony export */   "ItemUseEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemUseEventSignal_deprecated),
/* harmony export */   "ItemUseOnEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemUseOnEvent),
/* harmony export */   "ItemUseOnEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ItemUseOnEventSignal_deprecated),
/* harmony export */   "Items": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.Items),
/* harmony export */   "LeverActionEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.LeverActionEvent),
/* harmony export */   "LeverActionEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.LeverActionEventSignal_deprecated),
/* harmony export */   "MessageReceiveEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.MessageReceiveEvent),
/* harmony export */   "MessageSourceType": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.MessageSourceType),
/* harmony export */   "MinecraftBlockTypes": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.MinecraftBlockTypes),
/* harmony export */   "MinecraftDimensionTypes": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.MinecraftDimensionTypes),
/* harmony export */   "MinecraftEffectTypes": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.MinecraftEffectTypes),
/* harmony export */   "MinecraftEnchantmentTypes": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.MinecraftEnchantmentTypes),
/* harmony export */   "MinecraftEntityTypes": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.MinecraftEntityTypes),
/* harmony export */   "MinecraftItemTypes": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.MinecraftItemTypes),
/* harmony export */   "MolangVariableMap": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.MolangVariableMap),
/* harmony export */   "MusicOptions": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.MusicOptions),
/* harmony export */   "NavigationResult": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.NavigationResult),
/* harmony export */   "NumberRange": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.NumberRange),
/* harmony export */   "ObjectiveSortOrder": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ObjectiveSortOrder),
/* harmony export */   "PistonActivateEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.PistonActivateEvent),
/* harmony export */   "PistonActivateEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.PistonActivateEventSignal_deprecated),
/* harmony export */   "PlayAnimationOptions": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.PlayAnimationOptions),
/* harmony export */   "Player": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.Player),
/* harmony export */   "PlayerIterator": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.PlayerIterator),
/* harmony export */   "PlayerJoinEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.PlayerJoinEvent),
/* harmony export */   "PlayerJoinEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.PlayerJoinEventSignal_deprecated),
/* harmony export */   "PlayerLeaveEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.PlayerLeaveEvent),
/* harmony export */   "PlayerLeaveEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.PlayerLeaveEventSignal_deprecated),
/* harmony export */   "PlayerSpawnEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.PlayerSpawnEvent),
/* harmony export */   "PlayerSpawnEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.PlayerSpawnEventSignal_deprecated),
/* harmony export */   "ProjectileHitEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ProjectileHitEvent),
/* harmony export */   "ProjectileHitEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ProjectileHitEventSignal_deprecated),
/* harmony export */   "PropertyRegistry": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.PropertyRegistry),
/* harmony export */   "RawMessage": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.RawMessage),
/* harmony export */   "RawMessageScore": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.RawMessageScore),
/* harmony export */   "RawText": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.RawText),
/* harmony export */   "Scoreboard": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.Scoreboard),
/* harmony export */   "ScoreboardIdentity": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ScoreboardIdentity),
/* harmony export */   "ScoreboardIdentityType": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ScoreboardIdentityType),
/* harmony export */   "ScoreboardObjective": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ScoreboardObjective),
/* harmony export */   "ScoreboardObjectiveDisplayOptions": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ScoreboardObjectiveDisplayOptions),
/* harmony export */   "ScoreboardScoreInfo": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ScoreboardScoreInfo),
/* harmony export */   "ScreenDisplay": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ScreenDisplay),
/* harmony export */   "ScriptEventCommandMessageEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ScriptEventCommandMessageEvent),
/* harmony export */   "ScriptEventCommandMessageSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ScriptEventCommandMessageSignal_deprecated),
/* harmony export */   "ScriptEventMessageFilterOptions": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ScriptEventMessageFilterOptions),
/* harmony export */   "Seat": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.Seat),
/* harmony export */   "ServerMessageSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.ServerMessageSignal_deprecated),
/* harmony export */   "SoundOptions": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.SoundOptions),
/* harmony export */   "System": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.System),
/* harmony export */   "SystemEvents": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.SystemEvents),
/* harmony export */   "TickEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.TickEvent),
/* harmony export */   "TicksPerDay": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.TicksPerDay),
/* harmony export */   "TicksPerSecond": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.TicksPerSecond),
/* harmony export */   "TimeOfDay": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.TimeOfDay),
/* harmony export */   "TitleDisplayOptions": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.TitleDisplayOptions),
/* harmony export */   "Trigger": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.Trigger),
/* harmony export */   "Vector": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.Vector),
/* harmony export */   "Vector3": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.Vector3),
/* harmony export */   "WatchdogTerminateReason": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.WatchdogTerminateReason),
/* harmony export */   "WeatherChangeEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.WeatherChangeEvent),
/* harmony export */   "WeatherChangeEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.WeatherChangeEventSignal_deprecated),
/* harmony export */   "World": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.World),
/* harmony export */   "WorldInitializeEvent": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.WorldInitializeEvent),
/* harmony export */   "WorldInitializeEventSignal_deprecated": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.WorldInitializeEventSignal_deprecated),
/* harmony export */   "XYRotation": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.XYRotation),
/* harmony export */   "system": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.system),
/* harmony export */   "world": () => (/* reexport safe */ _minecraft_server__WEBPACK_IMPORTED_MODULE_0__.world)
/* harmony export */ });
/* harmony import */ var _minecraft_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/server */ "@minecraft/server");



/***/ }),

/***/ "./src/extensions/CoreEditor.ts":
/*!**************************************!*\
  !*** ./src/extensions/CoreEditor.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerCoreEditorExtension": () => (/* binding */ registerCoreEditorExtension)
/* harmony export */ });
/* harmony import */ var _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/server-wrapper */ "../../module-wrappers/server-wrapper/index.js");
/* harmony import */ var _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @minecraft/server-editor */ "@minecraft/server-editor");
/* harmony import */ var _functionality_Clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functionality/Clipboard */ "./src/extensions/functionality/Clipboard.ts");
/* harmony import */ var _functionality_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functionality/Delete */ "./src/extensions/functionality/Delete.ts");
/* harmony import */ var _functionality_Selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functionality/Selection */ "./src/extensions/functionality/Selection.ts");
/* harmony import */ var _functionality_Transactions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functionality/Transactions */ "./src/extensions/functionality/Transactions.ts");






function createCoreUI(uiSession) {
    if (!uiSession.scratchStorage) {
        throw new Error('Core UI initialization order incorrect');
    }
    const player = uiSession.extensionContext.player;
    //#region Action Creation
    const exportAsWorldAction = uiSession.actionManager.createAction({
        actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
        onExecute: () => {
            player
                .runCommandAsync('project export world')
                .catch(_ => console.error('Unable to export project as world due to unknown error.'));
        },
    });
    const showUISettingsAction = uiSession.actionManager.createAction({
        actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
        onExecute: () => {
            uiSession.builtInUIManager.updateUISettingsPanelVisibility(true);
        },
    });
    const pauseScreenAction = uiSession.actionManager.createAction({
        actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
        onExecute: () => {
            uiSession.builtInUIManager.navigateToPauseScreen();
        },
    });
    const pauseMobsAction = uiSession.actionManager.createAction({
        actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
        onExecute: () => {
            _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.world.getDimension('overworld')
                .runCommandAsync('simulationtype editor')
                .catch(_ => console.error('Unable to pause mobs due to unknown error.'));
        },
    });
    const unpauseMobsAction = uiSession.actionManager.createAction({
        actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
        onExecute: () => {
            _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.world.getDimension('overworld')
                .runCommandAsync('simulationtype game')
                .catch(_ => console.error('Unable to unpause mobs due to unknown error.'));
        },
    });
    const overworldAction = uiSession.actionManager.createAction({
        actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
        onExecute: () => {
            const rotation = player.getRotation();
            player.teleport(player.location, _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.world.getDimension(String(_minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.MinecraftDimensionTypes.overworld)), rotation.x, rotation.y, false);
        },
    });
    const netherAction = uiSession.actionManager.createAction({
        actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
        onExecute: () => {
            const rotation = player.getRotation();
            player.teleport(player.location, _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.world.getDimension(String(_minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.MinecraftDimensionTypes.nether)), rotation.x, rotation.y, false);
        },
    });
    const endAction = uiSession.actionManager.createAction({
        actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
        onExecute: () => {
            uiSession.extensionContext.transactionManager.openTransaction('Transaction dimension change');
            const rotation = player.getRotation();
            player.teleport(player.location, _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.world.getDimension(String(_minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.MinecraftDimensionTypes.theEnd)), rotation.x, rotation.y, false);
            uiSession.extensionContext.transactionManager.commitOpenTransaction();
        },
    });
    const turnOnDaylightCycleAction = uiSession.actionManager.createAction({
        actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
        onExecute: () => {
            _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.world.getDimension('overworld')
                .runCommandAsync('alwaysday false')
                .then(() => _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.world.getDimension('overworld')
                .runCommandAsync('say daylight cycle on')
                .catch(_ => console.error('Unable to say daylight cycle turned on.')))
                .catch(_ => console.error('Unable to turn on daylight cycle due to unknown error.'));
        },
    });
    const turnOffDaylightCycleAction = uiSession.actionManager.createAction({
        actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
        onExecute: () => {
            _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.world.getDimension('overworld')
                .runCommandAsync('alwaysday true')
                .then(() => _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.world.getDimension('overworld')
                .runCommandAsync('say daylight cycle off')
                .catch(_ => console.error('Unable to say daylight cycle turned off.')))
                .catch(_ => console.error('Unable to turn off daylight cycle due to unknown error.'));
        },
    });
    const quickStartAction = uiSession.actionManager.createAction({
        actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
        onExecute: () => {
            uiSession.builtInUIManager.updateWelcomePanelVisibility(true);
        },
    });
    const documentationAction = uiSession.actionManager.createAction({
        actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
        onExecute: () => {
            uiSession.builtInUIManager.navigateToDocumentation();
        },
    });
    const feedbackAction = uiSession.actionManager.createAction({
        actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
        onExecute: () => {
            uiSession.builtInUIManager.navigateToFeedback();
        },
    });
    //#endregion
    //#region Input Binding
    uiSession.inputManager.registerKeyBinding(_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.EditorInputContext.GlobalToolMode, pauseScreenAction, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.KeyboardKey.KEY_Q, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Control);
    //#endregion
    //#region Menu Composition
    const file = uiSession.createMenu({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.file'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.file'),
    });
    const exportMenu = file.addItem({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.file.export'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.file.export'),
    });
    exportMenu.addItem({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.file.export.world'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.file.export.world'),
    }, exportAsWorldAction);
    file.addItem({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.file.settings'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.file.settings'),
    }, showUISettingsAction);
    file.addItem({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.file.pauseScreen'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.file.pauseScreen'),
    }, pauseScreenAction);
    const edit = uiSession.createMenu({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.edit'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.edit'),
    });
    const worldOptions = uiSession.createMenu({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions'),
    });
    const actors = worldOptions.addItem({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.actors'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.actors'),
    });
    actors.addItem({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.pause.pauseActors'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.pause.pauseActors'),
    }, pauseMobsAction);
    actors.addItem({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.pause.unpauseActors'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.pause.unpauseActors'),
    }, unpauseMobsAction);
    const changeDimension = worldOptions.addItem({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.changeDimension'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.changeDimension'),
    });
    changeDimension.addItem({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.changeDimension.overworld'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.changeDimension.overworld'),
    }, overworldAction);
    changeDimension.addItem({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.changeDimension.nether'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.changeDimension.nether'),
    }, netherAction);
    changeDimension.addItem({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.changeDimension.end'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.changeDimension.end'),
    }, endAction);
    const daylightCycle = worldOptions.addItem({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.daylightCycle'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.daylightCycle'),
    });
    daylightCycle.addItem({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.daylightCycle.turnOnDaylightCycle'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.daylightCycle.turnOnDaylightCycle'),
    }, turnOnDaylightCycleAction);
    daylightCycle.addItem({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.daylightCycle.turnOffDaylightCycle'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.worldOptions.daylightCycle.turnOffDaylightCycle'),
    }, turnOffDaylightCycleAction);
    const help = uiSession.createMenu({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.help'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.help'),
    });
    help.addItem({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.help.quickStart'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.help.quickStart'),
    }, quickStartAction);
    help.addItem({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.help.documentation'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.help.documentation'),
    }, documentationAction);
    help.addItem({
        name: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.help.feedback'),
        displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.help.feedback'),
    }, feedbackAction);
    //#endregion
    file.show();
    edit.show();
    worldOptions.show();
    help.show();
    return {
        file,
        edit,
        worldOptions,
        help,
    };
}
/**
 * Registers main extensions to set up the UI. Should be moved to core code long term
 * @beta
 */
function registerCoreEditorExtension() {
    const extension = (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.registerEditorExtension)('CoreEditor', (uiSession) => {
        console.log('Initializing CoreEditor Extension\n');
        uiSession.scratchStorage = {};
        // Initialize tool rail.
        uiSession.toolRail.show();
        // Create the core UI that other functionality may build off of
        uiSession.scratchStorage.coreMenuItems = createCoreUI(uiSession);
        // Add transaction functionality
        const transactions = new _functionality_Transactions__WEBPACK_IMPORTED_MODULE_5__.UndoRedoBehavior(uiSession, uiSession.scratchStorage.coreMenuItems);
        // Add selection functionality
        const selectBehavior = new _functionality_Selection__WEBPACK_IMPORTED_MODULE_4__.SelectionBehavior(uiSession);
        // Add clipboard functionality
        uiSession.scratchStorage.clipboard = new _functionality_Clipboard__WEBPACK_IMPORTED_MODULE_2__.ClipboardBehavior(uiSession, uiSession.scratchStorage.coreMenuItems, selectBehavior.toolId);
        // Add block inspector functionality
        // disabled until we have a better design
        //const blockInspector = new BlockInspectorBehavior(uiSession);
        // Add delete functionality
        uiSession.scratchStorage.deleteBehavior = new _functionality_Delete__WEBPACK_IMPORTED_MODULE_3__.DeleteBehavior(uiSession, uiSession.scratchStorage.coreMenuItems);
        console.log('CoreEditor Extension Initialized\n');
        return [
            selectBehavior,
            uiSession.scratchStorage.clipboard,
            uiSession.scratchStorage.deleteBehavior,
            transactions,
        ];
    }, () => {
        console.log('Shutting CoreEditor Extension\n');
    });
    if (extension) {
        extension.description = 'Activates Server Driven UI.';
        extension.notes = 'http://alturl.com/p749b';
    }
    else {
        console.log('\nFailed to create test extension\n');
    }
}


/***/ }),

/***/ "./src/extensions/CubeBrush.ts":
/*!*************************************!*\
  !*** ./src/extensions/CubeBrush.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCubeBrushTool": () => (/* binding */ addCubeBrushTool),
/* harmony export */   "registerCubeBrushExtension": () => (/* binding */ registerCubeBrushExtension)
/* harmony export */ });
/* harmony import */ var editor = __webpack_require__(/*! @minecraft/server-editor */ "@minecraft/server-editor");
/* harmony import */ var _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @minecraft/server-wrapper */ "../../module-wrappers/server-wrapper/index.js");
/* harmony import */ var _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @minecraft/editor-utilities */ "../../core/editor-utils/lib/index.js");



function addCubeBrushSettingsPane(uiSession, tool) {
    const pane = uiSession.createPropertyPane({
        titleStringId: (0,editor.getLocalizationId)('toolRail.cubeBrushSettings.pane'),
        titleAltText: 'Brush',
    });
    // Here is the binding created.
    const settings = (0,editor.createPaneBindingObject)(pane, {
        size: 3,
        hollow: false,
        face: false,
        block: _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_1__.MinecraftBlockTypes.stone,
    });
    const onExecuteBrush = () => {
        if (uiSession.scratchStorage === undefined) {
            console.error('Brush storage was not initialized.');
            return;
        }
        const previewSelection = uiSession.scratchStorage.previewSelection;
        const player = uiSession.extensionContext.player;
        const targetBlock = player.dimension.getBlock(uiSession.extensionContext.cursor.position);
        if (targetBlock === undefined) {
            return;
        }
        const rotationY = uiSession.extensionContext.player.getRotation().y;
        // Calculate back and right rotation relative to the player
        const directionRight = (0,_minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_2__.getRotationCorrectedDirectionVector)(rotationY, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_2__.Direction.Right);
        const directionForward = (0,_minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_2__.getRotationCorrectedDirectionVector)(rotationY, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_2__.Direction.Back);
        const relativeDirection = _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_1__.Vector.add(_minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_1__.Vector.add(directionRight, directionForward), _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_1__.Vector.up);
        const sizeHalf = Math.floor(settings.size / 2);
        let fromOffset = _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_1__.Vector.multiply(relativeDirection, -sizeHalf);
        const toOffset = _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_1__.Vector.multiply(relativeDirection, settings.size - 1);
        // If size is an even number, move the start position up by one block
        const isEven = settings.size % 2 === 0;
        if (isEven) {
            fromOffset = _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_1__.Vector.add(fromOffset, _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_1__.Vector.up);
        }
        const location = targetBlock.location;
        const from = {
            x: location.x + fromOffset.x,
            y: location.y + fromOffset.y,
            z: location.z + fromOffset.z,
        };
        const to = { x: from.x + toOffset.x, y: from.y + toOffset.y, z: from.z + toOffset.z };
        const blockVolume = new editor.BlockVolume(from, to);
        // We haven't really moved since the last click - let's just skip adding this
        if (uiSession.scratchStorage.lastVolumePlaced?.equals(blockVolume.boundingBox)) {
            return;
        }
        previewSelection.pushVolume(editor.SelectionBlockVolumeAction.add, blockVolume);
        uiSession.scratchStorage.lastVolumePlaced = blockVolume.boundingBox;
        if (settings.hollow &&
            blockVolume.boundingBox.spanX > 2 &&
            blockVolume.boundingBox.spanY > 2 &&
            blockVolume.boundingBox.spanZ > 2) {
            const subtractBlockVolume = new editor.BlockVolume({ x: from.x + relativeDirection.x, y: from.y + 1, z: from.z + relativeDirection.z }, { x: to.x - relativeDirection.x, y: to.y - 1, z: to.z - relativeDirection.z });
            previewSelection.pushVolume(editor.SelectionBlockVolumeAction.subtract, subtractBlockVolume);
        }
    };
    pane.addNumber(settings, 'size', {
        titleStringId: (0,editor.getLocalizationId)('toolRail.cubeBrushSettings.size'),
        titleAltText: 'Brush Size',
        min: 1,
        max: 16,
        showSlider: true,
    });
    pane.addBool(settings, 'hollow', {
        titleStringId: (0,editor.getLocalizationId)('toolRail.cubeBrushSettings.hollow'),
        titleAltText: 'Hollow',
    });
    pane.addBool(settings, 'face', {
        titleStringId: (0,editor.getLocalizationId)('toolRail.cubeBrushSettings.face'),
        titleAltText: 'Face Mode',
        onChange: (_obj, _property, _oldValue, _newValue) => {
            if (uiSession.scratchStorage === undefined) {
                console.error('Brush storage was not initialized.');
                return;
            }
            uiSession.scratchStorage.toolCursorState.targetMode = settings.face
                ? editor.CursorTargetMode.Face
                : editor.CursorTargetMode.Block;
            uiSession.extensionContext.cursor.setState(uiSession.scratchStorage.toolCursorState);
        },
    });
    pane.addBlockPicker(settings, 'block', {
        titleStringId: (0,editor.getLocalizationId)('toolRail.cubeBrushSettings.block'),
        titleAltText: 'Block Type',
    });
    tool.bindPropertyPane(pane);
    const toggleHollowShortcut = uiSession.actionManager.createAction({
        actionType: editor.ActionTypes.NoArgsAction,
        onExecute: () => {
            settings.hollow = !settings.hollow;
        },
    });
    tool.registerKeyBinding(toggleHollowShortcut, editor.KeyboardKey.KEY_H, editor.InputModifier.Control);
    // This is here just as an example for handling mouse button
    const executeExampleMouseButtonAction = uiSession.actionManager.createAction({
        actionType: editor.ActionTypes.MouseRayCastAction,
        onExecute: async (mouseRay, mouseProps) => {
            if (uiSession.scratchStorage === undefined) {
                console.error('Brush storage was not initialized.');
                return;
            }
            if (mouseProps.mouseAction === editor.MouseActionType.LeftButton) {
                if (mouseProps.inputType === editor.MouseInputType.ButtonDown) {
                    console.log('Cube brush Left Click started');
                    uiSession.extensionContext.transactionManager.openTransaction('Transaction group cube brush');
                    uiSession.scratchStorage.previewSelection.clear();
                    onExecuteBrush();
                }
                else if (mouseProps.inputType === editor.MouseInputType.ButtonUp) {
                    console.log('Cube brush Left Click Released');
                    uiSession.extensionContext.transactionManager.trackBlockChangeSelection(uiSession.scratchStorage.previewSelection);
                    const player = uiSession.extensionContext.player;
                    const dimension = player.dimension;
                    await (0,editor.executeLargeOperation)(uiSession.scratchStorage.previewSelection, blockLocation => {
                        const block = dimension.getBlock(blockLocation);
                        if (block) {
                            block.isWaterlogged = false;
                            block.setType(settings.block);
                        }
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
    // Example for mouse drag
    const executeBrushRayAction = uiSession.actionManager.createAction({
        actionType: editor.ActionTypes.MouseRayCastAction,
        onExecute: (mouseRay, mouseProps) => {
            if (mouseProps.inputType === editor.MouseInputType.DragStart) {
                console.log('Cube brush stroke started');
            }
            else if (mouseProps.inputType === editor.MouseInputType.Drag) {
                onExecuteBrush();
            }
            else if (mouseProps.inputType === editor.MouseInputType.DragEnd) {
                console.log('Cube brush stroke ended');
            }
        },
    });
    tool.registerMouseDragBinding(executeBrushRayAction);
    // Example for adding mouse wheel
    const executeBrushSizeAction = uiSession.actionManager.createAction({
        actionType: editor.ActionTypes.MouseRayCastAction,
        onExecute: (mouseRay, mouseProps) => {
            if (mouseProps.mouseAction === editor.MouseActionType.Wheel) {
                if (mouseProps.inputType === editor.MouseInputType.WheelOut) {
                    if (settings.size < 16) {
                        settings.size++;
                    }
                }
                else if (mouseProps.inputType === editor.MouseInputType.WheelIn) {
                    if (settings.size > 1) {
                        settings.size--;
                    }
                }
            }
        },
    });
    tool.registerMouseWheelBinding(executeBrushSizeAction);
    return settings;
}
function addCubeBrushTool(uiSession, storage) {
    const tool = uiSession.toolRail.addTool({
        displayString: 'Brush (CTRL + B)',
        displayStringLocId: (0,editor.getLocalizationId)('toolRail.cubeBrushTool.title'),
        icon: 'pack://textures/editor/Cube.png?filtering=point',
        tooltip: 'Left mouse click or drag-to-paint',
        tooltipLocId: (0,editor.getLocalizationId)('toolRail.cubeBrushTool.description'),
    });
    tool.onModalToolActivation.subscribe((eventData) => {
        if (eventData.isActiveTool) {
            uiSession.extensionContext.cursor.setState(storage.toolCursorState);
        }
        uiSession.scratchStorage?.previewSelection?.clear();
    });
    return tool;
}
/**
 * Provides a "CubeBrush" extension for put cubes into the world.
 * @beta
 */
function registerCubeBrushExtension() {
    const testExtension = (0,editor.registerEditorExtension)('cubeBrush', (uiSession) => {
        console.log('Initializing cube brush extension\n');

        /* storage生成 　多分グリッドの見た目の部分*/
        const currentCursorState = uiSession.extensionContext.cursor.getState();
        currentCursorState.color = { red: 1, green: 1, blue: 0, alpha: 1 }; // Yellow
        currentCursorState.controlMode = editor.CursorControlMode.KeyboardAndMouse;
        currentCursorState.targetMode = editor.CursorTargetMode.Block;
        currentCursorState.visible = true;
        const previewSelection = uiSession.extensionContext.selectionManager.createSelection();
        previewSelection.visible = true;
        previewSelection.borderColor = { red: 0, green: 0.5, blue: 0.5, alpha: 0.2 };
        previewSelection.fillColor = { red: 0, green: 0, blue: 0.5, alpha: 0.1 };
        const storage = {
            toolCursorState: currentCursorState,
            previewSelection: previewSelection,
        };
        uiSession.scratchStorage = storage;
        // Add the tool to the tool rail.
        const cubeBrushTool = addCubeBrushTool(uiSession, storage);
        // Create pane.
        addCubeBrushSettingsPane(uiSession, cubeBrushTool);
        
        //toolRail周り？謎
        const brushToggleAction = uiSession.actionManager.createAction({
            actionType: editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                uiSession.toolRail.setSelectedOptionId(cubeBrushTool.id, true);
            },
        });
        //ショートカットバインド
        uiSession.inputManager.registerKeyBinding(editor.EditorInputContext.GlobalToolMode, brushToggleAction, editor.KeyboardKey.KEY_B, editor.InputModifier.Control);
        return [];
    }, () => {
        console.log('Shutting down cube brush extension\n');
    });
    if (testExtension) {
        testExtension.description = 'Activate cube brush from tool rail.';
        testExtension.notes = 'http://alturl.com/p749b';
    }
    else {
        console.log('\nFailed to create test cube brush extension\n');
    }
}


/***/ }),

/***/ "./src/extensions/Grapple.ts":
/*!***********************************!*\
  !*** ./src/extensions/Grapple.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerGrappleExtension": () => (/* binding */ registerGrappleExtension)
/* harmony export */ });
/* harmony import */ var _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/server-wrapper */ "../../module-wrappers/server-wrapper/index.js");
/* harmony import */ var _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @minecraft/server-editor */ "@minecraft/server-editor");


/**
 * Provides a "Grapple" extension for quickly moving the player around the world
 * @beta
 */
function registerGrappleExtension() {
    const testExtension = (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.registerEditorExtension)('grapple', (uiSession) => {
        console.log('Initializing grapple extension');
        const op = {
            start: new _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector(0, 0, 0),
            end: new _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector(0, 0, 0),
            viewX: 0.0,
            viewY: 0.0,
            step: 1.0 / 20.0 / 0.3,
            progress: 0.0,
            subject: undefined,
            previous: new _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector(0, 0, 0),
        };
        const onGrappleTick = () => {
            if (op.subject) {
                op.progress += op.step;
                const endLoc = { x: op.end.x, y: op.end.y, z: op.end.z };
                if (op.progress >= 1.0) {
                    // setting facingLocation == endLoc will end up
                    // with a 0,0 rotation, so we use the rotation
                    // set by previous steps
                    // console.log(`Destination reached - ${endLoc.x}, ${endLoc.y}, ${endLoc.z}`);
                    const rotation = op.subject.getRotation();
                    op.subject.teleport(endLoc, op.subject.dimension, rotation.x, rotation.y, false);
                    op.subject = undefined;
                }
                else {
                    const current = _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.lerp(op.start, op.end, op.progress);
                    //console.log(`${current.x}, ${current.y}, ${current.z}`);
                    const block = op.subject?.dimension.getBlock(current);
                    if (block.isSolid()) {
                        //console.log(`new teleport position would be inside a block - so just stop the lerp`);
                        // new position is inside a solid block -- just stop (at the last position)
                        op.progress = 1.0;
                        op.end = op.previous;
                        const rotation = op.subject.getRotation();
                        op.subject.teleport(op.previous, op.subject.dimension, rotation.x, rotation.y, false);
                        op.subject = undefined;
                        return;
                    }
                    op.subject?.teleportFacing({ x: current.x, y: current.y, z: current.z }, op.subject.dimension, endLoc, false);
                    _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.system.run(onGrappleTick);
                }
            }
        };
        const grappleAction = uiSession.actionManager.createAction({
            actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
            onExecute: () => {
                //console.log(`------------------------GRAPPLE---------------------------------------`);
                // Get the block the player is looking at
                const me = uiSession.extensionContext.player;
                const headLocation = me.getHeadLocation();
                op.start = new _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector(Math.floor(headLocation.x), Math.floor(headLocation.y), Math.floor(headLocation.z));
                op.progress = 0.0;
                op.subject = me;
                let viewVector;
                //let modeString: string;
                const cursor = uiSession.extensionContext.cursor;
                // Fixed cursor mode will default to the player view direction
                if (cursor.isVisible && cursor.getState().controlMode !== _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.CursorControlMode.Fixed) {
                    const cursorPos = new _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector(cursor.position.x, cursor.position.y, cursor.position.z);
                    //console.log(`Cursor Position -- (${cursorPos.x}, ${cursorPos.y}, ${cursorPos.z})`);
                    viewVector = _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.subtract(cursorPos, op.start).normalized();
                    //modeString = 'Grapple-Cursor';
                }
                else {
                    viewVector = me.getViewDirection();
                    //modeString = 'Grapple-View';
                }
                const raycastOptions = {
                    includeLiquidBlocks: false,
                    includePassableBlocks: true,
                    maxDistance: 1000,
                };
                // Quick sanity check - is our start point inside a non-air block?
                const insideBlock = me.dimension.getBlock(op.start);
                if (insideBlock.isSolid()) {
                    //console.log(
                    //    `${modeString} -- (${op.start.x}, ${op.start.y}, ${op.start.z}) is inside a block -- aborting grapple operation`
                    //);
                    return;
                }
                const block = me.dimension.getBlockFromRay(op.start, viewVector, raycastOptions);
                if (!block) {
                    console.log(`Failed to hit anything with a ray-cast -- aborting grapple operation`);
                    return;
                }
                let oneStepBack = _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.subtract(block.location, viewVector);
                //console.log(
                //    `Taking a step back along the view vector - (${Math.floor(oneStepBack.x)}, ${Math.floor(
                //        oneStepBack.y
                //    )}, ${Math.floor(oneStepBack.z)}), Block Location (${block.location.x}, ${block.location.y}, ${
                //        block.location.z
                //    })`
                //);
                let iterations = 0;
                while (Math.floor(oneStepBack.x) === block.location.x &&
                    Math.floor(oneStepBack.y) === block.location.y &&
                    Math.floor(oneStepBack.z) === block.location.z) {
                    //console.log(`iterating backwards along view vector until the block coordinates change`);
                    oneStepBack = _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector.subtract(oneStepBack, viewVector);
                    if (++iterations > 5) {
                        //console.log(
                        //    `check the logic in the oneStepBack function - is it possible the normalized view vector is too small?`
                        //);
                        // sanity check - should never really be this many -- avoid getting stuck in an infinite loop
                        break;
                    }
                }
                op.end = new _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.Vector(Math.floor(oneStepBack.x), Math.floor(oneStepBack.y), Math.floor(oneStepBack.z));
                op.previous = op.start;
                op.viewX = viewVector.x;
                op.viewY = viewVector.y;
                //console.log(
                //    `${modeString} -\nFrom  (${op.start.x}, ${op.start.y}, ${op.start.z})\n  to  (${op.end.x}, ${op.end.y}, ${op.end.z})\nalong (${viewVector.x}, ${viewVector.y}, ${viewVector.z})`
                //);
                _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.system.run(onGrappleTick);
            },
        });
        uiSession.inputManager.registerKeyBinding(_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.EditorInputContext.GlobalToolMode, grappleAction, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.KeyboardKey.KEY_G, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.None);
        return [];
    }, () => {
        console.log('Shutting down grapple Extension');
    });
    if (testExtension) {
        testExtension.description = 'Activate a grapple like action using `:grapple`';
        testExtension.notes = 'http://alturl.com/p749b';
    }
    else {
        console.log('\nFailed to create test extension');
    }
}


/***/ }),

/***/ "./src/extensions/PlayerPosition.ts":
/*!******************************************!*\
  !*** ./src/extensions/PlayerPosition.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerPlayerPositionExtension": () => (/* binding */ registerPlayerPositionExtension)
/* harmony export */ });
/* harmony import */ var _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/server-wrapper */ "../../module-wrappers/server-wrapper/index.js");
/* harmony import */ var _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @minecraft/server-editor */ "@minecraft/server-editor");


const DimensionIds = {
    'minecraft:overworld': 0,
    'minecraft:nether': -1,
    'minecraft:the_end': 1,
};
const TicksRefreshRate = 5;
function getDimensionName(dimensionId) {
    for (const key in DimensionIds) {
        const value = DimensionIds[key];
        if (value === dimensionId) {
            return key;
        }
    }
    return 'minecraft:overworld';
}
function movePlayer(location, extensionContext, dimensionId = Number.MIN_SAFE_INTEGER) {
    const player = extensionContext.player;
    const targetDimension = dimensionId !== Number.MIN_SAFE_INTEGER ? _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.world.getDimension(getDimensionName(dimensionId)) : player.dimension;
    const rotation = player.getRotation();
    player.teleport(location, targetDimension, rotation.x, rotation.y, false);
}
/**
 * Compare Vec3's. Temporary while types are fixed
 */
const areLocationsEqual = (a, b) => {
    return a.x === b.x && a.y === b.y && a.z === b.z;
};
const updateStatusBarText = (statusBarItem, location) => {
    statusBarItem.text = `Pos (${Math.floor(location.x)},${Math.floor(location.y)},${Math.floor(location.z)})`;
};
/**
 * Provides a "PlayerPosition" extension for tracking and moving the player around the world.
 * @beta
 */
function registerPlayerPositionExtension() {
    const playerExtension = (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.registerEditorExtension)('playerPosition', (uiSession) => {
        console.log('Initializing player position extension\n');
        uiSession.scratchStorage = { isDisposed: false, latestRunId: -1 };
        const player = uiSession.extensionContext.player;
        let currentLocation = { ...player.location };
        const pane = uiSession.createPropertyPane({
            titleStringId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('playerPositionExtension.pane'),
            titleAltText: 'Player Settings',
        });
        // Here is the binding created.
        const playerPosition = (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.createPaneBindingObject)(pane, {
            position: { x: 0, y: 0, z: 0 },
            dimensionId: DimensionIds[player.dimension.id],
        });
        const subPaneDimension = pane.createPropertyPane({
            titleStringId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('playerPositionExtension.worldSettings'),
            titleAltText: 'World Settings',
        });
        subPaneDimension.addDropdown(playerPosition, 'dimensionId', {
            titleStringId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('playerPositionExtension.dimension'),
            titleAltText: 'Dimension',
            dropdownItems: [
                {
                    displayAltText: 'Overworld',
                    displayStringId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('playerPositionExtension.overworld'),
                    value: DimensionIds['minecraft:overworld'],
                },
                {
                    displayAltText: 'Nether',
                    displayStringId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('playerPositionExtension.nether'),
                    value: DimensionIds['minecraft:nether'],
                },
                {
                    displayAltText: 'The End',
                    displayStringId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('playerPositionExtension.theEnd'),
                    value: DimensionIds['minecraft:the_end'],
                },
            ],
            onChange: (_obj, _property, _oldValue, _newValue) => {
                // Change dimension depending selected value.
                movePlayer(player.location, uiSession.extensionContext, playerPosition.dimensionId);
            },
        });
        // Add status bar item.
        const positionStatusItem = uiSession.createStatusBarItem(_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.EditorStatusBarAlignment.Left, 30);
        updateStatusBarText(positionStatusItem, currentLocation);
        let ticks = 0;
        const onTick = () => {
            if (ticks++ % TicksRefreshRate === 0 && !areLocationsEqual(player.location, currentLocation)) {
                ticks = 0;
                // If player position changes, we update the proxy object.
                // This propagates changes into the property grid and client UI.
                currentLocation = { ...player.location };
                updateStatusBarText(positionStatusItem, currentLocation);
            }
            if (uiSession.scratchStorage && !uiSession.scratchStorage.isDisposed) {
                uiSession.scratchStorage.latestRunId = _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.system.run(onTick);
            }
        };
        uiSession.scratchStorage.latestRunId = _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.system.run(onTick);
        return [];
    }, (uiSession) => {
        if (uiSession.scratchStorage && uiSession.scratchStorage.latestRunId !== -1) {
            uiSession.scratchStorage.isDisposed = true;
            _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.system.clearRun(uiSession.scratchStorage.latestRunId);
        }
        console.log('Shutting down player position extension\n');
    });
    if (playerExtension) {
        playerExtension.description = 'Keeps track of player position and allow to modify it into the pane.';
        playerExtension.notes = 'http://alturl.com/p749b';
    }
    else {
        console.log('\nFailed to create player position extension\n');
    }
}


/***/ }),

/***/ "./src/extensions/functionality/Clipboard.ts":
/*!***************************************************!*\
  !*** ./src/extensions/functionality/Clipboard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClipboardBehavior": () => (/* binding */ ClipboardBehavior)
/* harmony export */ });
/* harmony import */ var editor = __webpack_require__(/*! @minecraft/server-editor */ "@minecraft/server-editor");
/* harmony import */ var _helpers_DeleteSelection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/DeleteSelection */ "./src/extensions/functionality/helpers/DeleteSelection.ts");


// Clipboard Functionality
class ClipboardBehavior {
    constructor(uiSession, coreMenuItems, fallbackToolId) {
        this.fallbackToolId = fallbackToolId;
        this.pastePreviewLocation = { x: 0, y: 0, z: 0 };
        this.rotationLookup = [
            editor.ClipboardRotation.none,
            editor.ClipboardRotation.Rotate90,
            editor.ClipboardRotation.Rotate180,
            editor.ClipboardRotation.Rotate270,
        ];
        this.settings = this.getDefaultClipboardSettings();
        this.selectionPreview = uiSession.extensionContext.selectionManager.createSelection();
        this.selectionPreview.fillColor = { red: 1.0, green: 1.0, blue: 0.0, alpha: 0.25 };
        this.selectionPreview.borderColor = { red: 1.0, green: 0.0, blue: 1.0, alpha: 1.0 };
        this.setup(uiSession, coreMenuItems);
    }
    getDefaultClipboardSettings() {
        return {
            rotationIndex: 0,
            mirrorX: false,
            mirrorZ: false,
            origin: { x: 0, y: 0, z: 0 },
        };
    }
    setup(uiSession, coreMenuItems) {
        if (!uiSession.scratchStorage) {
            throw new Error('Unable to set up Clipboard due to missing CoreUIState.');
        }
        this.tool = uiSession.toolRail.addTool({
            displayString: 'Paste Preview (CTRL + SHIFT + V)',
            displayStringLocId: (0,editor.getLocalizationId)('paste.toolRail.title'),
            icon: 'pack://textures/editor/Paste.png?filtering=point',
            tooltip: 'Left mouse click or drag-to-paint',
            tooltipLocId: (0,editor.getLocalizationId)('paste.toolRail.description'),
        });
        this.tool.onModalToolActivation.subscribe((eventData) => {
            this.selectionPreview.visible = eventData.isActiveTool;
            if (eventData.isActiveTool) {
                uiSession.extensionContext.cursor.resetToDefaultState();
                this.updateSelectionPreview(uiSession.extensionContext);
                this.tryUpdateToSelection(uiSession);
            }
        });
        const pane = uiSession.createPropertyPane({
            titleStringId: (0,editor.getLocalizationId)('paste.pane.title'),
            titleAltText: 'Paste',
        });
        this.settings = (0,editor.createPaneBindingObject)(pane, this.getDefaultClipboardSettings());
        const submitPastePreviewAction = uiSession.actionManager.createAction({
            actionType: editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.doPaste(uiSession.extensionContext, this.generateWriteOptions(this.settings));
            },
        });
        pane.addButtonAndBindAction(submitPastePreviewAction, {
            titleStringId: (0,editor.getLocalizationId)('paste.pane.submitButton'),
            titleAltText: 'Confirm Paste',
        });
        const transformPane = pane.createPropertyPane({
            titleStringId: (0,editor.getLocalizationId)('paste.pane.transform.title'),
            titleAltText: 'Transform',
        });
        transformPane.addVec3(this.settings, 'origin', {
            titleStringId: (0,editor.getLocalizationId)('paste.pane.transform.origin.title'),
            titleAltText: 'Origin',
            minX: Number.MIN_SAFE_INTEGER,
            minY: Number.MIN_SAFE_INTEGER,
            minZ: Number.MIN_SAFE_INTEGER,
            onChange: (_obj, _property, _oldValue, _newValue) => {
                this.updateSelectionPreview(uiSession.extensionContext);
            },
        });
        transformPane.addDropdown(this.settings, 'rotationIndex', {
            titleStringId: (0,editor.getLocalizationId)('paste.pane.transform.rotation.title'),
            titleAltText: 'Rotate',
            dropdownItems: [
                {
                    displayAltText: '0°',
                    displayStringId: (0,editor.getLocalizationId)('paste.pane.transform.rotation.none'),
                    value: 0,
                },
                {
                    displayAltText: '90°',
                    displayStringId: (0,editor.getLocalizationId)('paste.pane.transform.rotation.90'),
                    value: 1,
                },
                {
                    displayAltText: '180°',
                    displayStringId: (0,editor.getLocalizationId)('paste.pane.transform.rotation.180'),
                    value: 2,
                },
                {
                    displayAltText: '270°',
                    displayStringId: (0,editor.getLocalizationId)('paste.pane.transform.rotation.270'),
                    value: 3,
                },
            ],
            onChange: (_obj, _property, _oldValue, _newValue) => {
                this.updateSelectionPreview(uiSession.extensionContext);
            },
        });
        transformPane.addBool(this.settings, 'mirrorX', {
            titleStringId: (0,editor.getLocalizationId)('paste.pane.transform.mirrorX'),
            titleAltText: 'Mirror X',
            onChange: (_obj, _property, _oldValue, _newValue) => {
                this.updateSelectionPreview(uiSession.extensionContext);
            },
        });
        transformPane.addBool(this.settings, 'mirrorZ', {
            titleStringId: (0,editor.getLocalizationId)('paste.pane.transform.mirrorZ'),
            titleAltText: 'Mirror Z',
            onChange: (_obj, _property, _oldValue, _newValue) => {
                this.updateSelectionPreview(uiSession.extensionContext);
            },
        });
        this.tool.bindPropertyPane(pane);
        const copyAction = uiSession.actionManager.createAction({
            actionType: editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.doCopy(uiSession);
            },
        });
        uiSession.inputManager.registerKeyBinding(editor.EditorInputContext.GlobalToolMode, copyAction, editor.KeyboardKey.KEY_C, editor.InputModifier.Control);
        const cutAction = uiSession.actionManager.createAction({
            actionType: editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.doCopy(uiSession);
                (0,_helpers_DeleteSelection__WEBPACK_IMPORTED_MODULE_1__.deleteOperation)(uiSession.extensionContext).catch(e => console.error(e));
            },
        });
        uiSession.inputManager.registerKeyBinding(editor.EditorInputContext.GlobalToolMode, cutAction, editor.KeyboardKey.KEY_X, editor.InputModifier.Control);
        const pasteAction = uiSession.actionManager.createAction({
            actionType: editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                if (uiSession.toolRail.selectedOptionId === this.tool?.id) {
                    this.doPaste(uiSession.extensionContext, this.generateWriteOptions(this.settings));
                }
                else {
                    this.doQuickPaste(uiSession);
                }
            },
        });
        uiSession.inputManager.registerKeyBinding(editor.EditorInputContext.GlobalToolMode, pasteAction, editor.KeyboardKey.KEY_V, editor.InputModifier.Control);
        uiSession.inputManager.registerKeyBinding(editor.EditorInputContext.GlobalToolMode, uiSession.actionManager.createAction({
            actionType: editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.selectPasteTool(uiSession);
            },
        }), editor.KeyboardKey.KEY_V, editor.InputModifier.Control | editor.InputModifier.Shift);
        this.tool.registerKeyBinding(uiSession.actionManager.createAction({
            actionType: editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.selectionPreview.clear();
                if (this.fallbackToolId !== undefined) {
                    uiSession.toolRail.setSelectedOptionId(this.fallbackToolId, true);
                }
            },
        }), editor.KeyboardKey.KEY_D, editor.InputModifier.Control);
        this.tool.registerKeyBinding(uiSession.actionManager.createAction({
            actionType: editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.movePreview(uiSession.extensionContext, getAxisAlignedDirection(uiSession.extensionContext.player.getRotation().y));
            },
        }), editor.KeyboardKey.UP);
        this.tool.registerKeyBinding(uiSession.actionManager.createAction({
            actionType: editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.movePreview(uiSession.extensionContext, getAxisAlignedDirection(uiSession.extensionContext.player.getRotation().y + 180));
            },
        }), editor.KeyboardKey.DOWN);
        this.tool.registerKeyBinding(uiSession.actionManager.createAction({
            actionType: editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.movePreview(uiSession.extensionContext, getAxisAlignedDirection(uiSession.extensionContext.player.getRotation().y + 270));
            },
        }), editor.KeyboardKey.LEFT);
        this.tool.registerKeyBinding(uiSession.actionManager.createAction({
            actionType: editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.movePreview(uiSession.extensionContext, getAxisAlignedDirection(uiSession.extensionContext.player.getRotation().y + 90));
            },
        }), editor.KeyboardKey.RIGHT);
        this.tool.registerKeyBinding(uiSession.actionManager.createAction({
            actionType: editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.movePreview(uiSession.extensionContext, { x: 0, y: 1, z: 0 });
            },
        }), editor.KeyboardKey.PAGE_UP);
        this.tool.registerKeyBinding(uiSession.actionManager.createAction({
            actionType: editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.movePreview(uiSession.extensionContext, { x: 0, y: -1, z: 0 });
            },
        }), editor.KeyboardKey.PAGE_DOWN);
        this.tool.registerMouseButtonBinding(uiSession.actionManager.createAction({
            actionType: editor.ActionTypes.MouseRayCastAction,
            onExecute: (mouseRay, mouseProps) => {
                if (mouseProps.mouseAction === editor.MouseActionType.LeftButton) {
                    if (mouseProps.inputType === editor.MouseInputType.ButtonDown) {
                        this.movePreviewToRay(uiSession.extensionContext, mouseRay);
                    }
                }
            },
        }));
        this.tool.registerMouseDragBinding(uiSession.actionManager.createAction({
            actionType: editor.ActionTypes.MouseRayCastAction,
            onExecute: (mouseRay, mouseProps) => {
                if (mouseProps.inputType === editor.MouseInputType.Drag) {
                    this.movePreviewToRay(uiSession.extensionContext, mouseRay);
                }
            },
        }));
        this.tool.registerKeyBinding(submitPastePreviewAction, editor.KeyboardKey.ENTER);
        // Add to the file menu
        coreMenuItems.edit.addItem({ name: 'menuBar.edit.cut', displayStringLocId: (0,editor.getLocalizationId)('menuBar.edit.cut') }, cutAction);
        coreMenuItems.edit.addItem({ name: 'menuBar.edit.copy', displayStringLocId: (0,editor.getLocalizationId)('menuBar.edit.copy') }, copyAction);
        coreMenuItems.edit.addItem({ name: 'menuBar.edit.quickPaste', displayStringLocId: (0,editor.getLocalizationId)('menuBar.edit.quickPaste') }, pasteAction);
    }
    teardown() {
        this.pastePreviewLocation = { x: 0, y: 0, z: 0 };
        this.selectionPreview.clear();
        this.settings = this.getDefaultClipboardSettings();
        this.tool = undefined;
    }
    resetSettings() {
        // We can't just reinitialize this.settings or else the Pane's settings tracking breaks down.
        this.settings.rotationIndex = 0;
        this.settings.mirrorX = false;
        this.settings.mirrorZ = false;
        this.settings.origin = { x: 0, y: 0, z: 0 };
    }
    selectPasteTool(uiSession) {
        uiSession.toolRail.setSelectedOptionId(this.tool?.id, true);
        this.updateSelectionPreview(uiSession.extensionContext);
        this.tryUpdateToSelection(uiSession);
    }
    doCopy(uiSession) {
        const clipboardManager = uiSession.extensionContext.clipboardManager;
        const selectionManager = uiSession.extensionContext.selectionManager;
        clipboardManager.clipboard.readFromSelection(selectionManager.selection);
        uiSession.extensionContext.player.sendMessage('Selection Copied');
        this.resetSettings();
        if (uiSession.toolRail.selectedOptionId === this.tool?.id) {
            this.updateSelectionPreview(uiSession.extensionContext);
        }
    }
    doQuickPaste(uiSession) {
        const extensionContext = uiSession.extensionContext;
        const selectionManager = extensionContext.selectionManager;
        if (selectionManager.selection.isEmpty) {
            uiSession.toolRail.setSelectedOptionId(this.tool?.id, true);
            this.tryUpdateToSelection(uiSession);
        }
        else {
            this.tryUpdateToSelection(uiSession);
            this.doPaste(uiSession.extensionContext, this.generateWriteOptions(this.settings));
        }
    }
    doPaste(extensionContext, writeOptions) {
        const clipboardManager = extensionContext.clipboardManager;
        const transactionManager = extensionContext.transactionManager;
        transactionManager.openTransaction('Paste');
        clipboardManager.clipboard.writeToWorld(this.pastePreviewLocation, writeOptions);
        transactionManager.commitOpenTransaction();
    }
    tryUpdateToSelection(uiSession) {
        const selectionManager = uiSession.extensionContext.selectionManager;
        let rotation = this.getClipboardRotationFromDropdownIndex(this.settings.rotationIndex);
        let bounds;
        if (!selectionManager.selection.isEmpty) {
            bounds = selectionManager.selection.boundingBox;
        }
        else {
            const cursorPosition = uiSession.extensionContext.cursor.position;
            const clipboardSize = uiSession.extensionContext.clipboardManager.clipboard.size;
            bounds = new editor.BoundingBox(cursorPosition.x, cursorPosition.y, cursorPosition.z, cursorPosition.x + clipboardSize.x, cursorPosition.y + clipboardSize.y, cursorPosition.z + clipboardSize.z);
            this.settings.rotationIndex = 0;
            rotation = editor.ClipboardRotation.none;
        }
        switch (rotation) {
            case editor.ClipboardRotation.none: {
                this.pastePreviewLocation = bounds.min;
                break;
            }
            case editor.ClipboardRotation.Rotate90: {
                this.pastePreviewLocation = { x: bounds.max.x, y: bounds.min.y, z: bounds.min.z };
                break;
            }
            case editor.ClipboardRotation.Rotate180: {
                this.pastePreviewLocation = { x: bounds.max.x, y: bounds.min.y, z: bounds.max.z };
                break;
            }
            case editor.ClipboardRotation.Rotate270: {
                this.pastePreviewLocation = { x: bounds.min.x, y: bounds.min.y, z: bounds.max.z };
                break;
            }
            default: {
                console.error('Unknown Rotation, unable to paste.');
                return;
            }
        }
    }
    generateWriteOptions(settings) {
        const writeOptions = new editor.ClipboardWriteOptions();
        writeOptions.rotation = this.getClipboardRotationFromDropdownIndex(this.settings.rotationIndex);
        if (settings.mirrorX) {
            if (settings.mirrorZ) {
                writeOptions.mirror = editor.ClipboardMirrorAxis.XZ;
            }
            else {
                writeOptions.mirror = editor.ClipboardMirrorAxis.X;
            }
        }
        else if (settings.mirrorZ) {
            writeOptions.mirror = editor.ClipboardMirrorAxis.Z;
        }
        writeOptions.anchor = { x: -1, y: -1, z: -1 };
        writeOptions.offset = { x: settings.origin.x, y: settings.origin.y, z: settings.origin.z };
        return writeOptions;
    }
    updateSelectionPreview(extensionContext) {
        const writeOptions = this.generateWriteOptions(this.settings);
        const clipboardManager = extensionContext.clipboardManager;
        this.selectionPreview.copyFrom(clipboardManager.clipboard.getPredictedWriteAsSelection(this.pastePreviewLocation, writeOptions));
    }
    movePreviewToPlayer(extensionContext) {
        this.pastePreviewLocation = findPasteTarget(extensionContext.player);
        this.updateSelectionPreview(extensionContext);
    }
    movePreviewToRay(extensionContext, ray) {
        this.pastePreviewLocation = findPasteTarget(extensionContext.player, ray);
        this.updateSelectionPreview(extensionContext);
    }
    movePreview(extensionContext, offset) {
        this.pastePreviewLocation = {
            x: this.pastePreviewLocation.x + offset.x,
            y: this.pastePreviewLocation.y + offset.y,
            z: this.pastePreviewLocation.z + offset.z,
        };
        this.updateSelectionPreview(extensionContext);
    }
    getClipboardRotationFromDropdownIndex(index) {
        if (index < 0 || index >= this.rotationLookup.length) {
            console.error('Unexpected rotation index, unable to convert to clipboard rotation.');
            return this.rotationLookup[0];
        }
        return this.rotationLookup[index % this.rotationLookup.length];
    }
}
// Potential Utility Candidates
const directionLookup = [
    { x: 0, y: 0, z: 1 },
    { x: -1, y: 0, z: 0 },
    { x: 0, y: 0, z: -1 },
    { x: 1, y: 0, z: 0 },
];
function getAxisAlignedDirection(rotation) {
    // 405 is the amount to do a full circle to remove negative rotations
    // Plus 45° to put the end of the first quadrant at 45 degrees.
    // Modulo to lock to [0, 360], then divide to convert to [0, 1, 2, 3] indices
    const directionQuadrant = Math.floor(((rotation + 405) % 360) / 90);
    return directionLookup[directionQuadrant];
}
function findPasteTarget(player, ray) {
    const raycastOptions = {
        includeLiquidBlocks: false,
        includePassableBlocks: true,
        maxDistance: 100,
    };
    const block = ray
        ? player.dimension.getBlockFromRay(ray.location, ray.direction, raycastOptions)
        : player.getBlockFromViewDirection(raycastOptions);
    let destination;
    if (block) {
        destination = block.location;
    }
    else {
        const headLocation = player.getHeadLocation();
        destination = { x: headLocation.x, y: headLocation.y, z: headLocation.z };
        const viewDirection = player.getViewDirection();
        destination.x = destination.x + viewDirection.x * 3;
        destination.y = destination.y + viewDirection.y * 3;
        destination.z = destination.z + viewDirection.z * 3;
    }
    return destination;
}


/***/ }),

/***/ "./src/extensions/functionality/Delete.ts":
/*!************************************************!*\
  !*** ./src/extensions/functionality/Delete.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteBehavior": () => (/* binding */ DeleteBehavior)
/* harmony export */ });
/* harmony import */ var editor = __webpack_require__(/*! @minecraft/server-editor */ "@minecraft/server-editor");
/* harmony import */ var _helpers_DeleteSelection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/DeleteSelection */ "./src/extensions/functionality/helpers/DeleteSelection.ts");


class DeleteBehavior {
    constructor(uiSession, coreMenuItems) {
        const deleteAction = uiSession.actionManager.createAction({
            actionType: editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                (0,_helpers_DeleteSelection__WEBPACK_IMPORTED_MODULE_1__.deleteOperation)(uiSession.extensionContext).catch(e => console.error(e));
            },
        });
        coreMenuItems.edit.addItem({ name: 'menuBar.edit.delete', displayStringLocId: (0,editor.getLocalizationId)('menuBar.edit.delete') }, deleteAction);
        uiSession.inputManager.registerKeyBinding(editor.EditorInputContext.GlobalEditor, deleteAction, editor.KeyboardKey.DELETE);
    }
    teardown() { }
}


/***/ }),

/***/ "./src/extensions/functionality/Selection.ts":
/*!***************************************************!*\
  !*** ./src/extensions/functionality/Selection.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectionBehavior": () => (/* binding */ SelectionBehavior)
/* harmony export */ });
/* harmony import */ var _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/editor-utilities */ "../../core/editor-utils/lib/index.js");
/* harmony import */ var _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @minecraft/server-editor */ "@minecraft/server-editor");
/* harmony import */ var _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @minecraft/server-wrapper */ "../../module-wrappers/server-wrapper/index.js");
// Imports



// ------------------------------------------------------------------------------------------------
// General collection of selection related variables for this instance
// ------------------------------------------------------------------------------------------------
var SelectionCursorMode;
(function (SelectionCursorMode) {
    SelectionCursorMode[SelectionCursorMode["Freeform"] = 0] = "Freeform";
    SelectionCursorMode[SelectionCursorMode["FixedDistance"] = 1] = "FixedDistance";
    SelectionCursorMode[SelectionCursorMode["AdjacentFace"] = 2] = "AdjacentFace";
})(SelectionCursorMode || (SelectionCursorMode = {}));
const Controls = {
    Up: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.KeyboardKey.PAGE_UP,
    Down: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.KeyboardKey.PAGE_DOWN,
    Forward: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.KeyboardKey.UP,
    Back: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.KeyboardKey.DOWN,
    Left: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.KeyboardKey.LEFT,
    Right: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.KeyboardKey.RIGHT,
    Select: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.KeyboardKey.ENTER,
    Clear: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.KeyboardKey.KEY_D,
};
const TicksRefreshRate = 5;
// ------------------------------------------------------------------------------------------------
class SelectionBehavior {
    get toolId() {
        return this.tool.id;
    }
    constructor(uiSession) {
        this.uiSession = uiSession;
        this.fnUnregisterToolBindings = () => {
            this.tool.unregisterInputBindings();
        };
        this.singleClick = (uiSession, mouseRay, shiftPressed, ctrlPressed, altPressed) => {
            const clickLoc = mouseRay.cursorBlockLocation;
            // Nothing pressed, then clear the stack and create a single 1x1x1
            if (!shiftPressed && !ctrlPressed && !altPressed) {
                uiSession.extensionContext.selectionManager.selection.clear();
                uiSession.extensionContext.selectionManager.selection.pushVolume(_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.SelectionBlockVolumeAction.add, new _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.BlockVolume(clickLoc, clickLoc));
                // Store this as the anchor point
                this.lastAnchorPosition = clickLoc;
            }
            // Shift pressed, an no volume exists - create a single 1x1x1
            //  if a volume does exist - use it to anchor the min corner and make a volume
            //  from anchor to new click
            else if (shiftPressed && !ctrlPressed && !altPressed) {
                if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                    // Create a new 1x1x1 selection volume at the click position
                    uiSession.extensionContext.selectionManager.selection.pushVolume(_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.SelectionBlockVolumeAction.add, new _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.BlockVolume(clickLoc, clickLoc));
                    // Store this as the anchor point
                    this.lastAnchorPosition = clickLoc;
                }
                else {
                    // Use the last anchor point (i.e. the first click selection) as the
                    // corner for the new click, and defining a new volume area
                    const lastAnchorPosition = this.lastAnchorPosition;
                    uiSession.extensionContext.selectionManager.selection.popVolume();
                    const newVolume = new _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.BlockVolume(lastAnchorPosition, clickLoc);
                    uiSession.extensionContext.selectionManager.selection.pushVolume(_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.SelectionBlockVolumeAction.add, newVolume);
                }
            }
            // Control pressed and no volume exists - create a single 1x1x1
            //  If a volume exists, just push a new 1x1x1 to the stack
            else if (ctrlPressed && !shiftPressed && !altPressed) {
                uiSession.extensionContext.selectionManager.selection.pushVolume(_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.SelectionBlockVolumeAction.add, new _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.BlockVolume(clickLoc, clickLoc));
                // Store this as the anchor point
                this.lastAnchorPosition = clickLoc;
            }
            // If ALT is pressed, and there IS already a full volume, then we're going into 3-click volume
            // mode and we need to do some intersection calculations
            else if (altPressed && !shiftPressed && !ctrlPressed) {
                if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                    // Create a new 1x1x1 selection volume at the click position
                    uiSession.extensionContext.selectionManager.selection.pushVolume(_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.SelectionBlockVolumeAction.add, new _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.BlockVolume(clickLoc, clickLoc));
                    // Store this as the anchor point
                    this.lastAnchorPosition = clickLoc;
                }
                else {
                    const currentVolume = uiSession.extensionContext.selectionManager.selection.peekLastVolume;
                    const currentBounds = currentVolume.boundingBox;
                    const translatedRayLocation = _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.Vector.subtract(new _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.Vector(mouseRay.location.x, mouseRay.location.y, mouseRay.location.z), new _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.Vector(currentBounds.min.x, currentBounds.min.y, currentBounds.min.z));
                    const XYPlaneNormal = (0,_minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.getRelativeXYAxisAsNormal)(uiSession.extensionContext.player.getRotation().y);
                    const intersection = (0,_minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.intersectRayPlane)(translatedRayLocation, mouseRay.direction, XYPlaneNormal, 0);
                    if (intersection) {
                        const translatedIntersection = _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.Vector.add(intersection, new _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.Vector(currentBounds.min.x, currentBounds.min.y, currentBounds.min.z));
                        const newY = Math.ceil(translatedIntersection.y) - 1;
                        const newVolume = new _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.BlockVolume({ x: currentBounds.min.x, y: currentBounds.min.y, z: currentBounds.min.z }, { x: currentBounds.max.x, y: newY, z: currentBounds.max.z });
                        uiSession.extensionContext.selectionManager.selection.popVolume();
                        uiSession.extensionContext.selectionManager.selection.pushVolume(_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.SelectionBlockVolumeAction.add, newVolume);
                    }
                }
            }
        };
        this.moveTopSelection = (uiSession, lastAnchor, direction) => {
            if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                return undefined;
            }
            const lastVolume = uiSession.extensionContext.selectionManager.selection.peekLastVolume;
            uiSession.extensionContext.selectionManager.selection.popVolume();
            const rotationY = uiSession.extensionContext.player.getRotation().y;
            const correctedVector = (0,_minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.getRotationCorrectedDirectionVector)(rotationY, direction);
            const newVolume = lastVolume.offset({ x: correctedVector.x, y: correctedVector.y, z: correctedVector.z });
            uiSession.extensionContext.selectionManager.selection.pushVolume(_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.SelectionBlockVolumeAction.add, newVolume);
            // Update the last cursor click position with the move vector
            // so that extend-click operations work correctly with the new corner position
            const updatedClick = {
                x: lastAnchor.x + correctedVector.x,
                y: lastAnchor.y + correctedVector.y,
                z: lastAnchor.z + correctedVector.z,
            };
            return updatedClick;
        };
        this.moveBlockCursorManually = (uiSession, direction) => {
            const rotationY = uiSession.extensionContext.player.getRotation().y;
            const rotationCorrectedVector = (0,_minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.getRotationCorrectedDirectionVector)(rotationY, direction);
            uiSession.extensionContext.cursor.moveBy(rotationCorrectedVector);
        };
        this.moveAllSelections = (uiSession, anchorPosition, direction) => {
            if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                return undefined;
            }
            const rotationY = uiSession.extensionContext.player.getRotation().y;
            const correctedVector = (0,_minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.getRotationCorrectedDirectionVector)(rotationY, direction);
            uiSession.extensionContext.selectionManager.selection.moveBy({
                x: correctedVector.x,
                y: correctedVector.y,
                z: correctedVector.z,
            });
            const updatedClick = {
                x: anchorPosition.x + correctedVector.x,
                y: anchorPosition.y + correctedVector.y,
                z: anchorPosition.z + correctedVector.z,
            };
            return updatedClick;
        };
        this.shrinkVolume = (uiSession, direction) => {
            if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                return;
            }
            const lastVolume = uiSession.extensionContext.selectionManager.selection.peekLastVolume;
            uiSession.extensionContext.selectionManager.selection.popVolume();
            const rotationY = uiSession.extensionContext.player.getRotation().y;
            const newVolume = (0,_minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.shrinkVolumeAlongViewAxis)(lastVolume, rotationY, direction, 1);
            uiSession.extensionContext.selectionManager.selection.pushVolume(_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.SelectionBlockVolumeAction.add, newVolume);
        };
        this.growVolume = (uiSession, direction) => {
            if (uiSession.extensionContext.selectionManager.selection.isEmpty) {
                return;
            }
            const lastVolume = uiSession.extensionContext.selectionManager.selection.peekLastVolume;
            uiSession.extensionContext.selectionManager.selection.popVolume();
            const rotationY = uiSession.extensionContext.player.getRotation().y;
            const newVolume = (0,_minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.growVolumeAlongViewAxis)(lastVolume, rotationY, direction, 1);
            uiSession.extensionContext.selectionManager.selection.pushVolume(_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.SelectionBlockVolumeAction.add, newVolume);
        };
        // Input and tool binding functions
        // ------------------------------------------------------------------------------------------------
        this.bindToolInput = (uiSession) => {
            // Bind Single Mouse Click
            const singleClickAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.MouseRayCastAction,
                onExecute: (mouseRay, mouseProps) => {
                    if (mouseProps.mouseAction === _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.MouseActionType.LeftButton) {
                        if (mouseProps.inputType === _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.MouseInputType.ButtonDown) {
                            if (mouseRay.rayHit || this.toolCursorState.controlMode === _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.CursorControlMode.Fixed) {
                                this.singleClick(uiSession, mouseRay, mouseProps.modifiers.shift, mouseProps.modifiers.ctrl, mouseProps.modifiers.alt);
                            }
                            else {
                                // If we're clicking on nothing or something too far away - clear the selection stack
                                uiSession.extensionContext.selectionManager.selection.clear();
                            }
                        }
                        else if (mouseProps.inputType === _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.MouseInputType.ButtonUp) {
                            // do nothing
                        }
                    }
                },
            });
            this.tool.registerMouseButtonBinding(singleClickAction);
            // Bind Keyboard MOVE functions
            const keyUpAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.extensionContext.cursor.moveBy(_minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.Vector.up);
                },
            });
            const keyDownAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.extensionContext.cursor.moveBy(_minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.Vector.down);
                },
            });
            const keyLeftAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.moveBlockCursorManually(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Left);
                },
            });
            const keyRightAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.moveBlockCursorManually(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Right);
                },
            });
            const keyForwardAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.moveBlockCursorManually(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Forward);
                },
            });
            const keyBackAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.moveBlockCursorManually(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Back);
                },
            });
            // Bind arrow keys to manual cursor control
            this.tool.registerKeyBinding(keyForwardAction, Controls.Forward, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.None);
            this.tool.registerKeyBinding(keyBackAction, Controls.Back, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.None);
            this.tool.registerKeyBinding(keyLeftAction, Controls.Left, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.None);
            this.tool.registerKeyBinding(keyRightAction, Controls.Right, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.None);
            this.tool.registerKeyBinding(keyUpAction, Controls.Up, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.None);
            this.tool.registerKeyBinding(keyDownAction, Controls.Down, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.None);
            const mouseWheelAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.MouseRayCastAction,
                onExecute: (mouseRay, mouseProps) => {
                    if (mouseProps.inputType === _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.MouseInputType.WheelOut) {
                        if (mouseProps.modifiers.shift) {
                            this.growVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Left);
                            this.growVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Right);
                        }
                        else if (mouseProps.modifiers.ctrl) {
                            this.growVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Forward);
                            this.growVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Back);
                        }
                        else if (mouseProps.modifiers.alt) {
                            this.growVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Up);
                            this.growVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Down);
                        }
                        else if (this.toolCursorState.controlMode === _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.CursorControlMode.Fixed) {
                            uiSession.extensionContext.cursor.moveBy(_minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.Vector.forward);
                        }
                    }
                    else if (mouseProps.inputType === _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.MouseInputType.WheelIn) {
                        if (mouseProps.modifiers.shift) {
                            this.shrinkVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Left);
                            this.shrinkVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Right);
                        }
                        else if (mouseProps.modifiers.ctrl) {
                            this.shrinkVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Forward);
                            this.shrinkVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Back);
                        }
                        else if (mouseProps.modifiers.alt) {
                            this.shrinkVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Up);
                            this.shrinkVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Down);
                        }
                        else if (this.toolCursorState.controlMode === _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.CursorControlMode.Fixed) {
                            uiSession.extensionContext.cursor.moveBy(_minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.Vector.back);
                        }
                    }
                },
            });
            this.tool.registerMouseWheelBinding(mouseWheelAction);
            // Bind ARROWS+ALT for MOVE selection volume (single)
            // -----------------------------------------
            const moveSelectionUpAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Up);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveSelectionDownAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Down);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveSelectionLeftAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Left);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveSelectionRightAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Right);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveSelectionForwardAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Forward);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveSelectionBackAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveTopSelection(uiSession, this.lastAnchorPosition, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Back);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            // Bind arrow keys to manual cursor control
            this.tool.registerKeyBinding(moveSelectionForwardAction, Controls.Forward, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Alt);
            this.tool.registerKeyBinding(moveSelectionBackAction, Controls.Back, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Alt);
            this.tool.registerKeyBinding(moveSelectionLeftAction, Controls.Left, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Alt);
            this.tool.registerKeyBinding(moveSelectionRightAction, Controls.Right, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Alt);
            this.tool.registerKeyBinding(moveSelectionUpAction, Controls.Up, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Alt);
            this.tool.registerKeyBinding(moveSelectionDownAction, Controls.Down, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Alt);
            // Bind ARROWS+ALT+CTRL to move ALL selections
            const moveAllSelectionUpAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Up);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveAllSelectionDownAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Down);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveAllSelectionLeftAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Left);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveAllSelectionRightAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Right);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveAllSelectionForwardAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Forward);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            const moveAllSelectionBackAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const updatedAnchor = this.moveAllSelections(uiSession, this.lastAnchorPosition, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Back);
                    if (updatedAnchor) {
                        this.lastAnchorPosition = updatedAnchor;
                    }
                },
            });
            this.tool.registerKeyBinding(moveAllSelectionForwardAction, Controls.Forward, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Alt | _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Control);
            this.tool.registerKeyBinding(moveAllSelectionBackAction, Controls.Back, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Alt | _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Control);
            this.tool.registerKeyBinding(moveAllSelectionLeftAction, Controls.Left, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Alt | _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Control);
            this.tool.registerKeyBinding(moveAllSelectionRightAction, Controls.Right, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Alt | _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Control);
            this.tool.registerKeyBinding(moveAllSelectionUpAction, Controls.Up, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Alt | _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Control);
            this.tool.registerKeyBinding(moveAllSelectionDownAction, Controls.Down, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Alt | _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Control);
            // Bind ENTER (+CTRL +SHIFT) to select (same as single click with mouse)
            const keySelectAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const blockLocation = uiSession.extensionContext.cursor.position;
                    const ray = {
                        location: { x: 0, y: 0, z: 0 },
                        direction: new _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.Vector(0, 0, 0),
                        cursorBlockLocation: blockLocation,
                        rayHit: false,
                    };
                    this.singleClick(uiSession, ray, false, false, false);
                },
            });
            this.tool.registerKeyBinding(keySelectAction, Controls.Select, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.None);
            const keySelectMultipleAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const blockLocation = uiSession.extensionContext.cursor.position;
                    const ray = {
                        location: { x: 0, y: 0, z: 0 },
                        direction: new _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.Vector(0, 0, 0),
                        cursorBlockLocation: blockLocation,
                        rayHit: false,
                    };
                    this.singleClick(uiSession, ray, false, true, false);
                },
            });
            this.tool.registerKeyBinding(keySelectMultipleAction, Controls.Select, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Control);
            const keySelectAndExtendAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    const blockLocation = uiSession.extensionContext.cursor.position;
                    const ray = {
                        location: { x: 0, y: 0, z: 0 },
                        direction: new _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.Vector(0, 0, 0),
                        cursorBlockLocation: blockLocation,
                        rayHit: false,
                    };
                    this.singleClick(uiSession, ray, true, false, false);
                },
            });
            this.tool.registerKeyBinding(keySelectAndExtendAction, Controls.Select, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Shift);
            // Bind ARROW+SHIFT
            const keyGrowUpAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.growVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Up);
                },
            });
            this.tool.registerKeyBinding(keyGrowUpAction, Controls.Up, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Shift);
            const keyGrowDownAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.growVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Down);
                },
            });
            this.tool.registerKeyBinding(keyGrowDownAction, Controls.Down, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Shift);
            const keyGrowForwardAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.growVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Forward);
                },
            });
            this.tool.registerKeyBinding(keyGrowForwardAction, Controls.Forward, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Shift);
            const keyGrowBackAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.growVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Back);
                },
            });
            this.tool.registerKeyBinding(keyGrowBackAction, Controls.Back, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Shift);
            const keyGrowLeftAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.growVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Left);
                },
            });
            this.tool.registerKeyBinding(keyGrowLeftAction, Controls.Left, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Shift);
            const keyGrowRightAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.growVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Right);
                },
            });
            this.tool.registerKeyBinding(keyGrowRightAction, Controls.Right, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Shift);
            // Bind ARROW+CTRL
            const keyShrinkUpAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.shrinkVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Up);
                },
            });
            this.tool.registerKeyBinding(keyShrinkUpAction, Controls.Up, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Control);
            const keyShrinkDownAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.shrinkVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Down);
                },
            });
            this.tool.registerKeyBinding(keyShrinkDownAction, Controls.Down, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Control);
            const keyShrinkForwardAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.shrinkVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Forward);
                },
            });
            this.tool.registerKeyBinding(keyShrinkForwardAction, Controls.Forward, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Control);
            const keyShrinkBackAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.shrinkVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Back);
                },
            });
            this.tool.registerKeyBinding(keyShrinkBackAction, Controls.Back, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Control);
            const keyShrinkLeftAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.shrinkVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Left);
                },
            });
            this.tool.registerKeyBinding(keyShrinkLeftAction, Controls.Left, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Control);
            const keyShrinkRightAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    this.shrinkVolume(uiSession, _minecraft_editor_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.Right);
                },
            });
            this.tool.registerKeyBinding(keyShrinkRightAction, Controls.Right, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Control);
        };
        this.onTickRefresh = (uiSession, tool) => {
            let ticks = 0;
            this.tickRefreshHandle = _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.system.run(() => {
                if (uiSession.extensionContext.selectionManager === undefined) {
                    return;
                }
                if (!this.settingsObject) {
                    console.error('Pane settings object not defined, unable to refresh values for selection.');
                    return;
                }
                if (ticks++ % TicksRefreshRate === 0) {
                    ticks = 0;
                    let x = 0, y = 0, z = 0;
                    let sx = 0, sy = 0, sz = 0;
                    const selection = uiSession.extensionContext.selectionManager.selection;
                    if (selection && !selection.isEmpty) {
                        const bounds = selection.peekLastVolume.boundingBox;
                        x = bounds.min.x;
                        y = bounds.min.y;
                        z = bounds.min.z;
                        sx = bounds.spanX;
                        sy = bounds.spanY;
                        sz = bounds.spanZ;
                        if (!this.originPropertyItem?.enable) {
                            if (this.originPropertyItem) {
                                this.originPropertyItem.enable = true;
                            }
                        }
                        if (!this.sizePropertyItem?.enable) {
                            if (this.sizePropertyItem) {
                                this.sizePropertyItem.enable = true;
                            }
                        }
                    }
                    else {
                        if (this.originPropertyItem?.enable) {
                            if (this.originPropertyItem) {
                                this.originPropertyItem.enable = false;
                            }
                        }
                        if (this.sizePropertyItem?.enable) {
                            if (this.sizePropertyItem) {
                                this.sizePropertyItem.enable = false;
                            }
                        }
                    }
                    // If our current selection object settings
                    if (this.settingsObject.origin.x !== x ||
                        this.settingsObject.origin.y !== y ||
                        this.settingsObject.origin.z !== z ||
                        this.settingsObject.size.x !== sx ||
                        this.settingsObject.size.y !== sy ||
                        this.settingsObject.size.z !== sz) {
                        this.settingsObject.origin.x = Math.trunc(x);
                        this.settingsObject.origin.y = Math.trunc(y);
                        this.settingsObject.origin.z = Math.trunc(z);
                        this.settingsObject.size.x = Math.trunc(sx);
                        this.settingsObject.size.y = Math.trunc(sy);
                        this.settingsObject.size.z = Math.trunc(sz);
                    }
                }
                if (uiSession.toolRail.selectedOptionId === tool.id) {
                    this.tickRefreshHandle = _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.system.run(() => this.onTickRefresh(uiSession, tool));
                }
            });
        };
        // Add a settings pane for the modal Tool
        this.addSettingsPane = (uiSession) => {
            this.pane.addDropdown(this.settingsObject, 'selectionMode', {
                titleStringId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('selectionTool.selectionMode'),
                titleAltText: 'Mode',
                enable: true,
                dropdownItems: [
                    {
                        displayAltText: 'Freeform',
                        displayStringId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('selectionTool.selectionMode.mouseAndKeyboard'),
                        value: SelectionCursorMode.Freeform,
                    },
                    {
                        displayAltText: 'Fixed Distance',
                        displayStringId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('selectionTool.selectionMode.fixedDistance'),
                        value: SelectionCursorMode.FixedDistance,
                    },
                    {
                        displayAltText: 'Adjacent Face',
                        displayStringId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('selectionTool.selectionMode.adjacent'),
                        value: SelectionCursorMode.AdjacentFace,
                    },
                ],
                onChange: (_obj, _property, _oldValue, _newValue) => {
                    const oldVal = _oldValue;
                    const newVal = _newValue;
                    let cursorControlMode = _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.CursorControlMode.KeyboardAndMouse;
                    let cursorTargetMode = _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.CursorTargetMode.Block;
                    if (oldVal !== newVal) {
                        switch (newVal) {
                            case SelectionCursorMode.Freeform:
                                cursorControlMode = _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.CursorControlMode.KeyboardAndMouse;
                                cursorTargetMode = _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.CursorTargetMode.Block;
                                break;
                            case SelectionCursorMode.FixedDistance:
                                cursorControlMode = _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.CursorControlMode.Fixed;
                                cursorTargetMode = _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.CursorTargetMode.Block;
                                break;
                            case SelectionCursorMode.AdjacentFace:
                                cursorControlMode = _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.CursorControlMode.KeyboardAndMouse;
                                cursorTargetMode = _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.CursorTargetMode.Face;
                                break;
                            default:
                                console.error(`Unknown value from selection mode drop-down`);
                                return;
                        }
                        this.toolCursorState = uiSession.extensionContext.cursor.getState();
                        this.toolCursorState.controlMode = cursorControlMode;
                        this.toolCursorState.targetMode = cursorTargetMode;
                        uiSession.extensionContext.cursor.setState(this.toolCursorState);
                    }
                },
            });
            const onOriginOrSizeChange = (_obj, _property, _oldValue, _newValue) => {
                if (_oldValue === _newValue) {
                    return;
                }
                const selection = uiSession.extensionContext.selectionManager.selection;
                if (!selection.isEmpty) {
                    const lastVolume = selection.peekLastVolume;
                    if (lastVolume) {
                        const min = {
                            x: this.settingsObject.origin.x,
                            y: this.settingsObject.origin.y,
                            z: this.settingsObject.origin.z,
                        };
                        const max = {
                            x: this.settingsObject.origin.x + this.settingsObject.size.x - 1,
                            y: this.settingsObject.origin.y + this.settingsObject.size.y - 1,
                            z: this.settingsObject.origin.z + this.settingsObject.size.z - 1,
                        };
                        const newVolume = new _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.BlockVolume(min, max);
                        selection.popVolume();
                        selection.pushVolume(_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.SelectionBlockVolumeAction.add, newVolume);
                    }
                }
            };
            const subPaneTransform = this.pane.createPropertyPane({
                titleStringId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('selectionTool.transformPane.title'),
                titleAltText: 'Transform',
            });
            this.originPropertyItem = subPaneTransform.addVec3(this.settingsObject, 'origin', {
                titleStringId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('selectionTool.transformPane.origin'),
                titleAltText: 'Origin',
                enable: true,
                minX: Number.MIN_SAFE_INTEGER,
                minY: Number.MIN_SAFE_INTEGER,
                minZ: Number.MIN_SAFE_INTEGER,
                onChange: onOriginOrSizeChange,
            });
            this.sizePropertyItem = subPaneTransform.addVec3(this.settingsObject, 'size', {
                titleStringId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('selectionTool.transformPane.size'),
                titleAltText: 'Size',
                enable: true,
                minX: 1,
                minY: 1,
                minZ: 1,
                maxX: 100,
                maxY: 100,
                maxZ: 100,
                onChange: onOriginOrSizeChange,
            });
            // Fill
            const subPaneFill = this.pane.createPropertyPane({
                titleStringId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('selectionTool.fillPane.title'),
                titleAltText: 'Fill Selection',
            });
            subPaneFill.addBlockPicker(this.settingsObject, 'block', {
                titleStringId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('selectionTool.fillPane.blockType'),
                titleAltText: 'Block Type',
            });
            subPaneFill.addButtonAndBindAction(this.executeFillAction, {
                titleStringId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('selectionTool.fillPane.fillAction'),
                titleAltText: 'Fill Selection',
            });
            this.pane.addDivider();
            // CTRL+D
            const actionClearSelection = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.extensionContext.selectionManager.selection.clear();
                },
            });
            this.pane.addButtonAndBindAction(actionClearSelection, {
                titleStringId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('selectionTool.deselect'),
                titleAltText: 'Deselect',
                variant: 'secondary',
            });
            this.tool.bindPropertyPane(this.pane);
        };
        // Add a modal tool to the tool rail and set up an activation subscription to set/unset the cursor states
        this.addTool = (uiSession) => {
            const tool = uiSession.toolRail.addTool({
                displayString: 'Selection (CTRL + S)',
                displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('selectionTool.toolRail.title'),
                icon: 'pack://textures/editor/marquee.png?filtering=point',
                tooltip: 'Selection Tool',
                tooltipLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('selectionTool.toolRail.description'),
            });
            tool.onModalToolActivation.subscribe((eventData) => {
                if (eventData.isActiveTool) {
                    uiSession.extensionContext.cursor.setState(this.toolCursorState);
                    // Start refreshing the position
                    this.onTickRefresh(uiSession, tool);
                }
            });
            return tool;
        };
        // Bind the tool activation to a keypress on a global level
        this.bindGlobalActivationShortcut = (uiSession, storage) => {
            const toggleAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.toolRail.setSelectedOptionId(this.tool.id, true);
                },
            });
            const deselectAction = uiSession.actionManager.createAction({
                actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
                onExecute: () => {
                    uiSession.extensionContext.selectionManager.selection.clear();
                },
            });
            uiSession.inputManager.registerKeyBinding(_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.EditorInputContext.GlobalEditor, toggleAction, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.KeyboardKey.KEY_S, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Control);
            uiSession.inputManager.registerKeyBinding(_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.EditorInputContext.GlobalToolMode, this.executeFillAction, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.KeyboardKey.KEY_F, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Control);
            uiSession.inputManager.registerKeyBinding(_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.EditorInputContext.GlobalEditor, deselectAction, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.KeyboardKey.KEY_D, _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.InputModifier.Control);
            storage.coreMenuItems?.edit.addItem({ name: 'menuBar.edit.quickFill', displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.edit.quickFill') }, this.executeFillAction);
            storage.coreMenuItems?.edit.addItem({ name: 'menuBar.edit.deselect', displayStringLocId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('menuBar.edit.deselect') }, deselectAction);
        };
        this.performFillOperation = async (context, fillType) => {
            const player = context.player;
            const dimension = player.dimension;
            if (context.selectionManager.selection.isEmpty) {
                // Need a better way to surface errors and warnings to the user - this only prints to the
                // chat window, so if it's not open - you don't see it
                player.sendMessage('No selection available to fill');
                return;
            }
            context.transactionManager.openTransaction('Select-Fill');
            const bounds = context.selectionManager.selection.boundingBox;
            context.transactionManager.trackBlockChangeArea(bounds.min, bounds.max);
            await (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.executeLargeOperation)(context.selectionManager.selection, (blockLocation) => {
                const block = dimension.getBlock(blockLocation);
                if (block) {
                    block.isWaterlogged = false;
                    block.setType(fillType);
                }
            })
                .catch(e => {
                console.error(e);
                context.transactionManager.discardOpenTransaction();
            })
                .then(() => {
                context.transactionManager.commitOpenTransaction();
            });
        };
        const storage = uiSession.scratchStorage;
        if (!storage) {
            throw new Error('Can not instantiate Selection functionality without valid CoreEditor storage.');
        }
        // Add the tool to the tool rail
        this.tool = this.addTool(uiSession);
        // Create pane.
        this.pane = uiSession.createPropertyPane({
            titleStringId: (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.getLocalizationId)('selectionTool.settingsPane.title'),
            titleAltText: 'Selection',
        });
        // Here is the binding created.
        this.settingsObject = (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.createPaneBindingObject)(this.pane, {
            selectionMode: SelectionCursorMode.Freeform,
            origin: { x: 0, y: 0, z: 0 },
            size: { x: 0, y: 0, z: 0 },
            block: _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.MinecraftBlockTypes.stone,
        });
        // This is the initial cursor state for Selection
        this.toolCursorState = uiSession.extensionContext.cursor.getState();
        this.toolCursorState.color = { red: 1, green: 1, blue: 0, alpha: 1 }; // Yellow
        this.toolCursorState.controlMode = _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.CursorControlMode.KeyboardAndMouse;
        this.toolCursorState.targetMode = _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.CursorTargetMode.Block;
        this.toolCursorState.visible = true;
        this.lastAnchorPosition = { x: 0, y: 0, z: 0 };
        this.executeFillAction = uiSession.actionManager.createAction({
            actionType: _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction,
            onExecute: () => {
                this.performFillOperation(uiSession.extensionContext, this.settingsObject.block).catch(e => console.error(e));
            },
        });
        // Add a settings pane for options
        this.addSettingsPane(uiSession);
        // bind mouse actions
        this.bindToolInput(uiSession);
        // We want global activation, so bind it into a keypress
        this.bindGlobalActivationShortcut(uiSession, storage);
        uiSession.toolRail.setSelectedOptionId(this.tool.id, true);
    }
    teardown() {
        // Shutdown
        console.log('Shutting down minecraft::selection behavior\n');
        if (this.tickRefreshHandle !== undefined) {
            _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.system.clearRun(this.tickRefreshHandle);
            this.tickRefreshHandle = undefined;
        }
        this.fnUnregisterToolBindings();
        // If we're doing a /reload - clear the selection
        this.uiSession.extensionContext.selectionManager.selection.clear();
    }
}


/***/ }),

/***/ "./src/extensions/functionality/Transactions.ts":
/*!******************************************************!*\
  !*** ./src/extensions/functionality/Transactions.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UndoRedoBehavior": () => (/* binding */ UndoRedoBehavior)
/* harmony export */ });
/* harmony import */ var editor = __webpack_require__(/*! @minecraft/server-editor */ "@minecraft/server-editor");

class UndoRedoBehavior {
    constructor(uiSession, coreMenuItems) {
        // Set actions
        const undoAction = uiSession.actionManager.createAction({
            actionType: editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                uiSession.extensionContext.transactionManager.undo();
            },
        });
        const redoAction = uiSession.actionManager.createAction({
            actionType: editor.ActionTypes.NoArgsAction,
            onExecute: () => {
                uiSession.extensionContext.transactionManager.redo();
            },
        });
        // Add actions to menu
        coreMenuItems.edit.addItem({ name: 'menuBar.edit.undo', displayStringLocId: (0,editor.getLocalizationId)('menuBar.edit.undo') }, undoAction);
        coreMenuItems.edit.addItem({ name: 'menuBar.edit.redo', displayStringLocId: (0,editor.getLocalizationId)('menuBar.edit.redo') }, redoAction);
        // Create key bindings
        uiSession.inputManager.registerKeyBinding(editor.EditorInputContext.GlobalEditor, undoAction, editor.KeyboardKey.KEY_Z, editor.InputModifier.Control);
        uiSession.inputManager.registerKeyBinding(editor.EditorInputContext.GlobalEditor, redoAction, editor.KeyboardKey.KEY_Y, editor.InputModifier.Control);
    }
    teardown() { }
}


/***/ }),

/***/ "./src/extensions/functionality/helpers/DeleteSelection.ts":
/*!*****************************************************************!*\
  !*** ./src/extensions/functionality/helpers/DeleteSelection.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteOperation": () => (/* binding */ deleteOperation)
/* harmony export */ });
/* harmony import */ var _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/server-wrapper */ "../../module-wrappers/server-wrapper/index.js");
/* harmony import */ var _minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @minecraft/server-editor */ "@minecraft/server-editor");


async function deleteOperation(context) {
    if (context.selectionManager.selection.isEmpty) {
        console.log('selection volume is empty - nothing to clear');
        return;
    }
    context.transactionManager.openTransaction('Delete');
    context.transactionManager.trackBlockChangeSelection(context.selectionManager.selection);
    const player = context.player;
    const dimension = player.dimension;
    await (0,_minecraft_server_editor__WEBPACK_IMPORTED_MODULE_1__.executeLargeOperation)(context.selectionManager.selection, (blockLocation) => {
        const block = dimension.getBlock(blockLocation);
        if (block) {
            block.isWaterlogged = false;
            block.setType(_minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.MinecraftBlockTypes.air);
        }
    })
        .catch(e => {
        console.error(e);
        context.transactionManager.discardOpenTransaction();
    })
        .then(() => {
        context.transactionManager.commitOpenTransaction();
    });
}


/***/ }),

/***/ "@minecraft/server":
/*!************************************!*\
  !*** external "@minecraft/server" ***!
  \************************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__;

/***/ }),

/***/ "@minecraft/server-editor":
/*!*******************************************!*\
  !*** external "@minecraft/server-editor" ***!
  \*******************************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_81aed4a5__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extensions_Grapple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extensions/Grapple */ "./src/extensions/Grapple.ts");
/* harmony import */ var _extensions_CoreEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extensions/CoreEditor */ "./src/extensions/CoreEditor.ts");
/* harmony import */ var _extensions_PlayerPosition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extensions/PlayerPosition */ "./src/extensions/PlayerPosition.ts");
/* harmony import */ var _extensions_CubeBrush__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extensions/CubeBrush */ "./src/extensions/CubeBrush.ts");




(0,_extensions_CoreEditor__WEBPACK_IMPORTED_MODULE_1__.registerCoreEditorExtension)();
(0,_extensions_PlayerPosition__WEBPACK_IMPORTED_MODULE_2__.registerPlayerPositionExtension)();
(0,_extensions_Grapple__WEBPACK_IMPORTED_MODULE_0__.registerGrappleExtension)();
(0,_extensions_CubeBrush__WEBPACK_IMPORTED_MODULE_3__.registerCubeBrushExtension)();

})();

