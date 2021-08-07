self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-date-range/dist/styles.css */ "./node_modules/react-date-range/dist/styles.css");
/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-date-range/dist/theme/default.css */ "./node_modules/react-date-range/dist/theme/default.css");
/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-date-range */ "./node_modules/react-date-range/dist/index.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\HP\\React Apps\\airbnb-clone\\components\\Header.js",
    _s = $RefreshSig$();




 // main style file

 // theme css file




function Header(_ref) {
  _s();

  var placeholder = _ref.placeholder;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      searchInput = _useState[0],
      setSearchInput = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Date()),
      startDate = _useState2[0],
      setStartDate = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Date()),
      endDate = _useState3[0],
      setEndDate = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1),
      numberOfGuests = _useState4[0],
      setNumberOfGuests = _useState4[1];

  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  var selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  };

  var handleSelect = function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  var resetInput = function resetInput() {
    setSearchInput("");
  };

  var search = function search() {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests: numberOfGuests
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: "sticky top-0 z-50 grid \r grid-cols-3 bg-white shadow-md p-5 md:px-10",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      onClick: function onClick() {
        return router.push("/");
      },
      className: "relative flex items-center h-10\r cursor-pointer my-auto",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: "https://links.papareact.com/qd3",
        layout: "fill",
        objectFit: "contain",
        objectPosition: "left"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center md:border-2 \r rounded-full py-2 md:shadow-sm",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        value: searchInput,
        onChange: function onChange(e) {
          return setSearchInput(e.target.value);
        },
        className: "flex-grow pl-5 bg-transparent outline-none\r text-gray-600 placeholder-gray-400",
        type: "text",
        placeholder: "Start your search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.SearchIcon, {
        className: "hidden md:inline-flex\r h-8 bg-red-400 text-white\r rounded-full p-2 cursor-pointer md:mx-2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex space-x-4 items-center\r justify-end text-gray-500",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "hidden md:inline cursor-pointer",
        children: " Become a host"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.GlobeAltIcon, {
        className: "h-6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center space-x-2 border-2 p-2 rounded-full",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.MenuIcon, {
          className: "h-6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.UserCircleIcon, {
          className: "h-6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, this), searchInput && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col col-span-3 mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_date_range__WEBPACK_IMPORTED_MODULE_6__.DateRangePicker, {
        ranges: [selectionRange],
        minDate: new Date(),
        rangeColors: ["#FD5861"],
        onChange: handleSelect
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center border-b mb-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "text-2xl pl-2 flex-grow font-semibold",
          children: "Number of Guests"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.UsersIcon, {
          className: "h-5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          value: numberOfGuests,
          onChange: function onChange(e) {
            return setNumberOfGuests(e.target.value);
          },
          min: 1,
          type: "number",
          className: "w-12 pl-2 text-lg outline-none text-red-400"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: resetInput,
          className: "flex-grow text-gray-500",
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: search,
          className: "flex-grow text-red-400",
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, this);
}

_s(Header, "kJavyjFm2Ep95hcQpHO0luV120Q=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicGxhY2Vob2xkZXIiLCJ1c2VTdGF0ZSIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJEYXRlIiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJudW1iZXJPZkd1ZXN0cyIsInNldE51bWJlck9mR3Vlc3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2VsZWN0aW9uUmFuZ2UiLCJrZXkiLCJoYW5kbGVTZWxlY3QiLCJyYW5nZXMiLCJzZWxlY3Rpb24iLCJyZXNldElucHV0Iiwic2VhcmNoIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJsb2NhdGlvbiIsInRvSVNPU3RyaW5nIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FDMkM7O0NBQ087O0FBQ2xEO0FBQ0E7O0FBR0EsU0FBU0EsTUFBVCxPQUFpQztBQUFBOztBQUFBLE1BQWZDLFdBQWUsUUFBZkEsV0FBZTs7QUFBQSxrQkFDU0MsK0NBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDdEJDLFdBRHNCO0FBQUEsTUFDVEMsY0FEUzs7QUFBQSxtQkFFS0YsK0NBQVEsQ0FBQyxJQUFJRyxJQUFKLEVBQUQsQ0FGYjtBQUFBLE1BRXRCQyxTQUZzQjtBQUFBLE1BRVhDLFlBRlc7O0FBQUEsbUJBR0NMLCtDQUFRLENBQUMsSUFBSUcsSUFBSixFQUFELENBSFQ7QUFBQSxNQUd0QkcsT0FIc0I7QUFBQSxNQUdiQyxVQUhhOztBQUFBLG1CQUllUCwrQ0FBUSxDQUFDLENBQUQsQ0FKdkI7QUFBQSxNQUl0QlEsY0FKc0I7QUFBQSxNQUlOQyxpQkFKTTs7QUFLN0IsTUFBTUMsTUFBTSxHQUFHQyxrRUFBUyxFQUF4QjtBQUdBLE1BQU1DLGNBQWMsR0FBRztB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QyxpQ0FBZjtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBQyx1Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLDhEQUFDLDZEQUFEO0FBQVcsbUJBQVMsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFDQSxlQUFLLEVBQUVOLGNBRFA7QUFFQSxrQkFBUSxFQUFFLGtCQUFDZ0IsQ0FBRDtBQUFBLG1CQUFPZixpQkFBaUIsQ0FBQ2UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBeEI7QUFBQSxXQUZWO0FBR0EsYUFBRyxFQUFFLENBSEw7QUFJQSxjQUFJLEVBQUMsUUFKTDtBQUljLG1CQUFTLEVBQUM7QUFKeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSixlQWlCSTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGdDQUNJO0FBQVEsaUJBQU8sRUFBRVQsVUFBakI7QUFBNkIsbUJBQVMsRUFBQyx5QkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFRLGlCQUFPLEVBQUVDLE1BQWpCO0FBQXlCLG1CQUFTLEVBQUMsd0JBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2Q1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrRUg7O0dBckdRcEIsTTtVQUtVYSw4RDs7O0tBTFZiLE07QUF1R1QsK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGVmODFjMmRkOTY5Y2E5MzIxOGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBTZWFyY2hJY29uLCBHbG9iZUFsdEljb24sIE1lbnVJY29uLFVzZXJDaXJjbGVJY29uLCBVc2Vyc0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgJ3JlYWN0LWRhdGUtcmFuZ2UvZGlzdC9zdHlsZXMuY3NzJzsgLy8gbWFpbiBzdHlsZSBmaWxlXHJcbmltcG9ydCAncmVhY3QtZGF0ZS1yYW5nZS9kaXN0L3RoZW1lL2RlZmF1bHQuY3NzJzsgLy8gdGhlbWUgY3NzIGZpbGVcclxuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyIH0gZnJvbSAncmVhY3QtZGF0ZS1yYW5nZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IHBsYWNlaG9sZGVyIH0pIHtcclxuICAgIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICAgIGNvbnN0IFtudW1iZXJPZkd1ZXN0cywgc2V0TnVtYmVyT2ZHdWVzdHNdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblxyXG4gICAgY29uc3Qgc2VsZWN0aW9uUmFuZ2UgPSB7XHJcbiAgICAgICAgc3RhcnREYXRlOiBzdGFydERhdGUsXHJcbiAgICAgICAgZW5kRGF0ZTogZW5kRGF0ZSxcclxuICAgICAgICBrZXk6ICdzZWxlY3Rpb24nXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChyYW5nZXMpID0+IHtcclxuICAgICAgICBzZXRTdGFydERhdGUocmFuZ2VzLnNlbGVjdGlvbi5zdGFydERhdGUpO1xyXG4gICAgICAgIHNldEVuZERhdGUocmFuZ2VzLnNlbGVjdGlvbi5lbmREYXRlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc2V0SW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2VhcmNoSW5wdXQoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3NlYXJjaFwiLFxyXG4gICAgICAgICAgICBxdWVyeTp7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogc2VhcmNoSW5wdXQsXHJcbiAgICAgICAgICAgICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogZW5kRGF0ZS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZHdWVzdHMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei01MCBncmlkIFxyXG4gICAgICAgIGdyaWQtY29scy0zIGJnLXdoaXRlIHNoYWRvdy1tZCBwLTUgbWQ6cHgtMTBcIj5cclxuICAgICAgICAgICAgey8qIExlZnQgKi99XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBoLTEwXHJcbiAgICAgICAgICAgIGN1cnNvci1wb2ludGVyIG15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vcWQzXCIgXHJcbiAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgb2JqZWN0UG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIE1pZGRsZS1TZWFyY2ggKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWQ6Ym9yZGVyLTIgXHJcbiAgICAgICAgICAgIHJvdW5kZWQtZnVsbCBweS0yIG1kOnNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcGwtNSBiZy10cmFuc3BhcmVudCBvdXRsaW5lLW5vbmVcclxuICAgICAgICAgICAgICAgIHRleHQtZ3JheS02MDAgcGxhY2Vob2xkZXItZ3JheS00MDBcIiBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTdGFydCB5b3VyIHNlYXJjaFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6aW5saW5lLWZsZXhcclxuICAgICAgICAgICAgICAgIGgtOCBiZy1yZWQtNDAwIHRleHQtd2hpdGVcclxuICAgICAgICAgICAgICAgIHJvdW5kZWQtZnVsbCBwLTIgY3Vyc29yLXBvaW50ZXIgbWQ6bXgtMlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFJpZ2h0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IGl0ZW1zLWNlbnRlclxyXG4gICAgICAgICAgICBqdXN0aWZ5LWVuZCB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6aW5saW5lIGN1cnNvci1wb2ludGVyXCI+IEJlY29tZSBhIGhvc3Q8L3A+XHJcbiAgICAgICAgICAgICAgICA8R2xvYmVBbHRJY29uIGNsYXNzTmFtZT1cImgtNlwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBib3JkZXItMiBwLTIgcm91bmRlZC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT1cImgtNlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJDaXJjbGVJY29uIGNsYXNzTmFtZT1cImgtNlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7c2VhcmNoSW5wdXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTMgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXRlUmFuZ2VQaWNrZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlcz17W3NlbGVjdGlvblJhbmdlXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VDb2xvcnM9e1tcIiNGRDU4NjFcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJvcmRlci1iIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIHBsLTIgZmxleC1ncm93IGZvbnQtc2VtaWJvbGRcIj5OdW1iZXIgb2YgR3Vlc3RzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJzSWNvbiBjbGFzc05hbWU9XCJoLTVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e251bWJlck9mR3Vlc3RzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE51bWJlck9mR3Vlc3RzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwidy0xMiBwbC0yIHRleHQtbGcgb3V0bGluZS1ub25lIHRleHQtcmVkLTQwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc2V0SW5wdXR9IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyB0ZXh0LWdyYXktNTAwXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VhcmNofSBjbGFzc05hbWU9XCJmbGV4LWdyb3cgdGV4dC1yZWQtNDAwXCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9