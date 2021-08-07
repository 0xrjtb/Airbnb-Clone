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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicGxhY2Vob2xkZXIiLCJ1c2VTdGF0ZSIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJEYXRlIiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJudW1iZXJPZkd1ZXN0cyIsInNldE51bWJlck9mR3Vlc3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2VsZWN0aW9uUmFuZ2UiLCJrZXkiLCJoYW5kbGVTZWxlY3QiLCJyYW5nZXMiLCJzZWxlY3Rpb24iLCJyZXNldElucHV0Iiwic2VhcmNoIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJsb2NhdGlvbiIsInRvSVNPU3RyaW5nIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInNlYXJjaFJlc3VsdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBQzJDOztDQUNPOztBQUNsRDtBQUNBOztBQUdBLFNBQVNBLE1BQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFmQyxXQUFlLFFBQWZBLFdBQWU7O0FBQUEsa0JBQ1NDLCtDQUFRLENBQUMsRUFBRCxDQURqQjtBQUFBLE1BQ3RCQyxXQURzQjtBQUFBLE1BQ1RDLGNBRFM7O0FBQUEsbUJBRUtGLCtDQUFRLENBQUMsSUFBSUcsSUFBSixFQUFELENBRmI7QUFBQSxNQUV0QkMsU0FGc0I7QUFBQSxNQUVYQyxZQUZXOztBQUFBLG1CQUdDTCwrQ0FBUSxDQUFDLElBQUlHLElBQUosRUFBRCxDQUhUO0FBQUEsTUFHdEJHLE9BSHNCO0FBQUEsTUFHYkMsVUFIYTs7QUFBQSxtQkFJZVAsK0NBQVEsQ0FBQyxDQUFELENBSnZCO0FBQUEsTUFJdEJRLGNBSnNCO0FBQUEsTUFJTkMsaUJBSk07O0FBSzdCLE1BQU1DLE1BQU0sR0FBR0Msa0VBQVMsRUFBeEI7QUFHQSxNQUFNQyxjQUFjLEdBQUc7QUFDbkJSLGFBQVMsRUFBRUEsU0FEUTtBQUVuQkUsV0FBTyxFQUFFQSxPQUZVO0FBR25CTyxPQUFHLEVBQUU7QUFIYyxHQUF2Qjs7QUFNQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxNQUFELEVBQVk7QUFDN0JWLGdCQUFZLENBQUNVLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQlosU0FBbEIsQ0FBWjtBQUNBRyxjQUFVLENBQUNRLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQlYsT0FBbEIsQ0FBVjtBQUNILEdBSEQ7O0FBS0EsTUFBTVcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQmYsa0JBQWMsQ0FBQyxFQUFELENBQWQ7QUFDSCxHQUZEOztBQUlBLE1BQU1nQixNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCUixVQUFNLENBQUNTLElBQVAsQ0FBWTtBQUNSQyxjQUFRLEVBQUUsU0FERjtBQUVSQyxXQUFLLEVBQUM7QUFDRkMsZ0JBQVEsRUFBRXJCLFdBRFI7QUFFRkcsaUJBQVMsRUFBRUEsU0FBUyxDQUFDbUIsV0FBVixFQUZUO0FBR0ZqQixlQUFPLEVBQUVBLE9BQU8sQ0FBQ2lCLFdBQVIsRUFIUDtBQUlGZixzQkFBYyxFQUFkQTtBQUpFO0FBRkUsS0FBWjtBQVNILEdBVkQ7O0FBWUEsc0JBQ0k7QUFBUSxhQUFTLEVBQUMsdUVBQWxCO0FBQUEsNEJBR0k7QUFBSyxhQUFPLEVBQUU7QUFBQSxlQUFNRSxNQUFNLENBQUNTLElBQVAsQ0FBWSxHQUFaLENBQU47QUFBQSxPQUFkO0FBQXNDLGVBQVMsRUFBQywwREFBaEQ7QUFBQSw2QkFFSSw4REFBQyxtREFBRDtBQUFPLFdBQUcsRUFBQyxpQ0FBWDtBQUNBLGNBQU0sRUFBQyxNQURQO0FBRUEsaUJBQVMsRUFBQyxTQUZWO0FBR0Esc0JBQWMsRUFBQztBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFhSTtBQUFLLGVBQVMsRUFBQyxpRUFBZjtBQUFBLDhCQUVJO0FBQU8sYUFBSyxFQUFFbEIsV0FBZDtBQUEyQixnQkFBUSxFQUFFLGtCQUFDdUIsQ0FBRDtBQUFBLGlCQUFPdEIsY0FBYyxDQUFDc0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBckI7QUFBQSxTQUFyQztBQUE0RSxpQkFBUyxFQUFDLGlGQUF0RjtBQUNvQyxZQUFJLEVBQUMsTUFEekM7QUFDZ0QsbUJBQVcsRUFBRTNCLFdBQVcsSUFBSTtBQUQ1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFJSSw4REFBQyw4REFBRDtBQUFZLGlCQUFTLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKLGVBdUJJO0FBQUssZUFBUyxFQUFDLHVEQUFmO0FBQUEsOEJBQ0k7QUFBRyxpQkFBUyxFQUFDLGlDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSw4REFBQyxnRUFBRDtBQUFjLGlCQUFTLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBSUk7QUFBSyxpQkFBUyxFQUFDLHVEQUFmO0FBQUEsZ0NBQ0ksOERBQUMsNERBQUQ7QUFBVSxtQkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSw4REFBQyxrRUFBRDtBQUFnQixtQkFBUyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkJKLEVBaUNLRSxXQUFXLGlCQUNSO0FBQUssZUFBUyxFQUFDLGtDQUFmO0FBQUEsOEJBQ0ksOERBQUMsNkRBQUQ7QUFDSSxjQUFNLEVBQUUsQ0FBQ1csY0FBRCxDQURaO0FBRUksZUFBTyxFQUFFLElBQUlULElBQUosRUFGYjtBQUdJLG1CQUFXLEVBQUUsQ0FBQyxTQUFELENBSGpCO0FBSUksZ0JBQVEsRUFBRVc7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFPSTtBQUFLLGlCQUFTLEVBQUMsaUNBQWY7QUFBQSxnQ0FDSTtBQUFJLG1CQUFTLEVBQUMsdUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSw4REFBQyw2REFBRDtBQUFXLG1CQUFTLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQ0EsZUFBSyxFQUFFTixjQURQO0FBRUEsa0JBQVEsRUFBRSxrQkFBQ2dCLENBQUQ7QUFBQSxtQkFBT2YsaUJBQWlCLENBQUNlLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXhCO0FBQUEsV0FGVjtBQUdBLGFBQUcsRUFBRSxDQUhMO0FBSUEsY0FBSSxFQUFDLFFBSkw7QUFJYyxtQkFBUyxFQUFDO0FBSnhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEosZUFpQkk7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxnQ0FDSTtBQUFRLGlCQUFPLEVBQUVULFVBQWpCO0FBQTZCLG1CQUFTLEVBQUMseUJBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBUSxpQkFBTyxFQUFFQyxNQUFqQjtBQUF5QixtQkFBUyxFQUFDLHdCQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbENSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNkRIOztHQWhHUXBCLE07VUFLVWEsOEQ7OztLQUxWYixNO0FBa0dULCtEQUFlQSxNQUFmO0FBRU8sU0FBZTZCLGtCQUF0QjtBQUFBO0FBQUE7OztnU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN5QkMsS0FBSyxDQUFDLGlDQUFELENBQUwsQ0FDeEJDLElBRHdCLENBQ25CLFVBQUFDLEdBQUc7QUFBQSxxQkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxhQURnQixDQUR6Qjs7QUFBQTtBQUNHQyx5QkFESDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC45MGIxNTZkNWY3MTU0OGViYjBmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IFNlYXJjaEljb24sIEdsb2JlQWx0SWNvbiwgTWVudUljb24sVXNlckNpcmNsZUljb24sIFVzZXJzSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAncmVhY3QtZGF0ZS1yYW5nZS9kaXN0L3N0eWxlcy5jc3MnOyAvLyBtYWluIHN0eWxlIGZpbGVcclxuaW1wb3J0ICdyZWFjdC1kYXRlLXJhbmdlL2Rpc3QvdGhlbWUvZGVmYXVsdC5jc3MnOyAvLyB0aGVtZSBjc3MgZmlsZVxyXG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXIgfSBmcm9tICdyZWFjdC1kYXRlLXJhbmdlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHsgcGxhY2Vob2xkZXIgfSkge1xyXG4gICAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICAgIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgY29uc3QgW251bWJlck9mR3Vlc3RzLCBzZXROdW1iZXJPZkd1ZXN0c10gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHJcbiAgICBjb25zdCBzZWxlY3Rpb25SYW5nZSA9IHtcclxuICAgICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZSxcclxuICAgICAgICBlbmREYXRlOiBlbmREYXRlLFxyXG4gICAgICAgIGtleTogJ3NlbGVjdGlvbidcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHJhbmdlcykgPT4ge1xyXG4gICAgICAgIHNldFN0YXJ0RGF0ZShyYW5nZXMuc2VsZWN0aW9uLnN0YXJ0RGF0ZSk7XHJcbiAgICAgICAgc2V0RW5kRGF0ZShyYW5nZXMuc2VsZWN0aW9uLmVuZERhdGUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzZXRJbnB1dCA9ICgpID0+IHtcclxuICAgICAgICBzZXRTZWFyY2hJbnB1dChcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogXCIvc2VhcmNoXCIsXHJcbiAgICAgICAgICAgIHF1ZXJ5OntcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBzZWFyY2hJbnB1dCxcclxuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBlbmREYXRlLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZkd1ZXN0cyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCB6LTUwIGdyaWQgXHJcbiAgICAgICAgZ3JpZC1jb2xzLTMgYmctd2hpdGUgc2hhZG93LW1kIHAtNSBtZDpweC0xMFwiPlxyXG4gICAgICAgICAgICB7LyogTGVmdCAqL31cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGgtMTBcclxuICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXIgbXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9xZDNcIiBcclxuICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogTWlkZGxlLVNlYXJjaCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtZDpib3JkZXItMiBcclxuICAgICAgICAgICAgcm91bmRlZC1mdWxsIHB5LTIgbWQ6c2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3NlYXJjaElucHV0fSBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiZmxleC1ncm93IHBsLTUgYmctdHJhbnNwYXJlbnQgb3V0bGluZS1ub25lXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWdyYXktNjAwIHBsYWNlaG9sZGVyLWdyYXktNDAwXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXIgfHwgXCJTdGFydCB5b3VyIHNlYXJjaFwifSAvPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmlubGluZS1mbGV4XHJcbiAgICAgICAgICAgICAgICBoLTggYmctcmVkLTQwMCB0ZXh0LXdoaXRlXHJcbiAgICAgICAgICAgICAgICByb3VuZGVkLWZ1bGwgcC0yIGN1cnNvci1wb2ludGVyIG1kOm14LTJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBSaWdodCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmlubGluZSBjdXJzb3ItcG9pbnRlclwiPiBCZWNvbWUgYSBob3N0PC9wPlxyXG4gICAgICAgICAgICAgICAgPEdsb2JlQWx0SWNvbiBjbGFzc05hbWU9XCJoLTZcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgYm9yZGVyLTIgcC0yIHJvdW5kZWQtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiBjbGFzc05hbWU9XCJoLTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVc2VyQ2lyY2xlSWNvbiBjbGFzc05hbWU9XCJoLTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge3NlYXJjaElucHV0ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0zIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0ZVJhbmdlUGlja2VyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZXM9e1tzZWxlY3Rpb25SYW5nZV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlQ29sb3JzPXtbXCIjRkQ1ODYxXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItYiBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBwbC0yIGZsZXgtZ3JvdyBmb250LXNlbWlib2xkXCI+TnVtYmVyIG9mIEd1ZXN0czwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxVc2Vyc0ljb24gY2xhc3NOYW1lPVwiaC01XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtudW1iZXJPZkd1ZXN0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROdW1iZXJPZkd1ZXN0cyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cInctMTIgcGwtMiB0ZXh0LWxnIG91dGxpbmUtbm9uZSB0ZXh0LXJlZC00MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXNldElucHV0fSBjbGFzc05hbWU9XCJmbGV4LWdyb3cgdGV4dC1ncmF5LTUwMFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlYXJjaH0gY2xhc3NOYW1lPVwiZmxleC1ncm93IHRleHQtcmVkLTQwMFwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vaXN6XCIpLlxyXG4gICAgICAgIHRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9