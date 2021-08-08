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



var _jsxFileName = "C:\\Users\\HP\\React Apps\\airbnb-clone\\components\\Map.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_HP_React_Apps_airbnb_clone_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function Map(_ref) {
  _s();

  var _this = this;

  var searchResults = _ref.searchResults;
  //Transform the searchResults
  var coordinates = searchResults.map(function (result) {
    return {
      longitude: result["long"],
      latitude: result.lat
    };
  }); //Center the map location

  var center = (0,geolib_es_getCenter__WEBPACK_IMPORTED_MODULE_4__.default)(coordinates);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  }),
      viewport = _useState[0],
      setViewport = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({
    mapStyle: "mapbox://styles/rajatb555/cks35kg9h4p7e18t3n1sdys3z",
    mapboxApiAccessToken: "pk.eyJ1IjoicmFqYXRiNTU1IiwiYSI6ImNrczM1Zjd4NjA2OHIydXBoMGNpaW1wNXQifQ.tSeSFRyCYxRTrkGxA7H5ZA"
  }, viewport), {}, {
    onViewportChange: function onViewportChange(nextViewport) {
      return setViewport(nextViewport);
    },
    children: searchResults.map(function (result) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_3__.Marker, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

_s(Map, "u0zp65QdHe6MwZbC1iNk0spf8D0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXAuanMiXSwibmFtZXMiOlsiTWFwIiwic2VhcmNoUmVzdWx0cyIsImNvb3JkaW5hdGVzIiwibWFwIiwicmVzdWx0IiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJsYXQiLCJjZW50ZXIiLCJnZXRDZW50ZXIiLCJ1c2VTdGF0ZSIsIndpZHRoIiwiaGVpZ2h0Iiwiem9vbSIsInZpZXdwb3J0Iiwic2V0Vmlld3BvcnQiLCJwcm9jZXNzIiwibWFwYm94X2tleSIsIm5leHRWaWV3cG9ydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxHQUFULE9BQWdDO0FBQUE7O0FBQUE7O0FBQUEsTUFBakJDLGFBQWlCLFFBQWpCQSxhQUFpQjtBQUU1QjtBQUNBLE1BQU1DLFdBQVcsR0FBR0QsYUFBYSxDQUFDRSxHQUFkLENBQWtCLFVBQUFDLE1BQU07QUFBQSxXQUFLO0FBQzdDQyxlQUFTLEVBQUNELE1BQU0sUUFENkI7QUFFN0NFLGNBQVEsRUFBQ0YsTUFBTSxDQUFDRztBQUY2QixLQUFMO0FBQUEsR0FBeEIsQ0FBcEIsQ0FINEIsQ0FRNUI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw0REFBUyxDQUFDUCxXQUFELENBQXhCOztBQVQ0QixrQkFXSVEsK0NBQVEsQ0FBQztBQUNyQ0MsU0FBSyxFQUFFLE1BRDhCO0FBRXJDQyxVQUFNLEVBQUUsTUFGNkI7QUFHckNOLFlBQVEsRUFBRUUsTUFBTSxDQUFDRixRQUhvQjtBQUlyQ0QsYUFBUyxFQUFFRyxNQUFNLENBQUNILFNBSm1CO0FBS3JDUSxRQUFJLEVBQUU7QUFMK0IsR0FBRCxDQVhaO0FBQUEsTUFXckJDLFFBWHFCO0FBQUEsTUFXWEMsV0FYVzs7QUFtQjVCLHNCQUVJLDhEQUFDLGlEQUFEO0FBQ0ksWUFBUSxFQUFDLHFEQURiO0FBRUksd0JBQW9CLEVBQUVDLDhGQUFzQkM7QUFGaEQsS0FHUUgsUUFIUjtBQUlJLG9CQUFnQixFQUFFLDBCQUFDSSxZQUFEO0FBQUEsYUFBa0JILFdBQVcsQ0FBQ0csWUFBRCxDQUE3QjtBQUFBLEtBSnRCO0FBQUEsY0FNS2pCLGFBQWEsQ0FBQ0UsR0FBZCxDQUFrQixVQUFBQyxNQUFNO0FBQUEsMEJBQ3JCO0FBQUEsK0JBQ0ksOERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEcUI7QUFBQSxLQUF4QjtBQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQW9CSDs7R0F2Q1FKLEc7O0tBQUFBLEc7QUF5Q1QsK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjkzZjIyZDRkMzAxMTM2M2RmMTlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0TWFwR0wsIHtNYXJrZXIsIFBvcHVwfSBmcm9tICdyZWFjdC1tYXAtZ2wnO1xyXG5pbXBvcnQgZ2V0Q2VudGVyIGZyb20gXCJnZW9saWIvZXMvZ2V0Q2VudGVyXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gTWFwKHsgc2VhcmNoUmVzdWx0cyB9KSB7XHJcbiAgICBcclxuICAgIC8vVHJhbnNmb3JtIHRoZSBzZWFyY2hSZXN1bHRzXHJcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IHNlYXJjaFJlc3VsdHMubWFwKHJlc3VsdCA9PiAoe1xyXG4gICAgICAgIGxvbmdpdHVkZTpyZXN1bHQubG9uZyxcclxuICAgICAgICBsYXRpdHVkZTpyZXN1bHQubGF0LFxyXG4gICAgfSkpO1xyXG5cclxuICAgIC8vQ2VudGVyIHRoZSBtYXAgbG9jYXRpb25cclxuICAgIGNvbnN0IGNlbnRlciA9IGdldENlbnRlcihjb29yZGluYXRlcylcclxuXHJcbiAgICBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdwb3J0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICBsYXRpdHVkZTogY2VudGVyLmxhdGl0dWRlLFxyXG4gICAgICAgIGxvbmdpdHVkZTogY2VudGVyLmxvbmdpdHVkZSxcclxuICAgICAgICB6b29tOiAxMSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxSZWFjdE1hcEdMIFxyXG4gICAgICAgICAgICBtYXBTdHlsZT1cIm1hcGJveDovL3N0eWxlcy9yYWphdGI1NTUvY2tzMzVrZzloNHA3ZTE4dDNuMXNkeXMzelwiXHJcbiAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtwcm9jZXNzLmVudi5tYXBib3hfa2V5fVxyXG4gICAgICAgICAgICB7Li4udmlld3BvcnR9XHJcbiAgICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9eyhuZXh0Vmlld3BvcnQpID0+IHNldFZpZXdwb3J0KG5leHRWaWV3cG9ydCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7c2VhcmNoUmVzdWx0cy5tYXAocmVzdWx0ID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYXJrZXI+PC9NYXJrZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuIFxyXG4gICAgICAgIDwvUmVhY3RNYXBHTD5cclxuICAgICk7XHJcbiAgICAgICAgXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=