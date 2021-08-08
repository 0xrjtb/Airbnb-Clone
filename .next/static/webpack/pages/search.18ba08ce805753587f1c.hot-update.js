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
    longitude: center,
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
    }
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

_s(Map, "ACo6NB4BX074a/IDnYOwwyaUhTQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXAuanMiXSwibmFtZXMiOlsiTWFwIiwic2VhcmNoUmVzdWx0cyIsImNvb3JkaW5hdGVzIiwibWFwIiwicmVzdWx0IiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJsYXQiLCJjZW50ZXIiLCJnZXRDZW50ZXIiLCJ1c2VTdGF0ZSIsIndpZHRoIiwiaGVpZ2h0Iiwiem9vbSIsInZpZXdwb3J0Iiwic2V0Vmlld3BvcnQiLCJwcm9jZXNzIiwibWFwYm94X2tleSIsIm5leHRWaWV3cG9ydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxHQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBakJDLGFBQWlCLFFBQWpCQSxhQUFpQjtBQUU1QjtBQUNBLE1BQU1DLFdBQVcsR0FBR0QsYUFBYSxDQUFDRSxHQUFkLENBQWtCLFVBQUFDLE1BQU07QUFBQSxXQUFLO0FBQzdDQyxlQUFTLEVBQUNELE1BQU0sUUFENkI7QUFFN0NFLGNBQVEsRUFBQ0YsTUFBTSxDQUFDRztBQUY2QixLQUFMO0FBQUEsR0FBeEIsQ0FBcEIsQ0FINEIsQ0FRNUI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw0REFBUyxDQUFDUCxXQUFELENBQXhCOztBQVQ0QixrQkFXSVEsK0NBQVEsQ0FBQztBQUNyQ0MsU0FBSyxFQUFFLE1BRDhCO0FBRXJDQyxVQUFNLEVBQUUsTUFGNkI7QUFHckNOLFlBQVEsRUFBRUUsTUFBTSxDQUFDRixRQUhvQjtBQUlyQ0QsYUFBUyxFQUFFRyxNQUowQjtBQUtyQ0ssUUFBSSxFQUFFO0FBTCtCLEdBQUQsQ0FYWjtBQUFBLE1BV3JCQyxRQVhxQjtBQUFBLE1BV1hDLFdBWFc7O0FBbUI1QixzQkFFSSw4REFBQyxpREFBRDtBQUNJLFlBQVEsRUFBQyxxREFEYjtBQUVJLHdCQUFvQixFQUFFQyw4RkFBc0JDO0FBRmhELEtBR1FILFFBSFI7QUFJSSxvQkFBZ0IsRUFBRSwwQkFBQ0ksWUFBRDtBQUFBLGFBQWtCSCxXQUFXLENBQUNHLFlBQUQsQ0FBN0I7QUFBQTtBQUp0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFXSDs7R0E5QlFsQixHOztLQUFBQSxHO0FBZ0NULCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC4xOGJhMDhjZTgwNTc1MzU4N2YxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdE1hcEdMIGZyb20gJ3JlYWN0LW1hcC1nbCc7XHJcbmltcG9ydCBnZXRDZW50ZXIgZnJvbSBcImdlb2xpYi9lcy9nZXRDZW50ZXJcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBNYXAoeyBzZWFyY2hSZXN1bHRzIH0pIHtcclxuICAgIFxyXG4gICAgLy9UcmFuc2Zvcm0gdGhlIHNlYXJjaFJlc3VsdHNcclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gc2VhcmNoUmVzdWx0cy5tYXAocmVzdWx0ID0+ICh7XHJcbiAgICAgICAgbG9uZ2l0dWRlOnJlc3VsdC5sb25nLFxyXG4gICAgICAgIGxhdGl0dWRlOnJlc3VsdC5sYXQsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgLy9DZW50ZXIgdGhlIG1hcCBsb2NhdGlvblxyXG4gICAgY29uc3QgY2VudGVyID0gZ2V0Q2VudGVyKGNvb3JkaW5hdGVzKVxyXG5cclxuICAgIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIGxhdGl0dWRlOiBjZW50ZXIubGF0aXR1ZGUsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiBjZW50ZXIsXHJcbiAgICAgICAgem9vbTogMTEsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8UmVhY3RNYXBHTCBcclxuICAgICAgICAgICAgbWFwU3R5bGU9XCJtYXBib3g6Ly9zdHlsZXMvcmFqYXRiNTU1L2NrczM1a2c5aDRwN2UxOHQzbjFzZHlzM3pcIlxyXG4gICAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17cHJvY2Vzcy5lbnYubWFwYm94X2tleX1cclxuICAgICAgICAgICAgey4uLnZpZXdwb3J0fVxyXG4gICAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXsobmV4dFZpZXdwb3J0KSA9PiBzZXRWaWV3cG9ydChuZXh0Vmlld3BvcnQpfVxyXG4gICAgICAgID48L1JlYWN0TWFwR0w+XHJcbiAgICApO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcFxyXG4iXSwic291cmNlUm9vdCI6IiJ9