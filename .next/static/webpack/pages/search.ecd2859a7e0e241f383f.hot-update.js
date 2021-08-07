self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./components/InfoCard.js":
/*!********************************!*\
  !*** ./components/InfoCard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\HP\\React Apps\\airbnb-clone\\components\\InfoCard.js";

function InfoCard(_ref) {
  var img = _ref.img,
      location = _ref.location,
      tilte = _ref.tilte,
      description = _ref.description,
      star = _ref.star,
      price = _ref.price,
      total = _ref.total;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = InfoCard;
/* harmony default export */ __webpack_exports__["default"] = (InfoCard);

var _c;

$RefreshReg$(_c, "InfoCard");

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


/***/ }),

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_InfoCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InfoCard */ "./components/InfoCard.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\HP\\React Apps\\airbnb-clone\\pages\\search.js",
    _s = $RefreshSig$();







function Search(_ref) {
  _s();

  var _this = this;

  var searchResults = _ref.searchResults;
  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(); //ES6 Destructuring

  var _router$query = router.query,
      location = _router$query.location,
      startDate = _router$query.startDate,
      endDate = _router$query.endDate,
      numberOfGuests = _router$query.numberOfGuests;
  var formattedStartDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(new Date(startDate), "dd MMMM yy");
  var formattedEndDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(new Date(endDate), "dd MMMM yy");
  var range = "".concat(formattedStartDate, " - ").concat(formattedEndDate);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {
      placeholder: "".concat(location, " | ").concat(range, " | ").concat(numberOfGuests, " guests")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 12
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "flex",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "flex-grow pt-14 px-16",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs",
          children: ["300+ stays - ", range, " - for ", numberOfGuests, " guests"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "text-3xl font-semibold mt-2 mb-6",
          children: ["Stays in ", location]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "hidden md:inline-flex mb-5 space-x-3\r text-gray-800 whitespace-nowrap",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "button",
            children: "Cancellation Felxibility"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "button",
            children: "Type of Place"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "button",
            children: "Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "button",
            children: "Rooms & Beds"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "button",
            children: "More Filters"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this), searchResults.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InfoCard__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

_s(Search, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Search;
/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c;

$RefreshReg$(_c, "Search");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmZvQ2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIkluZm9DYXJkIiwiaW1nIiwibG9jYXRpb24iLCJ0aWx0ZSIsImRlc2NyaXB0aW9uIiwic3RhciIsInByaWNlIiwidG90YWwiLCJTZWFyY2giLCJzZWFyY2hSZXN1bHRzIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJzdGFydERhdGUiLCJlbmREYXRlIiwibnVtYmVyT2ZHdWVzdHMiLCJmb3JtYXR0ZWRTdGFydERhdGUiLCJmb3JtYXQiLCJEYXRlIiwiZm9ybWF0dGVkRW5kRGF0ZSIsInJhbmdlIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLFFBQVQsT0FBNkU7QUFBQSxNQUF6REMsR0FBeUQsUUFBekRBLEdBQXlEO0FBQUEsTUFBcERDLFFBQW9ELFFBQXBEQSxRQUFvRDtBQUFBLE1BQTFDQyxLQUEwQyxRQUExQ0EsS0FBMEM7QUFBQSxNQUFuQ0MsV0FBbUMsUUFBbkNBLFdBQW1DO0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUFBLE1BQWhCQyxLQUFnQixRQUFoQkEsS0FBZ0I7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDekUsc0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0tBTlFQLFE7QUFRVCwrREFBZUEsUUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNRLE1BQVQsT0FBa0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFoQkMsYUFBZ0IsUUFBaEJBLGFBQWdCO0FBQzlCLE1BQU1DLE1BQU0sR0FBR0Msa0VBQVMsRUFBeEIsQ0FEOEIsQ0FHOUI7O0FBSDhCLHNCQUkyQkQsTUFBTSxDQUFDRSxLQUpsQztBQUFBLE1BSXRCVixRQUpzQixpQkFJdEJBLFFBSnNCO0FBQUEsTUFJWlcsU0FKWSxpQkFJWkEsU0FKWTtBQUFBLE1BSURDLE9BSkMsaUJBSURBLE9BSkM7QUFBQSxNQUlRQyxjQUpSLGlCQUlRQSxjQUpSO0FBTTlCLE1BQU1DLGtCQUFrQixHQUFHQyxnREFBTSxDQUFDLElBQUlDLElBQUosQ0FBU0wsU0FBVCxDQUFELEVBQXNCLFlBQXRCLENBQWpDO0FBQ0EsTUFBTU0sZ0JBQWdCLEdBQUdGLGdEQUFNLENBQUMsSUFBSUMsSUFBSixDQUFTSixPQUFULENBQUQsRUFBb0IsWUFBcEIsQ0FBL0I7QUFDQSxNQUFNTSxLQUFLLGFBQU1KLGtCQUFOLGdCQUE4QkcsZ0JBQTlCLENBQVg7QUFFQSxzQkFDSTtBQUFBLDRCQUNHLDhEQUFDLHVEQUFEO0FBQVEsaUJBQVcsWUFBS2pCLFFBQUwsZ0JBQW1Ca0IsS0FBbkIsZ0JBQThCTCxjQUE5QjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREgsZUFHSTtBQUFNLGVBQVMsRUFBQyxNQUFoQjtBQUFBLDZCQUNJO0FBQVMsaUJBQVMsRUFBQyx1QkFBbkI7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUMsU0FBYjtBQUFBLHNDQUFxQ0ssS0FBckMsYUFBbURMLGNBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUdJO0FBQUksbUJBQVMsRUFBQyxrQ0FBZDtBQUFBLGtDQUEyRGIsUUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBS0k7QUFBSyxtQkFBUyxFQUFDLHdFQUFmO0FBQUEsa0NBRUk7QUFBRyxxQkFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSTtBQUFHLHFCQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixlQUlJO0FBQUcscUJBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLGVBS0k7QUFBRyxxQkFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEosZUFNSTtBQUFHLHFCQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosRUFjS08sYUFBYSxDQUFDWSxHQUFkLENBQWtCLFVBQUFDLElBQUk7QUFBQSw4QkFDbkIsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEbUI7QUFBQSxTQUF0QixDQWRMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQXdCRyw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNEJIOztHQXRDUWQsTTtVQUNVRyw4RDs7O0tBRFZILE07QUF3Q1QsK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLmVjZDI4NTlhN2UwZTI0MWYzODNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmZ1bmN0aW9uIEluZm9DYXJkKHsgaW1nLCBsb2NhdGlvbiwgdGlsdGUsIGRlc2NyaXB0aW9uLCBzdGFyLCBwcmljZSwgdG90YWwgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mb0NhcmRcclxuIiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcclxuaW1wb3J0IEluZm9DYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0luZm9DYXJkXCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2goeyBzZWFyY2hSZXN1bHRzfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy9FUzYgRGVzdHJ1Y3R1cmluZ1xyXG4gICAgY29uc3QgeyBsb2NhdGlvbiwgc3RhcnREYXRlLCBlbmREYXRlLCBudW1iZXJPZkd1ZXN0cyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdHRlZFN0YXJ0RGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShzdGFydERhdGUpLCBcImRkIE1NTU0geXlcIilcclxuICAgIGNvbnN0IGZvcm1hdHRlZEVuZERhdGUgPSBmb3JtYXQobmV3IERhdGUoZW5kRGF0ZSksIFwiZGQgTU1NTSB5eVwiKTtcclxuICAgIGNvbnN0IHJhbmdlID0gYCR7Zm9ybWF0dGVkU3RhcnREYXRlfSAtICR7Zm9ybWF0dGVkRW5kRGF0ZX1gXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgIDxIZWFkZXIgcGxhY2Vob2xkZXI9e2Ake2xvY2F0aW9ufSB8ICR7cmFuZ2V9IHwgJHtudW1iZXJPZkd1ZXN0c30gZ3Vlc3RzYH0vPlxyXG5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleC1ncm93IHB0LTE0IHB4LTE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14c1wiPjMwMCsgc3RheXMgLSB7cmFuZ2V9IC0gZm9yIHtudW1iZXJPZkd1ZXN0c30gZ3Vlc3RzPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZCBtdC0yIG1iLTZcIj5TdGF5cyBpbiB7bG9jYXRpb259PC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6aW5saW5lLWZsZXggbWItNSBzcGFjZS14LTNcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWdyYXktODAwIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJ1dHRvblwiPkNhbmNlbGxhdGlvbiBGZWx4aWJpbGl0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnV0dG9uXCI+VHlwZSBvZiBQbGFjZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnV0dG9uXCI+UHJpY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJ1dHRvblwiPlJvb21zICYgQmVkczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnV0dG9uXCI+TW9yZSBGaWx0ZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7c2VhcmNoUmVzdWx0cy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZvQ2FyZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFxyXG4iXSwic291cmNlUm9vdCI6IiJ9