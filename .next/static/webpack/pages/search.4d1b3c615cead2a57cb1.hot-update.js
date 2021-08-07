self["webpackHotUpdate_N_E"]("pages/search",{

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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this), searchResults.map(function (_ref2) {
          var img = _ref2.img,
              location = _ref2.location,
              tite = _ref2.tite,
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
      lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInNlYXJjaFJlc3VsdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImxvY2F0aW9uIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm51bWJlck9mR3Vlc3RzIiwiZm9ybWF0dGVkU3RhcnREYXRlIiwiZm9ybWF0IiwiRGF0ZSIsImZvcm1hdHRlZEVuZERhdGUiLCJyYW5nZSIsIm1hcCIsImltZyIsInRpdGUiLCJkZXNjcmlwdGlvbiIsInN0YXIiLCJwcmljZSIsInRvdGFsIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxPQUFrQztBQUFBOztBQUFBOztBQUFBLE1BQWhCQyxhQUFnQixRQUFoQkEsYUFBZ0I7QUFDOUIsTUFBTUMsTUFBTSxHQUFHQyxrRUFBUyxFQUF4QixDQUQ4QixDQUc5Qjs7QUFIOEIsc0JBSTJCRCxNQUFNLENBQUNFLEtBSmxDO0FBQUEsTUFJdEJDLFFBSnNCLGlCQUl0QkEsUUFKc0I7QUFBQSxNQUlaQyxTQUpZLGlCQUlaQSxTQUpZO0FBQUEsTUFJREMsT0FKQyxpQkFJREEsT0FKQztBQUFBLE1BSVFDLGNBSlIsaUJBSVFBLGNBSlI7QUFNOUIsTUFBTUMsa0JBQWtCLEdBQUdDLGdEQUFNLENBQUMsSUFBSUMsSUFBSixDQUFTTCxTQUFULENBQUQsRUFBc0IsWUFBdEIsQ0FBakM7QUFDQSxNQUFNTSxnQkFBZ0IsR0FBR0YsZ0RBQU0sQ0FBQyxJQUFJQyxJQUFKLENBQVNKLE9BQVQsQ0FBRCxFQUFvQixZQUFwQixDQUEvQjtBQUNBLE1BQU1NLEtBQUssYUFBTUosa0JBQU4sZ0JBQThCRyxnQkFBOUIsQ0FBWDtBQUVBLHNCQUNJO0FBQUEsNEJBQ0csOERBQUMsdURBQUQ7QUFBUSxpQkFBVyxZQUFLUCxRQUFMLGdCQUFtQlEsS0FBbkIsZ0JBQThCTCxjQUE5QjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREgsZUFHSTtBQUFNLGVBQVMsRUFBQyxNQUFoQjtBQUFBLDZCQUNJO0FBQVMsaUJBQVMsRUFBQyx1QkFBbkI7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUMsU0FBYjtBQUFBLHNDQUFxQ0ssS0FBckMsYUFBbURMLGNBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUdJO0FBQUksbUJBQVMsRUFBQyxrQ0FBZDtBQUFBLGtDQUEyREgsUUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBS0k7QUFBSyxtQkFBUyxFQUFDLHdFQUFmO0FBQUEsa0NBRUk7QUFBRyxxQkFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSTtBQUFHLHFCQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixlQUlJO0FBQUcscUJBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLGVBS0k7QUFBRyxxQkFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEosZUFNSTtBQUFHLHFCQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosZUFjSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRKLEVBaUJLSixhQUFhLENBQUNhLEdBQWQsQ0FDRztBQUFBLGNBQUdDLEdBQUgsU0FBR0EsR0FBSDtBQUFBLGNBQVFWLFFBQVIsU0FBUUEsUUFBUjtBQUFBLGNBQWtCVyxJQUFsQixTQUFrQkEsSUFBbEI7QUFBQSxjQUF3QkMsV0FBeEIsU0FBd0JBLFdBQXhCO0FBQUEsY0FBcUNDLElBQXJDLFNBQXFDQSxJQUFyQztBQUFBLGNBQTJDQyxLQUEzQyxTQUEyQ0EsS0FBM0M7QUFBQSxjQUFrREMsS0FBbEQsU0FBa0RBLEtBQWxEO0FBQUEsOEJBQ0ksOERBQUMseURBQUQ7QUFFSSxlQUFHLEVBQUVMLEdBRlQ7QUFHSSxvQkFBUSxFQUFFVixRQUhkO0FBSUksaUJBQUssRUFBRWdCLEtBSlg7QUFLSSx1QkFBVyxFQUFFSixXQUxqQjtBQU1JLGdCQUFJLEVBQUVDLElBTlY7QUFPSSxpQkFBSyxFQUFFQyxLQVBYO0FBUUksaUJBQUssRUFBRUM7QUFSWCxhQUNTTCxHQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFBQSxTQURILENBakJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQXVDRyw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMkNIOztHQXJEUWYsTTtVQUNVRyw4RDs7O0tBRFZILE07QUF1RFQsK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjRkMWIzYzYxNWNlYWQyYTU3Y2IxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCJcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIlxyXG5pbXBvcnQgSW5mb0NhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5mb0NhcmRcIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaCh7IHNlYXJjaFJlc3VsdHN9KSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAvL0VTNiBEZXN0cnVjdHVyaW5nXHJcbiAgICBjb25zdCB7IGxvY2F0aW9uLCBzdGFydERhdGUsIGVuZERhdGUsIG51bWJlck9mR3Vlc3RzIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgY29uc3QgZm9ybWF0dGVkU3RhcnREYXRlID0gZm9ybWF0KG5ldyBEYXRlKHN0YXJ0RGF0ZSksIFwiZGQgTU1NTSB5eVwiKVxyXG4gICAgY29uc3QgZm9ybWF0dGVkRW5kRGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShlbmREYXRlKSwgXCJkZCBNTU1NIHl5XCIpO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBgJHtmb3JtYXR0ZWRTdGFydERhdGV9IC0gJHtmb3JtYXR0ZWRFbmREYXRlfWBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgPEhlYWRlciBwbGFjZWhvbGRlcj17YCR7bG9jYXRpb259IHwgJHtyYW5nZX0gfCAke251bWJlck9mR3Vlc3RzfSBndWVzdHNgfS8+XHJcblxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcHQtMTQgcHgtMTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+MzAwKyBzdGF5cyAtIHtyYW5nZX0gLSBmb3Ige251bWJlck9mR3Vlc3RzfSBndWVzdHM8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkIG10LTIgbWItNlwiPlN0YXlzIGluIHtsb2NhdGlvbn08L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDppbmxpbmUtZmxleCBtYi01IHNwYWNlLXgtM1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZ3JheS04MDAgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnV0dG9uXCI+Q2FuY2VsbGF0aW9uIEZlbHhpYmlsaXR5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJidXR0b25cIj5UeXBlIG9mIFBsYWNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJidXR0b25cIj5QcmljZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnV0dG9uXCI+Um9vbXMgJiBCZWRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJidXR0b25cIj5Nb3JlIEZpbHRlcnM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWFyY2hSZXN1bHRzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHsgaW1nLCBsb2NhdGlvbiwgdGl0ZSwgZGVzY3JpcHRpb24sIHN0YXIsIHByaWNlLCB0b3RhbCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5mb0NhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWc9e2ltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17bG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFyPXtzdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbD17dG90YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==