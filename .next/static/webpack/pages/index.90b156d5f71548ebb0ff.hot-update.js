self["webpackHotUpdate_N_E"]("pages/index",{

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
            return fetch("https://links.papareact.com/isz").then(function (res) {
              return res.json();
            });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicGxhY2Vob2xkZXIiLCJ1c2VTdGF0ZSIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJEYXRlIiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJudW1iZXJPZkd1ZXN0cyIsInNldE51bWJlck9mR3Vlc3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2VsZWN0aW9uUmFuZ2UiLCJrZXkiLCJoYW5kbGVTZWxlY3QiLCJyYW5nZXMiLCJzZWxlY3Rpb24iLCJyZXNldElucHV0Iiwic2VhcmNoIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJsb2NhdGlvbiIsInRvSVNPU3RyaW5nIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInNlYXJjaFJlc3VsdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBQzJDOztDQUNPOztBQUNsRDtBQUNBOztBQUdBLFNBQVNBLE1BQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFmQyxXQUFlLFFBQWZBLFdBQWU7O0FBQUEsa0JBQ1NDLCtDQUFRLENBQUMsRUFBRCxDQURqQjtBQUFBLE1BQ3RCQyxXQURzQjtBQUFBLE1BQ1RDLGNBRFM7O0FBQUEsbUJBRUtGLCtDQUFRLENBQUMsSUFBSUcsSUFBSixFQUFELENBRmI7QUFBQSxNQUV0QkMsU0FGc0I7QUFBQSxNQUVYQyxZQUZXOztBQUFBLG1CQUdDTCwrQ0FBUSxDQUFDLElBQUlHLElBQUosRUFBRCxDQUhUO0FBQUEsTUFHdEJHLE9BSHNCO0FBQUEsTUFHYkMsVUFIYTs7QUFBQSxtQkFJZVAsK0NBQVEsQ0FBQyxDQUFELENBSnZCO0FBQUEsTUFJdEJRLGNBSnNCO0FB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LG1CQUN5QkMsS0FBSyxDQUFDLGlDQUFELENBQUwsQ0FDeEJDLElBRHdCLENBQ25CLFVBQUFDLEdBQUc7QUFBQSxxQkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxhQURnQixDQUR6Qjs7QUFBQTtBQUNHQyx5QkFESDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkwYjE1NmQ1ZjcxNTQ4ZWJiMGZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgU2VhcmNoSWNvbiwgR2xvYmVBbHRJY29uLCBNZW51SWNvbixVc2VyQ2lyY2xlSWNvbiwgVXNlcnNJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICdyZWFjdC1kYXRlLXJhbmdlL2Rpc3Qvc3R5bGVzLmNzcyc7IC8vIG1haW4gc3R5bGUgZmlsZVxyXG5pbXBvcnQgJ3JlYWN0LWRhdGUtcmFuZ2UvZGlzdC90aGVtZS9kZWZhdWx0LmNzcyc7IC8vIHRoZW1lIGNzcyBmaWxlXHJcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlciB9IGZyb20gJ3JlYWN0LWRhdGUtcmFuZ2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoeyBwbGFjZWhvbGRlciB9KSB7XHJcbiAgICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgICBjb25zdCBbbnVtYmVyT2ZHdWVzdHMsIHNldE51bWJlck9mR3Vlc3RzXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IHNlbGVjdGlvblJhbmdlID0ge1xyXG4gICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLFxyXG4gICAgICAgIGVuZERhdGU6IGVuZERhdGUsXHJcbiAgICAgICAga2V5OiAnc2VsZWN0aW9uJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAocmFuZ2VzKSA9PiB7XHJcbiAgICAgICAgc2V0U3RhcnREYXRlKHJhbmdlcy5zZWxlY3Rpb24uc3RhcnREYXRlKTtcclxuICAgICAgICBzZXRFbmREYXRlKHJhbmdlcy5zZWxlY3Rpb24uZW5kRGF0ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXNldElucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaElucHV0KFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9zZWFyY2hcIixcclxuICAgICAgICAgICAgcXVlcnk6e1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHNlYXJjaElucHV0LFxyXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlOiBzdGFydERhdGUudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIGVuZERhdGU6IGVuZERhdGUudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIG51bWJlck9mR3Vlc3RzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotNTAgZ3JpZCBcclxuICAgICAgICBncmlkLWNvbHMtMyBiZy13aGl0ZSBzaGFkb3ctbWQgcC01IG1kOnB4LTEwXCI+XHJcbiAgICAgICAgICAgIHsvKiBMZWZ0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX0gY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgaC0xMFxyXG4gICAgICAgICAgICBjdXJzb3ItcG9pbnRlciBteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL3FkM1wiIFxyXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcclxuICAgICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBNaWRkbGUtU2VhcmNoICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1kOmJvcmRlci0yIFxyXG4gICAgICAgICAgICByb3VuZGVkLWZ1bGwgcHktMiBtZDpzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17c2VhcmNoSW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcGwtNSBiZy10cmFuc3BhcmVudCBvdXRsaW5lLW5vbmVcclxuICAgICAgICAgICAgICAgIHRleHQtZ3JheS02MDAgcGxhY2Vob2xkZXItZ3JheS00MDBcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlciB8fCBcIlN0YXJ0IHlvdXIgc2VhcmNoXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6aW5saW5lLWZsZXhcclxuICAgICAgICAgICAgICAgIGgtOCBiZy1yZWQtNDAwIHRleHQtd2hpdGVcclxuICAgICAgICAgICAgICAgIHJvdW5kZWQtZnVsbCBwLTIgY3Vyc29yLXBvaW50ZXIgbWQ6bXgtMlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFJpZ2h0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6aW5saW5lIGN1cnNvci1wb2ludGVyXCI+IEJlY29tZSBhIGhvc3Q8L3A+XHJcbiAgICAgICAgICAgICAgICA8R2xvYmVBbHRJY29uIGNsYXNzTmFtZT1cImgtNlwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBib3JkZXItMiBwLTIgcm91bmRlZC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT1cImgtNlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJDaXJjbGVJY29uIGNsYXNzTmFtZT1cImgtNlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7c2VhcmNoSW5wdXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTMgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXRlUmFuZ2VQaWNrZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlcz17W3NlbGVjdGlvblJhbmdlXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VDb2xvcnM9e1tcIiNGRDU4NjFcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJvcmRlci1iIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIHBsLTIgZmxleC1ncm93IGZvbnQtc2VtaWJvbGRcIj5OdW1iZXIgb2YgR3Vlc3RzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJzSWNvbiBjbGFzc05hbWU9XCJoLTVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e251bWJlck9mR3Vlc3RzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE51bWJlck9mR3Vlc3RzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwidy0xMiBwbC0yIHRleHQtbGcgb3V0bGluZS1ub25lIHRleHQtcmVkLTQwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc2V0SW5wdXR9IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyB0ZXh0LWdyYXktNTAwXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VhcmNofSBjbGFzc05hbWU9XCJmbGV4LWdyb3cgdGV4dC1yZWQtNDAwXCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9pc3pcIikuXHJcbiAgICAgICAgdGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=