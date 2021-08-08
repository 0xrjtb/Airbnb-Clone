self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_InfoCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InfoCard */ "./components/InfoCard.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map */ "./components/Map.js");
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
  var formattedStartDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(startDate), "dd MMMM yy");
  var formattedEndDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(endDate), "dd MMMM yy");
  var range = "".concat(formattedStartDate, " - ").concat(formattedEndDate);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {
      placeholder: "".concat(location, " | ").concat(range, " | ").concat(numberOfGuests, " guests")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "flex-grow pt-14 px-16",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs",
          children: ["300+ stays - ", range, " - for ", numberOfGuests, " guests"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "text-3xl font-semibold mt-2 mb-6",
          children: ["Stays in ", location]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "hidden md:inline-flex mb-5 space-x-3\r text-gray-800 whitespace-nowrap",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "button",
            children: "Cancellation Felxibility"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "button",
            children: "Type of Place"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "button",
            children: "Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "button",
            children: "Rooms & Beds"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "button",
            children: "More Filters"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col",
          children: searchResults === null || searchResults === void 0 ? void 0 : searchResults.map(function (_ref2) {
            var img = _ref2.img,
                location = _ref2.location,
                title = _ref2.title,
                description = _ref2.description,
                star = _ref2.star,
                price = _ref2.price,
                total = _ref2.total;
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InfoCard__WEBPACK_IMPORTED_MODULE_4__.default, {
              img: img,
              location: location,
              title: title,
              description: description,
              star: star,
              price: price,
              total: total
            }, img, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "hidden xl:inline-flex md:min-w-[600px]",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Map__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

_s(Search, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Search;
var __N_SSP = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInNlYXJjaFJlc3VsdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImxvY2F0aW9uIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm51bWJlck9mR3Vlc3RzIiwiZm9ybWF0dGVkU3RhcnREYXRlIiwiZm9ybWF0IiwiRGF0ZSIsImZvcm1hdHRlZEVuZERhdGUiLCJyYW5nZSIsIm1hcCIsImltZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGFyIiwicHJpY2UiLCJ0b3RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULE9BQW1DO0FBQUE7O0FBQUE7O0FBQUEsTUFBakJDLGFBQWlCLFFBQWpCQSxhQUFpQjtBQUMvQixNQUFNQyxNQUFNLEdBQUdDLGtFQUFTLEVBQXhCLENBRCtCLENBRy9COztBQUgrQixzQkFJMEJELE1BQU0sQ0FBQ0UsS0FKakM7QUFBQSxNQUl2QkMsUUFKdUIsaUJBSXZCQSxRQUp1QjtBQUFBLE1BSWJDLFNBSmEsaUJBSWJBLFNBSmE7QUFBQSxNQUlGQyxPQUpFLGlCQUlGQSxPQUpFO0FBQUEsTUFJT0MsY0FKUCxpQkFJT0EsY0FKUDtBQU0vQixNQUFNQyxrQkFBa0IsR0FBR0MsZ0RBQU0sQ0FBQyxJQUFJQyxJQUFKLENBQVNMLFNBQVQsQ0FBRCxFQUFzQixZQUF0QixDQUFqQztBQUNBLE1BQU1NLGdCQUFnQixHQUFHRixnREFBTSxDQUFDLElBQUlDLElBQUosQ0FBU0osT0FBVCxDQUFELEVBQW9CLFlBQXBCLENBQS9CO0FBQ0EsTUFBTU0sS0FBSyxhQUFNSixrQkFBTixnQkFBOEJHLGdCQUE5QixDQUFYO0FBRUEsc0JBQ0k7QUFBQSw0QkFDRyw4REFBQyx1REFBRDtBQUFRLGlCQUFXLFlBQUtQLFFBQUwsZ0JBQW1CUSxLQUFuQixnQkFBOEJMLGNBQTlCO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESCxlQUdJO0FBQU0sZUFBUyxFQUFDLE1BQWhCO0FBQUEsOEJBQ0k7QUFBUyxpQkFBUyxFQUFDLHVCQUFuQjtBQUFBLGdDQUNJO0FBQUcsbUJBQVMsRUFBQyxTQUFiO0FBQUEsc0NBQXFDSyxLQUFyQyxhQUFtREwsY0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBR0k7QUFBSSxtQkFBUyxFQUFDLGtDQUFkO0FBQUEsa0NBQTJESCxRQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFLSTtBQUFLLG1CQUFTLEVBQUMsd0VBQWY7QUFBQSxrQ0FFSTtBQUFHLHFCQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUcscUJBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBSUk7QUFBRyxxQkFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFLSTtBQUFHLHFCQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSixlQU1JO0FBQUcscUJBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSixlQWNJO0FBQUssbUJBQVMsRUFBQyxlQUFmO0FBQUEsb0JBQ0NKLGFBREQsYUFDQ0EsYUFERCx1QkFDQ0EsYUFBYSxDQUFFYSxHQUFmLENBQ0c7QUFBQSxnQkFBR0MsR0FBSCxTQUFHQSxHQUFIO0FBQUEsZ0JBQVFWLFFBQVIsU0FBUUEsUUFBUjtBQUFBLGdCQUFrQlcsS0FBbEIsU0FBa0JBLEtBQWxCO0FBQUEsZ0JBQXlCQyxXQUF6QixTQUF5QkEsV0FBekI7QUFBQSxnQkFBc0NDLElBQXRDLFNBQXNDQSxJQUF0QztBQUFBLGdCQUE0Q0MsS0FBNUMsU0FBNENBLEtBQTVDO0FBQUEsZ0JBQ0FDLEtBREEsU0FDQUEsS0FEQTtBQUFBLGdDQUVJLDhEQUFDLHlEQUFEO0FBRUksaUJBQUcsRUFBRUwsR0FGVDtBQUdJLHNCQUFRLEVBQUVWLFFBSGQ7QUFJSSxtQkFBSyxFQUFFVyxLQUpYO0FBS0kseUJBQVcsRUFBRUMsV0FMakI7QUFNSSxrQkFBSSxFQUFFQyxJQU5WO0FBT0ksbUJBQUssRUFBRUMsS0FQWDtBQVFJLG1CQUFLLEVBQUVDO0FBUlgsZUFDU0wsR0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUEsV0FESDtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFtQ0k7QUFBUyxpQkFBUyxFQUFDLHdDQUFuQjtBQUFBLCtCQUNJLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBNENHLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1Q0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnREg7O0dBMURRZixNO1VBQ1VHLDhEOzs7S0FEVkgsTTs7QUE0RFQsK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjQ5NWZhOTE0MDE0ZWVhODdlZTEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCJcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIlxyXG5pbXBvcnQgSW5mb0NhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5mb0NhcmRcIjtcclxuaW1wb3J0IE1hcCBmcm9tIFwiLi4vY29tcG9uZW50cy9NYXBcIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaCh7IHNlYXJjaFJlc3VsdHMgfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy9FUzYgRGVzdHJ1Y3R1cmluZ1xyXG4gICAgY29uc3QgeyBsb2NhdGlvbiwgc3RhcnREYXRlLCBlbmREYXRlLCBudW1iZXJPZkd1ZXN0cyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdHRlZFN0YXJ0RGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShzdGFydERhdGUpLCBcImRkIE1NTU0geXlcIilcclxuICAgIGNvbnN0IGZvcm1hdHRlZEVuZERhdGUgPSBmb3JtYXQobmV3IERhdGUoZW5kRGF0ZSksIFwiZGQgTU1NTSB5eVwiKTtcclxuICAgIGNvbnN0IHJhbmdlID0gYCR7Zm9ybWF0dGVkU3RhcnREYXRlfSAtICR7Zm9ybWF0dGVkRW5kRGF0ZX1gXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgIDxIZWFkZXIgcGxhY2Vob2xkZXI9e2Ake2xvY2F0aW9ufSB8ICR7cmFuZ2V9IHwgJHtudW1iZXJPZkd1ZXN0c30gZ3Vlc3RzYH0vPlxyXG5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleC1ncm93IHB0LTE0IHB4LTE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14c1wiPjMwMCsgc3RheXMgLSB7cmFuZ2V9IC0gZm9yIHtudW1iZXJPZkd1ZXN0c30gZ3Vlc3RzPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZCBtdC0yIG1iLTZcIj5TdGF5cyBpbiB7bG9jYXRpb259PC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6aW5saW5lLWZsZXggbWItNSBzcGFjZS14LTNcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWdyYXktODAwIHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJ1dHRvblwiPkNhbmNlbGxhdGlvbiBGZWx4aWJpbGl0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnV0dG9uXCI+VHlwZSBvZiBQbGFjZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnV0dG9uXCI+UHJpY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJ1dHRvblwiPlJvb21zICYgQmVkczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnV0dG9uXCI+TW9yZSBGaWx0ZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c2VhcmNoUmVzdWx0cz8ubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoeyBpbWcsIGxvY2F0aW9uLCB0aXRsZSwgZGVzY3JpcHRpb24sIHN0YXIsIHByaWNlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWwgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluZm9DYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nPXtpbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e2xvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Rhcj17c3Rhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw9e3RvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoaWRkZW4geGw6aW5saW5lLWZsZXggbWQ6bWluLXctWzYwMHB4XVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYXAgLz5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9pc3pcIikuXHJcbiAgICB0aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=