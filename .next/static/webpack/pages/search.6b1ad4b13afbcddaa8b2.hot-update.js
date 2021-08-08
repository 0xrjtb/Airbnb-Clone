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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_3__.Marker, {
          longitude: result["long"],
          latitude: result.lat,
          offsetLeft: -2,
          offsetTop: -10
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this)
      }, result["long"], false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXAuanMiXSwibmFtZXMiOlsiTWFwIiwic2VhcmNoUmVzdWx0cyIsImNvb3JkaW5hdGVzIiwibWFwIiwicmVzdWx0IiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJsYXQiLCJjZW50ZXIiLCJnZXRDZW50ZXIiLCJ1c2VTdGF0ZSIsIndpZHRoIiwiaGVpZ2h0Iiwiem9vbSIsInZpZXdwb3J0Iiwic2V0Vmlld3BvcnQiLCJwcm9jZXNzIiwibWFwYm94X2tleSIsIm5leHRWaWV3cG9ydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxHQUFULE9BQWdDO0FBQUE7O0FBQUE7O0FBQUEsTUFBakJDLGFBQWlCLFFBQWpCQSxhQUFpQjtBQUU1QjtBQUNBLE1BQU1DLFdBQVcsR0FBR0QsYUFBYSxDQUFDRSxHQUFkLENBQWtCLFVBQUFDLE1BQU07QUFBQSxXQUFLO0FBQzdDQyxlQUFTLEVBQUNELE1BQU0sUUFENkI7QUFFN0NFLGNBQVEsRUFBQ0YsTUFBTSxDQUFDRztBQUY2QixLQUFMO0FBQUEsR0FBeEIsQ0FBcEIsQ0FINEIsQ0FRNUI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw0REFBUyxDQUFDUCxXQUFELENBQXhCOztBQVQ0QixrQkFXSVEsK0NBQVEsQ0FBQztBQUNyQ0MsU0FBSyxFQUFFLE1BRDhCO0FBRXJDQyxVQUFNLEVBQUUsTUFGNkI7QUFHckNOLFlBQVEsRUFBRUUsTUFBTSxDQUFDRixRQUhvQjtBQUlyQ0QsYUFBUyxFQUFFRyxNQUFNLENBQUNILFNBSm1CO0FBS3JDUSxRQUFJLEVBQUU7QUFMK0IsR0FBRCxDQVhaO0FBQUEsTUFXckJDLFFBWHFCO0FBQUEsTUFXWEMsV0FYVzs7QUFtQjVCLHNCQUVJLDhEQUFDLGlEQUFEO0FBQ0ksWUFBUSxFQUFDLHFEQURiO0FBRUksd0JBQW9CLEVBQUVDLDhGQUFzQkM7QUFGaEQsS0FHUUgsUUFIUjtBQUlJLG9CQUFnQixFQUFFLDBCQUFDSSxZQUFEO0FBQUEsYUFBa0JILFdBQVcsQ0FBQ0csWUFBRCxDQUE3QjtBQUFBLEtBSnRCO0FBQUEsY0FNS2pCLGFBQWEsQ0FBQ0UsR0FBZCxDQUFrQixVQUFBQyxNQUFNO0FBQUEsMEJBQ3JCO0FBQUEsK0JBQ0ksOERBQUMsZ0RBQUQ7QUFDSSxtQkFBUyxFQUFFQSxNQUFNLFFBRHJCO0FBRUksa0JBQVEsRUFBR0EsTUFBTSxDQUFDRyxHQUZ0QjtBQUdJLG9CQUFVLEVBQUUsQ0FBQyxDQUhqQjtBQUlJLG1CQUFTLEVBQUUsQ0FBQztBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosU0FBVUgsTUFBTSxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHFCO0FBQUEsS0FBeEI7QUFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUEwQkg7O0dBN0NRSixHOztLQUFBQSxHO0FBK0NULCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC42YjFhZDRiMTNhZmJjZGRhYThiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdE1hcEdMLCB7TWFya2VyLCBQb3B1cH0gZnJvbSAncmVhY3QtbWFwLWdsJztcclxuaW1wb3J0IGdldENlbnRlciBmcm9tIFwiZ2VvbGliL2VzL2dldENlbnRlclwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE1hcCh7IHNlYXJjaFJlc3VsdHMgfSkge1xyXG4gICAgXHJcbiAgICAvL1RyYW5zZm9ybSB0aGUgc2VhcmNoUmVzdWx0c1xyXG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBzZWFyY2hSZXN1bHRzLm1hcChyZXN1bHQgPT4gKHtcclxuICAgICAgICBsb25naXR1ZGU6cmVzdWx0LmxvbmcsXHJcbiAgICAgICAgbGF0aXR1ZGU6cmVzdWx0LmxhdCxcclxuICAgIH0pKTtcclxuXHJcbiAgICAvL0NlbnRlciB0aGUgbWFwIGxvY2F0aW9uXHJcbiAgICBjb25zdCBjZW50ZXIgPSBnZXRDZW50ZXIoY29vcmRpbmF0ZXMpXHJcblxyXG4gICAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgbGF0aXR1ZGU6IGNlbnRlci5sYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGU6IGNlbnRlci5sb25naXR1ZGUsXHJcbiAgICAgICAgem9vbTogMTEsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8UmVhY3RNYXBHTCBcclxuICAgICAgICAgICAgbWFwU3R5bGU9XCJtYXBib3g6Ly9zdHlsZXMvcmFqYXRiNTU1L2NrczM1a2c5aDRwN2UxOHQzbjFzZHlzM3pcIlxyXG4gICAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17cHJvY2Vzcy5lbnYubWFwYm94X2tleX1cclxuICAgICAgICAgICAgey4uLnZpZXdwb3J0fVxyXG4gICAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXsobmV4dFZpZXdwb3J0KSA9PiBzZXRWaWV3cG9ydChuZXh0Vmlld3BvcnQpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3NlYXJjaFJlc3VsdHMubWFwKHJlc3VsdCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cmVzdWx0Lmxvbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYXJrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlPXtyZXN1bHQubG9uZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU9IHtyZXN1bHQubGF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0PXstMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0VG9wPXstMTB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWFya2VyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiBcclxuICAgICAgICA8L1JlYWN0TWFwR0w+XHJcbiAgICApO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcFxyXG4iXSwic291cmNlUm9vdCI6IiJ9