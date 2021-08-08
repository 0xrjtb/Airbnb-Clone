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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
      selectedLocation = _useState[0],
      setSelectedLocation = _useState[1]; //Transform the searchResults


  var coordinates = searchResults.map(function (result) {
    return {
      longitude: result["long"],
      latitude: result.lat
    };
  }); //Center the map location

  var center = (0,geolib_es_getCenter__WEBPACK_IMPORTED_MODULE_4__.default)(coordinates);

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  }),
      viewport = _useState2[0],
      setViewport = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({
    mapStyle: "mapbox://styles/rajatb555/cks35kg9h4p7e18t3n1sdys3z",
    mapboxApiAccessToken: "pk.eyJ1IjoicmFqYXRiNTU1IiwiYSI6ImNrczM1Zjd4NjA2OHIydXBoMGNpaW1wNXQifQ.tSeSFRyCYxRTrkGxA7H5ZA"
  }, viewport), {}, {
    onViewportChange: function onViewportChange(nextViewport) {
      return setViewport(nextViewport);
    },
    children: searchResults.map(function (result) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_3__.Marker, {
          longitude: result["long"],
          latitude: result.lat,
          offsetLeft: -20,
          offsetTop: -10,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            onClick: function onClick() {
              return setSelectedLocation(result);
            },
            className: "cursor-pointer text-2xl animate-bounce",
            "aria-label": "pointer",
            children: "\uD83D\uDCCD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this), selectedLocation["long"] === result["long"] ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_3__.Popup, {
          onClose: function onClose() {
            return setSelectedLocation;
          },
          closeOnClick: true,
          children: result.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }, _this) : false]
      }, result["long"], true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

_s(Map, "K5k2Rc/bhaiOoF5zRcEUuYQqQnE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXAuanMiXSwibmFtZXMiOlsiTWFwIiwic2VhcmNoUmVzdWx0cyIsInVzZVN0YXRlIiwic2VsZWN0ZWRMb2NhdGlvbiIsInNldFNlbGVjdGVkTG9jYXRpb24iLCJjb29yZGluYXRlcyIsIm1hcCIsInJlc3VsdCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwibGF0IiwiY2VudGVyIiwiZ2V0Q2VudGVyIiwid2lkdGgiLCJoZWlnaHQiLCJ6b29tIiwidmlld3BvcnQiLCJzZXRWaWV3cG9ydCIsInByb2Nlc3MiLCJtYXBib3hfa2V5IiwibmV4dFZpZXdwb3J0IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsR0FBVCxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQWpCQyxhQUFpQixRQUFqQkEsYUFBaUI7O0FBQUEsa0JBRW9CQywrQ0FBUSxDQUFDLEVBQUQsQ0FGNUI7QUFBQSxNQUVyQkMsZ0JBRnFCO0FBQUEsTUFFSEMsbUJBRkcsaUJBSTVCOzs7QUFDQSxNQUFNQyxXQUFXLEdBQUdKLGFBQWEsQ0FBQ0ssR0FBZCxDQUFrQixVQUFBQyxNQUFNO0FBQUEsV0FBSztBQUM3Q0MsZUFBUyxFQUFDRCxNQUFNLFFBRDZCO0FBRTdDRSxjQUFRLEVBQUNGLE1BQU0sQ0FBQ0c7QUFGNkIsS0FBTDtBQUFBLEdBQXhCLENBQXBCLENBTDRCLENBVTVCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNERBQVMsQ0FBQ1AsV0FBRCxDQUF4Qjs7QUFYNEIsbUJBYUlILCtDQUFRLENBQUM7QUFDckNXLFNBQUssRUFBRSxNQUQ4QjtBQUVyQ0MsVUFBTSxFQUFFLE1BRjZCO0FBR3JDTCxZQUFRLEVBQUVFLE1BQU0sQ0FBQ0YsUUFIb0I7QUFJckNELGFBQVMsRUFBRUcsTUFBTSxDQUFDSCxTQUptQjtBQUtyQ08sUUFBSSxFQUFFO0FBTCtCLEdBQUQsQ0FiWjtBQUFBLE1BYXJCQyxRQWJxQjtBQUFBLE1BYVhDLFdBYlc7O0FBcUI1QixzQkFFSSw4REFBQyxpREFBRDtBQUNJLFlBQVEsRUFBQyxxREFEYjtBQUVJLHdCQUFvQixFQUFFQyw4RkFBc0JDO0FBRmhELEtBR1FILFFBSFI7QUFJSSxvQkFBZ0IsRUFBRSwwQkFBQ0ksWUFBRDtBQUFBLGFBQWtCSCxXQUFXLENBQUNHLFlBQUQsQ0FBN0I7QUFBQSxLQUp0QjtBQUFBLGNBTUtuQixhQUFhLENBQUNLLEdBQWQsQ0FBa0IsVUFBQUMsTUFBTTtBQUFBLDBCQUNyQjtBQUFBLGdDQUNJLDhEQUFDLGdEQUFEO0FBQ0ksbUJBQVMsRUFBRUEsTUFBTSxRQURyQjtBQUVJLGtCQUFRLEVBQUdBLE1BQU0sQ0FBQ0csR0FGdEI7QUFHSSxvQkFBVSxFQUFFLENBQUMsRUFIakI7QUFJSSxtQkFBUyxFQUFFLENBQUMsRUFKaEI7QUFBQSxpQ0FNSTtBQUFHLG1CQUFPLEVBQUU7QUFBQSxxQkFBSU4sbUJBQW1CLENBQUNHLE1BQUQsQ0FBdkI7QUFBQSxhQUFaO0FBQTRDLHFCQUFTLEVBQUMsd0NBQXREO0FBQ0EsMEJBQVcsU0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFlS0osZ0JBQWdCLFFBQWhCLEtBQXdCSSxNQUFNLFFBQTlCLGdCQUNHLDhEQUFDLCtDQUFEO0FBQ0EsaUJBQU8sRUFBRTtBQUFBLG1CQUFNSCxtQkFBTjtBQUFBLFdBRFQ7QUFFQSxzQkFBWSxFQUFFLElBRmQ7QUFBQSxvQkFHS0csTUFBTSxDQUFDYztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsR0FPRyxLQXRCUjtBQUFBLFNBQVVkLE1BQU0sUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURxQjtBQUFBLEtBQXhCO0FBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZKO0FBeUNIOztHQTlEUVAsRzs7S0FBQUEsRztBQWdFVCwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2guZWZhN2YyMDAyM2MxNjgzYzYxOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RNYXBHTCwge01hcmtlciwgUG9wdXB9IGZyb20gJ3JlYWN0LW1hcC1nbCc7XHJcbmltcG9ydCBnZXRDZW50ZXIgZnJvbSBcImdlb2xpYi9lcy9nZXRDZW50ZXJcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBNYXAoeyBzZWFyY2hSZXN1bHRzIH0pIHtcclxuXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRMb2NhdGlvbiwgc2V0U2VsZWN0ZWRMb2NhdGlvbl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBcclxuICAgIC8vVHJhbnNmb3JtIHRoZSBzZWFyY2hSZXN1bHRzXHJcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IHNlYXJjaFJlc3VsdHMubWFwKHJlc3VsdCA9PiAoe1xyXG4gICAgICAgIGxvbmdpdHVkZTpyZXN1bHQubG9uZyxcclxuICAgICAgICBsYXRpdHVkZTpyZXN1bHQubGF0LFxyXG4gICAgfSkpO1xyXG5cclxuICAgIC8vQ2VudGVyIHRoZSBtYXAgbG9jYXRpb25cclxuICAgIGNvbnN0IGNlbnRlciA9IGdldENlbnRlcihjb29yZGluYXRlcylcclxuXHJcbiAgICBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdwb3J0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICBsYXRpdHVkZTogY2VudGVyLmxhdGl0dWRlLFxyXG4gICAgICAgIGxvbmdpdHVkZTogY2VudGVyLmxvbmdpdHVkZSxcclxuICAgICAgICB6b29tOiAxMSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxSZWFjdE1hcEdMIFxyXG4gICAgICAgICAgICBtYXBTdHlsZT1cIm1hcGJveDovL3N0eWxlcy9yYWphdGI1NTUvY2tzMzVrZzloNHA3ZTE4dDNuMXNkeXMzelwiXHJcbiAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtwcm9jZXNzLmVudi5tYXBib3hfa2V5fVxyXG4gICAgICAgICAgICB7Li4udmlld3BvcnR9XHJcbiAgICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9eyhuZXh0Vmlld3BvcnQpID0+IHNldFZpZXdwb3J0KG5leHRWaWV3cG9ydCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7c2VhcmNoUmVzdWx0cy5tYXAocmVzdWx0ID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyZXN1bHQubG9uZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU9e3Jlc3VsdC5sb25nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZT0ge3Jlc3VsdC5sYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldExlZnQ9ey0yMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0VG9wPXstMTB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKT0+c2V0U2VsZWN0ZWRMb2NhdGlvbihyZXN1bHQpfWNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgdGV4dC0yeGwgYW5pbWF0ZS1ib3VuY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg8J+TjVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NYXJrZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBUaGUgcG9wdXAgc2hvdWxkIHNob3cgaW4gcG9pbnRlciAqL31cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRMb2NhdGlvbi5sb25nPT09cmVzdWx0LmxvbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3B1cCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2VsZWN0ZWRMb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgKTooXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiBcclxuICAgICAgICA8L1JlYWN0TWFwR0w+XHJcbiAgICApO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcFxyXG4iXSwic291cmNlUm9vdCI6IiJ9