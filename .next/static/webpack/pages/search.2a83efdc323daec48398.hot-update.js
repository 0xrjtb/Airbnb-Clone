self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var C_Users_HP_React_Apps_airbnb_clone_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HP_React_Apps_airbnb_clone_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_React_Apps_airbnb_clone_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_HP_React_Apps_airbnb_clone_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-date-range/dist/styles.css */ "./node_modules/react-date-range/dist/styles.css");
/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-date-range/dist/theme/default.css */ "./node_modules/react-date-range/dist/theme/default.css");
/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-date-range */ "./node_modules/react-date-range/dist/index.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\HP\\React Apps\\airbnb-clone\\components\\Header.js",
    _s = $RefreshSig$();




 // main style file

 // theme css file




function Header(_ref) {
  _s();

  var placeholder = _ref.placeholder;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      searchInput = _useState[0],
      setSearchInput = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(new Date()),
      startDate = _useState2[0],
      setStartDate = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(new Date()),
      endDate = _useState3[0],
      setEndDate = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(1),
      numberOfGuests = _useState4[0],
      setNumberOfGuests = _useState4[1];

  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("header", {
    className: "sticky top-0 z-50 grid \r grid-cols-3 bg-white shadow-md p-5 md:px-10",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      onClick: function onClick() {
        return router.push("/");
      },
      className: "relative flex items-center h-10\r cursor-pointer my-auto",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "flex items-center md:border-2 \r rounded-full py-2 md:shadow-sm",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.SearchIcon, {
        className: "hidden md:inline-flex\r h-8 bg-red-400 text-white\r rounded-full p-2 cursor-pointer md:mx-2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "flex space-x-4 items-center justify-end text-gray-500",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "hidden md:inline cursor-pointer",
        children: " Become a host"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.GlobeAltIcon, {
        className: "h-6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "flex items-center space-x-2 border-2 p-2 rounded-full",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.MenuIcon, {
          className: "h-6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.UserCircleIcon, {
          className: "h-6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this), searchInput && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "flex flex-col col-span-3 mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_date_range__WEBPACK_IMPORTED_MODULE_8__.DateRangePicker, {
        ranges: [selectionRange],
        minDate: new Date(),
        rangeColors: ["#FD5861"],
        onChange: handleSelect
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "flex items-center border-b mb-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
          className: "text-2xl pl-2 flex-grow font-semibold",
          children: "Number of Guests"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.UsersIcon, {
          className: "h-5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          value: numberOfGuests,
          onChange: function onChange(e) {
            return setNumberOfGuests(e.target.value);
          },
          min: 1,
          type: "number",
          className: "w-12 pl-2 text-lg outline-none text-red-400"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "flex",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
          onClick: resetInput,
          className: "flex-grow text-gray-500",
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
          onClick: search,
          className: "flex-grow text-red-400",
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, this);
}

_s(Header, "kJavyjFm2Ep95hcQpHO0luV120Q=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__.useRouter];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);
function getServerSideProps() {
  return _getServerSideProps.apply(this, arguments);
}

function _getServerSideProps() {
  _getServerSideProps = (0,C_Users_HP_React_Apps_airbnb_clone_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_HP_React_Apps_airbnb_clone_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var searchResults;
    return C_Users_HP_React_Apps_airbnb_clone_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https:");

          case 2:
            searchResults = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getServerSideProps.apply(this, arguments);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicGxhY2Vob2xkZXIiLCJ1c2VTdGF0ZSIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJEYXRlIiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJudW1iZXJPZkd1ZXN0cyIsInNldE51bWJlck9mR3Vlc3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2VsZWN0aW9uUmFuZ2UiLCJrZXkiLCJoYW5kbGVTZWxlY3QiLCJyYW5nZXMiLCJzZWxlY3Rpb24iLCJyZXNldElucHV0Iiwic2VhcmNoIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJsb2NhdGlvbiIsInRvSVNPU3RyaW5nIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiZmV0Y2giLCJzZWFyY2hSZXN1bHRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUMyQzs7Q0FDTzs7QUFDbEQ7QUFDQTs7QUFHQSxTQUFTQSxNQUFULE9BQWlDO0FBQUE7O0FBQUEsTUFBZkMsV0FBZSxRQUFmQSxXQUFlOztBQUFBLGtCQUNTQywrQ0FBUSxDQUFDLEVBQUQsQ0FEakI7QUFBQSxNQUN0QkMsV0FEc0I7QUFBQSxNQUNUQyxjQURTOztBQUFBLG1CQUVLRiwrQ0FBUSxDQUFDLElBQUlHLElBQUosRUFBRCxDQUZiO0FBQUEsTUFFdEJDLFNBRnNCO0FBQUEsTUFFWEMsWUFGVzs7QUFBQSxtQkFHQ0wsK0NBQVEsQ0FBQyxJQUFJRyxJQUFKLEVBQUQsQ0FIVDtBQUFBLE1BR3RCRyxPQUhzQjtBQUFBLE1BR2JDLFVBSGE7O0FBQUEsbUJBSWVQLCtDQUFRLENBQUMsQ0FBRCxDQUp2QjtBQUFBLE1BSXRCUSxjQUpzQjtBQUFBLE1BSU5DLGlCQUpNOztBQUs3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QUFELENBRDlCOztBQUFBO0FBQ0dDLHlCQURIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjJhODNlZmRjMzIzZGFlYzQ4Mzk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgU2VhcmNoSWNvbiwgR2xvYmVBbHRJY29uLCBNZW51SWNvbixVc2VyQ2lyY2xlSWNvbiwgVXNlcnNJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICdyZWFjdC1kYXRlLXJhbmdlL2Rpc3Qvc3R5bGVzLmNzcyc7IC8vIG1haW4gc3R5bGUgZmlsZVxyXG5pbXBvcnQgJ3JlYWN0LWRhdGUtcmFuZ2UvZGlzdC90aGVtZS9kZWZhdWx0LmNzcyc7IC8vIHRoZW1lIGNzcyBmaWxlXHJcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlciB9IGZyb20gJ3JlYWN0LWRhdGUtcmFuZ2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoeyBwbGFjZWhvbGRlciB9KSB7XHJcbiAgICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgICBjb25zdCBbbnVtYmVyT2ZHdWVzdHMsIHNldE51bWJlck9mR3Vlc3RzXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IHNlbGVjdGlvblJhbmdlID0ge1xyXG4gICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLFxyXG4gICAgICAgIGVuZERhdGU6IGVuZERhdGUsXHJcbiAgICAgICAga2V5OiAnc2VsZWN0aW9uJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAocmFuZ2VzKSA9PiB7XHJcbiAgICAgICAgc2V0U3RhcnREYXRlKHJhbmdlcy5zZWxlY3Rpb24uc3RhcnREYXRlKTtcclxuICAgICAgICBzZXRFbmREYXRlKHJhbmdlcy5zZWxlY3Rpb24uZW5kRGF0ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXNldElucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaElucHV0KFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9zZWFyY2hcIixcclxuICAgICAgICAgICAgcXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHNlYXJjaElucHV0LFxyXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlOiBzdGFydERhdGUudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIGVuZERhdGU6IGVuZERhdGUudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIG51bWJlck9mR3Vlc3RzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotNTAgZ3JpZCBcclxuICAgICAgICBncmlkLWNvbHMtMyBiZy13aGl0ZSBzaGFkb3ctbWQgcC01IG1kOnB4LTEwXCI+XHJcbiAgICAgICAgICAgIHsvKiBMZWZ0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX0gY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgaC0xMFxyXG4gICAgICAgICAgICBjdXJzb3ItcG9pbnRlciBteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL3FkM1wiIFxyXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcclxuICAgICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBNaWRkbGUtU2VhcmNoICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1kOmJvcmRlci0yIFxyXG4gICAgICAgICAgICByb3VuZGVkLWZ1bGwgcHktMiBtZDpzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17c2VhcmNoSW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcGwtNSBiZy10cmFuc3BhcmVudCBvdXRsaW5lLW5vbmVcclxuICAgICAgICAgICAgICAgIHRleHQtZ3JheS02MDAgcGxhY2Vob2xkZXItZ3JheS00MDBcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlciB8fCBcIlN0YXJ0IHlvdXIgc2VhcmNoXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6aW5saW5lLWZsZXhcclxuICAgICAgICAgICAgICAgIGgtOCBiZy1yZWQtNDAwIHRleHQtd2hpdGVcclxuICAgICAgICAgICAgICAgIHJvdW5kZWQtZnVsbCBwLTIgY3Vyc29yLXBvaW50ZXIgbWQ6bXgtMlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFJpZ2h0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6aW5saW5lIGN1cnNvci1wb2ludGVyXCI+IEJlY29tZSBhIGhvc3Q8L3A+XHJcbiAgICAgICAgICAgICAgICA8R2xvYmVBbHRJY29uIGNsYXNzTmFtZT1cImgtNlwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBib3JkZXItMiBwLTIgcm91bmRlZC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT1cImgtNlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJDaXJjbGVJY29uIGNsYXNzTmFtZT1cImgtNlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7c2VhcmNoSW5wdXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTMgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXRlUmFuZ2VQaWNrZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlcz17W3NlbGVjdGlvblJhbmdlXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VDb2xvcnM9e1tcIiNGRDU4NjFcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJvcmRlci1iIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIHBsLTIgZmxleC1ncm93IGZvbnQtc2VtaWJvbGRcIj5OdW1iZXIgb2YgR3Vlc3RzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJzSWNvbiBjbGFzc05hbWU9XCJoLTVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e251bWJlck9mR3Vlc3RzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE51bWJlck9mR3Vlc3RzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwidy0xMiBwbC0yIHRleHQtbGcgb3V0bGluZS1ub25lIHRleHQtcmVkLTQwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc2V0SW5wdXR9IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyB0ZXh0LWdyYXktNTAwXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VhcmNofSBjbGFzc05hbWU9XCJmbGV4LWdyb3cgdGV4dC1yZWQtNDAwXCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBhd2FpdCBmZXRjaChcImh0dHBzOlwiKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==