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
        placeholder: placeholder || "Start your search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.SearchIcon, {
        className: "hidden md:inline-flex\r h-8 bg-red-400 text-white\r rounded-full p-2 cursor-pointer md:mx-2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
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
        lineNumber: 72,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.GlobeAltIcon, {
        className: "h-6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center space-x-2 border-2 p-2 rounded-full",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.MenuIcon, {
          className: "h-6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.UserCircleIcon, {
          className: "h-6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
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
        lineNumber: 83,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center border-b mb-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "text-2xl pl-2 flex-grow font-semibold",
          children: "Number of Guests"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.UsersIcon, {
          className: "h-5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
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
          lineNumber: 92,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: resetInput,
          className: "flex-grow text-gray-500",
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: search,
          className: "flex-grow text-red-400",
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicGxhY2Vob2xkZXIiLCJ1c2VTdGF0ZSIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJEYXRlIiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJudW1iZXJPZkd1ZXN0cyIsInNldE51bWJlck9mR3Vlc3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2VsZWN0aW9uUmFuZ2UiLCJrZXkiLCJoYW5kbGVTZWxlY3QiLCJyYW5nZXMiLCJzZWxlY3Rpb24iLCJyZXNldElucHV0Iiwic2VhcmNoIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJsb2NhdGlvbiIsInRvSVNPU3RyaW5nIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FDMkM7O0NBQ087O0FBQ2xEO0FBQ0E7O0FBR0EsU0FBU0EsTUFBVCxPQUFpQztBQUFBOztBQUFBLE1BQWZDLFdBQWUsUUFBZkEsV0FBZTs7QUFBQSxrQkFDU0MsK0NBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDdEJDLFdBRHNCO0FBQUEsTUFDVEMsY0FEUzs7QUFBQSxtQkFFS0YsK0NBQVEsQ0FBQyxJQUFJRyxJQUFKLEVBQUQsQ0FGYjtBQUFBLE1BRXRCQyxTQUZzQjtBQUFBLE1BRVhDLFlBRlc7O0FBQUEsbUJBR0NMLCtDQUFRLENBQUMsSUFBSUcsSUFBSixFQUFELENBSFQ7QUFBQSxNQUd0QkcsT0FIc0I7QUFBQSxNQUdiQyxVQUhhOztBQUFBLG1CQUllUCwrQ0FBUSxDQUFDLENBQUQsQ0FKdkI7QUFBQSxNQUl0QlEsY0FKc0I7QUFBQSxNQUlOQyxpQkFKTTs7QUFLN0IsTUFBTUMsTUFBTSxHQUFHQyxrRUFBUyxFQUF4QjtBQUdBLE1BQU1DLGNBQWMsR0FBRztBQUNuQlIsYUFBUyxFQUFFQSxTQURRO0FBRW5CRSxXQUFPLEVBQUVBLE9BRlU7QUFHbkJPLE9BQUcsRUFBRTtBQUhjLEdBQXZCOztBQU1BLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBWTtBQUM3QlYsZ0JBQVksQ0FBQ1UsTUFBTSxDQUFDQyxTQUFQLENBQWlCWixTQUFsQixDQUFaO0FBQ0FHLGNBQVUsQ0FBQ1EsTUFBTSxDQUFDQyxTQUFQLENBQWlCVixPQUFsQixDQUFWO0FBQ0gsR0FIRDs7QUFLQSxNQUFNVyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCZixrQkFBYyxDQUFDLEVBQUQsQ0FBZDtBQUNILEdBRkQ7O0FBSUEsTUFBTWdCLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakJSLFVBQU0sQ0FBQ1MsSUFBUCxDQUFZO0FBQ1JDLGNBQVEsRUFBRSxTQURGO0FBRVJDLFdBQUssRUFBQztBQUNGQyxnQkFBUSxFQUFFckIsV0FEUjtBQUVGRyxpQkFBUyxFQUFFQSxTQUFTLENBQUNtQixXQUFWLEVBRlQ7QUFHRmpCLGVBQU8sRUFBRUEsT0FBTyxDQUFDaUIsV0FBUixFQUhQO0FBSUZmLHNCQUFjLEVBQWRBO0FBSkU7QUFGRSxLQUFaO0FBU0gsR0FWRDs7QUFZQSxzQkFDSTtBQUFRLGFBQVMsRUFBQyx1RUFBbEI7QUFBQSw0QkFHSTtBQUFLLGFBQU8sRUFBRTtBQUFBLGVBQU1FLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZLEdBQVosQ0FBTjtBQUFBLE9BQWQ7QUFBc0MsZUFBUyxFQUFDLDBEQUFoRDtBQUFBLDZCQUVJLDhEQUFDLG1EQUFEO0FBQU8sV0FBRyxFQUFDLGlDQUFYO0FBQ0EsY0FBTSxFQUFDLE1BRFA7QUFFQSxpQkFBUyxFQUFDLFNBRlY7QUFHQSxzQkFBYyxFQUFDO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQWFJO0FBQUssZUFBUyxFQUFDLGlFQUFmO0FBQUEsOEJBRUk7QUFBTyxhQUFLLEVBQUVsQixXQUFkO0FBQ0EsZ0JBQVEsRUFBRSxrQkFBQ3VCLENBQUQ7QUFBQSxpQkFBT3RCLGNBQWMsQ0FBQ3NCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXJCO0FBQUEsU0FEVjtBQUNpRCxpQkFBUyxFQUFDLGlGQUQzRDtBQUVvQyxZQUFJLEVBQUMsTUFGekM7QUFFZ0QsbUJBQVcsRUFBRTNCLFdBQVcsSUFBSTtBQUY1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFLSSw4REFBQyw4REFBRDtBQUFZLGlCQUFTLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKLGVBd0JJO0FBQUssZUFBUyxFQUFDLHlEQUFmO0FBQUEsOEJBRUk7QUFBRyxpQkFBUyxFQUFDLGlDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSSw4REFBQyxnRUFBRDtBQUFjLGlCQUFTLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBS0k7QUFBSyxpQkFBUyxFQUFDLHVEQUFmO0FBQUEsZ0NBQ0ksOERBQUMsNERBQUQ7QUFBVSxtQkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSw4REFBQyxrRUFBRDtBQUFnQixtQkFBUyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJKLEVBbUNLRSxXQUFXLGlCQUNSO0FBQUssZUFBUyxFQUFDLGtDQUFmO0FBQUEsOEJBQ0ksOERBQUMsNkRBQUQ7QUFDSSxjQUFNLEVBQUUsQ0FBQ1csY0FBRCxDQURaO0FBRUksZUFBTyxFQUFFLElBQUlULElBQUosRUFGYjtBQUdJLG1CQUFXLEVBQUUsQ0FBQyxTQUFELENBSGpCO0FBSUksZ0JBQVEsRUFBRVc7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFPSTtBQUFLLGlCQUFTLEVBQUMsaUNBQWY7QUFBQSxnQ0FDSTtBQUFJLG1CQUFTLEVBQUMsdUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSw4REFBQyw2REFBRDtBQUFXLG1CQUFTLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQ0EsZUFBSyxFQUFFTixjQURQO0FBRUEsa0JBQVEsRUFBRSxrQkFBQ2dCLENBQUQ7QUFBQSxtQkFBT2YsaUJBQWlCLENBQUNlLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXhCO0FBQUEsV0FGVjtBQUdBLGFBQUcsRUFBRSxDQUhMO0FBSUEsY0FBSSxFQUFDLFFBSkw7QUFJYyxtQkFBUyxFQUFDO0FBSnhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEosZUFpQkk7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxnQ0FDSTtBQUFRLGlCQUFPLEVBQUVULFVBQWpCO0FBQTZCLG1CQUFTLEVBQUMseUJBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBUSxpQkFBTyxFQUFFQyxNQUFqQjtBQUF5QixtQkFBUyxFQUFDLHdCQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcENSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0RIOztHQWxHUXBCLE07VUFLVWEsOEQ7OztLQUxWYixNO0FBb0dULCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIzYzVlODJlMTVmYTA5MzRkOGNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgU2VhcmNoSWNvbiwgR2xvYmVBbHRJY29uLCBNZW51SWNvbixVc2VyQ2lyY2xlSWNvbiwgVXNlcnNJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICdyZWFjdC1kYXRlLXJhbmdlL2Rpc3Qvc3R5bGVzLmNzcyc7IC8vIG1haW4gc3R5bGUgZmlsZVxyXG5pbXBvcnQgJ3JlYWN0LWRhdGUtcmFuZ2UvZGlzdC90aGVtZS9kZWZhdWx0LmNzcyc7IC8vIHRoZW1lIGNzcyBmaWxlXHJcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlciB9IGZyb20gJ3JlYWN0LWRhdGUtcmFuZ2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoeyBwbGFjZWhvbGRlciB9KSB7XHJcbiAgICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgICBjb25zdCBbbnVtYmVyT2ZHdWVzdHMsIHNldE51bWJlck9mR3Vlc3RzXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IHNlbGVjdGlvblJhbmdlID0ge1xyXG4gICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLFxyXG4gICAgICAgIGVuZERhdGU6IGVuZERhdGUsXHJcbiAgICAgICAga2V5OiAnc2VsZWN0aW9uJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAocmFuZ2VzKSA9PiB7XHJcbiAgICAgICAgc2V0U3RhcnREYXRlKHJhbmdlcy5zZWxlY3Rpb24uc3RhcnREYXRlKTtcclxuICAgICAgICBzZXRFbmREYXRlKHJhbmdlcy5zZWxlY3Rpb24uZW5kRGF0ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXNldElucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaElucHV0KFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9zZWFyY2hcIixcclxuICAgICAgICAgICAgcXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHNlYXJjaElucHV0LFxyXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlOiBzdGFydERhdGUudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIGVuZERhdGU6IGVuZERhdGUudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIG51bWJlck9mR3Vlc3RzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotNTAgZ3JpZCBcclxuICAgICAgICBncmlkLWNvbHMtMyBiZy13aGl0ZSBzaGFkb3ctbWQgcC01IG1kOnB4LTEwXCI+XHJcbiAgICAgICAgICAgIHsvKiBMZWZ0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX0gY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgaC0xMFxyXG4gICAgICAgICAgICBjdXJzb3ItcG9pbnRlciBteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL3FkM1wiIFxyXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcclxuICAgICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBNaWRkbGUtU2VhcmNoICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1kOmJvcmRlci0yIFxyXG4gICAgICAgICAgICByb3VuZGVkLWZ1bGwgcHktMiBtZDpzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17c2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiZmxleC1ncm93IHBsLTUgYmctdHJhbnNwYXJlbnQgb3V0bGluZS1ub25lXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWdyYXktNjAwIHBsYWNlaG9sZGVyLWdyYXktNDAwXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXIgfHwgXCJTdGFydCB5b3VyIHNlYXJjaFwifSAvPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmlubGluZS1mbGV4XHJcbiAgICAgICAgICAgICAgICBoLTggYmctcmVkLTQwMCB0ZXh0LXdoaXRlXHJcbiAgICAgICAgICAgICAgICByb3VuZGVkLWZ1bGwgcC0yIGN1cnNvci1wb2ludGVyIG1kOm14LTJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBSaWdodCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNCBpdGVtcy1jZW50ZXJcclxuICAgICAgICAgICAganVzdGlmeS1lbmQgdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmlubGluZSBjdXJzb3ItcG9pbnRlclwiPiBCZWNvbWUgYSBob3N0PC9wPlxyXG4gICAgICAgICAgICAgICAgPEdsb2JlQWx0SWNvbiBjbGFzc05hbWU9XCJoLTZcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgYm9yZGVyLTIgcC0yIHJvdW5kZWQtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiBjbGFzc05hbWU9XCJoLTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVc2VyQ2lyY2xlSWNvbiBjbGFzc05hbWU9XCJoLTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge3NlYXJjaElucHV0ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0zIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0ZVJhbmdlUGlja2VyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZXM9e1tzZWxlY3Rpb25SYW5nZV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlQ29sb3JzPXtbXCIjRkQ1ODYxXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItYiBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBwbC0yIGZsZXgtZ3JvdyBmb250LXNlbWlib2xkXCI+TnVtYmVyIG9mIEd1ZXN0czwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxVc2Vyc0ljb24gY2xhc3NOYW1lPVwiaC01XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtudW1iZXJPZkd1ZXN0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROdW1iZXJPZkd1ZXN0cyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cInctMTIgcGwtMiB0ZXh0LWxnIG91dGxpbmUtbm9uZSB0ZXh0LXJlZC00MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXNldElucHV0fSBjbGFzc05hbWU9XCJmbGV4LWdyb3cgdGV4dC1ncmF5LTUwMFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlYXJjaH0gY2xhc3NOYW1lPVwiZmxleC1ncm93IHRleHQtcmVkLTQwMFwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==