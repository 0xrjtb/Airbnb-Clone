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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_3__.Marker, {
          longitude: result["long"],
          latitude: result.lat,
          offsetLeft: -20,
          offsetTop: -10,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            onClick: function onClick() {
              return setSelectedLocation(result);
            },
            className: "cursor-pointer text-2xl animate-bounce",
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
        }, _this)
      }, result["long"], false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXAuanMiXSwibmFtZXMiOlsiTWFwIiwic2VhcmNoUmVzdWx0cyIsInVzZVN0YXRlIiwic2VsZWN0ZWRMb2NhdGlvbiIsInNldFNlbGVjdGVkTG9jYXRpb24iLCJjb29yZGluYXRlcyIsIm1hcCIsInJlc3VsdCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwibGF0IiwiY2VudGVyIiwiZ2V0Q2VudGVyIiwid2lkdGgiLCJoZWlnaHQiLCJ6b29tIiwidmlld3BvcnQiLCJzZXRWaWV3cG9ydCIsInByb2Nlc3MiLCJtYXBib3hfa2V5IiwibmV4dFZpZXdwb3J0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEdBQVQsT0FBZ0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFqQkMsYUFBaUIsUUFBakJBLGFBQWlCOztBQUFBLGtCQUVvQkMsK0NBQVEsQ0FBQyxFQUFELENBRjVCO0FBQUEsTUFFckJDLGdCQUZxQjtBQUFBLE1BRUhDLG1CQUZHLGlCQUk1Qjs7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHSixhQUFhLENBQUNLLEdBQWQsQ0FBa0IsVUFBQUMsTUFBTTtBQUFBLFdBQUs7QUFDN0NDLGVBQVMsRUFBQ0QsTUFBTSxRQUQ2QjtBQUU3Q0UsY0FBUSxFQUFDRixNQUFNLENBQUNHO0FBRjZCLEtBQUw7QUFBQSxHQUF4QixDQUFwQixDQUw0QixDQVU1Qjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDREQUFTLENBQUNQLFdBQUQsQ0FBeEI7O0FBWDRCLG1CQWFJSCwrQ0FBUSxDQUFDO0FBQ3JDVyxTQUFLLEVBQUUsTUFEOEI7QUFFckNDLFVBQU0sRUFBRSxNQUY2QjtBQUdyQ0wsWUFBUSxFQUFFRSxNQUFNLENBQUNGLFFBSG9CO0FBSXJDRCxhQUFTLEVBQUVHLE1BQU0sQ0FBQ0gsU0FKbUI7QUFLckNPLFFBQUksRUFBRTtBQUwrQixHQUFELENBYlo7QUFBQSxNQWFyQkMsUUFicUI7QUFBQSxNQWFYQyxXQWJXOztBQXFCNUIsc0JBRUksOERBQUMsaURBQUQ7QUFDSSxZQUFRLEVBQUMscURBRGI7QUFFSSx3QkFBb0IsRUFBRUMsOEZBQXNCQztBQUZoRCxLQUdRSCxRQUhSO0FBSUksb0JBQWdCLEVBQUUsMEJBQUNJLFlBQUQ7QUFBQSxhQUFrQkgsV0FBVyxDQUFDRyxZQUFELENBQTdCO0FBQUEsS0FKdEI7QUFBQSxjQU1LbkIsYUFBYSxDQUFDSyxHQUFkLENBQWtCLFVBQUFDLE1BQU07QUFBQSwwQkFDckI7QUFBQSwrQkFDSSw4REFBQyxnREFBRDtBQUNJLG1CQUFTLEVBQUVBLE1BQU0sUUFEckI7QUFFSSxrQkFBUSxFQUFHQSxNQUFNLENBQUNHLEdBRnRCO0FBR0ksb0JBQVUsRUFBRSxDQUFDLEVBSGpCO0FBSUksbUJBQVMsRUFBRSxDQUFDLEVBSmhCO0FBQUEsaUNBTUk7QUFBRyxtQkFBTyxFQUFFO0FBQUEscUJBQUlOLG1CQUFtQixDQUFDRyxNQUFELENBQXZCO0FBQUEsYUFBWjtBQUE0QyxxQkFBUyxFQUFDLHdDQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixTQUFVQSxNQUFNLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEcUI7QUFBQSxLQUF4QjtBQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQStCSDs7R0FwRFFQLEc7O0tBQUFBLEc7QUFzRFQsK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLmZkYzQwYTFmODZiZTQ3OWVkMTBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0TWFwR0wsIHtNYXJrZXIsIFBvcHVwfSBmcm9tICdyZWFjdC1tYXAtZ2wnO1xyXG5pbXBvcnQgZ2V0Q2VudGVyIGZyb20gXCJnZW9saWIvZXMvZ2V0Q2VudGVyXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gTWFwKHsgc2VhcmNoUmVzdWx0cyB9KSB7XHJcblxyXG4gICAgY29uc3QgW3NlbGVjdGVkTG9jYXRpb24sIHNldFNlbGVjdGVkTG9jYXRpb25dID0gdXNlU3RhdGUoe30pO1xyXG4gICAgXHJcbiAgICAvL1RyYW5zZm9ybSB0aGUgc2VhcmNoUmVzdWx0c1xyXG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBzZWFyY2hSZXN1bHRzLm1hcChyZXN1bHQgPT4gKHtcclxuICAgICAgICBsb25naXR1ZGU6cmVzdWx0LmxvbmcsXHJcbiAgICAgICAgbGF0aXR1ZGU6cmVzdWx0LmxhdCxcclxuICAgIH0pKTtcclxuXHJcbiAgICAvL0NlbnRlciB0aGUgbWFwIGxvY2F0aW9uXHJcbiAgICBjb25zdCBjZW50ZXIgPSBnZXRDZW50ZXIoY29vcmRpbmF0ZXMpXHJcblxyXG4gICAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgbGF0aXR1ZGU6IGNlbnRlci5sYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGU6IGNlbnRlci5sb25naXR1ZGUsXHJcbiAgICAgICAgem9vbTogMTEsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8UmVhY3RNYXBHTCBcclxuICAgICAgICAgICAgbWFwU3R5bGU9XCJtYXBib3g6Ly9zdHlsZXMvcmFqYXRiNTU1L2NrczM1a2c5aDRwN2UxOHQzbjFzZHlzM3pcIlxyXG4gICAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17cHJvY2Vzcy5lbnYubWFwYm94X2tleX1cclxuICAgICAgICAgICAgey4uLnZpZXdwb3J0fVxyXG4gICAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXsobmV4dFZpZXdwb3J0KSA9PiBzZXRWaWV3cG9ydChuZXh0Vmlld3BvcnQpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3NlYXJjaFJlc3VsdHMubWFwKHJlc3VsdCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cmVzdWx0Lmxvbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYXJrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlPXtyZXN1bHQubG9uZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU9IHtyZXN1bHQubGF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0PXstMjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFRvcD17LTEwfSAgIFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17KCk9PnNldFNlbGVjdGVkTG9jYXRpb24ocmVzdWx0KX1jbGFzc05hbWU9J2N1cnNvci1wb2ludGVyIHRleHQtMnhsIGFuaW1hdGUtYm91bmNlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIPCfk408L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NYXJrZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuIFxyXG4gICAgICAgIDwvUmVhY3RNYXBHTD5cclxuICAgICk7XHJcbiAgICAgICAgXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=