self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_HP_React_Apps_airbnb_clone_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var geolib_es_getCenter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! geolib/es/getCenter */ "./node_modules/geolib/es/getCenter.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\HP\\React Apps\\airbnb-clone\\components\\Map.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_HP_React_Apps_airbnb_clone_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function Map(_ref) {
  var searchResults = _ref.searchResults;
  //Transform the searchResults
  var coordinates = searchResults.map(function (result) {
    return {
      longitude: result["long"],
      latitude: result.lat
    };
  }); //Center the map location

  var center = (0,geolib_es_getCenter__WEBPACK_IMPORTED_MODULE_4__.default)(coordinates);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({
    mapStyle: "mapbox://styles/rajatb555/cks35kg9h4p7e18t3n1sdys3z",
    mapboxApiAccessToken: "pk.eyJ1IjoicmFqYXRiNTU1IiwiYSI6ImNrczM1Zjd4NjA2OHIydXBoMGNpaW1wNXQifQ.tSeSFRyCYxRTrkGxA7H5ZA"
  }, viewport), {}, {
    onViewportChange: function onViewportChange(nextViewport) {
      return setViewport(nextViewport);
    }
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

_c = Map;
/* harmony default export */ __webpack_exports__["default"] = (Map);

var _c;

$RefreshReg$(_c, "Map");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXAuanMiXSwibmFtZXMiOlsiTWFwIiwic2VhcmNoUmVzdWx0cyIsImNvb3JkaW5hdGVzIiwibWFwIiwicmVzdWx0IiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJsYXQiLCJjZW50ZXIiLCJnZXRDZW50ZXIiLCJwcm9jZXNzIiwibWFwYm94X2tleSIsInZpZXdwb3J0IiwibmV4dFZpZXdwb3J0Iiwic2V0Vmlld3BvcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEdBQVQsT0FBZ0M7QUFBQSxNQUFqQkMsYUFBaUIsUUFBakJBLGFBQWlCO0FBRTVCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRCxhQUFhLENBQUNFLEdBQWQsQ0FBa0IsVUFBQUMsTUFBTTtBQUFBLFdBQUs7QUFDN0NDLGVBQVMsRUFBQ0QsTUFBTSxRQUQ2QjtBQUU3Q0UsY0FBUSxFQUFDRixNQUFNLENBQUNHO0FBRjZCLEtBQUw7QUFBQSxHQUF4QixDQUFwQixDQUg0QixDQVE1Qjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDREQUFTLENBQUNQLFdBQUQsQ0FBeEI7QUFFQSxzQkFFSSw4REFBQyxpREFBRDtBQUNJLFlBQVEsRUFBQyxxREFEYjtBQUVJLHdCQUFvQixFQUFFUSw4RkFBc0JDO0FBRmhELEtBR1FDLFFBSFI7QUFJSSxvQkFBZ0IsRUFBRSwwQkFBQ0MsWUFBRDtBQUFBLGFBQWtCQyxXQUFXLENBQUNELFlBQUQsQ0FBN0I7QUFBQTtBQUp0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFXSDs7S0F0QlFiLEc7QUF3QlQsK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjNmZGE5NTUzMjA0ZmRkZWQxZmY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0TWFwR0wgZnJvbSAncmVhY3QtbWFwLWdsJztcclxuaW1wb3J0IGdldENlbnRlciBmcm9tIFwiZ2VvbGliL2VzL2dldENlbnRlclwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE1hcCh7IHNlYXJjaFJlc3VsdHMgfSkge1xyXG4gICAgXHJcbiAgICAvL1RyYW5zZm9ybSB0aGUgc2VhcmNoUmVzdWx0c1xyXG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBzZWFyY2hSZXN1bHRzLm1hcChyZXN1bHQgPT4gKHtcclxuICAgICAgICBsb25naXR1ZGU6cmVzdWx0LmxvbmcsXHJcbiAgICAgICAgbGF0aXR1ZGU6cmVzdWx0LmxhdCxcclxuICAgIH0pKTtcclxuXHJcbiAgICAvL0NlbnRlciB0aGUgbWFwIGxvY2F0aW9uXHJcbiAgICBjb25zdCBjZW50ZXIgPSBnZXRDZW50ZXIoY29vcmRpbmF0ZXMpXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPFJlYWN0TWFwR0wgXHJcbiAgICAgICAgICAgIG1hcFN0eWxlPVwibWFwYm94Oi8vc3R5bGVzL3JhamF0YjU1NS9ja3MzNWtnOWg0cDdlMTh0M24xc2R5czN6XCJcclxuICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e3Byb2Nlc3MuZW52Lm1hcGJveF9rZXl9XHJcbiAgICAgICAgICAgIHsuLi52aWV3cG9ydH1cclxuICAgICAgICAgICAgb25WaWV3cG9ydENoYW5nZT17KG5leHRWaWV3cG9ydCkgPT4gc2V0Vmlld3BvcnQobmV4dFZpZXdwb3J0KX1cclxuICAgICAgICA+PC9SZWFjdE1hcEdMPlxyXG4gICAgKTtcclxuICAgICAgICBcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==