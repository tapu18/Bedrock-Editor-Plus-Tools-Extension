import * as __WEBPACK_EXTERNAL_MODULE__minecraft_server_fb7572af__ from "@minecraft/server";
import * as __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_bindings_e2bf1028__ from "@minecraft/server-editor-bindings";
/******/ var __webpack_modules__ = ({

/***/ "../core-utilities/lib/Event/EventSink.js":
/*!************************************************!*\
  !*** ../core-utilities/lib/Event/EventSink.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=EventSink.js.map

/***/ }),

/***/ "../core-utilities/lib/Event/EventSinkImpl.js":
/*!****************************************************!*\
  !*** ../core-utilities/lib/Event/EventSinkImpl.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventSinkImpl": () => (/* binding */ EventSinkImpl)
/* harmony export */ });
class EventToken {
    constructor(_event) {
        this._event = _event;
    }
    unsubscribe() {
        this._event.unsubscribe(this);
    }
}
/**
 * Implementation of a simple event sink. Takes a handler with a payload T and provides
 * a mechanism to subscribe from the public interface. Holding a reference to the class
 * provides the mechanism for triggering listeners. Super simple at the moment, can be
 * expanded to support notifications on listeners being added, unsubscribe all, or targeted
 * events if needed.
 *
 * @internal
 */
class EventSinkImpl {
    constructor() {
        this.handlers = new Map();
    }
    subscribe(handler) {
        const token = new EventToken(this);
        this.handlers.set(token, handler);
        return token;
    }
    unsubscribe(token) {
        this.handlers.delete(token);
    }
    trigger(eventArg) {
        this.handlers.forEach(handler => handler(eventArg));
    }
}
//# sourceMappingURL=EventSinkImpl.js.map

/***/ }),

/***/ "../core-utilities/lib/Event/EventToken.js":
/*!*************************************************!*\
  !*** ../core-utilities/lib/Event/EventToken.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=EventToken.js.map

/***/ }),

/***/ "../core-utilities/lib/Event/index.js":
/*!********************************************!*\
  !*** ../core-utilities/lib/Event/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventSinkImpl": () => (/* reexport safe */ _EventSinkImpl__WEBPACK_IMPORTED_MODULE_1__.EventSinkImpl)
/* harmony export */ });
/* harmony import */ var _EventSink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventSink */ "../core-utilities/lib/Event/EventSink.js");
/* harmony import */ var _EventSinkImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventSinkImpl */ "../core-utilities/lib/Event/EventSinkImpl.js");
/* harmony import */ var _EventToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventToken */ "../core-utilities/lib/Event/EventToken.js");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../core-utilities/lib/Exceptions/StringFromException.js":
/*!***************************************************************!*\
  !*** ../core-utilities/lib/Exceptions/StringFromException.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringFromException": () => (/* binding */ stringFromException)
/* harmony export */ });
/**
 * Small utility for getting a string from an unknown exception type
 * @internal
 */
function stringFromException(e) {
    if (typeof e === 'string') {
        return e;
        // eslint-disable-next-line unicorn/no-null
    }
    else if (typeof e === 'object' && e !== null && 'message' in e) {
        return e.message;
    }
    return 'Unknown exception';
}
//# sourceMappingURL=StringFromException.js.map

/***/ }),

/***/ "../core-utilities/lib/Exceptions/index.js":
/*!*************************************************!*\
  !*** ../core-utilities/lib/Exceptions/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringFromException": () => (/* reexport safe */ _StringFromException__WEBPACK_IMPORTED_MODULE_0__.stringFromException)
/* harmony export */ });
/* harmony import */ var _StringFromException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StringFromException */ "../core-utilities/lib/Exceptions/StringFromException.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../core-utilities/lib/basic-guid/basicGuid.js":
/*!*****************************************************!*\
  !*** ../core-utilities/lib/basic-guid/basicGuid.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "guid": () => (/* binding */ guid)
/* harmony export */ });
/**
 * A rough mechanism for create a random GUID. Not as secure as uuid without as much of a guarantee of uniqueness,
 * but reasonable for non-secure and non-persistent use cases. It should be revisited in case it is possible to
 * support the crypto library in QuickJS.
 * @beta
 */
function guid() {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
//# sourceMappingURL=basicGuid.js.map

/***/ }),

/***/ "../core-utilities/lib/basic-guid/index.js":
/*!*************************************************!*\
  !*** ../core-utilities/lib/basic-guid/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "guid": () => (/* reexport safe */ _basicGuid__WEBPACK_IMPORTED_MODULE_0__.guid)
/* harmony export */ });
/* harmony import */ var _basicGuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicGuid */ "../core-utilities/lib/basic-guid/basicGuid.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../core-utilities/lib/general/index.js":
/*!**********************************************!*\
  !*** ../core-utilities/lib/general/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unreachable": () => (/* reexport safe */ _unreachable__WEBPACK_IMPORTED_MODULE_0__.unreachable)
/* harmony export */ });
/* harmony import */ var _unreachable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unreachable */ "../core-utilities/lib/general/unreachable.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../core-utilities/lib/general/unreachable.js":
/*!****************************************************!*\
  !*** ../core-utilities/lib/general/unreachable.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unreachable": () => (/* binding */ unreachable)
/* harmony export */ });
/**
 * An un-callable function. Used in cases where it is necessary to enforce at a type level that
 * conditional code should not be reached. Example usage is enforcing the default case is never hit
 * in an enum switch case, where every case statement may not return, but rather break.
 *
 * @param value - Value that does not accept any type
 * @beta
 */
function unreachable(value) {
    // Intentionally disable eslint rule as we need to find out what got past the type guard
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    throw new Error(`Unreachable throw hit! Passed in value is ${value}.`);
}
//# sourceMappingURL=unreachable.js.map

/***/ }),

/***/ "../core-utilities/lib/index.js":
/*!**************************************!*\
  !*** ../core-utilities/lib/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventSinkImpl": () => (/* reexport safe */ _Event__WEBPACK_IMPORTED_MODULE_3__.EventSinkImpl),
/* harmony export */   "guid": () => (/* reexport safe */ _basic_guid__WEBPACK_IMPORTED_MODULE_2__.guid),
/* harmony export */   "stringFromException": () => (/* reexport safe */ _Exceptions__WEBPACK_IMPORTED_MODULE_4__.stringFromException),
/* harmony export */   "unreachable": () => (/* reexport safe */ _general__WEBPACK_IMPORTED_MODULE_0__.unreachable)
/* harmony export */ });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "../core-utilities/lib/general/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../core-utilities/lib/types/index.js");
/* harmony import */ var _basic_guid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-guid */ "../core-utilities/lib/basic-guid/index.js");
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Event */ "../core-utilities/lib/Event/index.js");
/* harmony import */ var _Exceptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Exceptions */ "../core-utilities/lib/Exceptions/index.js");





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../core-utilities/lib/types/AssertExtends.js":
/*!****************************************************!*\
  !*** ../core-utilities/lib/types/AssertExtends.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=AssertExtends.js.map

/***/ }),

/***/ "../core-utilities/lib/types/index.js":
/*!********************************************!*\
  !*** ../core-utilities/lib/types/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AssertExtends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssertExtends */ "../core-utilities/lib/types/AssertExtends.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../editor-events/lib/Actions/ActionPrimitives.js":
/*!********************************************************!*\
  !*** ../editor-events/lib/Actions/ActionPrimitives.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputDevice": () => (/* binding */ InputDevice),
/* harmony export */   "InputModifier": () => (/* binding */ InputModifier),
/* harmony export */   "KeyInputType": () => (/* binding */ KeyInputType),
/* harmony export */   "KeyboardKey": () => (/* binding */ KeyboardKey),
/* harmony export */   "MouseActionCategory": () => (/* binding */ MouseActionCategory),
/* harmony export */   "MouseActionType": () => (/* binding */ MouseActionType),
/* harmony export */   "MouseInputType": () => (/* binding */ MouseInputType)
/* harmony export */ });
/**
 * Input devices
 * @beta
 */
var InputDevice;
(function (InputDevice) {
    InputDevice[InputDevice["Keyboard"] = 1] = "Keyboard";
    InputDevice[InputDevice["Mouse"] = 2] = "Mouse";
})(InputDevice || (InputDevice = {}));
/**
 * Input modifier flags to create chorded bindings
 * @beta
 */
var InputModifier;
(function (InputModifier) {
    InputModifier[InputModifier["Unused"] = 0] = "Unused";
    InputModifier[InputModifier["None"] = 1] = "None";
    InputModifier[InputModifier["Alt"] = 2] = "Alt";
    InputModifier[InputModifier["Control"] = 4] = "Control";
    InputModifier[InputModifier["Shift"] = 8] = "Shift";
    InputModifier[InputModifier["Any"] = 15] = "Any";
})(InputModifier || (InputModifier = {}));
/**
 * Keyboard Key Actions
 * @beta
 */
var KeyInputType;
(function (KeyInputType) {
    KeyInputType[KeyInputType["Press"] = 1] = "Press";
    KeyInputType[KeyInputType["Release"] = 2] = "Release";
})(KeyInputType || (KeyInputType = {}));
/**
 * Mouse device action categories
 * @beta
 */
var MouseActionCategory;
(function (MouseActionCategory) {
    MouseActionCategory[MouseActionCategory["Button"] = 1] = "Button";
    MouseActionCategory[MouseActionCategory["Wheel"] = 2] = "Wheel";
    MouseActionCategory[MouseActionCategory["Drag"] = 3] = "Drag";
})(MouseActionCategory || (MouseActionCategory = {}));
/**
 * Detailed mouse device actions
 * @beta
 */
var MouseActionType;
(function (MouseActionType) {
    MouseActionType[MouseActionType["LeftButton"] = 1] = "LeftButton";
    MouseActionType[MouseActionType["MiddleButton"] = 2] = "MiddleButton";
    MouseActionType[MouseActionType["RightButton"] = 3] = "RightButton";
    MouseActionType[MouseActionType["Wheel"] = 4] = "Wheel";
})(MouseActionType || (MouseActionType = {}));
/**
 * Input event information about mouse actions
 * @beta
 */
var MouseInputType;
(function (MouseInputType) {
    MouseInputType[MouseInputType["ButtonDown"] = 1] = "ButtonDown";
    MouseInputType[MouseInputType["ButtonUp"] = 2] = "ButtonUp";
    MouseInputType[MouseInputType["WheelIn"] = 3] = "WheelIn";
    MouseInputType[MouseInputType["WheelOut"] = 4] = "WheelOut";
    MouseInputType[MouseInputType["DragStart"] = 5] = "DragStart";
    MouseInputType[MouseInputType["Drag"] = 6] = "Drag";
    MouseInputType[MouseInputType["DragEnd"] = 7] = "DragEnd";
})(MouseInputType || (MouseInputType = {}));
/**
 * Keyboard key
 * @beta
 */
var KeyboardKey;
(function (KeyboardKey) {
    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode#constants_for_keycode_value
    KeyboardKey[KeyboardKey["BACKSPACE"] = 8] = "BACKSPACE";
    KeyboardKey[KeyboardKey["TAB"] = 9] = "TAB";
    KeyboardKey[KeyboardKey["ENTER"] = 13] = "ENTER";
    KeyboardKey[KeyboardKey["SHIFT"] = 16] = "SHIFT";
    KeyboardKey[KeyboardKey["CTRL"] = 17] = "CTRL";
    KeyboardKey[KeyboardKey["ALT"] = 18] = "ALT";
    KeyboardKey[KeyboardKey["CAPS_LOCK"] = 20] = "CAPS_LOCK";
    KeyboardKey[KeyboardKey["ESCAPE"] = 27] = "ESCAPE";
    KeyboardKey[KeyboardKey["SPACE"] = 32] = "SPACE";
    KeyboardKey[KeyboardKey["PAGE_UP"] = 33] = "PAGE_UP";
    KeyboardKey[KeyboardKey["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    KeyboardKey[KeyboardKey["END"] = 35] = "END";
    KeyboardKey[KeyboardKey["HOME"] = 36] = "HOME";
    KeyboardKey[KeyboardKey["LEFT"] = 37] = "LEFT";
    KeyboardKey[KeyboardKey["UP"] = 38] = "UP";
    KeyboardKey[KeyboardKey["RIGHT"] = 39] = "RIGHT";
    KeyboardKey[KeyboardKey["DOWN"] = 40] = "DOWN";
    KeyboardKey[KeyboardKey["PRINT_SCREEN"] = 44] = "PRINT_SCREEN";
    KeyboardKey[KeyboardKey["INSERT"] = 45] = "INSERT";
    KeyboardKey[KeyboardKey["DELETE"] = 46] = "DELETE";
    KeyboardKey[KeyboardKey["KEY_0"] = 48] = "KEY_0";
    KeyboardKey[KeyboardKey["KEY_1"] = 49] = "KEY_1";
    KeyboardKey[KeyboardKey["KEY_2"] = 50] = "KEY_2";
    KeyboardKey[KeyboardKey["KEY_3"] = 51] = "KEY_3";
    KeyboardKey[KeyboardKey["KEY_4"] = 52] = "KEY_4";
    KeyboardKey[KeyboardKey["KEY_5"] = 53] = "KEY_5";
    KeyboardKey[KeyboardKey["KEY_6"] = 54] = "KEY_6";
    KeyboardKey[KeyboardKey["KEY_7"] = 55] = "KEY_7";
    KeyboardKey[KeyboardKey["KEY_8"] = 56] = "KEY_8";
    KeyboardKey[KeyboardKey["KEY_9"] = 57] = "KEY_9";
    KeyboardKey[KeyboardKey["KEY_A"] = 65] = "KEY_A";
    KeyboardKey[KeyboardKey["KEY_B"] = 66] = "KEY_B";
    KeyboardKey[KeyboardKey["KEY_C"] = 67] = "KEY_C";
    KeyboardKey[KeyboardKey["KEY_D"] = 68] = "KEY_D";
    KeyboardKey[KeyboardKey["KEY_E"] = 69] = "KEY_E";
    KeyboardKey[KeyboardKey["KEY_F"] = 70] = "KEY_F";
    KeyboardKey[KeyboardKey["KEY_G"] = 71] = "KEY_G";
    KeyboardKey[KeyboardKey["KEY_H"] = 72] = "KEY_H";
    KeyboardKey[KeyboardKey["KEY_I"] = 73] = "KEY_I";
    KeyboardKey[KeyboardKey["KEY_J"] = 74] = "KEY_J";
    KeyboardKey[KeyboardKey["KEY_K"] = 75] = "KEY_K";
    KeyboardKey[KeyboardKey["KEY_L"] = 76] = "KEY_L";
    KeyboardKey[KeyboardKey["KEY_M"] = 77] = "KEY_M";
    KeyboardKey[KeyboardKey["KEY_N"] = 78] = "KEY_N";
    KeyboardKey[KeyboardKey["KEY_O"] = 79] = "KEY_O";
    KeyboardKey[KeyboardKey["KEY_P"] = 80] = "KEY_P";
    KeyboardKey[KeyboardKey["KEY_Q"] = 81] = "KEY_Q";
    KeyboardKey[KeyboardKey["KEY_R"] = 82] = "KEY_R";
    KeyboardKey[KeyboardKey["KEY_S"] = 83] = "KEY_S";
    KeyboardKey[KeyboardKey["KEY_T"] = 84] = "KEY_T";
    KeyboardKey[KeyboardKey["KEY_U"] = 85] = "KEY_U";
    KeyboardKey[KeyboardKey["KEY_V"] = 86] = "KEY_V";
    KeyboardKey[KeyboardKey["KEY_W"] = 87] = "KEY_W";
    KeyboardKey[KeyboardKey["KEY_X"] = 88] = "KEY_X";
    KeyboardKey[KeyboardKey["KEY_Y"] = 89] = "KEY_Y";
    KeyboardKey[KeyboardKey["KEY_Z"] = 90] = "KEY_Z";
    KeyboardKey[KeyboardKey["NUMPAD_0"] = 96] = "NUMPAD_0";
    KeyboardKey[KeyboardKey["NUMPAD_1"] = 97] = "NUMPAD_1";
    KeyboardKey[KeyboardKey["NUMPAD_2"] = 98] = "NUMPAD_2";
    KeyboardKey[KeyboardKey["NUMPAD_3"] = 99] = "NUMPAD_3";
    KeyboardKey[KeyboardKey["NUMPAD_4"] = 100] = "NUMPAD_4";
    KeyboardKey[KeyboardKey["NUMPAD_5"] = 101] = "NUMPAD_5";
    KeyboardKey[KeyboardKey["NUMPAD_6"] = 102] = "NUMPAD_6";
    KeyboardKey[KeyboardKey["NUMPAD_7"] = 103] = "NUMPAD_7";
    KeyboardKey[KeyboardKey["NUMPAD_8"] = 104] = "NUMPAD_8";
    KeyboardKey[KeyboardKey["NUMPAD_9"] = 105] = "NUMPAD_9";
    KeyboardKey[KeyboardKey["NUMPAD_MULTIPLY"] = 106] = "NUMPAD_MULTIPLY";
    KeyboardKey[KeyboardKey["NUMPAD_ADD"] = 107] = "NUMPAD_ADD";
    KeyboardKey[KeyboardKey["NUMPAD_SEPARATOR"] = 108] = "NUMPAD_SEPARATOR";
    KeyboardKey[KeyboardKey["NUMPAD_SUBTRACT"] = 109] = "NUMPAD_SUBTRACT";
    KeyboardKey[KeyboardKey["NUMPAD_DECIMAL"] = 110] = "NUMPAD_DECIMAL";
    KeyboardKey[KeyboardKey["NUMPAD_DIVIDE"] = 111] = "NUMPAD_DIVIDE";
    KeyboardKey[KeyboardKey["F1"] = 112] = "F1";
    KeyboardKey[KeyboardKey["F2"] = 113] = "F2";
    KeyboardKey[KeyboardKey["F3"] = 114] = "F3";
    KeyboardKey[KeyboardKey["F4"] = 115] = "F4";
    KeyboardKey[KeyboardKey["F5"] = 116] = "F5";
    KeyboardKey[KeyboardKey["F6"] = 117] = "F6";
    KeyboardKey[KeyboardKey["F7"] = 118] = "F7";
    KeyboardKey[KeyboardKey["F8"] = 119] = "F8";
    KeyboardKey[KeyboardKey["F9"] = 120] = "F9";
    KeyboardKey[KeyboardKey["F10"] = 121] = "F10";
    KeyboardKey[KeyboardKey["F11"] = 122] = "F11";
    KeyboardKey[KeyboardKey["F12"] = 123] = "F12";
    KeyboardKey[KeyboardKey["COMMA"] = 188] = "COMMA";
    KeyboardKey[KeyboardKey["PERIOD"] = 190] = "PERIOD";
    KeyboardKey[KeyboardKey["SLASH"] = 191] = "SLASH";
    KeyboardKey[KeyboardKey["BACK_QUOTE"] = 192] = "BACK_QUOTE";
    KeyboardKey[KeyboardKey["BRACKET_OPEN"] = 219] = "BRACKET_OPEN";
    KeyboardKey[KeyboardKey["BACK_SLASH"] = 220] = "BACK_SLASH";
    KeyboardKey[KeyboardKey["BRACKET_CLOSE"] = 221] = "BRACKET_CLOSE";
    KeyboardKey[KeyboardKey["QUOTE"] = 222] = "QUOTE";
})(KeyboardKey || (KeyboardKey = {}));
//# sourceMappingURL=ActionPrimitives.js.map

/***/ }),

/***/ "../editor-events/lib/Actions/ActionTypes.js":
/*!***************************************************!*\
  !*** ../editor-events/lib/Actions/ActionTypes.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionTypes": () => (/* binding */ ActionTypes)
/* harmony export */ });
/**
 * The types of actions that are supported. This type corresponds to the expected arguments
 * passed by the onExecute handler of an action.
 * @beta
 */
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["NoArgsAction"] = "NoArgsAction";
    ActionTypes["MouseRayCastAction"] = "MouseRayCastAction";
})(ActionTypes || (ActionTypes = {}));
//# sourceMappingURL=ActionTypes.js.map

/***/ }),

/***/ "../editor-events/lib/Actions/index.js":
/*!*********************************************!*\
  !*** ../editor-events/lib/Actions/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionTypes": () => (/* reexport safe */ _ActionTypes__WEBPACK_IMPORTED_MODULE_0__.ActionTypes),
/* harmony export */   "InputDevice": () => (/* reexport safe */ _ActionPrimitives__WEBPACK_IMPORTED_MODULE_1__.InputDevice),
/* harmony export */   "InputModifier": () => (/* reexport safe */ _ActionPrimitives__WEBPACK_IMPORTED_MODULE_1__.InputModifier),
/* harmony export */   "KeyInputType": () => (/* reexport safe */ _ActionPrimitives__WEBPACK_IMPORTED_MODULE_1__.KeyInputType),
/* harmony export */   "KeyboardKey": () => (/* reexport safe */ _ActionPrimitives__WEBPACK_IMPORTED_MODULE_1__.KeyboardKey),
/* harmony export */   "MouseActionCategory": () => (/* reexport safe */ _ActionPrimitives__WEBPACK_IMPORTED_MODULE_1__.MouseActionCategory),
/* harmony export */   "MouseActionType": () => (/* reexport safe */ _ActionPrimitives__WEBPACK_IMPORTED_MODULE_1__.MouseActionType),
/* harmony export */   "MouseInputType": () => (/* reexport safe */ _ActionPrimitives__WEBPACK_IMPORTED_MODULE_1__.MouseInputType)
/* harmony export */ });
/* harmony import */ var _ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionTypes */ "../editor-events/lib/Actions/ActionTypes.js");
/* harmony import */ var _ActionPrimitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionPrimitives */ "../editor-events/lib/Actions/ActionPrimitives.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../editor-events/lib/ClientEvents/ClientActionEvents.js":
/*!***************************************************************!*\
  !*** ../editor-events/lib/ClientEvents/ClientActionEvents.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientActionEventType": () => (/* binding */ ClientActionEventType)
/* harmony export */ });
/**
 * The set of events that may be sent by the client side UI pertaining to Actions
 * @internal
 */
var ClientActionEventType;
(function (ClientActionEventType) {
    ClientActionEventType[ClientActionEventType["ActionExecute"] = 1] = "ActionExecute";
})(ClientActionEventType || (ClientActionEventType = {}));
//# sourceMappingURL=ClientActionEvents.js.map

/***/ }),

/***/ "../editor-events/lib/ClientEvents/ClientLifecycleEvent.js":
/*!*****************************************************************!*\
  !*** ../editor-events/lib/ClientEvents/ClientLifecycleEvent.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorLifecycleEventsType": () => (/* binding */ EditorLifecycleEventsType)
/* harmony export */ });
/**
 * The types of payloads that may be received for lifecycle events
 * @internal
 */
var EditorLifecycleEventsType;
(function (EditorLifecycleEventsType) {
    EditorLifecycleEventsType[EditorLifecycleEventsType["OnInitialize"] = 1] = "OnInitialize";
    EditorLifecycleEventsType[EditorLifecycleEventsType["OnTeardown"] = 2] = "OnTeardown";
})(EditorLifecycleEventsType || (EditorLifecycleEventsType = {}));
//# sourceMappingURL=ClientLifecycleEvent.js.map

/***/ }),

/***/ "../editor-events/lib/ClientEvents/ClientUXEvents.js":
/*!***********************************************************!*\
  !*** ../editor-events/lib/ClientEvents/ClientUXEvents.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientUXEventPayloadTypes": () => (/* binding */ ClientUXEventPayloadTypes)
/* harmony export */ });
/**
 * The set of events that may be sent by the client side UX pertaining to Actions
 * @internal
 */
var ClientUXEventPayloadTypes;
(function (ClientUXEventPayloadTypes) {
    ClientUXEventPayloadTypes[ClientUXEventPayloadTypes["UpdatePropertyPane"] = 1] = "UpdatePropertyPane";
    ClientUXEventPayloadTypes[ClientUXEventPayloadTypes["UpdateModalTool"] = 2] = "UpdateModalTool";
    ClientUXEventPayloadTypes[ClientUXEventPayloadTypes["PropertyPaneVisibilityChanged"] = 3] = "PropertyPaneVisibilityChanged";
})(ClientUXEventPayloadTypes || (ClientUXEventPayloadTypes = {}));
//# sourceMappingURL=ClientUXEvents.js.map

/***/ }),

/***/ "../editor-events/lib/ClientEvents/index.js":
/*!**************************************************!*\
  !*** ../editor-events/lib/ClientEvents/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientActionEventType": () => (/* reexport safe */ _ClientActionEvents__WEBPACK_IMPORTED_MODULE_0__.ClientActionEventType),
/* harmony export */   "ClientUXEventPayloadTypes": () => (/* reexport safe */ _ClientUXEvents__WEBPACK_IMPORTED_MODULE_1__.ClientUXEventPayloadTypes),
/* harmony export */   "EditorLifecycleEventsType": () => (/* reexport safe */ _ClientLifecycleEvent__WEBPACK_IMPORTED_MODULE_2__.EditorLifecycleEventsType)
/* harmony export */ });
/* harmony import */ var _ClientActionEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientActionEvents */ "../editor-events/lib/ClientEvents/ClientActionEvents.js");
/* harmony import */ var _ClientUXEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientUXEvents */ "../editor-events/lib/ClientEvents/ClientUXEvents.js");
/* harmony import */ var _ClientLifecycleEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClientLifecycleEvent */ "../editor-events/lib/ClientEvents/ClientLifecycleEvent.js");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../editor-events/lib/EditorEventType.js":
/*!***********************************************!*\
  !*** ../editor-events/lib/EditorEventType.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorClientEventType": () => (/* binding */ EditorClientEventType),
/* harmony export */   "EditorServerEventType": () => (/* binding */ EditorServerEventType)
/* harmony export */ });
/**
 * Types of events that may be sent by the server to the client side UX. These events each have their own
 * independent set of payloads in the message that may have a wide set of types of operations. This allows messages to
 * be sent with an EventType and Payload, but with easy type safe deduction of the payload type leveraging
 * discriminated unions and type fields.
 * @internal
 */
var EditorServerEventType;
(function (EditorServerEventType) {
    EditorServerEventType["ServerActionEvents"] = "Editor::ServerActionEvents";
    EditorServerEventType["ServerInputBindingEvents"] = "Editor::ServerInputBindingEvents";
    EditorServerEventType["ServerUXEvents"] = "Editor::ServerUXEvents";
})(EditorServerEventType || (EditorServerEventType = {}));
/**
 * Types of events that may be sent by the client to the server side extension. These events each have their own
 * independent set of payloads in the message that may have a wide set of types of operations. This allows messages to
 * be sent with an EventType and Payload, but with easy type safe deduction of the payload type leveraging
 * discriminated unions and type fields.
 * @internal
 */
var EditorClientEventType;
(function (EditorClientEventType) {
    EditorClientEventType["ClientActionEvents"] = "Editor::ClientActionEvents";
    EditorClientEventType["ClientUXEvents"] = "Editor::ClientUXEvents";
    EditorClientEventType["ClientLifecycleEvents"] = "Editor::ClientLifecycle";
})(EditorClientEventType || (EditorClientEventType = {}));
//# sourceMappingURL=EditorEventType.js.map

/***/ }),

/***/ "../editor-events/lib/ServerEvents/ServerActionEvents.js":
/*!***************************************************************!*\
  !*** ../editor-events/lib/ServerEvents/ServerActionEvents.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerActionEventType": () => (/* binding */ ServerActionEventType)
/* harmony export */ });
/**
 * The set of events that may be sent by the server side UX pertaining to actions
 * @internal
 */
var ServerActionEventType;
(function (ServerActionEventType) {
    /**
     * Sent to register a new action on the client
     */
    ServerActionEventType[ServerActionEventType["Register"] = 1] = "Register";
    /**
     * Sent to unregister an existing action on the client
     */
    ServerActionEventType[ServerActionEventType["Unregister"] = 2] = "Unregister";
    /**
     * Updates whether an action is enabled on the client. When an action is disabled,
     * the action execute event for that action will not be fired by the client.
     */
    ServerActionEventType[ServerActionEventType["UpdateEnablement"] = 3] = "UpdateEnablement";
})(ServerActionEventType || (ServerActionEventType = {}));
//# sourceMappingURL=ServerActionEvents.js.map

/***/ }),

/***/ "../editor-events/lib/ServerEvents/ServerInputBindingEvents.js":
/*!*********************************************************************!*\
  !*** ../editor-events/lib/ServerEvents/ServerInputBindingEvents.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerInputBindingEventType": () => (/* binding */ ServerInputBindingEventType)
/* harmony export */ });
/**
 * The set of events that may be sent by the server side UX pertaining to actions
 * @internal
 */
var ServerInputBindingEventType;
(function (ServerInputBindingEventType) {
    /**
     * Sent to register a new keyboard binding
     */
    ServerInputBindingEventType[ServerInputBindingEventType["RegisterKeyboardBinding"] = 1] = "RegisterKeyboardBinding";
    /**
     * Sent to register a new mouse binding
     */
    ServerInputBindingEventType[ServerInputBindingEventType["RegisterMouseBinding"] = 2] = "RegisterMouseBinding";
    /**
     * Sent to unregister a new input binding
     */
    ServerInputBindingEventType[ServerInputBindingEventType["Unregister"] = 3] = "Unregister";
})(ServerInputBindingEventType || (ServerInputBindingEventType = {}));
//# sourceMappingURL=ServerInputBindingEvents.js.map

/***/ }),

/***/ "../editor-events/lib/ServerEvents/ServerUXEventTypes.js":
/*!***************************************************************!*\
  !*** ../editor-events/lib/ServerEvents/ServerUXEventTypes.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientPanel": () => (/* binding */ ClientPanel),
/* harmony export */   "EDITOR_PANE_PROPERTY_ITEM_TYPE": () => (/* binding */ EDITOR_PANE_PROPERTY_ITEM_TYPE),
/* harmony export */   "EditorStatusBarAlignment": () => (/* binding */ EditorStatusBarAlignment),
/* harmony export */   "OutOfEditorDestination": () => (/* binding */ OutOfEditorDestination)
/* harmony export */ });
/**
 * Position for items on the status bar
 * @internal
 */
var EditorStatusBarAlignment;
(function (EditorStatusBarAlignment) {
    EditorStatusBarAlignment[EditorStatusBarAlignment["Right"] = 0] = "Right";
    EditorStatusBarAlignment[EditorStatusBarAlignment["Left"] = 1] = "Left";
})(EditorStatusBarAlignment || (EditorStatusBarAlignment = {}));
/**
 * Type of item that can be added to the property pane
 * @beta
 */
var EDITOR_PANE_PROPERTY_ITEM_TYPE;
(function (EDITOR_PANE_PROPERTY_ITEM_TYPE) {
    EDITOR_PANE_PROPERTY_ITEM_TYPE["Number"] = "editorUI:Number";
    EDITOR_PANE_PROPERTY_ITEM_TYPE["String"] = "editorUI:String";
    EDITOR_PANE_PROPERTY_ITEM_TYPE["Boolean"] = "editorUI:Boolean";
    EDITOR_PANE_PROPERTY_ITEM_TYPE["BlockPicker"] = "editorUI:BlockPicker";
    EDITOR_PANE_PROPERTY_ITEM_TYPE["Dropdown"] = "editorUI:Dropdown";
    EDITOR_PANE_PROPERTY_ITEM_TYPE["Divider"] = "editorUI:Divider";
    EDITOR_PANE_PROPERTY_ITEM_TYPE["SubPane"] = "editorUI:SubPane";
    EDITOR_PANE_PROPERTY_ITEM_TYPE["Action"] = "editorUI:Action";
    EDITOR_PANE_PROPERTY_ITEM_TYPE["Vec3"] = "editorUI:Vec3";
})(EDITOR_PANE_PROPERTY_ITEM_TYPE || (EDITOR_PANE_PROPERTY_ITEM_TYPE = {}));
/**
 * Screen and webpages navigated to from the editor
 * @internal
 */
var OutOfEditorDestination;
(function (OutOfEditorDestination) {
    OutOfEditorDestination[OutOfEditorDestination["Documentation"] = 1] = "Documentation";
    OutOfEditorDestination[OutOfEditorDestination["Feedback"] = 2] = "Feedback";
    OutOfEditorDestination[OutOfEditorDestination["PauseScreen"] = 3] = "PauseScreen";
})(OutOfEditorDestination || (OutOfEditorDestination = {}));
/**
 * Client-controlled panels
 * @internal
 */
var ClientPanel;
(function (ClientPanel) {
    ClientPanel[ClientPanel["ControlPanel"] = 1] = "ControlPanel";
    ClientPanel[ClientPanel["WelcomePanel"] = 2] = "WelcomePanel";
})(ClientPanel || (ClientPanel = {}));
//# sourceMappingURL=ServerUXEventTypes.js.map

/***/ }),

/***/ "../editor-events/lib/ServerEvents/ServerUXEvents.js":
/*!***********************************************************!*\
  !*** ../editor-events/lib/ServerEvents/ServerUXEvents.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerUXEventType": () => (/* binding */ ServerUXEventType)
/* harmony export */ });
/**
 * The set of events that may be sent by the server side UI pertaining to actions
 * @internal
 */
var ServerUXEventType;
(function (ServerUXEventType) {
    /**
     * Used to update the pane on the client
     */
    ServerUXEventType[ServerUXEventType["UpdatePropertyPane"] = 1] = "UpdatePropertyPane";
    /**
     * Destroys the pane UI on the client
     */
    ServerUXEventType[ServerUXEventType["DestroyPropertyPane"] = 2] = "DestroyPropertyPane";
    /**
     * Used to update the menu on the client
     */
    ServerUXEventType[ServerUXEventType["UpdateMenu"] = 3] = "UpdateMenu";
    /**
     * Destroys the menu UX on the client
     */
    ServerUXEventType[ServerUXEventType["DestroyMenu"] = 4] = "DestroyMenu";
    /**
     * Used to update the status bar item on the client
     */
    ServerUXEventType[ServerUXEventType["UpdateStatusBarItem"] = 5] = "UpdateStatusBarItem";
    /**
     * Destroys the status bar item UX on the client
     */
    ServerUXEventType[ServerUXEventType["DestroyStatusBarItem"] = 6] = "DestroyStatusBarItem";
    /**
     * Used to update the modal tool option on the client
     */
    ServerUXEventType[ServerUXEventType["UpdateModalToolOption"] = 7] = "UpdateModalToolOption";
    /**
     * Destroys the modal tool option UX on the client
     */
    ServerUXEventType[ServerUXEventType["DestroyModalToolOption"] = 8] = "DestroyModalToolOption";
    /**
     * Used to update the modal tool container on the client
     */
    ServerUXEventType[ServerUXEventType["UpdateModalToolContainer"] = 9] = "UpdateModalToolContainer";
    /**
     * Destroys the modal tool container UX on the client
     */
    ServerUXEventType[ServerUXEventType["DestroyModalToolContainer"] = 10] = "DestroyModalToolContainer";
    /**
     * Event for binding a registered action to an existing UI element via it's ID
     */
    ServerUXEventType[ServerUXEventType["BindActionToControl"] = 11] = "BindActionToControl";
    /**
     * Remove the action binding from a given control
     */
    ServerUXEventType[ServerUXEventType["RemoveActionBindingFromControl"] = 12] = "RemoveActionBindingFromControl";
    /**
     * Used to update the property pane item on the client
     */
    ServerUXEventType[ServerUXEventType["UpdatePropertyItem"] = 13] = "UpdatePropertyItem";
    /**
     * Destroys the property pane item UI on the client
     */
    ServerUXEventType[ServerUXEventType["DestroyPropertyItem"] = 14] = "DestroyPropertyItem";
    /**
     * Navigates to a webpage or screen outside of the editor
     */
    ServerUXEventType[ServerUXEventType["OnNavigateFromEditor"] = 15] = "OnNavigateFromEditor";
    /**
     * Updates the visibility of a Control - deprecated - replaced by update client panel visibility
     */
    ServerUXEventType[ServerUXEventType["UpdateControlDemoVisibility_deprecated"] = 16] = "UpdateControlDemoVisibility_deprecated";
    /**
     * Updates the visibility of the Welcome Panel - deprecated - replaced by update client panel visibility
     */
    ServerUXEventType[ServerUXEventType["UpdateWelcomePanelVisibility_deprecated"] = 17] = "UpdateWelcomePanelVisibility_deprecated";
    /**
     * Updates the visibility of a Control
     */
    ServerUXEventType[ServerUXEventType["UpdateClientPanelVisibility"] = 18] = "UpdateClientPanelVisibility";
})(ServerUXEventType || (ServerUXEventType = {}));
//# sourceMappingURL=ServerUXEvents.js.map

/***/ }),

/***/ "../editor-events/lib/ServerEvents/index.js":
/*!**************************************************!*\
  !*** ../editor-events/lib/ServerEvents/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientPanel": () => (/* reexport safe */ _ServerUXEventTypes__WEBPACK_IMPORTED_MODULE_3__.ClientPanel),
/* harmony export */   "EDITOR_PANE_PROPERTY_ITEM_TYPE": () => (/* reexport safe */ _ServerUXEventTypes__WEBPACK_IMPORTED_MODULE_3__.EDITOR_PANE_PROPERTY_ITEM_TYPE),
/* harmony export */   "EditorStatusBarAlignment": () => (/* reexport safe */ _ServerUXEventTypes__WEBPACK_IMPORTED_MODULE_3__.EditorStatusBarAlignment),
/* harmony export */   "OutOfEditorDestination": () => (/* reexport safe */ _ServerUXEventTypes__WEBPACK_IMPORTED_MODULE_3__.OutOfEditorDestination),
/* harmony export */   "ServerActionEventType": () => (/* reexport safe */ _ServerActionEvents__WEBPACK_IMPORTED_MODULE_0__.ServerActionEventType),
/* harmony export */   "ServerInputBindingEventType": () => (/* reexport safe */ _ServerInputBindingEvents__WEBPACK_IMPORTED_MODULE_1__.ServerInputBindingEventType),
/* harmony export */   "ServerUXEventType": () => (/* reexport safe */ _ServerUXEvents__WEBPACK_IMPORTED_MODULE_2__.ServerUXEventType)
/* harmony export */ });
/* harmony import */ var _ServerActionEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServerActionEvents */ "../editor-events/lib/ServerEvents/ServerActionEvents.js");
/* harmony import */ var _ServerInputBindingEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServerInputBindingEvents */ "../editor-events/lib/ServerEvents/ServerInputBindingEvents.js");
/* harmony import */ var _ServerUXEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServerUXEvents */ "../editor-events/lib/ServerEvents/ServerUXEvents.js");
/* harmony import */ var _ServerUXEventTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServerUXEventTypes */ "../editor-events/lib/ServerEvents/ServerUXEventTypes.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../editor-events/lib/index.js":
/*!*************************************!*\
  !*** ../editor-events/lib/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionTypes": () => (/* reexport safe */ _Actions__WEBPACK_IMPORTED_MODULE_0__.ActionTypes),
/* harmony export */   "ClientActionEventType": () => (/* reexport safe */ _ClientEvents__WEBPACK_IMPORTED_MODULE_1__.ClientActionEventType),
/* harmony export */   "ClientPanel": () => (/* reexport safe */ _ServerEvents__WEBPACK_IMPORTED_MODULE_2__.ClientPanel),
/* harmony export */   "ClientUXEventPayloadTypes": () => (/* reexport safe */ _ClientEvents__WEBPACK_IMPORTED_MODULE_1__.ClientUXEventPayloadTypes),
/* harmony export */   "EDITOR_PANE_PROPERTY_ITEM_TYPE": () => (/* reexport safe */ _ServerEvents__WEBPACK_IMPORTED_MODULE_2__.EDITOR_PANE_PROPERTY_ITEM_TYPE),
/* harmony export */   "EditorClientEventType": () => (/* reexport safe */ _EditorEventType__WEBPACK_IMPORTED_MODULE_3__.EditorClientEventType),
/* harmony export */   "EditorLifecycleEventsType": () => (/* reexport safe */ _ClientEvents__WEBPACK_IMPORTED_MODULE_1__.EditorLifecycleEventsType),
/* harmony export */   "EditorServerEventType": () => (/* reexport safe */ _EditorEventType__WEBPACK_IMPORTED_MODULE_3__.EditorServerEventType),
/* harmony export */   "EditorStatusBarAlignment": () => (/* reexport safe */ _ServerEvents__WEBPACK_IMPORTED_MODULE_2__.EditorStatusBarAlignment),
/* harmony export */   "InputDevice": () => (/* reexport safe */ _Actions__WEBPACK_IMPORTED_MODULE_0__.InputDevice),
/* harmony export */   "InputModifier": () => (/* reexport safe */ _Actions__WEBPACK_IMPORTED_MODULE_0__.InputModifier),
/* harmony export */   "KeyInputType": () => (/* reexport safe */ _Actions__WEBPACK_IMPORTED_MODULE_0__.KeyInputType),
/* harmony export */   "KeyboardKey": () => (/* reexport safe */ _Actions__WEBPACK_IMPORTED_MODULE_0__.KeyboardKey),
/* harmony export */   "MouseActionCategory": () => (/* reexport safe */ _Actions__WEBPACK_IMPORTED_MODULE_0__.MouseActionCategory),
/* harmony export */   "MouseActionType": () => (/* reexport safe */ _Actions__WEBPACK_IMPORTED_MODULE_0__.MouseActionType),
/* harmony export */   "MouseInputType": () => (/* reexport safe */ _Actions__WEBPACK_IMPORTED_MODULE_0__.MouseInputType),
/* harmony export */   "OutOfEditorDestination": () => (/* reexport safe */ _ServerEvents__WEBPACK_IMPORTED_MODULE_2__.OutOfEditorDestination),
/* harmony export */   "ServerActionEventType": () => (/* reexport safe */ _ServerEvents__WEBPACK_IMPORTED_MODULE_2__.ServerActionEventType),
/* harmony export */   "ServerInputBindingEventType": () => (/* reexport safe */ _ServerEvents__WEBPACK_IMPORTED_MODULE_2__.ServerInputBindingEventType),
/* harmony export */   "ServerUXEventType": () => (/* reexport safe */ _ServerEvents__WEBPACK_IMPORTED_MODULE_2__.ServerUXEventType)
/* harmony export */ });
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions */ "../editor-events/lib/Actions/index.js");
/* harmony import */ var _ClientEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientEvents */ "../editor-events/lib/ClientEvents/index.js");
/* harmony import */ var _ServerEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServerEvents */ "../editor-events/lib/ServerEvents/index.js");
/* harmony import */ var _EditorEventType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorEventType */ "../editor-events/lib/EditorEventType.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../module-wrappers/server-editor-bindings-wrapper/index.js":
/*!*********************************************************************!*\
  !*** ../../module-wrappers/server-editor-bindings-wrapper/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockVolume": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.BlockVolume),
/* harmony export */   "BlockVolumeIntersection": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.BlockVolumeIntersection),
/* harmony export */   "BlockVolumeIterator": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.BlockVolumeIterator),
/* harmony export */   "BoundingBox": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.BoundingBox),
/* harmony export */   "ClipboardItem": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.ClipboardItem),
/* harmony export */   "ClipboardManager": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.ClipboardManager),
/* harmony export */   "ClipboardMirrorAxis": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.ClipboardMirrorAxis),
/* harmony export */   "ClipboardRotation": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.ClipboardRotation),
/* harmony export */   "ClipboardWriteOptions": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.ClipboardWriteOptions),
/* harmony export */   "Cursor": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.Cursor),
/* harmony export */   "CursorControlMode": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.CursorControlMode),
/* harmony export */   "CursorState": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.CursorState),
/* harmony export */   "CursorTargetMode": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.CursorTargetMode),
/* harmony export */   "Extension": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.Extension),
/* harmony export */   "ExtensionContext": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.ExtensionContext),
/* harmony export */   "MinecraftEditor": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.MinecraftEditor),
/* harmony export */   "Selection": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.Selection),
/* harmony export */   "SelectionBlockVolumeAction": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.SelectionBlockVolumeAction),
/* harmony export */   "SelectionManager": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.SelectionManager),
/* harmony export */   "TransactionManager": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.TransactionManager),
/* harmony export */   "editor": () => (/* reexport safe */ _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__.editor)
/* harmony export */ });
/* harmony import */ var _minecraft_server_editor_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/server-editor-bindings */ "@minecraft/server-editor-bindings");



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

/***/ "./src/AllowedBlocks.ts":
/*!******************************!*\
  !*** ./src/AllowedBlocks.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allowedBlocks": () => (/* binding */ allowedBlocks)
/* harmony export */ });
/* harmony import */ var _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/server-wrapper */ "../../module-wrappers/server-wrapper/index.js");

/**
 * Filtered blocks for the block picker
 */
const filteredBlocks = new Set([
    // EDU Blocks
    'element_0',
    'element_1',
    'element_2',
    'element_3',
    'element_4',
    'element_5',
    'element_6',
    'element_7',
    'element_8',
    'element_9',
    'element_10',
    'element_11',
    'element_12',
    'element_13',
    'element_14',
    'element_15',
    'element_16',
    'element_17',
    'element_18',
    'element_19',
    'element_20',
    'element_21',
    'element_22',
    'element_23',
    'element_24',
    'element_25',
    'element_26',
    'element_27',
    'element_28',
    'element_29',
    'element_30',
    'element_31',
    'element_32',
    'element_33',
    'element_34',
    'element_35',
    'element_36',
    'element_37',
    'element_38',
    'element_39',
    'element_40',
    'element_41',
    'element_42',
    'element_43',
    'element_44',
    'element_45',
    'element_46',
    'element_47',
    'element_48',
    'element_49',
    'element_50',
    'element_51',
    'element_52',
    'element_53',
    'element_54',
    'element_55',
    'element_56',
    'element_57',
    'element_58',
    'element_59',
    'element_60',
    'element_61',
    'element_62',
    'element_63',
    'element_64',
    'element_65',
    'element_66',
    'element_67',
    'element_68',
    'element_69',
    'element_70',
    'element_71',
    'element_72',
    'element_73',
    'element_74',
    'element_75',
    'element_76',
    'element_77',
    'element_78',
    'element_79',
    'element_80',
    'element_81',
    'element_82',
    'element_83',
    'element_84',
    'element_85',
    'element_86',
    'element_87',
    'element_88',
    'element_89',
    'element_90',
    'element_91',
    'element_92',
    'element_93',
    'element_94',
    'element_95',
    'element_96',
    'element_97',
    'element_98',
    'element_99',
    'element_100',
    'element_101',
    'element_102',
    'element_103',
    'element_104',
    'element_105',
    'element_106',
    'element_107',
    'element_108',
    'element_109',
    'element_110',
    'element_111',
    'element_112',
    'element_113',
    'element_114',
    'element_115',
    'element_116',
    'element_117',
    'element_118',
    'chemistry_table',
    'colored_torch_bp',
    'hard_glass',
    'hard_stained_glass',
    'hard_glass_pane',
    'hard_stained_glass_pane',
    // Misc Blocks
    'underwater_torch',
    'chemical_heat',
]);
/**
 * Allowed blocks for the block picker
 */
const allowedBlocks = _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.MinecraftBlockTypes.getAllBlockTypes().reduce((allowList, blockType) => {
    const blockId = blockType.id.replace('minecraft:', '');
    if (!filteredBlocks.has(blockId)) {
        allowList.push(blockId);
    }
    return allowList;
}, []);


/***/ }),

/***/ "./src/BedrockSubscriptionCache/BedrockSubscriptionCache.ts":
/*!******************************************************************!*\
  !*** ./src/BedrockSubscriptionCache/BedrockSubscriptionCache.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BedrockEventSubscriptionCache": () => (/* binding */ BedrockEventSubscriptionCache)
/* harmony export */ });
/**
 * A cache for bedrock event subscriptions. Stores off a subscription by event key, and upon
 * teardown unregisters all subscriptions.
 * @beta
 */
class BedrockEventSubscriptionCache {
    constructor(mEvents) {
        this.mEvents = mEvents;
        this.subscribedEvents = {};
    }
    /**
     * Subcribes to a bedrock event using the key of the desired event. When subscribed, the event handler
     * is both returned, but also cached internally for unsubscription. This means the caller of the subscription
     * does not need to worry about unsubscription since the cache will automatically unsubscribe handlers
     * on overall teardown.
     *
     * @param event - The event on the bedrock APIs to which to subscribe
     * @param params - The parameters to the subscription method for the event. Auto complete will display this for you
     */
    subscribeToBedrockEvent(event, ...params) {
        // We trust that the Parameters utility type has enforced the right parameters for subscribe above
        // so we then cast as [never] to let typescript know that we are receiving a tuple type with at least
        // one value to spread
        const unsubscribeHandle = this.mEvents[event].subscribe(...params);
        const currentHandles = this.subscribedEvents[event];
        if (currentHandles === undefined) {
            this.subscribedEvents[event] = [unsubscribeHandle];
        }
        else {
            currentHandles.push(unsubscribeHandle);
        }
        return unsubscribeHandle;
    }
    teardown() {
        for (const event of Object.keys(this.subscribedEvents)) {
            const typeCorrectedEvent = event;
            const unsubscribeHandles = this.subscribedEvents[typeCorrectedEvent];
            if (unsubscribeHandles) {
                for (const handle of unsubscribeHandles) {
                    this.mEvents[typeCorrectedEvent]['unsubscribe'](handle);
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/BedrockSubscriptionCache/index.ts":
/*!***********************************************!*\
  !*** ./src/BedrockSubscriptionCache/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BedrockEventSubscriptionCache": () => (/* reexport safe */ _BedrockSubscriptionCache__WEBPACK_IMPORTED_MODULE_0__.BedrockEventSubscriptionCache)
/* harmony export */ });
/* harmony import */ var _BedrockSubscriptionCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BedrockSubscriptionCache */ "./src/BedrockSubscriptionCache/BedrockSubscriptionCache.ts");



/***/ }),

/***/ "./src/BuiltInUIManager/BuiltInUIManagerImpl.ts":
/*!******************************************************!*\
  !*** ./src/BuiltInUIManager/BuiltInUIManagerImpl.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuiltInUIManagerImpl": () => (/* binding */ BuiltInUIManagerImpl)
/* harmony export */ });
/* harmony import */ var _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/editor-events */ "../editor-events/lib/index.js");

class BuiltInUIManagerImpl {
    constructor(_dispatcher) {
        this._dispatcher = _dispatcher;
    }
    /**
     * Updates the visibility of the control demo
     */
    updateUISettingsPanelVisibility(visibility) {
        this._dispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.EditorServerEventType.ServerUXEvents, {
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.ServerUXEventType.UpdateClientPanelVisibility,
            panel: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.ClientPanel.ControlPanel,
            visible: visibility,
        });
    }
    /**
     * Updates the visibility of the welcome panel
     */
    updateWelcomePanelVisibility(visibility) {
        this._dispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.EditorServerEventType.ServerUXEvents, {
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.ServerUXEventType.UpdateClientPanelVisibility,
            panel: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.ClientPanel.WelcomePanel,
            visible: visibility,
        });
    }
    /**
     * Navigates to the pause screen
     */
    navigateToPauseScreen() {
        this._dispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.EditorServerEventType.ServerUXEvents, {
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.ServerUXEventType.OnNavigateFromEditor,
            destination: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.OutOfEditorDestination.PauseScreen,
        });
    }
    /**
     * Navigates to the documentation site
     */
    navigateToDocumentation() {
        this._dispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.EditorServerEventType.ServerUXEvents, {
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.ServerUXEventType.OnNavigateFromEditor,
            destination: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.OutOfEditorDestination.Documentation,
        });
    }
    /**
     * Navigates to the feedback site
     */
    navigateToFeedback() {
        this._dispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.EditorServerEventType.ServerUXEvents, {
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.ServerUXEventType.OnNavigateFromEditor,
            destination: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.OutOfEditorDestination.Feedback,
        });
    }
}


/***/ }),

/***/ "./src/ClientListenerStatic.ts":
/*!*************************************!*\
  !*** ./src/ClientListenerStatic.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClientEventListener": () => (/* binding */ getClientEventListener)
/* harmony export */ });
/* harmony import */ var _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/server-wrapper */ "../../module-wrappers/server-wrapper/index.js");
/* harmony import */ var _EventManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventManager */ "./src/EventManager/index.ts");


const clientEventListener = new _EventManager__WEBPACK_IMPORTED_MODULE_1__.ClientEventListener(_minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.world.events);
/**
 * Returns the global client event listener used for listening to events from clients. These
 * events received may be from all attached clients, and it is the responsibility of listeners
 * to forward events to any relevant player specific code
 */
function getClientEventListener() {
    return clientEventListener;
}


/***/ }),

/***/ "./src/EventManager/ClientEvents/ClientEventPayloadMapping.ts":
/*!********************************************************************!*\
  !*** ./src/EventManager/ClientEvents/ClientEventPayloadMapping.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// The below asserts that the mapping above is exhaustive to all event types. If you have added a new event type,
// update the mapping above
const ValidatePayloadMapping = true;
ValidatePayloadMapping;



/***/ }),

/***/ "./src/EventManager/ClientEvents/index.ts":
/*!************************************************!*\
  !*** ./src/EventManager/ClientEvents/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClientEventPayloadMapping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientEventPayloadMapping */ "./src/EventManager/ClientEvents/ClientEventPayloadMapping.ts");



/***/ }),

/***/ "./src/EventManager/EventManager.ts":
/*!******************************************!*\
  !*** ./src/EventManager/EventManager.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientEventDispatcher": () => (/* binding */ ClientEventDispatcher),
/* harmony export */   "ClientEventListener": () => (/* binding */ ClientEventListener)
/* harmony export */ });
/* harmony import */ var _minecraft_core_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/core-utilities */ "../core-utilities/lib/index.js");
/* harmony import */ var _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @minecraft/editor-events */ "../editor-events/lib/index.js");


/**
 * @internal
 */
class ClientEventListener {
    constructor(events) {
        /**
         * When updating the set of listeners, ensure to update onMessageReceived
         */
        this.listenersPerPlayer = new Map();
        this.onMessageReceived = (rawMessage) => {
            const message = rawMessage;
            const eventType = message.id;
            switch (eventType) {
                case _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorClientEventType.ClientActionEvents: {
                    const listenersForPlayer = this.ensureListenersForPlayer(message.player);
                    const clientActionPayload = JSON.parse(message.message);
                    for (const listener of listenersForPlayer[_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorClientEventType.ClientActionEvents]) {
                        listener(clientActionPayload);
                    }
                    break;
                }
                case _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorClientEventType.ClientUXEvents: {
                    const listenersForPlayer = this.ensureListenersForPlayer(message.player);
                    const clientPropertyPaneEventPayload = JSON.parse(message.message);
                    for (const listener of listenersForPlayer[_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorClientEventType.ClientUXEvents]) {
                        listener(clientPropertyPaneEventPayload);
                    }
                    break;
                }
                case _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorClientEventType.ClientLifecycleEvents: {
                    const listenersForPlayer = this.ensureListenersForPlayer(message.player);
                    const clientLifecyclePayload = JSON.parse(message.message);
                    for (const listener of listenersForPlayer[_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorClientEventType.ClientLifecycleEvents]) {
                        listener(clientLifecyclePayload);
                    }
                    break;
                }
                default: {
                    // If we receive a different event type, we just drop this since it's not pertaining to editor events. As such, we return early to
                    // avoid doing any additional processing
                    return;
                }
            }
        };
        this.unregisterListener = (type, player, callback) => {
            const listenersForPlayer = this.ensureListenersForPlayer(player);
            const listenersForType = listenersForPlayer[type];
            listenersForType.splice(listenersForType.indexOf(callback), 1);
        };
        this.ensureListenersForPlayer = (player) => {
            let mapping = this.listenersPerPlayer.get(player);
            if (!mapping) {
                // First time a player is starting to listen to events
                mapping = {
                    [_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorClientEventType.ClientActionEvents]: [],
                    [_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorClientEventType.ClientUXEvents]: [],
                    [_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorClientEventType.ClientLifecycleEvents]: [],
                };
                this.listenersPerPlayer.set(player, mapping);
            }
            return mapping;
        };
        this.receiveCallback = events.messageReceive.subscribe(this.onMessageReceived);
    }
    registerListener(type, player, callback) {
        const listenersForPlayer = this.ensureListenersForPlayer(player);
        const listenersForType = listenersForPlayer[type];
        listenersForType.push(callback);
        return () => {
            this.unregisterListener(type, player, callback);
        };
    }
    teardown(events) {
        if (this.receiveCallback) {
            events.messageReceive.unsubscribe(this.receiveCallback);
            this.receiveCallback = undefined;
        }
    }
}
/**
 * Centralized host for all events from server to a player client. Provides a structured and type safe way
 * for a consumer to send events since the raw contract between client and server is purely stringified
 * JSON.
 *
 * There must be a client event dispatcher per player.
 *
 * @internal
 */
class ClientEventDispatcher {
    constructor(_system) {
        this._system = _system;
        this.initialize = (player) => {
            this._player = player;
        };
        /**
         * Dispatches and event of type T with the appropriate payload. See ServerEventPayloadMapping for the
         * correct mapping of payload to server event type
         */
        this.dispatchEvent = (type, payload, replacer) => {
            if (!this._player) {
                // Prevent any dispatches before initialization or after teardown
                console.warn('Attempting to flush events before initialization or after teardown.');
                return;
            }
            if (!this.eventQueue) {
                this.eventQueue = [];
                this._system.run(this.flush);
            }
            if (replacer) {
                this.eventQueue.push({ type, payload, replacer });
            }
            else {
                this.eventQueue.push({ type, payload });
            }
        };
        /**
         * Fires off all payloads in event queue and removes any tick registration
         */
        this.flush = () => {
            if (!this._player) {
                // Do not flush until we have initialized with a player. We check on each tick
                console.warn('Attempting to flush events before initialization or after teardown.');
                return;
            }
            if (this.eventQueue) {
                let item = undefined;
                try {
                    for (item of this.eventQueue) {
                        if (item.replacer) {
                            this._player.postClientMessage(item.type, JSON.stringify(item.payload, item.replacer));
                        }
                        else {
                            this._player.postClientMessage(item.type, JSON.stringify(item.payload));
                        }
                    }
                }
                catch (e) {
                    // Unable to post message, we'll need to drop the message, but let's warn with the stack for now
                    console.warn(`Unable to post client to message, is player invalidated? Invalidating event dispatcher player reference.\nError:${(0,_minecraft_core_utilities__WEBPACK_IMPORTED_MODULE_0__.stringFromException)(e)}\n${JSON.stringify(item)}\n`);
                    this._player = undefined;
                }
            }
            this.eventQueue = undefined;
        };
    }
}


/***/ }),

/***/ "./src/EventManager/ServerEvents/ServerEventPayloadMapping.ts":
/*!********************************************************************!*\
  !*** ./src/EventManager/ServerEvents/ServerEventPayloadMapping.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// The below asserts that the mapping above is exhaustive to all event types. If you have added a new event type,
// update the mapping above
const ValidatePayloadMapping = true;
ValidatePayloadMapping;



/***/ }),

/***/ "./src/EventManager/ServerEvents/index.ts":
/*!************************************************!*\
  !*** ./src/EventManager/ServerEvents/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServerEventPayloadMapping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServerEventPayloadMapping */ "./src/EventManager/ServerEvents/ServerEventPayloadMapping.ts");



/***/ }),

/***/ "./src/EventManager/index.ts":
/*!***********************************!*\
  !*** ./src/EventManager/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientEventDispatcher": () => (/* reexport safe */ _EventManager__WEBPACK_IMPORTED_MODULE_0__.ClientEventDispatcher),
/* harmony export */   "ClientEventListener": () => (/* reexport safe */ _EventManager__WEBPACK_IMPORTED_MODULE_0__.ClientEventListener)
/* harmony export */ });
/* harmony import */ var _EventManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventManager */ "./src/EventManager/EventManager.ts");
/* harmony import */ var _ClientEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientEvents */ "./src/EventManager/ClientEvents/index.ts");
/* harmony import */ var _ServerEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServerEvents */ "./src/EventManager/ServerEvents/index.ts");





/***/ }),

/***/ "./src/ExtensionRegistration.ts":
/*!**************************************!*\
  !*** ./src/ExtensionRegistration.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerEditorExtension": () => (/* binding */ registerEditorExtension)
/* harmony export */ });
/* harmony import */ var _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/editor-events */ "../editor-events/lib/index.js");
/* harmony import */ var _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @minecraft/server-editor-bindings-wrapper */ "../../module-wrappers/server-editor-bindings-wrapper/index.js");
/* harmony import */ var _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @minecraft/server-wrapper */ "../../module-wrappers/server-wrapper/index.js");
/* harmony import */ var _ClientListenerStatic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClientListenerStatic */ "./src/ClientListenerStatic.ts");
/* harmony import */ var _EventManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventManager */ "./src/EventManager/index.ts");
/* harmony import */ var _PlayerUISession__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayerUISession */ "./src/PlayerUISession.ts");






/**
 * Manages all extension instances for a given extension
 */
class ExtensionInstanceManager {
    constructor(_activate, _shutdown) {
        this._activate = _activate;
        this._shutdown = _shutdown;
        // For each activation which occurs, store off the extension context and a player UI session if a client has come online
        this.extensionContextToPlayerContext = new Map();
        this.teardownPlayerContext = (player) => {
            const playerContext = this.extensionContextToPlayerContext.get(player);
            if (!playerContext) {
                console.error('Receiving lifecycle teardown for an unknown player? Unable to properly before cleanup of extensions.');
                return;
            }
            if (!playerContext.uiSession) {
                console.error('Player is shutting down but no UI session preexisting for that player.');
                return;
            }
            // Manual shutdown
            this._shutdown(playerContext.uiSession);
            // Automatic clean up of disposables
            playerContext.disposables?.forEach(disposable => disposable.teardown());
            // Teardown ui session
            playerContext.uiSession.teardown();
            playerContext.uiSession = undefined;
        };
        this.onLifecycleEvent = (player, payload) => {
            switch (payload.type) {
                case _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.EditorLifecycleEventsType.OnInitialize: {
                    const playerContext = this.extensionContextToPlayerContext.get(player);
                    if (!playerContext) {
                        console.error('Receiving lifecycle activation for an unknown player? Unable to activate extensions.');
                        return;
                    }
                    if (playerContext.uiSession !== undefined) {
                        console.error('Shutdown event not previously received? Clearing old UI session.');
                    }
                    playerContext.uiSession = new _PlayerUISession__WEBPACK_IMPORTED_MODULE_5__.PlayerUISession(playerContext.editorContext, playerContext.playerEventDispatcher);
                    playerContext.disposables = this._activate(playerContext.uiSession);
                    break;
                }
                case _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.EditorLifecycleEventsType.OnTeardown: {
                    this.teardownPlayerContext(player);
                    break;
                }
            }
        };
    }
    onNewPlayerJoin(context) {
        if (this.extensionContextToPlayerContext.has(context.player)) {
            console.error('An existing extension is being reactivated for a player twice? Replacing old context and disposing existing session.');
            const playerContext = this.extensionContextToPlayerContext.get(context.player);
            if (playerContext?.uiSession) {
                this._shutdown(playerContext.uiSession);
            }
            playerContext?.lifecycleUnregister();
        }
        // On initial player join, we create the appropriate context
        this.extensionContextToPlayerContext.set(context.player, {
            editorContext: context,
            uiSession: undefined,
            playerEventDispatcher: new _EventManager__WEBPACK_IMPORTED_MODULE_4__.ClientEventDispatcher(_minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.system),
            lifecycleUnregister: (0,_ClientListenerStatic__WEBPACK_IMPORTED_MODULE_3__.getClientEventListener)().registerListener(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.EditorClientEventType.ClientLifecycleEvents, context.player, (payload) => {
                this.onLifecycleEvent(context.player, payload);
            }),
        });
    }
    onPlayerLeave(context) {
        const playerContext = this.extensionContextToPlayerContext.get(context.player);
        if (playerContext) {
            if (playerContext.uiSession) {
                this._shutdown(playerContext.uiSession);
            }
            // Flush all queued events in same tick to ensure native references are still valid
            playerContext.playerEventDispatcher.flush();
            playerContext.lifecycleUnregister();
        }
        else {
            console.error('No player context for the given player, unable to perform any clean up.');
        }
        this.extensionContextToPlayerContext.delete(context.player);
    }
}
/**
 * We track an ExtensionInstanceManager for each extension that is registered. The ExtensionInstanceManager tracks
 * individual player instances for a given extension
 */
const extensionManagerMap = new Map();
/**
 * Registers an editor extension into Minecraft. This function calls underlying functionality to register an extension but provides
 * helpful and contextual wrappers for individual client lifetimes. The onActivation function is called whenever a client
 * joins a session, while the shutdown is called when a client leaves. There may be other circumstances in which these are
 * called as well based on client state that is an implementation detail of the system.
 *
 * The generic type parameter exists as a mechanism for provide generic player contextual storage of data on the IPlayerUISession
 * object returned during activation. See IPlayerUISession for more information.
 *
 * @beta
 */
function registerEditorExtension(extensionName, activationFunction, shutdownFunction) {
    if (extensionManagerMap.has(extensionName)) {
        throw new Error('Extension name already registered!');
    }
    extensionManagerMap.set(extensionName, 
    // The type of the storage no longer matters here, we got what we needed out of it
    // so we cast it to unknown moving forward.
    new ExtensionInstanceManager(activationFunction, shutdownFunction));
    const onActivationWrapper = (arg) => {
        // On activation, a player has joined, so notify the instance manager
        if (!extensionManagerMap.has(extensionName)) {
            throw new Error('Activating an extension that does not exist');
        }
        extensionManagerMap.get(extensionName)?.onNewPlayerJoin(arg);
    };
    const onShutdownWrapper = (arg) => {
        // If this is called from native, we really are shutting down for a given player so forward to the instance manager
        // The instance manager itself should be cleaned up if there are no more players
        if (!extensionManagerMap.get(extensionName)) {
            throw new Error('Shutting down an extension that does not exist');
        }
        extensionManagerMap.get(extensionName)?.onPlayerLeave(arg);
    };
    return _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_1__.editor.registerExtension(extensionName, onActivationWrapper, onShutdownWrapper);
}


/***/ }),

/***/ "./src/LargeOperationHelper.ts":
/*!*************************************!*\
  !*** ./src/LargeOperationHelper.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeLargeOperation": () => (/* binding */ executeLargeOperation)
/* harmony export */ });
/* harmony import */ var _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/server-wrapper */ "../../module-wrappers/server-wrapper/index.js");

const MaxBlockOp = 8000;
/**
 * Executes an operation over a selection via chunks to allow splitting operation over multiple game ticks
 * @param selection - the selection to iterator over
 * @param operation - the operation to apply over each block location
 * @beta
 */
async function executeLargeOperation(selection, operation) {
    const blockIterator = selection.getBlockPositionIterator();
    let opCount = 0;
    for (const iteratorPos of blockIterator) {
        operation(iteratorPos);
        ++opCount;
        if (opCount > MaxBlockOp) {
            await new Promise(resolve => _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.system.run(resolve));
            opCount = 0;
        }
    }
}


/***/ }),

/***/ "./src/LocalizationHelper.ts":
/*!***********************************!*\
  !*** ./src/LocalizationHelper.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocalizationId": () => (/* binding */ getLocalizationId)
/* harmony export */ });
/**
 * Adds the resource pack editor prefix and returns the full localization ID
 * @beta
 */
function getLocalizationId(locId) {
    return 'resourcePack.editor.' + locId;
}


/***/ }),

/***/ "./src/PlayerUISession.ts":
/*!********************************!*\
  !*** ./src/PlayerUISession.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerUISession": () => (/* binding */ PlayerUISession)
/* harmony export */ });
/* harmony import */ var _minecraft_core_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/core-utilities */ "../core-utilities/lib/index.js");
/* harmony import */ var _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @minecraft/editor-events */ "../editor-events/lib/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/actions/index.ts");
/* harmony import */ var _ClientListenerStatic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClientListenerStatic */ "./src/ClientListenerStatic.ts");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Menu */ "./src/components/Menu.ts");
/* harmony import */ var _components_ModalToolContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ModalToolContainer */ "./src/components/ModalToolContainer.ts");
/* harmony import */ var _components_PropertyPane__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/PropertyPane */ "./src/components/PropertyPane.ts");
/* harmony import */ var _components_StatusBarItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/StatusBarItem */ "./src/components/StatusBarItem.ts");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input */ "./src/input/index.ts");
/* harmony import */ var _BuiltInUIManager_BuiltInUIManagerImpl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BuiltInUIManager/BuiltInUIManagerImpl */ "./src/BuiltInUIManager/BuiltInUIManagerImpl.ts");
/* harmony import */ var _BedrockSubscriptionCache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BedrockSubscriptionCache */ "./src/BedrockSubscriptionCache/index.ts");
/* harmony import */ var _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @minecraft/server-wrapper */ "../../module-wrappers/server-wrapper/index.js");












/**
 * Represents a UI session for a given player
 * @internal
 */
class PlayerUISession {
    constructor(_extensionContext, _clientEventDispatcher) {
        this._extensionContext = _extensionContext;
        this._clientEventDispatcher = _clientEventDispatcher;
        this._propertyPanes = new Map();
        this.scratchStorage = undefined;
        this.createPropertyPaneInternal = (options, parentPaneId) => {
            const newPane = new _components_PropertyPane__WEBPACK_IMPORTED_MODULE_6__.PropertyPane(this._clientEventDispatcher, options, (options, parentPaneId) => this.createPropertyPaneInternal(options, parentPaneId), parentPaneId);
            this._propertyPanes.set(newPane.id, newPane);
            return newPane;
        };
        this._clientEventDispatcher.initialize(this.extensionContext.player);
        this._eventSubscriptionCache = new _BedrockSubscriptionCache__WEBPACK_IMPORTED_MODULE_10__.BedrockEventSubscriptionCache(_minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_11__.world.events);
        this._inputManager = new _input__WEBPACK_IMPORTED_MODULE_8__.GlobalInputManager(this._clientEventDispatcher);
        this._builtInUIManager = new _BuiltInUIManager_BuiltInUIManagerImpl__WEBPACK_IMPORTED_MODULE_9__.BuiltInUIManagerImpl(this._clientEventDispatcher);
        this._actionManager = new _actions__WEBPACK_IMPORTED_MODULE_2__.ActionManagerImpl(this._clientEventDispatcher, (0,_ClientListenerStatic__WEBPACK_IMPORTED_MODULE_3__.getClientEventListener)(), this.extensionContext.player);
        this._modalToolContainer = new _components_ModalToolContainer__WEBPACK_IMPORTED_MODULE_5__.ModalToolContainer(this._clientEventDispatcher, this._actionManager);
        this._clientUXListenerUnregister = (0,_ClientListenerStatic__WEBPACK_IMPORTED_MODULE_3__.getClientEventListener)().registerListener(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorClientEventType.ClientUXEvents, this.extensionContext.player, (payload) => {
            switch (payload.type) {
                case _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ClientUXEventPayloadTypes.UpdatePropertyPane: {
                    const targetPane = this._propertyPanes.get(payload.paneId);
                    if (targetPane && targetPane instanceof _components_PropertyPane__WEBPACK_IMPORTED_MODULE_6__.PropertyPane) {
                        targetPane.setPropertyItemValue(payload.property, payload.newValue);
                    }
                    break;
                }
                case _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ClientUXEventPayloadTypes.PropertyPaneVisibilityChanged: {
                    const targetPane = this._propertyPanes.get(payload.id);
                    if (targetPane) {
                        // Event was targeting our instance
                        if (payload.visibility) {
                            targetPane.show();
                        }
                        else {
                            targetPane.hide();
                        }
                    }
                    break;
                }
                case _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ClientUXEventPayloadTypes.UpdateModalTool: {
                    const modalToolContainer = this._modalToolContainer;
                    modalToolContainer.setSelectedOptionId(payload.id, false);
                    break;
                }
                default:
                    (0,_minecraft_core_utilities__WEBPACK_IMPORTED_MODULE_0__.unreachable)(payload);
            }
        });
    }
    teardown() {
        this._inputManager.unregisterAllBindings();
        this._extensionContext.cursor.resetToDefaultState();
        this._actionManager.teardown();
        this._clientUXListenerUnregister();
        this._eventSubscriptionCache.teardown();
    }
    get toolRail() {
        return this._modalToolContainer;
    }
    createMenu(props) {
        const menu = new _components_Menu__WEBPACK_IMPORTED_MODULE_4__.Menu(props, this._clientEventDispatcher);
        return menu;
    }
    createPropertyPane(options) {
        return this.createPropertyPaneInternal(options);
    }
    createStatusBarItem(alignment, size) {
        return new _components_StatusBarItem__WEBPACK_IMPORTED_MODULE_7__.StatusBarItem(alignment, size, this._clientEventDispatcher);
    }
    get actionManager() {
        return this._actionManager;
    }
    get inputManager() {
        return this._inputManager;
    }
    get extensionContext() {
        return this._extensionContext;
    }
    get builtInUIManager() {
        return this._builtInUIManager;
    }
    get eventSubscriptionCache() {
        return this._eventSubscriptionCache;
    }
}


/***/ }),

/***/ "./src/actions/ActionManager.ts":
/*!**************************************!*\
  !*** ./src/actions/ActionManager.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/actions/ActionManagerImpl.ts":
/*!******************************************!*\
  !*** ./src/actions/ActionManagerImpl.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionManagerImpl": () => (/* binding */ ActionManagerImpl)
/* harmony export */ });
/* harmony import */ var _minecraft_core_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/core-utilities */ "../core-utilities/lib/index.js");
/* harmony import */ var _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @minecraft/editor-events */ "../editor-events/lib/index.js");
/* harmony import */ var _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @minecraft/server-wrapper */ "../../module-wrappers/server-wrapper/index.js");



/**
 * Implementation of the ActionManager
 */
class ActionManagerImpl {
    constructor(eventDispatcher, 
    // // ADO:836977 - Get it as a global static long term
    eventListener, player) {
        this.eventDispatcher = eventDispatcher;
        this.eventListener = eventListener;
        this.player = player;
        this.actionMapping = new Map();
        /**
         * Active tool ID.
         */
        this.activeToolId = '';
        /**
         * Creates an action and registers it on the client
         * @param rawAction - The raw action to create. See ActionTypes for supported parameters
         * @returns
         */
        this.createAction = (rawAction) => {
            const uniqueId = (0,_minecraft_core_utilities__WEBPACK_IMPORTED_MODULE_0__.guid)();
            const action = { ...rawAction, id: uniqueId };
            this.eventDispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorServerEventType.ServerActionEvents, {
                type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ServerActionEventType.Register,
                id: action.id,
                actionType: action.actionType,
            });
            this.actionMapping.set(uniqueId, { action });
            return action;
        };
        this.teardown = () => {
            this.unregisterListener();
        };
        this.onClientEvent = (payload) => {
            switch (payload.type) {
                case _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ClientActionEventType.ActionExecute: {
                    const actionData = this.actionMapping.get(payload.id);
                    if (actionData) {
                        const action = actionData.action;
                        // We are aware of the action that has fired, so execute the callback with the required parameters
                        if (action.actionType === payload.payload.type) {
                            switch (payload.payload.type) {
                                case _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.NoArgsAction: {
                                    action.onExecute();
                                    break;
                                }
                                case _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ActionTypes.MouseRayCastAction: {
                                    const ray = {
                                        direction: new _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.Vector(payload.payload.mouseRay.direction.x, payload.payload.mouseRay.direction.y, payload.payload.mouseRay.direction.z),
                                        location: {
                                            x: payload.payload.mouseRay.location.x,
                                            y: payload.payload.mouseRay.location.y,
                                            z: payload.payload.mouseRay.location.z,
                                        },
                                        cursorBlockLocation: {
                                            x: payload.payload.mouseRay.cursorBlockLocation.x,
                                            y: payload.payload.mouseRay.cursorBlockLocation.y,
                                            z: payload.payload.mouseRay.cursorBlockLocation.z,
                                        },
                                        rayHit: payload.payload.mouseRay.rayHit,
                                    };
                                    action.onExecute(ray, payload.payload.mouseProps);
                                }
                            }
                        }
                        else {
                            // Something is wrong here, we should log in JS long term but need to figure out logging story
                        }
                    }
                }
            }
        };
        this.unregisterListener = this.eventListener.registerListener(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorClientEventType.ClientActionEvents, this.player, this.onClientEvent);
    }
}


/***/ }),

/***/ "./src/actions/UXAction.ts":
/*!*********************************!*\
  !*** ./src/actions/UXAction.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/actions/index.ts":
/*!******************************!*\
  !*** ./src/actions/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionManagerImpl": () => (/* reexport safe */ _ActionManagerImpl__WEBPACK_IMPORTED_MODULE_1__.ActionManagerImpl)
/* harmony export */ });
/* harmony import */ var _ActionManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionManager */ "./src/actions/ActionManager.ts");
/* harmony import */ var _ActionManagerImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionManagerImpl */ "./src/actions/ActionManagerImpl.ts");
/* harmony import */ var _UXAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UXAction */ "./src/actions/UXAction.ts");





/***/ }),

/***/ "./src/components/BaseControl.ts":
/*!***************************************!*\
  !*** ./src/components/BaseControl.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseControl": () => (/* binding */ BaseControl)
/* harmony export */ });
class BaseControl {
    constructor() {
        this._visible = true;
        this._enabled = true;
        this._disposed = false;
    }
    get visible() {
        return this._visible;
    }
    get enabled() {
        return this._enabled;
    }
    hide() {
        this._visible = false;
        this.update(true);
    }
    show() {
        this._visible = true;
        this.update();
    }
    get disposed() {
        return this._disposed;
    }
    set disposed(value) {
        this._disposed = value;
    }
    dispose() {
        this._sendDestroyMessage();
        this._disposed = true;
    }
    update(force) {
        if (!force) {
            if (this.disposed || !this.visible) {
                return;
            }
        }
        this._sendUpdateMessage();
    }
}


/***/ }),

/***/ "./src/components/IMenu.ts":
/*!*********************************!*\
  !*** ./src/components/IMenu.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/components/IModalTool.ts":
/*!**************************************!*\
  !*** ./src/components/IModalTool.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/components/IPropertyItem.ts":
/*!*****************************************!*\
  !*** ./src/components/IPropertyItem.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isIPropertyItemOptions": () => (/* binding */ isIPropertyItemOptions),
/* harmony export */   "isIPropertyItemOptionsBlocks": () => (/* binding */ isIPropertyItemOptionsBlocks),
/* harmony export */   "isIPropertyItemOptionsButton": () => (/* binding */ isIPropertyItemOptionsButton),
/* harmony export */   "isIPropertyItemOptionsDropdown": () => (/* binding */ isIPropertyItemOptionsDropdown),
/* harmony export */   "isIPropertyItemOptionsNumber": () => (/* binding */ isIPropertyItemOptionsNumber),
/* harmony export */   "isIPropertyItemOptionsSubPane": () => (/* binding */ isIPropertyItemOptionsSubPane),
/* harmony export */   "isIPropertyItemOptionsVec3": () => (/* binding */ isIPropertyItemOptionsVec3)
/* harmony export */ });
function isIPropertyItemOptions(propertyItemOptions) {
    return propertyItemOptions !== undefined && 'titleStringId' in propertyItemOptions;
}
function isIPropertyItemOptionsNumber(propertyItemOptions) {
    return propertyItemOptions !== undefined && 'min' in propertyItemOptions;
}
function isIPropertyItemOptionsBlocks(propertyItemOptions) {
    return propertyItemOptions !== undefined && 'allowedBlocks' in propertyItemOptions;
}
function isIPropertyItemOptionsDropdown(propertyItemOptions) {
    return propertyItemOptions !== undefined && 'dropdownItems' in propertyItemOptions;
}
function isIPropertyItemOptionsSubPane(propertyItemOptions) {
    return propertyItemOptions !== undefined && 'pane' in propertyItemOptions;
}
function isIPropertyItemOptionsVec3(propertyItemOptions) {
    return (propertyItemOptions !== undefined &&
        'minX' &&
        'maxX' &&
        'minY' &&
        'maxY' &&
        'minZ' &&
        'maxZ' in propertyItemOptions);
}
function isIPropertyItemOptionsButton(propertyItemOptions) {
    return propertyItemOptions !== undefined && 'variant' in propertyItemOptions;
}


/***/ }),

/***/ "./src/components/IPropertyPane.ts":
/*!*****************************************!*\
  !*** ./src/components/IPropertyPane.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/components/IStatusBarItem.ts":
/*!******************************************!*\
  !*** ./src/components/IStatusBarItem.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorStatusBarAlignment": () => (/* binding */ EditorStatusBarAlignment)
/* harmony export */ });
/**
 * @beta
 */
var EditorStatusBarAlignment;
(function (EditorStatusBarAlignment) {
    EditorStatusBarAlignment[EditorStatusBarAlignment["Right"] = 0] = "Right";
    EditorStatusBarAlignment[EditorStatusBarAlignment["Left"] = 1] = "Left";
})(EditorStatusBarAlignment || (EditorStatusBarAlignment = {}));


/***/ }),

/***/ "./src/components/Menu.ts":
/*!********************************!*\
  !*** ./src/components/Menu.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _minecraft_core_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/core-utilities */ "../core-utilities/lib/index.js");
/* harmony import */ var _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @minecraft/editor-events */ "../editor-events/lib/index.js");
/* harmony import */ var _BaseControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseControl */ "./src/components/BaseControl.ts");



class Menu extends _BaseControl__WEBPACK_IMPORTED_MODULE_2__.BaseControl {
    constructor(props, _dispatcher, _actionId, _parent) {
        super();
        this._dispatcher = _dispatcher;
        this._actionId = _actionId;
        this._parent = _parent;
        this._disposed = false;
        this._id = (0,_minecraft_core_utilities__WEBPACK_IMPORTED_MODULE_0__.guid)();
        this._submenu = [];
        this._displayStringLocId = props.displayStringLocId;
        this._name = props.name;
        this.update();
        // After initial update that creates the control, bind the action to the control. This only happens at construction
        // or if the action is explicitly replaced
        if (this._actionId) {
            this._dispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorServerEventType.ServerUXEvents, {
                type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ServerUXEventType.BindActionToControl,
                actionId: this._actionId,
                controlId: this._id,
            });
        }
    }
    get id() {
        return this._id;
    }
    get submenu() {
        return this._submenu;
    }
    get displayStringLocId() {
        return this._displayStringLocId;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
        this.update();
    }
    dispose() {
        super.dispose();
    }
    get disposed() {
        return this._disposed;
    }
    set disposed(value) {
        this._disposed = value;
    }
    addItem(params, action) {
        const child = new Menu(params, this._dispatcher, action?.id, this);
        this._submenu.push(child);
        return child;
    }
    replaceAction(action) {
        if (this._actionId) {
            this._dispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorServerEventType.ServerUXEvents, {
                type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ServerUXEventType.RemoveActionBindingFromControl,
                actionId: this._actionId,
                controlId: this._id,
            });
        }
        this._actionId = action.id;
        this._dispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorServerEventType.ServerUXEvents, {
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ServerUXEventType.BindActionToControl,
            actionId: this._actionId,
            controlId: this._id,
        });
    }
    _sendUpdateMessage() {
        this._dispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorServerEventType.ServerUXEvents, {
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ServerUXEventType.UpdateMenu,
            id: this._id,
            parentId: this._parent?.id,
            name: this.name,
            displayStringLocId: this.displayStringLocId,
            enabled: this.enabled,
            visible: this.visible,
            shortcut: '', // Remove on event migration
        });
    }
    _sendDestroyMessage() {
        this._dispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorServerEventType.ServerUXEvents, {
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ServerUXEventType.DestroyMenu,
            id: this._id,
        });
    }
    _removeChild(value) {
        this._submenu = this._submenu.filter((c) => c !== value);
    }
    addSeparator() {
        throw new Error('Method not implemented.');
    }
}


/***/ }),

/***/ "./src/components/ModalTool.ts":
/*!*************************************!*\
  !*** ./src/components/ModalTool.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalTool": () => (/* binding */ ModalTool)
/* harmony export */ });
/* harmony import */ var _minecraft_core_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/core-utilities */ "../core-utilities/lib/index.js");
/* harmony import */ var _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @minecraft/editor-events */ "../editor-events/lib/index.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input */ "./src/input/index.ts");
/* harmony import */ var _BaseControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseControl */ "./src/components/BaseControl.ts");





/**
 * @beta
 */
class ModalTool extends _BaseControl__WEBPACK_IMPORTED_MODULE_3__.BaseControl {
    constructor(_eventDispatcher, parent, params) {
        super();
        this._eventDispatcher = _eventDispatcher;
        this.onModalToolActivation = new _minecraft_core_utilities__WEBPACK_IMPORTED_MODULE_0__.EventSinkImpl();
        this._id = (0,_minecraft_core_utilities__WEBPACK_IMPORTED_MODULE_0__.guid)();
        this._parent = parent;
        this._panesBound = [];
        this._modalToolParams = params;
        this._inputManager = new _input__WEBPACK_IMPORTED_MODULE_2__.ContextInputManager(this._eventDispatcher, _input__WEBPACK_IMPORTED_MODULE_2__.EditorInputContext.Viewport);
        this.update();
    }
    get id() {
        return this._id;
    }
    hide() {
        this._visible = false;
        this.update();
    }
    show() {
        this._visible = true;
        this.update();
    }
    dispose() {
        this._inputManager.unregisterBindings();
        this._parent.removeTool(this._id);
        super.dispose();
    }
    bindPropertyPane(pane) {
        this._panesBound.push(pane);
    }
    registerMouseButtonBinding(action) {
        this._inputManager.registerMouseButtonBinding(action, this.id);
    }
    registerMouseWheelBinding(action) {
        this._inputManager.registerMouseWheelBinding(action, this.id);
    }
    registerMouseDragBinding(action) {
        this._inputManager.registerMouseDragBinding(action, this.id);
    }
    registerKeyBinding(action, button, modifier = _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.InputModifier.None) {
        this._inputManager.registerKeyBinding(action, button, modifier, this.id);
    }
    // TODO: We shouldn't be exposing it but calling it from dispose
    unregisterInputBindings() {
        this._inputManager.unregisterBindings();
    }
    onActiveToolUpdated(isActive) {
        // Notify any listeners of this
        this.onModalToolActivation.trigger({ isActiveTool: isActive });
        for (const pane of this._panesBound) {
            if (isActive) {
                pane.show();
            }
            else {
                pane.hide();
            }
        }
    }
    _sendUpdateMessage() {
        this._eventDispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorServerEventType.ServerUXEvents, {
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ServerUXEventType.UpdateModalToolOption,
            id: this._id,
            icon: this._modalToolParams.icon ? this._modalToolParams.icon : '',
            enabled: this.enabled,
            visible: this.visible,
            tooltipData: {
                titleString: this._modalToolParams.displayString,
                titleStringLocId: this._modalToolParams.displayStringLocId,
                descriptionString: this._modalToolParams.tooltip ? this._modalToolParams.tooltip : '',
                descriptionStringLocId: this._modalToolParams.tooltipLocId,
            },
        });
    }
    _sendDestroyMessage() {
        this._eventDispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorServerEventType.ServerUXEvents, {
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ServerUXEventType.DestroyModalToolOption,
            id: this._id,
        });
    }
}


/***/ }),

/***/ "./src/components/ModalToolContainer.ts":
/*!**********************************************!*\
  !*** ./src/components/ModalToolContainer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalToolContainer": () => (/* binding */ ModalToolContainer)
/* harmony export */ });
/* harmony import */ var _BaseControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseControl */ "./src/components/BaseControl.ts");
/* harmony import */ var _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @minecraft/editor-events */ "../editor-events/lib/index.js");
/* harmony import */ var _ModalTool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalTool */ "./src/components/ModalTool.ts");



class ModalToolContainer extends _BaseControl__WEBPACK_IMPORTED_MODULE_0__.BaseControl {
    constructor(_eventDispatcher, _actionManager) {
        super();
        this._eventDispatcher = _eventDispatcher;
        this._actionManager = _actionManager;
        this._currentTools = [];
        this._selectedToolId = undefined;
    }
    get id() {
        return 'editorUI:toolRail';
    }
    get currentTools() {
        return this._currentTools;
    }
    get selectedOptionId() {
        return this._selectedToolId;
    }
    setSelectedOptionId(value, update) {
        const previousSelectedValue = this._selectedToolId;
        this._selectedToolId = value;
        // Update the action manager with the current selected tool
        this._actionManager.activeToolId = this._selectedToolId;
        for (const option of this._currentTools) {
            if (option.id === this._selectedToolId) {
                option.onActiveToolUpdated(true);
            }
            else if (option.id === previousSelectedValue) {
                option.onActiveToolUpdated(false);
            }
        }
        // Don't send the packet update to the client if the current tool didn't actually change
        if (update && previousSelectedValue !== this._selectedToolId) {
            this.update();
        }
    }
    addTool(params) {
        const child = new _ModalTool__WEBPACK_IMPORTED_MODULE_2__.ModalTool(this._eventDispatcher, this, params);
        this._currentTools.push(child);
        return child;
    }
    removeTool(id) {
        this._currentTools = this._currentTools.filter(option => option.id !== id);
    }
    _sendUpdateMessage() {
        this._eventDispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorServerEventType.ServerUXEvents, {
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ServerUXEventType.UpdateModalToolContainer,
            enabled: this._enabled,
            visible: this._visible,
            selectedOptionId: this._selectedToolId,
        });
    }
    _sendDestroyMessage() {
        this._eventDispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorServerEventType.ServerUXEvents, {
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ServerUXEventType.DestroyModalToolContainer,
        });
    }
}


/***/ }),

/***/ "./src/components/PropertyItem.ts":
/*!****************************************!*\
  !*** ./src/components/PropertyItem.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyItem": () => (/* binding */ PropertyItem)
/* harmony export */ });
/* harmony import */ var _minecraft_core_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/core-utilities */ "../core-utilities/lib/index.js");
/* harmony import */ var _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @minecraft/editor-events */ "../editor-events/lib/index.js");
/* harmony import */ var _utils_Serialization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Serialization */ "./src/utils/Serialization.ts");



/**
 * @internal
 */
class PropertyItem {
    constructor(_clientDispatcher, obj, property, paneId, typeName, _propertyUXDispatcher, propertyItemOptions, action) {
        this._clientDispatcher = _clientDispatcher;
        this._propertyUXDispatcher = _propertyUXDispatcher;
        this.action = action;
        this._id = (0,_minecraft_core_utilities__WEBPACK_IMPORTED_MODULE_0__.guid)();
        this._obj = obj;
        this._property = property;
        this._typeName = typeName;
        this._paneId = paneId;
        this._propertyItemOptions = propertyItemOptions;
        this._visible = propertyItemOptions?.visible ?? true;
        this._enable = propertyItemOptions?.enable ?? true;
        if (this.action) {
            this._propertyUXDispatcher.dispatchUXEvent({
                type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ServerUXEventType.BindActionToControl,
                actionId: this.action.id,
                controlId: this.id,
            });
        }
    }
    replaceBoundAction(action) {
        if (this.action) {
            this._propertyUXDispatcher.dispatchUXEvent({
                type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ServerUXEventType.RemoveActionBindingFromControl,
                actionId: this.action.id,
                controlId: this.id,
            });
        }
        if (action) {
            this.action = action;
            this._propertyUXDispatcher.dispatchUXEvent({
                type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ServerUXEventType.BindActionToControl,
                actionId: this.action.id,
                controlId: this.id,
            });
        }
    }
    get id() {
        return this._id;
    }
    get paneId() {
        return this._paneId;
    }
    get obj() {
        return this._obj;
    }
    get property() {
        return this._property;
    }
    get typeName() {
        return this._typeName;
    }
    get propertyItemOptions() {
        return this._propertyItemOptions;
    }
    get enable() {
        return this._enable;
    }
    set enable(value) {
        this._enable = value;
        this.sendPropertyUpdate();
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        this._visible = value;
        this.sendPropertyUpdate();
    }
    get value() {
        return this._obj[this._property];
    }
    sendPropertyUpdate() {
        this._clientDispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorServerEventType.ServerUXEvents, (0,_utils_Serialization__WEBPACK_IMPORTED_MODULE_2__.createPropertyItemPayload)(this), _utils_Serialization__WEBPACK_IMPORTED_MODULE_2__.paneReplacer);
    }
    dispose() { }
}


/***/ }),

/***/ "./src/components/PropertyPane.ts":
/*!****************************************!*\
  !*** ./src/components/PropertyPane.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyPane": () => (/* binding */ PropertyPane)
/* harmony export */ });
/* harmony import */ var _minecraft_core_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/core-utilities */ "../core-utilities/lib/index.js");
/* harmony import */ var _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @minecraft/editor-events */ "../editor-events/lib/index.js");
/* harmony import */ var _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @minecraft/server-wrapper */ "../../module-wrappers/server-wrapper/index.js");
/* harmony import */ var _utils_Serialization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Serialization */ "./src/utils/Serialization.ts");
/* harmony import */ var _BaseControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BaseControl */ "./src/components/BaseControl.ts");
/* harmony import */ var _IPropertyItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IPropertyItem */ "./src/components/IPropertyItem.ts");
/* harmony import */ var _isPropertyItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isPropertyItem */ "./src/components/isPropertyItem.ts");
/* harmony import */ var _PropertyItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PropertyItem */ "./src/components/PropertyItem.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _AllowedBlocks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../AllowedBlocks */ "./src/AllowedBlocks.ts");










const emptyObject = {
    empty: 'empty',
};
class PropertyPane extends _BaseControl__WEBPACK_IMPORTED_MODULE_4__.BaseControl {
    constructor(_clientDispatcher, options, subPaneFactory, parentPaneId) {
        super();
        this._clientDispatcher = _clientDispatcher;
        this.options = options;
        this.subPaneFactory = subPaneFactory;
        this._propertyUXDispatcher = {
            dispatchUXEvent: (payload) => {
                this._clientDispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorServerEventType.ServerUXEvents, payload);
            },
        };
        this.onPropertyPaneVisibilityUpdated = new _minecraft_core_utilities__WEBPACK_IMPORTED_MODULE_0__.EventSinkImpl();
        this._id = (0,_minecraft_core_utilities__WEBPACK_IMPORTED_MODULE_0__.guid)();
        this._titleStringId = options.titleStringId;
        this._titleAltText = options.titleAltText;
        this._parentPaneId = parentPaneId;
        this._width = options.width;
        this._propertyItems = [];
    }
    setPropertyItemValue(propertyName, newValue) {
        const propertyItem = this.findProperty(propertyName);
        if (propertyItem) {
            // Taking old value.
            const oldValue = propertyItem.value;
            if (propertyItem.typeName === _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EDITOR_PANE_PROPERTY_ITEM_TYPE.BlockPicker) {
                // Parse strings to BlockType.
                const blockId = newValue;
                // We check if id has a custom namespace, otherwise we use the default namespace
                newValue = _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_2__.MinecraftBlockTypes.get(blockId.includes(':') ? blockId : `minecraft:${blockId}`);
            }
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_8__.isObject)(newValue)) {
                Object.assign(propertyItem.obj[propertyItem.property], newValue);
            }
            else {
                propertyItem.obj[propertyItem.property] = newValue;
            }
            if ((0,_isPropertyItem__WEBPACK_IMPORTED_MODULE_6__.isPropertyItem)(propertyItem) &&
                propertyItem.propertyItemOptions !== undefined &&
                propertyItem.propertyItemOptions.onChange !== undefined) {
                propertyItem.propertyItemOptions.onChange(propertyItem.obj, propertyItem.property, oldValue, newValue);
            }
        }
    }
    get id() {
        return this._id;
    }
    get parentPaneId() {
        return this._parentPaneId;
    }
    get propertyItems() {
        return this._propertyItems;
    }
    get titleStringId() {
        return this._titleStringId;
    }
    set titleStringId(value) {
        this._titleStringId = value;
    }
    get titleAltText() {
        return this._titleAltText;
    }
    set titleAltText(value) {
        this._titleAltText = value;
    }
    get width() {
        return this._width;
    }
    findProperty(propertyName) {
        return this._propertyItems.find(item => item.property === propertyName);
    }
    findPropertyRecursive(propertyName) {
        for (const item of this._propertyItems) {
            if (item.property === propertyName) {
                return item;
            }
            if (item.typeName === _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EDITOR_PANE_PROPERTY_ITEM_TYPE.SubPane &&
                (0,_isPropertyItem__WEBPACK_IMPORTED_MODULE_6__.isPropertyItem)(item) &&
                (0,_IPropertyItem__WEBPACK_IMPORTED_MODULE_5__.isIPropertyItemOptionsSubPane)(item.propertyItemOptions) &&
                item.propertyItemOptions.pane instanceof PropertyPane) {
                const subResult = item.propertyItemOptions.pane.findPropertyRecursive(propertyName);
                if (subResult)
                    return subResult;
            }
        }
        return undefined;
    }
    createPropertyPane(options) {
        const subPane = this.subPaneFactory(options, this._id);
        const propertyItemOptions = { pane: subPane };
        const newItem = new _PropertyItem__WEBPACK_IMPORTED_MODULE_7__.PropertyItem(this._clientDispatcher, emptyObject, 'empty', this._id, _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EDITOR_PANE_PROPERTY_ITEM_TYPE.SubPane, this._propertyUXDispatcher, propertyItemOptions);
        this._propertyItems.push(newItem);
        return subPane;
    }
    removePropertyPane(paneToRemove) {
        for (let i = 0; i < this._propertyItems.length; ++i) {
            const item = this._propertyItems[i];
            if (item.typeName === _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EDITOR_PANE_PROPERTY_ITEM_TYPE.SubPane &&
                (0,_isPropertyItem__WEBPACK_IMPORTED_MODULE_6__.isPropertyItem)(item) &&
                (0,_IPropertyItem__WEBPACK_IMPORTED_MODULE_5__.isIPropertyItemOptionsSubPane)(item.propertyItemOptions) &&
                item.propertyItemOptions.pane instanceof PropertyPane &&
                item.propertyItemOptions.pane.id === paneToRemove.id) {
                this._propertyItems.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    hide() {
        const shouldNotify = this._visible;
        super.hide();
        if (shouldNotify) {
            this.onPropertyPaneVisibilityUpdated.trigger({ isVisible: this._visible });
        }
    }
    show() {
        const shouldNotify = !this._visible;
        super.show();
        if (shouldNotify) {
            this.onPropertyPaneVisibilityUpdated.trigger({ isVisible: this._visible });
        }
    }
    addString(obj, property, options) {
        const newItem = new _PropertyItem__WEBPACK_IMPORTED_MODULE_7__.PropertyItem(this._clientDispatcher, obj, property, this._id, _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EDITOR_PANE_PROPERTY_ITEM_TYPE.String, this._propertyUXDispatcher, options);
        this._propertyItems.push(newItem);
        return newItem;
    }
    addBool(obj, property, options) {
        const newItem = new _PropertyItem__WEBPACK_IMPORTED_MODULE_7__.PropertyItem(this._clientDispatcher, obj, property, this._id, _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EDITOR_PANE_PROPERTY_ITEM_TYPE.Boolean, this._propertyUXDispatcher, options);
        this._propertyItems.push(newItem);
        return newItem;
    }
    addNumber(obj, property, options) {
        const newItem = new _PropertyItem__WEBPACK_IMPORTED_MODULE_7__.PropertyItem(this._clientDispatcher, obj, property, this._id, _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EDITOR_PANE_PROPERTY_ITEM_TYPE.Number, this._propertyUXDispatcher, options);
        this._propertyItems.push(newItem);
        return newItem;
    }
    addBlockPicker(obj, property, options) {
        // Allowed blocks list will come from client side: US 902913
        if (options && options.allowedBlocks === undefined) {
            options.allowedBlocks = _AllowedBlocks__WEBPACK_IMPORTED_MODULE_9__.allowedBlocks;
        }
        this._width = this._width && this._width >= 36 ? this._width : 36;
        const newItem = new _PropertyItem__WEBPACK_IMPORTED_MODULE_7__.PropertyItem(this._clientDispatcher, obj, property, this._id, _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EDITOR_PANE_PROPERTY_ITEM_TYPE.BlockPicker, this._propertyUXDispatcher, options);
        this._propertyItems.push(newItem);
        return newItem;
    }
    addButtonAndBindAction(action, options) {
        const newItem = new _PropertyItem__WEBPACK_IMPORTED_MODULE_7__.PropertyItem(this._clientDispatcher, { EMPTY: undefined }, 'EMPTY', this._id, _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EDITOR_PANE_PROPERTY_ITEM_TYPE.Action, this._propertyUXDispatcher, options, action);
        this._propertyItems.push(newItem);
        return newItem;
    }
    addDropdown(obj, property, options) {
        const newItem = new _PropertyItem__WEBPACK_IMPORTED_MODULE_7__.PropertyItem(this._clientDispatcher, obj, property, this._id, _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EDITOR_PANE_PROPERTY_ITEM_TYPE.Dropdown, this._propertyUXDispatcher, options);
        this._propertyItems.push(newItem);
        return newItem;
    }
    addDivider() {
        const newItem = new _PropertyItem__WEBPACK_IMPORTED_MODULE_7__.PropertyItem(this._clientDispatcher, emptyObject, 'empty', this._id, _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EDITOR_PANE_PROPERTY_ITEM_TYPE.Divider, this._propertyUXDispatcher);
        this._propertyItems.push(newItem);
        return newItem;
    }
    addVec3(obj, property, options) {
        const newItem = new _PropertyItem__WEBPACK_IMPORTED_MODULE_7__.PropertyItem(this._clientDispatcher, obj, property, this._id, _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EDITOR_PANE_PROPERTY_ITEM_TYPE.Vec3, this._propertyUXDispatcher, options);
        this._propertyItems.push(newItem);
        return newItem;
    }
    _sendUpdateMessage() {
        this._clientDispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorServerEventType.ServerUXEvents, (0,_utils_Serialization__WEBPACK_IMPORTED_MODULE_3__.createPanePayload)(this), _utils_Serialization__WEBPACK_IMPORTED_MODULE_3__.paneReplacer);
    }
    _sendDestroyMessage() {
        this._clientDispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.EditorServerEventType.ServerUXEvents, {
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_1__.ServerUXEventType.DestroyPropertyPane,
            id: this._id,
        });
    }
}


/***/ }),

/***/ "./src/components/StatusBarItem.ts":
/*!*****************************************!*\
  !*** ./src/components/StatusBarItem.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusBarItem": () => (/* binding */ StatusBarItem)
/* harmony export */ });
/* harmony import */ var _BaseControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseControl */ "./src/components/BaseControl.ts");
/* harmony import */ var _minecraft_core_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @minecraft/core-utilities */ "../core-utilities/lib/index.js");
/* harmony import */ var _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @minecraft/editor-events */ "../editor-events/lib/index.js");



class StatusBarItem extends _BaseControl__WEBPACK_IMPORTED_MODULE_0__.BaseControl {
    constructor(alignment, size, _eventDispatcher) {
        super();
        this._eventDispatcher = _eventDispatcher;
        this._id = (0,_minecraft_core_utilities__WEBPACK_IMPORTED_MODULE_1__.guid)();
        this._alignment = alignment;
        this._size = size;
        this._text = '';
    }
    get id() {
        return this._id;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
        this.update();
    }
    _sendUpdateMessage() {
        this._eventDispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_2__.EditorServerEventType.ServerUXEvents, {
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_2__.ServerUXEventType.UpdateStatusBarItem,
            id: this._id,
            alignment: this._alignment,
            size: this._size,
            enabled: this._enabled,
            visible: this._visible,
            text: this._text,
        });
    }
    _sendDestroyMessage() {
        this._eventDispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_2__.EditorServerEventType.ServerUXEvents, {
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_2__.ServerUXEventType.DestroyStatusBarItem,
            id: this._id,
        });
    }
}


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseControl": () => (/* reexport safe */ _BaseControl__WEBPACK_IMPORTED_MODULE_0__.BaseControl),
/* harmony export */   "EditorStatusBarAlignment": () => (/* reexport safe */ _IStatusBarItem__WEBPACK_IMPORTED_MODULE_4__.EditorStatusBarAlignment),
/* harmony export */   "Menu": () => (/* reexport safe */ _Menu__WEBPACK_IMPORTED_MODULE_6__.Menu),
/* harmony export */   "ModalTool": () => (/* reexport safe */ _ModalTool__WEBPACK_IMPORTED_MODULE_11__.ModalTool),
/* harmony export */   "ModalToolContainer": () => (/* reexport safe */ _ModalToolContainer__WEBPACK_IMPORTED_MODULE_10__.ModalToolContainer),
/* harmony export */   "PropertyItem": () => (/* reexport safe */ _PropertyItem__WEBPACK_IMPORTED_MODULE_7__.PropertyItem),
/* harmony export */   "PropertyPane": () => (/* reexport safe */ _PropertyPane__WEBPACK_IMPORTED_MODULE_8__.PropertyPane),
/* harmony export */   "StatusBarItem": () => (/* reexport safe */ _StatusBarItem__WEBPACK_IMPORTED_MODULE_9__.StatusBarItem),
/* harmony export */   "isIPropertyItemOptions": () => (/* reexport safe */ _IPropertyItem__WEBPACK_IMPORTED_MODULE_2__.isIPropertyItemOptions),
/* harmony export */   "isIPropertyItemOptionsBlocks": () => (/* reexport safe */ _IPropertyItem__WEBPACK_IMPORTED_MODULE_2__.isIPropertyItemOptionsBlocks),
/* harmony export */   "isIPropertyItemOptionsButton": () => (/* reexport safe */ _IPropertyItem__WEBPACK_IMPORTED_MODULE_2__.isIPropertyItemOptionsButton),
/* harmony export */   "isIPropertyItemOptionsDropdown": () => (/* reexport safe */ _IPropertyItem__WEBPACK_IMPORTED_MODULE_2__.isIPropertyItemOptionsDropdown),
/* harmony export */   "isIPropertyItemOptionsNumber": () => (/* reexport safe */ _IPropertyItem__WEBPACK_IMPORTED_MODULE_2__.isIPropertyItemOptionsNumber),
/* harmony export */   "isIPropertyItemOptionsSubPane": () => (/* reexport safe */ _IPropertyItem__WEBPACK_IMPORTED_MODULE_2__.isIPropertyItemOptionsSubPane),
/* harmony export */   "isIPropertyItemOptionsVec3": () => (/* reexport safe */ _IPropertyItem__WEBPACK_IMPORTED_MODULE_2__.isIPropertyItemOptionsVec3),
/* harmony export */   "isPropertyItem": () => (/* reexport safe */ _isPropertyItem__WEBPACK_IMPORTED_MODULE_12__.isPropertyItem)
/* harmony export */ });
/* harmony import */ var _BaseControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseControl */ "./src/components/BaseControl.ts");
/* harmony import */ var _IMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IMenu */ "./src/components/IMenu.ts");
/* harmony import */ var _IPropertyItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IPropertyItem */ "./src/components/IPropertyItem.ts");
/* harmony import */ var _IPropertyPane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IPropertyPane */ "./src/components/IPropertyPane.ts");
/* harmony import */ var _IStatusBarItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IStatusBarItem */ "./src/components/IStatusBarItem.ts");
/* harmony import */ var _IModalTool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IModalTool */ "./src/components/IModalTool.ts");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menu */ "./src/components/Menu.ts");
/* harmony import */ var _PropertyItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PropertyItem */ "./src/components/PropertyItem.ts");
/* harmony import */ var _PropertyPane__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PropertyPane */ "./src/components/PropertyPane.ts");
/* harmony import */ var _StatusBarItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StatusBarItem */ "./src/components/StatusBarItem.ts");
/* harmony import */ var _ModalToolContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ModalToolContainer */ "./src/components/ModalToolContainer.ts");
/* harmony import */ var _ModalTool__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ModalTool */ "./src/components/ModalTool.ts");
/* harmony import */ var _isPropertyItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./isPropertyItem */ "./src/components/isPropertyItem.ts");















/***/ }),

/***/ "./src/components/isPropertyItem.ts":
/*!******************************************!*\
  !*** ./src/components/isPropertyItem.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPropertyItem": () => (/* binding */ isPropertyItem)
/* harmony export */ });
/**
 * @internal
 */
function isPropertyItem(propertyItem) {
    return propertyItem !== undefined && 'propertyItemOptions' in propertyItem;
}


/***/ }),

/***/ "./src/input/BaseInputManager.ts":
/*!***************************************!*\
  !*** ./src/input/BaseInputManager.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseInputManager": () => (/* binding */ BaseInputManager)
/* harmony export */ });
/* harmony import */ var _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/editor-events */ "../editor-events/lib/index.js");

/**
 * @beta
 */
class BaseInputManager {
    constructor(eventDispatcher) {
        this.eventDispatcher = eventDispatcher;
        this._sendUnregisterKeyBindingEvent = this._sendUnregisterKeyBindingEvent.bind(this);
        this._sendUnregisterMouseBindingEvent = this._sendUnregisterMouseBindingEvent.bind(this);
        this.unregisterAllBindings = this.unregisterAllBindings.bind(this);
        this._bindingCleanupHandles = [];
        this._sendUnregisterKeyBindingEvent.bind(this);
        this._sendUnregisterMouseBindingEvent.bind(this);
    }
    _sendRegisterKeyBindingEvent(inputContextId, eventId, button, modifier, inputType) {
        this.eventDispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.EditorServerEventType.ServerInputBindingEvents, {
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.ServerInputBindingEventType.RegisterKeyboardBinding,
            inputDevice: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.InputDevice.Keyboard,
            contextId: inputContextId,
            actionId: eventId,
            button,
            inputType,
            modifier,
        });
        return () => {
            this._sendUnregisterKeyBindingEvent(inputContextId, eventId);
        };
    }
    _sendUnregisterKeyBindingEvent(inputContextId, eventId) {
        this.eventDispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.EditorServerEventType.ServerInputBindingEvents, {
            inputDevice: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.InputDevice.Keyboard,
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.ServerInputBindingEventType.Unregister,
            contextId: inputContextId,
            actionId: eventId,
        });
    }
    _sendRegisterMouseBindingEvent(inputContextId, eventId, mouseAction) {
        this.eventDispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.EditorServerEventType.ServerInputBindingEvents, {
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.ServerInputBindingEventType.RegisterMouseBinding,
            inputDevice: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.InputDevice.Mouse,
            contextId: inputContextId,
            actionId: eventId,
            mouseAction,
        });
        return () => {
            this._sendUnregisterMouseBindingEvent(inputContextId, eventId);
        };
    }
    _sendUnregisterMouseBindingEvent(inputContextId, eventId) {
        this.eventDispatcher.dispatchEvent(_minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.EditorServerEventType.ServerInputBindingEvents, {
            type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.ServerInputBindingEventType.Unregister,
            inputDevice: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.InputDevice.Mouse,
            contextId: inputContextId,
            actionId: eventId,
        });
    }
    unregisterAllBindings() {
        this._bindingCleanupHandles.forEach((unregister) => unregister());
    }
    _addBindingCleanupHandle(handle) {
        this._bindingCleanupHandles.push(handle);
    }
}


/***/ }),

/***/ "./src/input/ContextInputManager.ts":
/*!******************************************!*\
  !*** ./src/input/ContextInputManager.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextInputManager": () => (/* binding */ ContextInputManager)
/* harmony export */ });
/* harmony import */ var _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/editor-events */ "../editor-events/lib/index.js");
/* harmony import */ var _BaseInputManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseInputManager */ "./src/input/BaseInputManager.ts");


class ContextInputManager extends _BaseInputManager__WEBPACK_IMPORTED_MODULE_1__.BaseInputManager {
    constructor(eventDispatcher, inputContext) {
        super(eventDispatcher);
        this._inputContext = inputContext;
    }
    registerMouseWheelBinding(action, inputMappingId) {
        this._addBindingCleanupHandle(this._sendRegisterMouseBindingEvent(inputMappingId ?? this._inputContext, action.id, _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.MouseActionCategory.Wheel));
    }
    registerMouseButtonBinding(action, inputMappingId) {
        this._addBindingCleanupHandle(this._sendRegisterMouseBindingEvent(inputMappingId ?? this._inputContext, action.id, _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.MouseActionCategory.Button));
    }
    registerMouseDragBinding(action, inputMappingId) {
        this._addBindingCleanupHandle(this._sendRegisterMouseBindingEvent(inputMappingId ?? this._inputContext, action.id, _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.MouseActionCategory.Drag));
    }
    registerKeyBinding(action, button, modifier = _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.InputModifier.None, inputMappingId) {
        this._addBindingCleanupHandle(this._sendRegisterKeyBindingEvent(inputMappingId ?? this._inputContext, action.id, button, modifier, _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.KeyInputType.Press));
    }
    unregisterBindings() {
        this.unregisterAllBindings();
    }
}


/***/ }),

/***/ "./src/input/GlobalInputManager.ts":
/*!*****************************************!*\
  !*** ./src/input/GlobalInputManager.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalInputManager": () => (/* binding */ GlobalInputManager)
/* harmony export */ });
/* harmony import */ var _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/editor-events */ "../editor-events/lib/index.js");
/* harmony import */ var _BaseInputManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseInputManager */ "./src/input/BaseInputManager.ts");


/**
 * @beta
 */
class GlobalInputManager extends _BaseInputManager__WEBPACK_IMPORTED_MODULE_1__.BaseInputManager {
    constructor(eventDispatcher) {
        super(eventDispatcher);
    }
    registerKeyBinding(inputContextId, action, button, modifier = _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.InputModifier.None) {
        this._addBindingCleanupHandle(this._sendRegisterKeyBindingEvent(inputContextId, action.id, button, modifier, _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_0__.KeyInputType.Press));
    }
}


/***/ }),

/***/ "./src/input/IContextInputManager.ts":
/*!*******************************************!*\
  !*** ./src/input/IContextInputManager.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/input/IGlobalInputManager.ts":
/*!******************************************!*\
  !*** ./src/input/IGlobalInputManager.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/input/InputContext.ts":
/*!***********************************!*\
  !*** ./src/input/InputContext.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorInputContext": () => (/* binding */ EditorInputContext)
/* harmony export */ });
/**
 * @beta Global editor input contexts
 */
var EditorInputContext;
(function (EditorInputContext) {
    EditorInputContext["GlobalEditor"] = "global.editor";
    EditorInputContext["GlobalToolMode"] = "global.toolMode";
    EditorInputContext["Viewport"] = "local.toolMode.viewport";
})(EditorInputContext || (EditorInputContext = {}));


/***/ }),

/***/ "./src/input/index.ts":
/*!****************************!*\
  !*** ./src/input/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseInputManager": () => (/* reexport safe */ _BaseInputManager__WEBPACK_IMPORTED_MODULE_5__.BaseInputManager),
/* harmony export */   "ContextInputManager": () => (/* reexport safe */ _ContextInputManager__WEBPACK_IMPORTED_MODULE_2__.ContextInputManager),
/* harmony export */   "EditorInputContext": () => (/* reexport safe */ _InputContext__WEBPACK_IMPORTED_MODULE_0__.EditorInputContext),
/* harmony export */   "GlobalInputManager": () => (/* reexport safe */ _GlobalInputManager__WEBPACK_IMPORTED_MODULE_1__.GlobalInputManager)
/* harmony export */ });
/* harmony import */ var _InputContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputContext */ "./src/input/InputContext.ts");
/* harmony import */ var _GlobalInputManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalInputManager */ "./src/input/GlobalInputManager.ts");
/* harmony import */ var _ContextInputManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextInputManager */ "./src/input/ContextInputManager.ts");
/* harmony import */ var _IGlobalInputManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IGlobalInputManager */ "./src/input/IGlobalInputManager.ts");
/* harmony import */ var _IContextInputManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IContextInputManager */ "./src/input/IContextInputManager.ts");
/* harmony import */ var _BaseInputManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BaseInputManager */ "./src/input/BaseInputManager.ts");








/***/ }),

/***/ "./src/utils/Binding.ts":
/*!******************************!*\
  !*** ./src/utils/Binding.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPaneBindingObject": () => (/* binding */ createPaneBindingObject),
/* harmony export */   "isObject": () => (/* binding */ isObject)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components */ "./src/components/index.ts");
/* harmony import */ var _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @minecraft/server-wrapper */ "../../module-wrappers/server-wrapper/index.js");


const isObject = (val) => 
// eslint-disable-next-line unicorn/no-null
typeof val === 'object' && !Array.isArray(val) && val !== null && !(val instanceof _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_1__.BlockType);
/**
 *  Takes the input object and bind it to the pane.
 * @beta
 */
function createPaneBindingObject(propertyPane, target) {
    // Create proxy to detect any change in the object bound.
    if (propertyPane instanceof _components__WEBPACK_IMPORTED_MODULE_0__.PropertyPane) {
        const proxyHandler = {
            set(obj, propChanged, newValue) {
                if (isObject(newValue)) {
                    // Create proxy for sub object.
                    obj[propChanged] = createObjectProxy(newValue, propertyPane, propChanged);
                }
                else {
                    const propertyItem = propertyPane.findPropertyRecursive(propChanged);
                    // Assign value to original object.
                    const currentValue = obj[propChanged];
                    obj[propChanged] = newValue;
                    if ((0,_components__WEBPACK_IMPORTED_MODULE_0__.isPropertyItem)(propertyItem) && currentValue !== newValue) {
                        // Send update to client.
                        propertyItem.sendPropertyUpdate();
                    }
                }
                // Indicate that operation was succeeded.
                return true;
            },
        };
        // Initialize proxy
        const proxy = new Proxy(target, proxyHandler);
        Object.assign(proxy, target);
        return proxy;
    }
    return target;
}
const createObjectProxy = (arr, propertyPane, propChanged) => {
    const proxyHandler = {
        set(obj, prop, newValue) {
            const propertyItem = propertyPane.findPropertyRecursive(propChanged);
            // Assign value to array.
            const currentValue = obj[prop];
            obj[prop] = newValue;
            if ((0,_components__WEBPACK_IMPORTED_MODULE_0__.isPropertyItem)(propertyItem) && currentValue !== newValue) {
                // Send update to client.
                propertyItem.sendPropertyUpdate();
            }
            // Indicate that operation was succeeded.
            return true;
        },
    };
    return new Proxy(arr, proxyHandler);
};


/***/ }),

/***/ "./src/utils/Serialization.ts":
/*!************************************!*\
  !*** ./src/utils/Serialization.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPanePayload": () => (/* binding */ createPanePayload),
/* harmony export */   "createPropertyItemPayload": () => (/* binding */ createPropertyItemPayload),
/* harmony export */   "paneReplacer": () => (/* binding */ paneReplacer)
/* harmony export */ });
/* harmony import */ var _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @minecraft/server-wrapper */ "../../module-wrappers/server-wrapper/index.js");
/* harmony import */ var _components_isPropertyItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/isPropertyItem */ "./src/components/isPropertyItem.ts");
/* harmony import */ var _components_PropertyPane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PropertyPane */ "./src/components/PropertyPane.ts");
/* harmony import */ var _components_IPropertyItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/IPropertyItem */ "./src/components/IPropertyItem.ts");
/* harmony import */ var _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @minecraft/editor-events */ "../editor-events/lib/index.js");





/**
 *  Replacer to use during pane serialization.
 * @beta
 */
function paneReplacer(key, value) {
    if (value?.constructor?.name === _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_0__.BlockType.name) {
        // Get block type id during serialization. As this doesn't work automatically.
        return value.id;
    }
    if (key === '_obj') {
        // Remove original object as not needed to be serialized.
        return undefined;
    }
    return value;
}
/**
 * Creates the payload to send to client and update property item.
 * @beta
 * @returns The payload to send to client.
 */
function createPropertyItemPayload(propertyItem) {
    return {
        type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_4__.ServerUXEventType.UpdatePropertyItem,
        paneId: propertyItem.paneId,
        id: propertyItem.id,
        property: propertyItem.property,
        typeName: propertyItem.typeName,
        value: propertyItem.value,
        visible: propertyItem.visible,
        enable: propertyItem.enable,
        propertyItemOptions: (0,_components_isPropertyItem__WEBPACK_IMPORTED_MODULE_1__.isPropertyItem)(propertyItem)
            ? propertyItem.typeName === _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_4__.EDITOR_PANE_PROPERTY_ITEM_TYPE.SubPane &&
                (0,_components_IPropertyItem__WEBPACK_IMPORTED_MODULE_3__.isIPropertyItemOptionsSubPane)(propertyItem.propertyItemOptions) &&
                propertyItem.propertyItemOptions.pane instanceof _components_PropertyPane__WEBPACK_IMPORTED_MODULE_2__.PropertyPane
                ? {
                    pane: createPanePayload(propertyItem.propertyItemOptions.pane),
                }
                : propertyItem.propertyItemOptions
            : {},
    };
}
/**
 * Creates the payload to send to client and update dynamic pane.
 * @beta
 * @returns The payload to send to client.
 */
function createPanePayload(pane) {
    // return pane as IPropertyPane;
    return {
        type: _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_4__.ServerUXEventType.UpdatePropertyPane,
        id: pane.id,
        parentPaneId: pane.parentPaneId,
        titleStringId: pane.titleStringId,
        titleAltText: pane.titleAltText,
        visible: pane.visible,
        width: pane.width,
        propertyItems: pane.propertyItems.map(item => {
            return createPropertyItemPayload(item);
        }),
    };
}


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPaneBindingObject": () => (/* reexport safe */ _Binding__WEBPACK_IMPORTED_MODULE_0__.createPaneBindingObject),
/* harmony export */   "createPanePayload": () => (/* reexport safe */ _Serialization__WEBPACK_IMPORTED_MODULE_1__.createPanePayload),
/* harmony export */   "createPropertyItemPayload": () => (/* reexport safe */ _Serialization__WEBPACK_IMPORTED_MODULE_1__.createPropertyItemPayload),
/* harmony export */   "isObject": () => (/* reexport safe */ _Binding__WEBPACK_IMPORTED_MODULE_0__.isObject),
/* harmony export */   "paneReplacer": () => (/* reexport safe */ _Serialization__WEBPACK_IMPORTED_MODULE_1__.paneReplacer)
/* harmony export */ });
/* harmony import */ var _Binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Binding */ "./src/utils/Binding.ts");
/* harmony import */ var _Serialization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Serialization */ "./src/utils/Serialization.ts");




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

/***/ "@minecraft/server-editor-bindings":
/*!****************************************************!*\
  !*** external "@minecraft/server-editor-bindings" ***!
  \****************************************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE__minecraft_server_editor_bindings_e2bf1028__;

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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionTypes": () => (/* reexport safe */ _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_7__.ActionTypes),
/* harmony export */   "BedrockEventSubscriptionCache": () => (/* reexport safe */ _BedrockSubscriptionCache__WEBPACK_IMPORTED_MODULE_1__.BedrockEventSubscriptionCache),
/* harmony export */   "BlockVolume": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.BlockVolume),
/* harmony export */   "BlockVolumeIntersection": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.BlockVolumeIntersection),
/* harmony export */   "BlockVolumeIterator": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.BlockVolumeIterator),
/* harmony export */   "BoundingBox": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.BoundingBox),
/* harmony export */   "ClipboardItem": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.ClipboardItem),
/* harmony export */   "ClipboardManager": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.ClipboardManager),
/* harmony export */   "ClipboardMirrorAxis": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.ClipboardMirrorAxis),
/* harmony export */   "ClipboardRotation": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.ClipboardRotation),
/* harmony export */   "ClipboardWriteOptions": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.ClipboardWriteOptions),
/* harmony export */   "Cursor": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.Cursor),
/* harmony export */   "CursorControlMode": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.CursorControlMode),
/* harmony export */   "CursorState": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.CursorState),
/* harmony export */   "CursorTargetMode": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.CursorTargetMode),
/* harmony export */   "EDITOR_PANE_PROPERTY_ITEM_TYPE": () => (/* reexport safe */ _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_7__.EDITOR_PANE_PROPERTY_ITEM_TYPE),
/* harmony export */   "EditorInputContext": () => (/* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_3__.EditorInputContext),
/* harmony export */   "EditorServerEventType": () => (/* reexport safe */ _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_7__.EditorServerEventType),
/* harmony export */   "EditorStatusBarAlignment": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.EditorStatusBarAlignment),
/* harmony export */   "Extension": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.Extension),
/* harmony export */   "ExtensionContext": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.ExtensionContext),
/* harmony export */   "InputModifier": () => (/* reexport safe */ _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_7__.InputModifier),
/* harmony export */   "KeyInputType": () => (/* reexport safe */ _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_7__.KeyInputType),
/* harmony export */   "KeyboardKey": () => (/* reexport safe */ _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_7__.KeyboardKey),
/* harmony export */   "MinecraftEditor": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.MinecraftEditor),
/* harmony export */   "MouseActionCategory": () => (/* reexport safe */ _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_7__.MouseActionCategory),
/* harmony export */   "MouseActionType": () => (/* reexport safe */ _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_7__.MouseActionType),
/* harmony export */   "MouseInputType": () => (/* reexport safe */ _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_7__.MouseInputType),
/* harmony export */   "Selection": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.Selection),
/* harmony export */   "SelectionBlockVolumeAction": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.SelectionBlockVolumeAction),
/* harmony export */   "SelectionManager": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.SelectionManager),
/* harmony export */   "ServerUXEventType": () => (/* reexport safe */ _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_7__.ServerUXEventType),
/* harmony export */   "TransactionManager": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.TransactionManager),
/* harmony export */   "createPaneBindingObject": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_5__.createPaneBindingObject),
/* harmony export */   "editor": () => (/* reexport safe */ _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__.editor),
/* harmony export */   "executeLargeOperation": () => (/* reexport safe */ _LargeOperationHelper__WEBPACK_IMPORTED_MODULE_6__.executeLargeOperation),
/* harmony export */   "getLocalizationId": () => (/* reexport safe */ _LocalizationHelper__WEBPACK_IMPORTED_MODULE_4__.getLocalizationId),
/* harmony export */   "registerEditorExtension": () => (/* reexport safe */ _ExtensionRegistration__WEBPACK_IMPORTED_MODULE_2__.registerEditorExtension)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components/index.ts");
/* harmony import */ var _BedrockSubscriptionCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BedrockSubscriptionCache */ "./src/BedrockSubscriptionCache/index.ts");
/* harmony import */ var _ExtensionRegistration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExtensionRegistration */ "./src/ExtensionRegistration.ts");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input */ "./src/input/index.ts");
/* harmony import */ var _LocalizationHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LocalizationHelper */ "./src/LocalizationHelper.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
/* harmony import */ var _LargeOperationHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LargeOperationHelper */ "./src/LargeOperationHelper.ts");
/* harmony import */ var _minecraft_editor_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @minecraft/editor-events */ "../editor-events/lib/index.js");
/* harmony import */ var _minecraft_server_editor_bindings_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @minecraft/server-editor-bindings-wrapper */ "../../module-wrappers/server-editor-bindings-wrapper/index.js");
/* harmony import */ var _minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @minecraft/server-wrapper */ "../../module-wrappers/server-wrapper/index.js");







// Re-export minecraft-editor-event types that are needed outside of the package
// Remove re-exports of event types once build in UI manager change is in

// Re-export all types from minecraft-editor-bindings so consumers only have 1 package to worry about


// Large script operations can cause the watchdog to terminate the operation and shut down the server, handling this event
// stops the server from shuting down but still terminates the operation and throws an error with enough information
// to determine the extension causing the hang.
_minecraft_server_wrapper__WEBPACK_IMPORTED_MODULE_9__.system.events.beforeWatchdogTerminate.subscribe(e => {
    e.cancel = true;
});

})();

var __webpack_exports__ActionTypes = __webpack_exports__.ActionTypes;
var __webpack_exports__BedrockEventSubscriptionCache = __webpack_exports__.BedrockEventSubscriptionCache;
var __webpack_exports__BlockVolume = __webpack_exports__.BlockVolume;
var __webpack_exports__BlockVolumeIntersection = __webpack_exports__.BlockVolumeIntersection;
var __webpack_exports__BlockVolumeIterator = __webpack_exports__.BlockVolumeIterator;
var __webpack_exports__BoundingBox = __webpack_exports__.BoundingBox;
var __webpack_exports__ClipboardItem = __webpack_exports__.ClipboardItem;
var __webpack_exports__ClipboardManager = __webpack_exports__.ClipboardManager;
var __webpack_exports__ClipboardMirrorAxis = __webpack_exports__.ClipboardMirrorAxis;
var __webpack_exports__ClipboardRotation = __webpack_exports__.ClipboardRotation;
var __webpack_exports__ClipboardWriteOptions = __webpack_exports__.ClipboardWriteOptions;
var __webpack_exports__Cursor = __webpack_exports__.Cursor;
var __webpack_exports__CursorControlMode = __webpack_exports__.CursorControlMode;
var __webpack_exports__CursorState = __webpack_exports__.CursorState;
var __webpack_exports__CursorTargetMode = __webpack_exports__.CursorTargetMode;
var __webpack_exports__EDITOR_PANE_PROPERTY_ITEM_TYPE = __webpack_exports__.EDITOR_PANE_PROPERTY_ITEM_TYPE;
var __webpack_exports__EditorInputContext = __webpack_exports__.EditorInputContext;
var __webpack_exports__EditorServerEventType = __webpack_exports__.EditorServerEventType;
var __webpack_exports__EditorStatusBarAlignment = __webpack_exports__.EditorStatusBarAlignment;
var __webpack_exports__Extension = __webpack_exports__.Extension;
var __webpack_exports__ExtensionContext = __webpack_exports__.ExtensionContext;
var __webpack_exports__InputModifier = __webpack_exports__.InputModifier;
var __webpack_exports__KeyInputType = __webpack_exports__.KeyInputType;
var __webpack_exports__KeyboardKey = __webpack_exports__.KeyboardKey;
var __webpack_exports__MinecraftEditor = __webpack_exports__.MinecraftEditor;
var __webpack_exports__MouseActionCategory = __webpack_exports__.MouseActionCategory;
var __webpack_exports__MouseActionType = __webpack_exports__.MouseActionType;
var __webpack_exports__MouseInputType = __webpack_exports__.MouseInputType;
var __webpack_exports__Selection = __webpack_exports__.Selection;
var __webpack_exports__SelectionBlockVolumeAction = __webpack_exports__.SelectionBlockVolumeAction;
var __webpack_exports__SelectionManager = __webpack_exports__.SelectionManager;
var __webpack_exports__ServerUXEventType = __webpack_exports__.ServerUXEventType;
var __webpack_exports__TransactionManager = __webpack_exports__.TransactionManager;
var __webpack_exports__createPaneBindingObject = __webpack_exports__.createPaneBindingObject;
var __webpack_exports__editor = __webpack_exports__.editor;
var __webpack_exports__executeLargeOperation = __webpack_exports__.executeLargeOperation;
var __webpack_exports__getLocalizationId = __webpack_exports__.getLocalizationId;
var __webpack_exports__registerEditorExtension = __webpack_exports__.registerEditorExtension;
export { __webpack_exports__ActionTypes as ActionTypes, __webpack_exports__BedrockEventSubscriptionCache as BedrockEventSubscriptionCache, __webpack_exports__BlockVolume as BlockVolume, __webpack_exports__BlockVolumeIntersection as BlockVolumeIntersection, __webpack_exports__BlockVolumeIterator as BlockVolumeIterator, __webpack_exports__BoundingBox as BoundingBox, __webpack_exports__ClipboardItem as ClipboardItem, __webpack_exports__ClipboardManager as ClipboardManager, __webpack_exports__ClipboardMirrorAxis as ClipboardMirrorAxis, __webpack_exports__ClipboardRotation as ClipboardRotation, __webpack_exports__ClipboardWriteOptions as ClipboardWriteOptions, __webpack_exports__Cursor as Cursor, __webpack_exports__CursorControlMode as CursorControlMode, __webpack_exports__CursorState as CursorState, __webpack_exports__CursorTargetMode as CursorTargetMode, __webpack_exports__EDITOR_PANE_PROPERTY_ITEM_TYPE as EDITOR_PANE_PROPERTY_ITEM_TYPE, __webpack_exports__EditorInputContext as EditorInputContext, __webpack_exports__EditorServerEventType as EditorServerEventType, __webpack_exports__EditorStatusBarAlignment as EditorStatusBarAlignment, __webpack_exports__Extension as Extension, __webpack_exports__ExtensionContext as ExtensionContext, __webpack_exports__InputModifier as InputModifier, __webpack_exports__KeyInputType as KeyInputType, __webpack_exports__KeyboardKey as KeyboardKey, __webpack_exports__MinecraftEditor as MinecraftEditor, __webpack_exports__MouseActionCategory as MouseActionCategory, __webpack_exports__MouseActionType as MouseActionType, __webpack_exports__MouseInputType as MouseInputType, __webpack_exports__Selection as Selection, __webpack_exports__SelectionBlockVolumeAction as SelectionBlockVolumeAction, __webpack_exports__SelectionManager as SelectionManager, __webpack_exports__ServerUXEventType as ServerUXEventType, __webpack_exports__TransactionManager as TransactionManager, __webpack_exports__createPaneBindingObject as createPaneBindingObject, __webpack_exports__editor as editor, __webpack_exports__executeLargeOperation as executeLargeOperation, __webpack_exports__getLocalizationId as getLocalizationId, __webpack_exports__registerEditorExtension as registerEditorExtension };
