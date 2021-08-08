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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11
  }),
      viewport = _useState[0],
      setViewport = _useState[1]; //Transform the searchResults


  var coordinates = searchResults.map(function (result) {
    return {
      longitude: result["long"],
      latitude: result.lat
    };
  }); //Center the map location

  var center = (0,geolib_es_getCenter__WEBPACK_IMPORTED_MODULE_4__.default)(coordinates);
  console.log(coordina);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({
    mapStyle: "mapbox://styles/rajatb555/cks35kg9h4p7e18t3n1sdys3z",
    mapboxApiAccessToken: "pk.eyJ1IjoicmFqYXRiNTU1IiwiYSI6ImNrczM1Zjd4NjA2OHIydXBoMGNpaW1wNXQifQ.tSeSFRyCYxRTrkGxA7H5ZA"
  }, viewport), {}, {
    onViewportChange: function onViewportChange(nextViewport) {
      return setViewport(nextViewport);
    }
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

_s(Map, "wFC0OlgODYmNQVnkbpxF6wXgAVI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXAuanMiXSwibmFtZXMiOlsiTWFwIiwic2VhcmNoUmVzdWx0cyIsInVzZVN0YXRlIiwid2lkdGgiLCJoZWlnaHQiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInpvb20iLCJ2aWV3cG9ydCIsInNldFZpZXdwb3J0IiwiY29vcmRpbmF0ZXMiLCJtYXAiLCJyZXN1bHQiLCJsYXQiLCJjZW50ZXIiLCJnZXRDZW50ZXIiLCJjb25zb2xlIiwibG9nIiwiY29vcmRpbmEiLCJwcm9jZXNzIiwibWFwYm94X2tleSIsIm5leHRWaWV3cG9ydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxHQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBakJDLGFBQWlCLFFBQWpCQSxhQUFpQjs7QUFBQSxrQkFFSUMsK0NBQVEsQ0FBQztBQUNyQ0MsU0FBSyxFQUFFLE1BRDhCO0FBRXJDQyxVQUFNLEVBQUUsTUFGNkI7QUFHckNDLFlBQVEsRUFBRSxPQUgyQjtBQUlyQ0MsYUFBUyxFQUFFLENBQUMsUUFKeUI7QUFLckNDLFFBQUksRUFBRTtBQUwrQixHQUFELENBRlo7QUFBQSxNQUVyQkMsUUFGcUI7QUFBQSxNQUVYQyxXQUZXLGlCQVU1Qjs7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHVCxhQUFhLENBQUNVLEdBQWQsQ0FBa0IsVUFBQUMsTUFBTTtBQUFBLFdBQUs7QUFDN0NOLGVBQVMsRUFBQ00sTUFBTSxRQUQ2QjtBQUU3Q1AsY0FBUSxFQUFDTyxNQUFNLENBQUNDO0FBRjZCLEtBQUw7QUFBQSxHQUF4QixDQUFwQixDQVg0QixDQWdCNUI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw0REFBUyxDQUFDTCxXQUFELENBQXhCO0FBRUFNLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaO0FBRUEsc0JBRUksOERBQUMsaURBQUQ7QUFDSSxZQUFRLEVBQUMscURBRGI7QUFFSSx3QkFBb0IsRUFBRUMsOEZBQXNCQztBQUZoRCxLQUdRWixRQUhSO0FBSUksb0JBQWdCLEVBQUUsMEJBQUNhLFlBQUQ7QUFBQSxhQUFrQlosV0FBVyxDQUFDWSxZQUFELENBQTdCO0FBQUE7QUFKdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZKO0FBV0g7O0dBaENRckIsRzs7S0FBQUEsRztBQWtDVCwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2guZWE0M2JjZGFhZjliYWQ0MWJiYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RNYXBHTCBmcm9tICdyZWFjdC1tYXAtZ2wnO1xyXG5pbXBvcnQgZ2V0Q2VudGVyIGZyb20gXCJnZW9saWIvZXMvZ2V0Q2VudGVyXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gTWFwKHsgc2VhcmNoUmVzdWx0cyB9KSB7XHJcblxyXG4gICAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgbGF0aXR1ZGU6IDM3Ljc1NzcsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiAtMTIyLjQzNzYsXHJcbiAgICAgICAgem9vbTogMTEsXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy9UcmFuc2Zvcm0gdGhlIHNlYXJjaFJlc3VsdHNcclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gc2VhcmNoUmVzdWx0cy5tYXAocmVzdWx0ID0+ICh7XHJcbiAgICAgICAgbG9uZ2l0dWRlOnJlc3VsdC5sb25nLFxyXG4gICAgICAgIGxhdGl0dWRlOnJlc3VsdC5sYXQsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgLy9DZW50ZXIgdGhlIG1hcCBsb2NhdGlvblxyXG4gICAgY29uc3QgY2VudGVyID0gZ2V0Q2VudGVyKGNvb3JkaW5hdGVzKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hKVxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxSZWFjdE1hcEdMIFxyXG4gICAgICAgICAgICBtYXBTdHlsZT1cIm1hcGJveDovL3N0eWxlcy9yYWphdGI1NTUvY2tzMzVrZzloNHA3ZTE4dDNuMXNkeXMzelwiXHJcbiAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtwcm9jZXNzLmVudi5tYXBib3hfa2V5fVxyXG4gICAgICAgICAgICB7Li4udmlld3BvcnR9XHJcbiAgICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9eyhuZXh0Vmlld3BvcnQpID0+IHNldFZpZXdwb3J0KG5leHRWaWV3cG9ydCl9XHJcbiAgICAgICAgPjwvUmVhY3RNYXBHTD5cclxuICAgICk7XHJcbiAgICAgICAgXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=