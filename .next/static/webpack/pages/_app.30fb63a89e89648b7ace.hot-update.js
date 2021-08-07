self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@badrap/bar-of-progress/dist/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@badrap/bar-of-progress/dist/index.mjs ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(e){var t=function(e,t){Object.keys(t).forEach(function(o){e[o]=t[o]})},o={size:2,color:"#29e",className:"bar-of-progress",delay:80};e&&t(o,e);var a,i,s={position:"fixed",top:0,left:0,margin:0,padding:0,border:"none",borderRadius:0,backgroundColor:"currentColor",zIndex:1e4,height:"number"==typeof o.size?o.size+"px":o.size,color:o.color,opacity:0,width:"0%"},n={opacity:1,width:"99%",transition:"width 10s cubic-bezier(0.1, 0.05, 0, 1)"},l={opacity:0,width:"100%",transition:"width 0.1s ease-out, opacity 0.5s ease 0.2s"},c={opacity:.4,boxShadow:"3px 0 8px",height:"100%"};this.start=function(){i&&i.parentNode&&i.parentNode.removeChild(i),(i=document.body.appendChild(document.createElement("div"))).className=o.className+" stopped",t(i.style,s);var e=i.appendChild(document.createElement("div"));e.className="glow",t(e.style,c),null!=a&&clearTimeout(a),a=setTimeout(function(){a=null,i.className=o.className+" started",t(i.style,n)},o.delay),i.scrollTop=0},this.finish=function(){null!=a&&(clearTimeout(a),a=null),i&&(i.className=o.className+" finished",t(i.style,l))}}
//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

var matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

var customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = function _default() {
  var customRoute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (path) {
    var keys = [];
    var matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    var matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return function (pathname, params) {
      var res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        var _iterator = _createForOfIteratorHelper(keys),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;

            // unnamed params should be removed as they
            // are not allowed to be used in the destination
            if (typeof key.name === 'number') {
              delete res.params[key.name];
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports.matchHas = matchHas;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;
exports.getSafeParamName = void 0;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // ensure only a-zA-Z are used for param names for proper interpolating
// with path-to-regexp


var getSafeParamName = function getSafeParamName(paramName) {
  var newParamName = '';

  for (var i = 0; i < paramName.length; i++) {
    var charCode = paramName.charCodeAt(i);

    if (charCode > 64 && charCode < 91 || // A-Z
    charCode > 96 && charCode < 123 // a-z
    ) {
        newParamName += paramName[i];
      }
  }

  return newParamName;
};

exports.getSafeParamName = getSafeParamName;

function matchHas(req, has, query) {
  var params = {};
  var initialQueryValues = [];

  if (false) {}

  if (true) {
    initialQueryValues = Array.from(new URLSearchParams(location.search).values());
  }

  var allMatch = has.every(function (hasItem) {
    var value;
    var key = hasItem.key;

    switch (hasItem.type) {
      case 'header':
        {
          key = key.toLowerCase();
          value = req.headers[key];
          break;
        }

      case 'cookie':
        {
          value = req.cookies[hasItem.key];
          break;
        }

      case 'query':
        {
          // preserve initial encoding of query values
          value = query[key];

          if (initialQueryValues.includes(value || '')) {
            value = encodeURIComponent(value);
          }

          break;
        }

      case 'host':
        {
          var _ref = (req == null ? void 0 : req.headers) || {},
              host = _ref.host; // remove port from host if present


          var hostname = host == null ? void 0 : host.split(':')[0].toLowerCase();
          value = hostname;
          break;
        }

      default:
        {
          break;
        }
    }

    if (!hasItem.value && value) {
      params[getSafeParamName(key)] = value;
      return true;
    } else if (value) {
      var matcher = new RegExp("^".concat(hasItem.value, "$"));
      var matches = value.match(matcher);

      if (matches) {
        if (matches.groups) {
          Object.keys(matches.groups).forEach(function (groupKey) {
            params[groupKey] = matches.groups[groupKey];
          });
        } else if (hasItem.type === 'host' && matches[0]) {
          params.host = matches[0];
        }

        return true;
      }
    }

    return false;
  });

  if (allMatch) {
    return params;
  }

  return false;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (var _i = 0, _Object$keys = Object.keys(params); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];

    if (value.includes(":".concat(key))) {
      value = value.replace(new RegExp(":".concat(key, "\\*"), 'g'), ":".concat(key, "--ESCAPED_PARAM_ASTERISKS")).replace(new RegExp(":".concat(key, "\\?"), 'g'), ":".concat(key, "--ESCAPED_PARAM_QUESTION")).replace(new RegExp(":".concat(key, "\\+"), 'g'), ":".concat(key, "--ESCAPED_PARAM_PLUS")).replace(new RegExp(":".concat(key, "(?!\\w)"), 'g'), "--ESCAPED_PARAM_COLON".concat(key));
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile("/".concat(value), {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  var parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  var hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    var _URL = new URL(destination),
        pathname = _URL.pathname,
        searchParams = _URL.searchParams,
        hash = _URL.hash,
        hostname = _URL.hostname,
        port = _URL.port,
        protocol = _URL.protocol,
        search = _URL.search,
        href = _URL.href;

    parsedDestination = {
      pathname: pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash: hash,
      protocol: protocol,
      hostname: hostname,
      port: port,
      search: search,
      href: href
    };
  }

  var destQuery = parsedDestination.query;
  var destPath = "".concat(parsedDestination.pathname).concat(parsedDestination.hash || '');
  var destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  var destPathParams = destPathParamKeys.map(function (key) {
    return key.name;
  });
  var destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  var newUrl; // update any params in query values

  for (var _i2 = 0, _Object$entries = Object.entries(destQuery); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        key = _Object$entries$_i[0],
        strOrArray = _Object$entries$_i[1];

    var value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  var paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(function (name) {
      return name !== 'nextInternalLocale';
    });
  }

  if (appendParamsToQuery && !paramKeys.some(function (key) {
    return destPathParams.includes(key);
  })) {
    var _iterator = _createForOfIteratorHelper(paramKeys),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _key = _step.value;

        if (!(_key in destQuery)) {
          destQuery[_key] = params[_key];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  try {
    newUrl = destinationCompiler(params);

    var _newUrl$split = newUrl.split('#'),
        _newUrl$split2 = _slicedToArray(_newUrl$split, 2),
        _pathname = _newUrl$split2[0],
        _hash = _newUrl$split2[1];

    parsedDestination.pathname = _pathname;
    parsedDestination.hash = "".concat(_hash ? '#' : '').concat(_hash || '');
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl: newUrl,
    parsedDestination: parsedDestination
  };
}

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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_HP_React_Apps_airbnb_clone_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @badrap/bar-of-progress */ "./node_modules/@badrap/bar-of-progress/dist/index.mjs");
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/next-server/server/router */ "./node_modules/next/dist/next-server/server/router.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\HP\\React Apps\\airbnb-clone\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_HP_React_Apps_airbnb_clone_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var progress = new _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_4__.default({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100
});
next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_5__.default.events.on('routeChangeStart', progress.start);
next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_5__.default.events.on("routeChangeComplete", progress.finish);
next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_5__.default.events.on("routeChangeError");

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 10
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./tailwind.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./tailwind.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css",
      function () {
        content = __webpack_require__(/*! !!../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./tailwind.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./global.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/global.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./global.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/global.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./global.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/global.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! tailwindcss v2.2.7 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n\t--tw-translate-x: 0;\n\t--tw-translate-y: 0;\n\t--tw-rotate: 0;\n\t--tw-skew-x: 0;\n\t--tw-skew-y: 0;\n\t--tw-scale-x: 1;\n\t--tw-scale-y: 1;\n\t--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n}\n\n.absolute {\n\tposition: absolute;\n}\n\n.relative {\n\tposition: relative;\n}\n\n.sticky {\n\tposition: sticky;\n}\n\n.top-1\\/2 {\n\ttop: 50%;\n}\n\n.top-0 {\n\ttop: 0px;\n}\n\n.top-32 {\n\ttop: 8rem;\n}\n\n.left-12 {\n\tleft: 3rem;\n}\n\n.z-50 {\n\tz-index: 50;\n}\n\n.col-span-3 {\n\tgrid-column: span 3 / span 3;\n}\n\n.m-2 {\n\tmargin: 0.5rem;\n}\n\n.mx-auto {\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n\n.my-3 {\n\tmargin-top: 0.75rem;\n\tmargin-bottom: 0.75rem;\n}\n\n.my-auto {\n\tmargin-top: auto;\n\tmargin-bottom: auto;\n}\n\n.-ml-3 {\n\tmargin-left: -0.75rem;\n}\n\n.mt-2 {\n\tmargin-top: 0.5rem;\n}\n\n.mb-6 {\n\tmargin-bottom: 1.5rem;\n}\n\n.mb-5 {\n\tmargin-bottom: 1.25rem;\n}\n\n.mb-4 {\n\tmargin-bottom: 1rem;\n}\n\n.mb-3 {\n\tmargin-bottom: 0.75rem;\n}\n\n.mt-3 {\n\tmargin-top: 0.75rem;\n}\n\n.mt-5 {\n\tmargin-top: 1.25rem;\n}\n\n.flex {\n\tdisplay: flex;\n}\n\n.grid {\n\tdisplay: grid;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.h-\\[300px\\] {\n\theight: 300px;\n}\n\n.h-10 {\n\theight: 2.5rem;\n}\n\n.h-8 {\n\theight: 2rem;\n}\n\n.h-6 {\n\theight: 1.5rem;\n}\n\n.h-5 {\n\theight: 1.25rem;\n}\n\n.h-96 {\n\theight: 24rem;\n}\n\n.h-80 {\n\theight: 20rem;\n}\n\n.h-16 {\n\theight: 4rem;\n}\n\n.h-24 {\n\theight: 6rem;\n}\n\n.h-7 {\n\theight: 1.75rem;\n}\n\n.w-full {\n\twidth: 100%;\n}\n\n.w-12 {\n\twidth: 3rem;\n}\n\n.w-64 {\n\twidth: 16rem;\n}\n\n.w-80 {\n\twidth: 20rem;\n}\n\n.w-16 {\n\twidth: 4rem;\n}\n\n.w-40 {\n\twidth: 10rem;\n}\n\n.w-10 {\n\twidth: 2.5rem;\n}\n\n.min-w-\\[300px\\] {\n\tmin-width: 300px;\n}\n\n.max-w-6xl {\n\tmax-width: 72rem;\n}\n\n.flex-shrink-0 {\n\tflex-shrink: 0;\n}\n\n.flex-grow {\n\tflex-grow: 1;\n}\n\n.transform {\n\ttransform: var(--tw-transform);\n}\n\n.cursor-pointer {\n\tcursor: pointer;\n}\n\n.grid-cols-1 {\n\tgrid-template-columns: repeat(1, minmax(0, 1fr));\n}\n\n.grid-cols-3 {\n\tgrid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.flex-col {\n\tflex-direction: column;\n}\n\n.items-end {\n\talign-items: flex-end;\n}\n\n.items-center {\n\talign-items: center;\n}\n\n.justify-end {\n\tjustify-content: flex-end;\n}\n\n.justify-between {\n\tjustify-content: space-between;\n}\n\n.gap-y-10 {\n\trow-gap: 2.5rem;\n}\n\n.space-x-3 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-x-reverse: 0;\n\tmargin-right: calc(0.75rem * var(--tw-space-x-reverse));\n\tmargin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-y-reverse: 0;\n\tmargin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n\tmargin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-x-reverse: 0;\n\tmargin-right: calc(1rem * var(--tw-space-x-reverse));\n\tmargin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-x-reverse: 0;\n\tmargin-right: calc(0.5rem * var(--tw-space-x-reverse));\n\tmargin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.overflow-scroll {\n\toverflow: scroll;\n}\n\n.whitespace-nowrap {\n\twhite-space: nowrap;\n}\n\n.rounded-full {\n\tborder-radius: 9999px;\n}\n\n.rounded-2xl {\n\tborder-radius: 1rem;\n}\n\n.rounded-lg {\n\tborder-radius: 0.5rem;\n}\n\n.rounded-xl {\n\tborder-radius: 0.75rem;\n}\n\n.rounded {\n\tborder-radius: 0.25rem;\n}\n\n.border-2 {\n\tborder-width: 2px;\n}\n\n.border {\n\tborder-width: 1px;\n}\n\n.border-b {\n\tborder-bottom-width: 1px;\n}\n\n.bg-white {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.bg-gray-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n.bg-transparent {\n\tbackground-color: transparent;\n}\n\n.bg-red-400 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(248, 113, 113, var(--tw-bg-opacity));\n}\n\n.bg-gray-900 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(17, 24, 39, var(--tw-bg-opacity));\n}\n\n.p-3 {\n\tpadding: 0.75rem;\n}\n\n.p-5 {\n\tpadding: 1.25rem;\n}\n\n.p-2 {\n\tpadding: 0.5rem;\n}\n\n.px-8 {\n\tpadding-left: 2rem;\n\tpadding-right: 2rem;\n}\n\n.py-8 {\n\tpadding-top: 2rem;\n\tpadding-bottom: 2rem;\n}\n\n.px-16 {\n\tpadding-left: 4rem;\n\tpadding-right: 4rem;\n}\n\n.px-10 {\n\tpadding-left: 2.5rem;\n\tpadding-right: 2.5rem;\n}\n\n.py-4 {\n\tpadding-top: 1rem;\n\tpadding-bottom: 1rem;\n}\n\n.px-32 {\n\tpadding-left: 8rem;\n\tpadding-right: 8rem;\n}\n\n.py-14 {\n\tpadding-top: 3.5rem;\n\tpadding-bottom: 3.5rem;\n}\n\n.py-2 {\n\tpadding-top: 0.5rem;\n\tpadding-bottom: 0.5rem;\n}\n\n.py-16 {\n\tpadding-top: 4rem;\n\tpadding-bottom: 4rem;\n}\n\n.px-4 {\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\n\n.py-7 {\n\tpadding-top: 1.75rem;\n\tpadding-bottom: 1.75rem;\n}\n\n.px-2 {\n\tpadding-left: 0.5rem;\n\tpadding-right: 0.5rem;\n}\n\n.pt-6 {\n\tpadding-top: 1.5rem;\n}\n\n.pb-5 {\n\tpadding-bottom: 1.25rem;\n}\n\n.pt-14 {\n\tpadding-top: 3.5rem;\n}\n\n.pl-5 {\n\tpadding-left: 1.25rem;\n}\n\n.pl-2 {\n\tpadding-left: 0.5rem;\n}\n\n.pt-2 {\n\tpadding-top: 0.5rem;\n}\n\n.pt-5 {\n\tpadding-top: 1.25rem;\n}\n\n.pb-2 {\n\tpadding-bottom: 0.5rem;\n}\n\n.pr-4 {\n\tpadding-right: 1rem;\n}\n\n.text-center {\n\ttext-align: center;\n}\n\n.text-right {\n\ttext-align: right;\n}\n\n.text-4xl {\n\tfont-size: 2.25rem;\n\tline-height: 2.5rem;\n}\n\n.text-xs {\n\tfont-size: 0.75rem;\n\tline-height: 1rem;\n}\n\n.text-3xl {\n\tfont-size: 1.875rem;\n\tline-height: 2.25rem;\n}\n\n.text-sm {\n\tfont-size: 0.875rem;\n\tline-height: 1.25rem;\n}\n\n.text-2xl {\n\tfont-size: 1.5rem;\n\tline-height: 2rem;\n}\n\n.text-lg {\n\tfont-size: 1.125rem;\n\tline-height: 1.75rem;\n}\n\n.text-xl {\n\tfont-size: 1.25rem;\n\tline-height: 1.75rem;\n}\n\n.font-semibold {\n\tfont-weight: 600;\n}\n\n.font-bold {\n\tfont-weight: 700;\n}\n\n.font-extralight {\n\tfont-weight: 200;\n}\n\n.text-gray-800 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.text-purple-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(139, 92, 246, var(--tw-text-opacity));\n}\n\n.text-gray-400 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(156, 163, 175, var(--tw-text-opacity));\n}\n\n.text-gray-600 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n.text-white {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.text-gray-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(107, 114, 128, var(--tw-text-opacity));\n}\n\n.text-red-400 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(248, 113, 113, var(--tw-text-opacity));\n}\n\n.text-yellow-400 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(251, 191, 36, var(--tw-text-opacity));\n}\n\n.placeholder-gray-400::placeholder {\n\t--tw-placeholder-opacity: 1;\n\tcolor: rgba(156, 163, 175, var(--tw-placeholder-opacity));\n}\n\n.shadow-md {\n\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.outline-none {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\n\n.transition {\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n\n.duration-150 {\n\ttransition-duration: 150ms;\n}\n\n.duration-300 {\n\ttransition-duration: 300ms;\n}\n\n.duration-200 {\n\ttransition-duration: 200ms;\n}\n\n.ease-out {\n\ttransition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.scrollbar-hide {\n\tscrollbar-width: none;\n}\n\n.scrollbar-hide::-webkit-scrollbar {\n\tdisplay: none;\n}\n\n.first\\:border-t:first-child {\n\tborder-top-width: 1px;\n}\n\n.hover\\:scale-105:hover {\n\t--tw-scale-x: 1.05;\n\t--tw-scale-y: 1.05;\n\ttransform: var(--tw-transform);\n}\n\n.hover\\:bg-gray-100:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n.hover\\:opacity-80:hover {\n\topacity: 0.8;\n}\n\n.hover\\:shadow-2xl:hover {\n\t--tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:shadow-lg:hover {\n\t--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.active\\:scale-90:active {\n\t--tw-scale-x: .9;\n\t--tw-scale-y: .9;\n\ttransform: var(--tw-transform);\n}\n\n@media (min-width: 640px) {\n\n\t.sm\\:h-\\[400px\\] {\n\t\theight: 400px;\n\t}\n\n\t.sm\\:grid-cols-2 {\n\t\tgrid-template-columns: repeat(2, minmax(0, 1fr));\n\t}\n\n\t.sm\\:px-16 {\n\t\tpadding-left: 4rem;\n\t\tpadding-right: 4rem;\n\t}\n\n\t.sm\\:text-lg {\n\t\tfont-size: 1.125rem;\n\t\tline-height: 1.75rem;\n\t}\n}\n\n@media (min-width: 768px) {\n\n\t.md\\:mx-2 {\n\t\tmargin-left: 0.5rem;\n\t\tmargin-right: 0.5rem;\n\t}\n\n\t.md\\:inline {\n\t\tdisplay: inline;\n\t}\n\n\t.md\\:inline-flex {\n\t\tdisplay: inline-flex;\n\t}\n\n\t.md\\:h-80 {\n\t\theight: 20rem;\n\t}\n\n\t.md\\:h-52 {\n\t\theight: 13rem;\n\t}\n\n\t.md\\:w-8 {\n\t\twidth: 2rem;\n\t}\n\n\t.md\\:w-80 {\n\t\twidth: 20rem;\n\t}\n\n\t.md\\:grid-cols-4 {\n\t\tgrid-template-columns: repeat(4, minmax(0, 1fr));\n\t}\n\n\t.md\\:border-2 {\n\t\tborder-width: 2px;\n\t}\n\n\t.md\\:px-40 {\n\t\tpadding-left: 10rem;\n\t\tpadding-right: 10rem;\n\t}\n\n\t.md\\:px-10 {\n\t\tpadding-left: 2.5rem;\n\t\tpadding-right: 2.5rem;\n\t}\n\n\t.md\\:shadow-sm {\n\t\t--tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n\t\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n\t}\n}\n\n@media (min-width: 1024px) {\n\n\t.lg\\:h-\\[500-px\\] {\n\t\theight: 500 - px;\n\t}\n\n\t.lg\\:grid-cols-3 {\n\t\tgrid-template-columns: repeat(3, minmax(0, 1fr));\n\t}\n\n\t.lg\\:text-xl {\n\t\tfont-size: 1.25rem;\n\t\tline-height: 1.75rem;\n\t}\n}\n\n@media (min-width: 1280px) {\n\n\t.xl\\:h-\\[600px\\] {\n\t\theight: 600px;\n\t}\n\n\t.xl\\:grid-cols-4 {\n\t\tgrid-template-columns: repeat(4, minmax(0, 1fr));\n\t}\n}\n\n@media (min-width: 1536px) {\n\n\t.\\32xl\\:h-\\[700px\\] {\n\t\theight: 700px;\n\t}\n}\n", "",{"version":3,"sources":["webpack://node_modules/tailwindcss/tailwind.css","webpack://node_modules/tailwindcss/%3Cinput%20css%205CWS-S%3E","webpack://node_modules/tailwindcss/%3Cinput%20css%20C89xk6%3E","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n","/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n","/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: theme('colors.gray.400', #a1a1aa);\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/global.css":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/global.css ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n    .button {\r\n\r\n    transform: var(--tw-transform);\r\n\r\n    cursor: pointer;\r\n\r\n    border-radius: 9999px;\r\n\r\n    border-width: 1px;\r\n\r\n    padding-left: 1rem;\r\n\r\n    padding-right: 1rem;\r\n\r\n    padding-top: 0.5rem;\r\n\r\n    padding-bottom: 0.5rem;\r\n\r\n    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\r\n\r\n    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\r\n\r\n    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\r\n\r\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r\n\r\n    transition-duration: 150ms;\r\n\r\n    transition-duration: 100ms;\r\n\r\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1)\n}\r\n\r\n.button:hover {\r\n\r\n    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\r\n\r\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\r\n\r\n.button:active {\r\n\r\n    --tw-scale-x: .95;\r\n\r\n    --tw-scale-y: .95;\r\n\r\n    transform: var(--tw-transform);\r\n\r\n    --tw-bg-opacity: 1;\r\n\r\n    background-color: rgba(243, 244, 246, var(--tw-bg-opacity))\n}\r\n\r\n.first\\:border-t:first-child {\r\n\r\n    border-top-width: 1px\n}\r\n\r\n.hover\\:scale-105:hover {\r\n\r\n    --tw-scale-x: 1.05;\r\n\r\n    --tw-scale-y: 1.05;\r\n\r\n    transform: var(--tw-transform)\n}\r\n\r\n.hover\\:bg-gray-100:hover {\r\n\r\n    --tw-bg-opacity: 1;\r\n\r\n    background-color: rgba(243, 244, 246, var(--tw-bg-opacity))\n}\r\n\r\n.hover\\:opacity-80:hover {\r\n\r\n    opacity: 0.8\n}\r\n\r\n.hover\\:shadow-2xl:hover {\r\n\r\n    --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\r\n\r\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\r\n\r\n.hover\\:shadow-lg:hover {\r\n\r\n    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\r\n\r\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\r\n\r\n.active\\:scale-90:active {\r\n\r\n    --tw-scale-x: .9;\r\n\r\n    --tw-scale-y: .9;\r\n\r\n    transform: var(--tw-transform)\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .sm\\:h-\\[400px\\] {\r\n\r\n        height: 400px\n    }\r\n\r\n    .sm\\:grid-cols-2 {\r\n\r\n        grid-template-columns: repeat(2, minmax(0, 1fr))\n    }\r\n\r\n    .sm\\:px-16 {\r\n\r\n        padding-left: 4rem;\r\n\r\n        padding-right: 4rem\n    }\r\n\r\n    .sm\\:text-lg {\r\n\r\n        font-size: 1.125rem;\r\n\r\n        line-height: 1.75rem\n    }\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n    .md\\:mx-2 {\r\n\r\n        margin-left: 0.5rem;\r\n\r\n        margin-right: 0.5rem\n    }\r\n\r\n    .md\\:inline {\r\n\r\n        display: inline\n    }\r\n\r\n    .md\\:inline-flex {\r\n\r\n        display: inline-flex\n    }\r\n\r\n    .md\\:h-80 {\r\n\r\n        height: 20rem\n    }\r\n\r\n    .md\\:h-52 {\r\n\r\n        height: 13rem\n    }\r\n\r\n    .md\\:w-8 {\r\n\r\n        width: 2rem\n    }\r\n\r\n    .md\\:w-80 {\r\n\r\n        width: 20rem\n    }\r\n\r\n    .md\\:grid-cols-4 {\r\n\r\n        grid-template-columns: repeat(4, minmax(0, 1fr))\n    }\r\n\r\n    .md\\:border-2 {\r\n\r\n        border-width: 2px\n    }\r\n\r\n    .md\\:px-40 {\r\n\r\n        padding-left: 10rem;\r\n\r\n        padding-right: 10rem\n    }\r\n\r\n    .md\\:px-10 {\r\n\r\n        padding-left: 2.5rem;\r\n\r\n        padding-right: 2.5rem\n    }\r\n\r\n    .md\\:shadow-sm {\r\n\r\n        --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\r\n\r\n        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n    }\n}\r\n\r\n@media (min-width: 1024px) {\r\n\r\n    .lg\\:h-\\[500-px\\] {\r\n\r\n        height: 500 - px\n    }\r\n\r\n    .lg\\:grid-cols-3 {\r\n\r\n        grid-template-columns: repeat(3, minmax(0, 1fr))\n    }\r\n\r\n    .lg\\:text-xl {\r\n\r\n        font-size: 1.25rem;\r\n\r\n        line-height: 1.75rem\n    }\n}\r\n\r\n@media (min-width: 1280px) {\r\n\r\n    .xl\\:h-\\[600px\\] {\r\n\r\n        height: 600px\n    }\r\n\r\n    .xl\\:grid-cols-4 {\r\n\r\n        grid-template-columns: repeat(4, minmax(0, 1fr))\n    }\n}\r\n\r\n@media (min-width: 1536px) {\r\n\r\n    .\\32xl\\:h-\\[700px\\] {\r\n\r\n        height: 700px\n    }\n}", "",{"version":3,"sources":["<no source>","webpack://styles/global.css"],"names":[],"mappings":";IAAA;;IAAA,8BAAA;;IAAA,eAAA;;IAAA,qBAAA;;IAAA,iBAAA;;IAAA,kBAAA;;IAAA,mBAAA;;IAAA,mBAAA;;IAAA,sBAAA;;IAAA,yIAAA;;IAAA,iIAAA;;IAAA,0JAAA;;IAAA,wDAAA;;IAAA,0BAAA;;IAAA,0BAAA;;IAAA;ACgCA;;ADhCA;;IAAA,oFAAA;;IAAA;ACuCA;;ADvCA;;IAAA,iBAAA;;IAAA,iBAAA;;IAAA,8BAAA;;IAAA,kBAAA;;IAAA;ACoDA;;AApDA;;IDAA;ACyDA;;AAzDA;;IDAA,kBAAA;;IAAA,kBAAA;;IAAA;ACkEA;;AAlEA;;IDAA,kBAAA;;IAAA;ACyEA;;AAzEA;;IDAA;AC8EA;;AA9EA;;IDAA,kDAAA;;IAAA;ACqFA;;AArFA;;IDAA,oFAAA;;IAAA;AC4FA;;AA5FA;;IDAA,gBAAA;;IAAA,gBAAA;;IAAA;ACqGA;;AArGA;;IDAA;;QAAA;IC4GI;;ID5GJ;;QAAA;ICiHI;;IDjHJ;;QAAA,kBAAA;;QAAA;ICwHI;;IDxHJ;;QAAA,mBAAA;;QAAA;IC+HI;AACJ;;AAhIA;;IDAA;;QAAA,mBAAA;;QAAA;ICyII;;IDzIJ;;QAAA;IC8II;;ID9IJ;;QAAA;ICmJI;;IDnJJ;;QAAA;ICwJI;;IDxJJ;;QAAA;IC6JI;;ID7JJ;;QAAA;ICkKI;;IDlKJ;;QAAA;ICuKI;;IDvKJ;;QAAA;IC4KI;;ID5KJ;;QAAA;ICiLI;;IDjLJ;;QAAA,mBAAA;;QAAA;ICwLI;;IDxLJ;;QAAA,oBAAA;;QAAA;IC+LI;;ID/LJ;;QAAA,4CAAA;;QAAA;ICsMI;AACJ;;AAvMA;;IDAA;;QAAA;IC8MI;;ID9MJ;;QAAA;ICmNI;;IDnNJ;;QAAA,kBAAA;;QAAA;IC0NI;AACJ;;AA3NA;;IDAA;;QAAA;ICkOI;;IDlOJ;;QAAA;ICuOI;AACJ;;AAxOA;;IDAA;;QAAA;IC+OI;AACJ","sourcesContent":[null,"@tailwind components;\r\n\r\n@layer components {\r\n    .button {\r\n        @apply px-4 py-2 border rounded-full\r\n        cursor-pointer hover:shadow-lg\r\n        active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/router.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/router.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.default=exports.route=void 0;var _pathMatch=_interopRequireDefault(__webpack_require__(/*! ../lib/router/utils/path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));var _normalizeTrailingSlash=__webpack_require__(/*! ../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");var _normalizeLocalePath=__webpack_require__(/*! ../lib/i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");var _prepareDestination=__webpack_require__(/*! ../lib/router/utils/prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const route=(0,_pathMatch.default)();exports.route=route;const customRouteTypes=new Set(['rewrite','redirect','header']);function replaceBasePath(basePath,pathname){// If replace ends up replacing the full url it'll be `undefined`, meaning we have to default it to `/`
return pathname.replace(basePath,'')||'/';}class Router{constructor({basePath='',headers=[],fsRoutes=[],rewrites={beforeFiles:[],afterFiles:[],fallback:[]},redirects=[],catchAllRoute,dynamicRoutes=[],pageChecker,useFileSystemPublicRoutes,locales=[]}){this.basePath=void 0;this.headers=void 0;this.fsRoutes=void 0;this.redirects=void 0;this.rewrites=void 0;this.catchAllRoute=void 0;this.pageChecker=void 0;this.dynamicRoutes=void 0;this.useFileSystemPublicRoutes=void 0;this.locales=void 0;this.basePath=basePath;this.headers=headers;this.fsRoutes=fsRoutes;this.rewrites=rewrites;this.redirects=redirects;this.pageChecker=pageChecker;this.catchAllRoute=catchAllRoute;this.dynamicRoutes=dynamicRoutes;this.useFileSystemPublicRoutes=useFileSystemPublicRoutes;this.locales=locales;}setDynamicRoutes(routes=[]){this.dynamicRoutes=routes;}addFsRoute(fsRoute){this.fsRoutes.unshift(fsRoute);}async execute(req,res,parsedUrl){// memoize page check calls so we don't duplicate checks for pages
const pageChecks={};const memoizedPageChecker=async p=>{p=(0,_normalizeLocalePath.normalizeLocalePath)(p,this.locales).pathname;if(pageChecks[p]){return pageChecks[p];}const result=this.pageChecker(p);pageChecks[p]=result;return result;};let parsedUrlUpdated=parsedUrl;const applyCheckTrue=async checkParsedUrl=>{const originalFsPathname=checkParsedUrl.pathname;const fsPathname=replaceBasePath(this.basePath,originalFsPathname);for(const fsRoute of this.fsRoutes){const fsParams=fsRoute.match(fsPathname);if(fsParams){checkParsedUrl.pathname=fsPathname;const fsResult=await fsRoute.fn(req,res,fsParams,checkParsedUrl);if(fsResult.finished){return true;}checkParsedUrl.pathname=originalFsPathname;}}let matchedPage=await memoizedPageChecker(fsPathname);// If we didn't match a page check dynamic routes
if(!matchedPage){const normalizedFsPathname=(0,_normalizeLocalePath.normalizeLocalePath)(fsPathname,this.locales).pathname;for(const dynamicRoute of this.dynamicRoutes){if(dynamicRoute.match(normalizedFsPathname)){matchedPage=true;}}}// Matched a page or dynamic route so render it using catchAllRoute
if(matchedPage){const pageParams=this.catchAllRoute.match(checkParsedUrl.pathname);checkParsedUrl.pathname=fsPathname;checkParsedUrl.query._nextBubbleNoFallback='1';const result=await this.catchAllRoute.fn(req,res,pageParams,checkParsedUrl);return result.finished;}};/*
      Desired routes order
      - headers
      - redirects
      - Check filesystem (including pages), if nothing found continue
      - User rewrites (checking filesystem and pages each match)
    */const allRoutes=[...this.headers,...this.redirects,...this.rewrites.beforeFiles,...this.fsRoutes,// We only check the catch-all route if public page routes hasn't been
// disabled
...(this.useFileSystemPublicRoutes?[{type:'route',name:'page checker',requireBasePath:false,match:route('/:path*'),fn:async(checkerReq,checkerRes,params,parsedCheckerUrl)=>{let{pathname}=parsedCheckerUrl;pathname=(0,_normalizeTrailingSlash.removePathTrailingSlash)(pathname||'/');if(!pathname){return{finished:false};}if(await memoizedPageChecker(pathname)){return this.catchAllRoute.fn(checkerReq,checkerRes,params,parsedCheckerUrl);}return{finished:false};}}]:[]),...this.rewrites.afterFiles,...(this.rewrites.fallback.length?[{type:'route',name:'dynamic route/page check',requireBasePath:false,match:route('/:path*'),fn:async(_checkerReq,_checkerRes,_params,parsedCheckerUrl)=>{return{finished:await applyCheckTrue(parsedCheckerUrl)};}},...this.rewrites.fallback]:[]),// We only check the catch-all route if public page routes hasn't been
// disabled
...(this.useFileSystemPublicRoutes?[this.catchAllRoute]:[])];const originallyHadBasePath=!this.basePath||req._nextHadBasePath;for(const testRoute of allRoutes){// if basePath is being used, the basePath will still be included
// in the pathname here to allow custom-routes to require containing
// it or not, filesystem routes and pages must always include the basePath
// if it is set
let currentPathname=parsedUrlUpdated.pathname;const originalPathname=currentPathname;const requireBasePath=testRoute.requireBasePath!==false;const isCustomRoute=customRouteTypes.has(testRoute.type);const isPublicFolderCatchall=testRoute.name==='public folder catchall';const keepBasePath=isCustomRoute||isPublicFolderCatchall;const keepLocale=isCustomRoute;const currentPathnameNoBasePath=replaceBasePath(this.basePath,currentPathname);if(!keepBasePath){currentPathname=currentPathnameNoBasePath;}const localePathResult=(0,_normalizeLocalePath.normalizeLocalePath)(currentPathnameNoBasePath,this.locales);const activeBasePath=keepBasePath?this.basePath:'';if(keepLocale){if(!testRoute.internal&&parsedUrl.query.__nextLocale&&!localePathResult.detectedLocale){currentPathname=`${activeBasePath}/${parsedUrl.query.__nextLocale}${currentPathnameNoBasePath==='/'?'':currentPathnameNoBasePath}`;}if(req.__nextHadTrailingSlash&&!currentPathname.endsWith('/')){currentPathname+='/';}}else{currentPathname=`${req._nextHadBasePath?activeBasePath:''}${activeBasePath&&localePathResult.pathname==='/'?'':localePathResult.pathname}`;}let newParams=testRoute.match(currentPathname);if(testRoute.has&&newParams){const hasParams=(0,_prepareDestination.matchHas)(req,testRoute.has,parsedUrlUpdated.query);if(hasParams){Object.assign(newParams,hasParams);}else{newParams=false;}}// Check if the match function matched
if(newParams){// since we require basePath be present for non-custom-routes we
// 404 here when we matched an fs route
if(!keepBasePath){if(!originallyHadBasePath&&!req._nextDidRewrite){if(requireBasePath){// consider this a non-match so the 404 renders
return false;}// page checker occurs before rewrites so we need to continue
// to check those since they don't always require basePath
continue;}parsedUrlUpdated.pathname=currentPathname;}const result=await testRoute.fn(req,res,newParams,parsedUrlUpdated);// The response was handled
if(result.finished){return true;}// since the fs route didn't match we need to re-add the basePath
// to continue checking rewrites with the basePath present
if(!keepBasePath){parsedUrlUpdated.pathname=originalPathname;}if(result.pathname){parsedUrlUpdated.pathname=result.pathname;}if(result.query){parsedUrlUpdated.query={...parsedUrlUpdated.query,...result.query};}// check filesystem
if(testRoute.check===true){if(await applyCheckTrue(parsedUrlUpdated)){return true;}}}}return false;}}exports.default=Router;
//# sourceMappingURL=router.js.map

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWRyYXAvYmFyLW9mLXByb2dyZXNzL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy90YWlsd2luZC5jc3M/ODY3MSIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbC5jc3M/MWI5NyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy90YWlsd2luZC5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWwuY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJwYXRoVG9SZWdleHAiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiaGFzIiwiZ2V0IiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0IiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiX2RlZmF1bHQiLCJjdXN0b21Sb3V0ZSIsInBhdGgiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwibWF0Y2hlciIsInJlZ2V4cFRvRnVuY3Rpb24iLCJwYXRobmFtZSIsInBhcmFtcyIsInJlcyIsIm5hbWUiLCJtYXRjaEhhcyIsImNvbXBpbGVOb25QYXRoIiwicHJlcGFyZURlc3RpbmF0aW9uIiwiX3F1ZXJ5c3RyaW5nIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJnZXRTYWZlUGFyYW1OYW1lIiwicGFyYW1OYW1lIiwibmV3UGFyYW1OYW1lIiwiaSIsImxlbmd0aCIsImNoYXJDb2RlIiwiY2hhckNvZGVBdCIsInJlcSIsInF1ZXJ5IiwiaW5pdGlhbFF1ZXJ5VmFsdWVzIiwiQXJyYXkiLCJmcm9tIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJ2YWx1ZXMiLCJhbGxNYXRjaCIsImV2ZXJ5IiwiaGFzSXRlbSIsInZhbHVlIiwidHlwZSIsInRvTG93ZXJDYXNlIiwiaGVhZGVycyIsImNvb2tpZXMiLCJpbmNsdWRlcyIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3QiLCJob3N0bmFtZSIsInNwbGl0IiwiUmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwiZ3JvdXBzIiwiZm9yRWFjaCIsImdyb3VwS2V5IiwicmVwbGFjZSIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsInN1YnN0ciIsImRlc3RpbmF0aW9uIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcnNlZERlc3RpbmF0aW9uIiwiYXNzaWduIiwiaGFkTG9jYWxlIiwiX19uZXh0TG9jYWxlIiwiX19uZXh0RGVmYXVsdExvY2FsZSIsInN0YXJ0c1dpdGgiLCJwYXJzZVJlbGF0aXZlVXJsIiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiaGFzaCIsInBvcnQiLCJwcm90b2NvbCIsImhyZWYiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwibWFwIiwiZGVzdGluYXRpb25Db21waWxlciIsIm5ld1VybCIsImVudHJpZXMiLCJzdHJPckFycmF5IiwiaXNBcnJheSIsInBhcmFtS2V5cyIsImZpbHRlciIsInNvbWUiLCJlcnIiLCJtZXNzYWdlIiwiRXJyb3IiLCJwcm9ncmVzcyIsIlByb2dyZXNzQmFyIiwic2l6ZSIsImNvbG9yIiwiY2xhc3NOYW1lIiwiZGVsYXkiLCJSb3V0ZXIiLCJzdGFydCIsImZpbmlzaCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdB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QVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FBTyxPQUFPLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHVCQUF1QixRQUFRLE9BQU8sTUFBTSxPQUFPLE1BQU0sU0FBUyx1QkFBdUIscUJBQXFCLHVCQUF1QixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxXQUFXLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxXQUFXLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxRQUFRLE9BQU8sTUFBTSxLQUFLLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxPQUFPLE1BQU0sS0FBSyx1QkFBdUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLHVCQUF1QixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sTUFBTSxNQUFNLEtBQUssYUFBYSxjQUFjLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixXQUFXLE9BQU8sS0FBSyxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxPQUFPLE1BQU0sYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLE1BQU0sU0FBUyxNQUFNLEtBQUssdUJBQXVCLHVCQUF1QixRQUFRLE9BQU8sTUFBTSxLQUFLLGFBQWEsYUFBYSxPQUFPLDRCQUE0QixNQUFNLE9BQU8sdUJBQXVCLHFCQUFxQix1QkFBdUIsdUJBQXVCLFFBQVEsTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxNQUFNLFdBQVcsV0FBVyxRQUFRLE1BQU0sV0FBVyxPQUFPLEtBQUssYUFBYSxPQUFPLFVBQVUsYUFBYSxhQUFhLE9BQU8sT0FBTyxNQUFNLEtBQUssV0FBVyxZQUFZLE9BQU8sVUFBVSxNQUFNLFNBQVMsV0FBVyxZQUFZLFdBQVcsT0FBTyxTQUFTLE1BQU0sUUFBUSxhQUFhLFFBQVEsbUJBQW1CLE1BQU0sWUFBWSxxQkFBcUIsdUJBQXVCLFFBQVEsU0FBUyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsUUFBUSxRQUFRLEtBQUssVUFBVSxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsT0FBTyxNQUFNLFFBQVEsS0FBSyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUs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QTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtB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O0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxjQUFjO0FBQ2QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNsckNhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELEVBQUUsdUpBQXNFO0FBQ3hFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzBmYjYzYTg5ZTg5NjQ4YjdhY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlLHQpe09iamVjdC5rZXlzKHQpLmZvckVhY2goZnVuY3Rpb24obyl7ZVtvXT10W29dfSl9LG89e3NpemU6Mixjb2xvcjpcIiMyOWVcIixjbGFzc05hbWU6XCJiYXItb2YtcHJvZ3Jlc3NcIixkZWxheTo4MH07ZSYmdChvLGUpO3ZhciBhLGkscz17cG9zaXRpb246XCJmaXhlZFwiLHRvcDowLGxlZnQ6MCxtYXJnaW46MCxwYWRkaW5nOjAsYm9yZGVyOlwibm9uZVwiLGJvcmRlclJhZGl1czowLGJhY2tncm91bmRDb2xvcjpcImN1cnJlbnRDb2xvclwiLHpJbmRleDoxZTQsaGVpZ2h0OlwibnVtYmVyXCI9PXR5cGVvZiBvLnNpemU/by5zaXplK1wicHhcIjpvLnNpemUsY29sb3I6by5jb2xvcixvcGFjaXR5OjAsd2lkdGg6XCIwJVwifSxuPXtvcGFjaXR5OjEsd2lkdGg6XCI5OSVcIix0cmFuc2l0aW9uOlwid2lkdGggMTBzIGN1YmljLWJlemllcigwLjEsIDAuMDUsIDAsIDEpXCJ9LGw9e29wYWNpdHk6MCx3aWR0aDpcIjEwMCVcIix0cmFuc2l0aW9uOlwid2lkdGggMC4xcyBlYXNlLW91dCwgb3BhY2l0eSAwLjVzIGVhc2UgMC4yc1wifSxjPXtvcGFjaXR5Oi40LGJveFNoYWRvdzpcIjNweCAwIDhweFwiLGhlaWdodDpcIjEwMCVcIn07dGhpcy5zdGFydD1mdW5jdGlvbigpe2kmJmkucGFyZW50Tm9kZSYmaS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGkpLChpPWRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkpLmNsYXNzTmFtZT1vLmNsYXNzTmFtZStcIiBzdG9wcGVkXCIsdChpLnN0eWxlLHMpO3ZhciBlPWkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7ZS5jbGFzc05hbWU9XCJnbG93XCIsdChlLnN0eWxlLGMpLG51bGwhPWEmJmNsZWFyVGltZW91dChhKSxhPXNldFRpbWVvdXQoZnVuY3Rpb24oKXthPW51bGwsaS5jbGFzc05hbWU9by5jbGFzc05hbWUrXCIgc3RhcnRlZFwiLHQoaS5zdHlsZSxuKX0sby5kZWxheSksaS5zY3JvbGxUb3A9MH0sdGhpcy5maW5pc2g9ZnVuY3Rpb24oKXtudWxsIT1hJiYoY2xlYXJUaW1lb3V0KGEpLGE9bnVsbCksaSYmKGkuY2xhc3NOYW1lPW8uY2xhc3NOYW1lK1wiIGZpbmlzaGVkXCIsdChpLnN0eWxlLGwpKX19XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhdGhUb1JlZ2V4cD1leHBvcnRzLmRlZmF1bHQ9ZXhwb3J0cy5jdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zPWV4cG9ydHMubWF0Y2hlck9wdGlvbnM9dm9pZCAwO3ZhciBwYXRoVG9SZWdleHA9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIm5leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cFwiKSk7ZXhwb3J0cy5wYXRoVG9SZWdleHA9cGF0aFRvUmVnZXhwO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Y29uc3QgbWF0Y2hlck9wdGlvbnM9e3NlbnNpdGl2ZTpmYWxzZSxkZWxpbWl0ZXI6Jy8nfTtleHBvcnRzLm1hdGNoZXJPcHRpb25zPW1hdGNoZXJPcHRpb25zO2NvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM9ey4uLm1hdGNoZXJPcHRpb25zLHN0cmljdDp0cnVlfTtleHBvcnRzLmN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM9Y3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczt2YXIgX2RlZmF1bHQ9KGN1c3RvbVJvdXRlPWZhbHNlKT0+e3JldHVybiBwYXRoPT57Y29uc3Qga2V5cz1bXTtjb25zdCBtYXRjaGVyUmVnZXg9cGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChwYXRoLGtleXMsY3VzdG9tUm91dGU/Y3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczptYXRjaGVyT3B0aW9ucyk7Y29uc3QgbWF0Y2hlcj1wYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsa2V5cyk7cmV0dXJuKHBhdGhuYW1lLHBhcmFtcyk9Pntjb25zdCByZXM9cGF0aG5hbWU9PW51bGw/ZmFsc2U6bWF0Y2hlcihwYXRobmFtZSk7aWYoIXJlcyl7cmV0dXJuIGZhbHNlO31pZihjdXN0b21Sb3V0ZSl7Zm9yKGNvbnN0IGtleSBvZiBrZXlzKXsvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4vLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbmlmKHR5cGVvZiBrZXkubmFtZT09PSdudW1iZXInKXtkZWxldGUgcmVzLnBhcmFtc1trZXkubmFtZV07fX19cmV0dXJuey4uLnBhcmFtcywuLi5yZXMucGFyYW1zfTt9O307fTtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoLW1hdGNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWF0Y2hIYXM9bWF0Y2hIYXM7ZXhwb3J0cy5jb21waWxlTm9uUGF0aD1jb21waWxlTm9uUGF0aDtleHBvcnRzLmRlZmF1bHQ9cHJlcGFyZURlc3RpbmF0aW9uO2V4cG9ydHMuZ2V0U2FmZVBhcmFtTmFtZT12b2lkIDA7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBwYXRoVG9SZWdleHA9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIm5leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cFwiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBlbnN1cmUgb25seSBhLXpBLVogYXJlIHVzZWQgZm9yIHBhcmFtIG5hbWVzIGZvciBwcm9wZXIgaW50ZXJwb2xhdGluZ1xuLy8gd2l0aCBwYXRoLXRvLXJlZ2V4cFxuY29uc3QgZ2V0U2FmZVBhcmFtTmFtZT1wYXJhbU5hbWU9PntsZXQgbmV3UGFyYW1OYW1lPScnO2ZvcihsZXQgaT0wO2k8cGFyYW1OYW1lLmxlbmd0aDtpKyspe2NvbnN0IGNoYXJDb2RlPXBhcmFtTmFtZS5jaGFyQ29kZUF0KGkpO2lmKGNoYXJDb2RlPjY0JiZjaGFyQ29kZTw5MXx8Ly8gQS1aXG5jaGFyQ29kZT45NiYmY2hhckNvZGU8MTIzLy8gYS16XG4pe25ld1BhcmFtTmFtZSs9cGFyYW1OYW1lW2ldO319cmV0dXJuIG5ld1BhcmFtTmFtZTt9O2V4cG9ydHMuZ2V0U2FmZVBhcmFtTmFtZT1nZXRTYWZlUGFyYW1OYW1lO2Z1bmN0aW9uIG1hdGNoSGFzKHJlcSxoYXMscXVlcnkpe2NvbnN0IHBhcmFtcz17fTtsZXQgaW5pdGlhbFF1ZXJ5VmFsdWVzPVtdO2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7aW5pdGlhbFF1ZXJ5VmFsdWVzPU9iamVjdC52YWx1ZXMocmVxLl9fTkVYVF9JTklUX1FVRVJZKTt9aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXtpbml0aWFsUXVlcnlWYWx1ZXM9QXJyYXkuZnJvbShuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCkudmFsdWVzKCkpO31jb25zdCBhbGxNYXRjaD1oYXMuZXZlcnkoaGFzSXRlbT0+e2xldCB2YWx1ZTtsZXQga2V5PWhhc0l0ZW0ua2V5O3N3aXRjaChoYXNJdGVtLnR5cGUpe2Nhc2UnaGVhZGVyJzp7a2V5PWtleS50b0xvd2VyQ2FzZSgpO3ZhbHVlPXJlcS5oZWFkZXJzW2tleV07YnJlYWs7fWNhc2UnY29va2llJzp7dmFsdWU9cmVxLmNvb2tpZXNbaGFzSXRlbS5rZXldO2JyZWFrO31jYXNlJ3F1ZXJ5Jzp7Ly8gcHJlc2VydmUgaW5pdGlhbCBlbmNvZGluZyBvZiBxdWVyeSB2YWx1ZXNcbnZhbHVlPXF1ZXJ5W2tleV07aWYoaW5pdGlhbFF1ZXJ5VmFsdWVzLmluY2x1ZGVzKHZhbHVlfHwnJykpe3ZhbHVlPWVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7fWJyZWFrO31jYXNlJ2hvc3QnOntjb25zdHtob3N0fT0ocmVxPT1udWxsP3ZvaWQgMDpyZXEuaGVhZGVycyl8fHt9Oy8vIHJlbW92ZSBwb3J0IGZyb20gaG9zdCBpZiBwcmVzZW50XG5jb25zdCBob3N0bmFtZT1ob3N0PT1udWxsP3ZvaWQgMDpob3N0LnNwbGl0KCc6JylbMF0udG9Mb3dlckNhc2UoKTt2YWx1ZT1ob3N0bmFtZTticmVhazt9ZGVmYXVsdDp7YnJlYWs7fX1pZighaGFzSXRlbS52YWx1ZSYmdmFsdWUpe3BhcmFtc1tnZXRTYWZlUGFyYW1OYW1lKGtleSldPXZhbHVlO3JldHVybiB0cnVlO31lbHNlIGlmKHZhbHVlKXtjb25zdCBtYXRjaGVyPW5ldyBSZWdFeHAoYF4ke2hhc0l0ZW0udmFsdWV9JGApO2NvbnN0IG1hdGNoZXM9dmFsdWUubWF0Y2gobWF0Y2hlcik7aWYobWF0Y2hlcyl7aWYobWF0Y2hlcy5ncm91cHMpe09iamVjdC5rZXlzKG1hdGNoZXMuZ3JvdXBzKS5mb3JFYWNoKGdyb3VwS2V5PT57cGFyYW1zW2dyb3VwS2V5XT1tYXRjaGVzLmdyb3Vwc1tncm91cEtleV07fSk7fWVsc2UgaWYoaGFzSXRlbS50eXBlPT09J2hvc3QnJiZtYXRjaGVzWzBdKXtwYXJhbXMuaG9zdD1tYXRjaGVzWzBdO31yZXR1cm4gdHJ1ZTt9fXJldHVybiBmYWxzZTt9KTtpZihhbGxNYXRjaCl7cmV0dXJuIHBhcmFtczt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBjb21waWxlTm9uUGF0aCh2YWx1ZSxwYXJhbXMpe2lmKCF2YWx1ZS5pbmNsdWRlcygnOicpKXtyZXR1cm4gdmFsdWU7fWZvcihjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFyYW1zKSl7aWYodmFsdWUuaW5jbHVkZXMoYDoke2tleX1gKSl7dmFsdWU9dmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXCpgLCdnJyksYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTYCkucmVwbGFjZShuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXD9gLCdnJyksYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT05gKS5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2tleX1cXFxcK2AsJ2cnKSxgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9QTFVTYCkucmVwbGFjZShuZXcgUmVnRXhwKGA6JHtrZXl9KD8hXFxcXHcpYCwnZycpLGAtLUVTQ0FQRURfUEFSQU1fQ09MT04ke2tleX1gKTt9fXZhbHVlPXZhbHVlLnJlcGxhY2UoLyg6fFxcKnxcXD98XFwrfFxcKHxcXCl8XFx7fFxcfSkvZywnXFxcXCQxJykucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX1BMVVMvZywnKycpLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9DT0xPTi9nLCc6JykucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX1FVRVNUSU9OL2csJz8nKS5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTL2csJyonKTsvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbi8vIGNvcnJlY3RseVxucmV0dXJuIHBhdGhUb1JlZ2V4cC5jb21waWxlKGAvJHt2YWx1ZX1gLHt2YWxpZGF0ZTpmYWxzZX0pKHBhcmFtcykuc3Vic3RyKDEpO31mdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oZGVzdGluYXRpb24scGFyYW1zLHF1ZXJ5LGFwcGVuZFBhcmFtc1RvUXVlcnkpe2xldCBwYXJzZWREZXN0aW5hdGlvbj17fTsvLyBjbG9uZSBxdWVyeSBzbyB3ZSBkb24ndCBtb2RpZnkgdGhlIG9yaWdpbmFsXG5xdWVyeT1PYmplY3QuYXNzaWduKHt9LHF1ZXJ5KTtjb25zdCBoYWRMb2NhbGU9cXVlcnkuX19uZXh0TG9jYWxlO2RlbGV0ZSBxdWVyeS5fX25leHRMb2NhbGU7ZGVsZXRlIHF1ZXJ5Ll9fbmV4dERlZmF1bHRMb2NhbGU7aWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtwYXJzZWREZXN0aW5hdGlvbj0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShkZXN0aW5hdGlvbik7fWVsc2V7Y29uc3R7cGF0aG5hbWUsc2VhcmNoUGFyYW1zLGhhc2gsaG9zdG5hbWUscG9ydCxwcm90b2NvbCxzZWFyY2gsaHJlZn09bmV3IFVSTChkZXN0aW5hdGlvbik7cGFyc2VkRGVzdGluYXRpb249e3BhdGhuYW1lLHF1ZXJ5OigwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShzZWFyY2hQYXJhbXMpLGhhc2gscHJvdG9jb2wsaG9zdG5hbWUscG9ydCxzZWFyY2gsaHJlZn07fWNvbnN0IGRlc3RRdWVyeT1wYXJzZWREZXN0aW5hdGlvbi5xdWVyeTtjb25zdCBkZXN0UGF0aD1gJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZX0ke3BhcnNlZERlc3RpbmF0aW9uLmhhc2h8fCcnfWA7Y29uc3QgZGVzdFBhdGhQYXJhbUtleXM9W107cGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCxkZXN0UGF0aFBhcmFtS2V5cyk7Y29uc3QgZGVzdFBhdGhQYXJhbXM9ZGVzdFBhdGhQYXJhbUtleXMubWFwKGtleT0+a2V5Lm5hbWUpO2xldCBkZXN0aW5hdGlvbkNvbXBpbGVyPXBhdGhUb1JlZ2V4cC5jb21waWxlKGRlc3RQYXRoLC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4vLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2Vcbi8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbi8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxue3ZhbGlkYXRlOmZhbHNlfSk7bGV0IG5ld1VybDsvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbmZvcihjb25zdFtrZXksc3RyT3JBcnJheV1vZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKXtsZXQgdmFsdWU9QXJyYXkuaXNBcnJheShzdHJPckFycmF5KT9zdHJPckFycmF5WzBdOnN0ck9yQXJyYXk7aWYodmFsdWUpey8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuLy8gY29ycmVjdGx5XG52YWx1ZT1jb21waWxlTm9uUGF0aCh2YWx1ZSxwYXJhbXMpO31kZXN0UXVlcnlba2V5XT12YWx1ZTt9Ly8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbmxldCBwYXJhbUtleXM9T2JqZWN0LmtleXMocGFyYW1zKTsvLyByZW1vdmUgaW50ZXJuYWwgcGFyYW0gZm9yIGkxOG5cbmlmKGhhZExvY2FsZSl7cGFyYW1LZXlzPXBhcmFtS2V5cy5maWx0ZXIobmFtZT0+bmFtZSE9PSduZXh0SW50ZXJuYWxMb2NhbGUnKTt9aWYoYXBwZW5kUGFyYW1zVG9RdWVyeSYmIXBhcmFtS2V5cy5zb21lKGtleT0+ZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSkpe2Zvcihjb25zdCBrZXkgb2YgcGFyYW1LZXlzKXtpZighKGtleSBpbiBkZXN0UXVlcnkpKXtkZXN0UXVlcnlba2V5XT1wYXJhbXNba2V5XTt9fX10cnl7bmV3VXJsPWRlc3RpbmF0aW9uQ29tcGlsZXIocGFyYW1zKTtjb25zdFtwYXRobmFtZSxoYXNoXT1uZXdVcmwuc3BsaXQoJyMnKTtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZT1wYXRobmFtZTtwYXJzZWREZXN0aW5hdGlvbi5oYXNoPWAke2hhc2g/JyMnOicnfSR7aGFzaHx8Jyd9YDtkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoO31jYXRjaChlcnIpe2lmKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKXt0aHJvdyBuZXcgRXJyb3IoYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1tdWx0aS1tYXRjaGApO310aHJvdyBlcnI7fS8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4vLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbi8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbi8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5PXsuLi5xdWVyeSwuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeX07cmV0dXJue25ld1VybCxwYXJzZWREZXN0aW5hdGlvbn07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlcGFyZS1kZXN0aW5hdGlvbi5qcy5tYXAiLCJpbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnXG5cbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiQGJhZHJhcC9iYXItb2YtcHJvZ3Jlc3NcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9yb3V0ZXInO1xuXG5jb25zdCBwcm9ncmVzcyA9IG5ldyBQcm9ncmVzc0Jhcih7XG4gIHNpemU6IDQsXG4gIGNvbG9yOiBcIiNGRTU5NUVcIixcbiAgY2xhc3NOYW1lOlwiei01MFwiLFxuICBkZWxheTogMTAwLFxufSk7XG5cblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBwcm9ncmVzcy5zdGFydCk7XG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBwcm9ncmVzcy5maW5pc2gpO1xuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlRXJyb3JcIilcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vdGFpbHdpbmQuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi90YWlsd2luZC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi90YWlsd2luZC5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2dsb2JhbC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vZ2xvYmFsLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vZ2xvYmFsLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtjb25zdCBpc09sZElFPWZ1bmN0aW9uIGlzT2xkSUUoKXtsZXQgbWVtbztyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKXtpZih0eXBlb2YgbWVtbz09PSd1bmRlZmluZWQnKXsvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbm1lbW89Qm9vbGVhbih3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYik7fXJldHVybiBtZW1vO307fSgpO2NvbnN0IGdldFRhcmdldD1mdW5jdGlvbiBnZXRUYXJnZXQoKXtjb25zdCBtZW1vPXt9O3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpe2lmKHR5cGVvZiBtZW1vW3RhcmdldF09PT0ndW5kZWZpbmVkJyl7bGV0IHN0eWxlVGFyZ2V0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuaWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCl7dHJ5ey8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4vLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuc3R5bGVUYXJnZXQ9c3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7fWNhdGNoKGUpey8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5zdHlsZVRhcmdldD1udWxsO319bWVtb1t0YXJnZXRdPXN0eWxlVGFyZ2V0O31yZXR1cm4gbWVtb1t0YXJnZXRdO307fSgpO2NvbnN0IHN0eWxlc0luRG9tPVtdO2Z1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpe2xldCByZXN1bHQ9LTE7Zm9yKGxldCBpPTA7aTxzdHlsZXNJbkRvbS5sZW5ndGg7aSsrKXtpZihzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyPT09aWRlbnRpZmllcil7cmVzdWx0PWk7YnJlYWs7fX1yZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKXtjb25zdCBpZENvdW50TWFwPXt9O2NvbnN0IGlkZW50aWZpZXJzPVtdO2ZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtjb25zdCBpdGVtPWxpc3RbaV07Y29uc3QgaWQ9b3B0aW9ucy5iYXNlP2l0ZW1bMF0rb3B0aW9ucy5iYXNlOml0ZW1bMF07Y29uc3QgY291bnQ9aWRDb3VudE1hcFtpZF18fDA7Y29uc3QgaWRlbnRpZmllcj1pZCsnICcrY291bnQudG9TdHJpbmcoKTtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXI6aWRlbnRpZmllcix1cGRhdGVyOmFkZFN0eWxlKG9iaixvcHRpb25zKSxyZWZlcmVuY2VzOjF9KTt9aWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTt9cmV0dXJuIGlkZW50aWZpZXJzO31mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyl7Y29uc3Qgc3R5bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtjb25zdCBhdHRyaWJ1dGVzPW9wdGlvbnMuYXR0cmlidXRlc3x8e307aWYodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2U9PT0ndW5kZWZpbmVkJyl7Y29uc3Qgbm9uY2U9Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG50eXBlb2YgX193ZWJwYWNrX25vbmNlX18hPT0ndW5kZWZpbmVkJz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsO2lmKG5vbmNlKXthdHRyaWJ1dGVzLm5vbmNlPW5vbmNlO319T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpe3N0eWxlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlc1trZXldKTt9KTtpZih0eXBlb2Ygb3B0aW9ucy5pbnNlcnQ9PT0nZnVuY3Rpb24nKXtvcHRpb25zLmluc2VydChzdHlsZSk7fWVsc2V7Y29uc3QgdGFyZ2V0PWdldFRhcmdldChvcHRpb25zLmluc2VydHx8J2hlYWQnKTtpZighdGFyZ2V0KXt0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO310YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO31yZXR1cm4gc3R5bGU7fWZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSl7Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5pZihzdHlsZS5wYXJlbnROb2RlPT09bnVsbCl7cmV0dXJuIGZhbHNlO31zdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTt9LyogaXN0YW5idWwgaWdub3JlIG5leHQgICovY29uc3QgcmVwbGFjZVRleHQ9ZnVuY3Rpb24gcmVwbGFjZVRleHQoKXtjb25zdCB0ZXh0U3RvcmU9W107cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgscmVwbGFjZW1lbnQpe3RleHRTdG9yZVtpbmRleF09cmVwbGFjZW1lbnQ7cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7fTt9KCk7ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSxpbmRleCxyZW1vdmUsb2JqKXtjb25zdCBjc3M9cmVtb3ZlPycnOm9iai5tZWRpYT8nQG1lZGlhICcrb2JqLm1lZGlhKycgeycrb2JqLmNzcysnfSc6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz0nXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkrJyAqLyc7fS8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9Y3NzO31lbHNle3doaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe3N0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO31zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTt9fWxldCBzaW5nbGV0b249bnVsbDtsZXQgc2luZ2xldG9uQ291bnRlcj0wO2Z1bmN0aW9uIGFkZFN0eWxlKG9iaixvcHRpb25zKXtsZXQgc3R5bGU7bGV0IHVwZGF0ZTtsZXQgcmVtb3ZlO2lmKG9wdGlvbnMuc2luZ2xldG9uKXtjb25zdCBzdHlsZUluZGV4PXNpbmdsZXRvbkNvdW50ZXIrKztzdHlsZT1zaW5nbGV0b258fChzaW5nbGV0b249aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTt1cGRhdGU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCxmYWxzZSk7cmVtb3ZlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsdHJ1ZSk7fWVsc2V7c3R5bGU9aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO3VwZGF0ZT1hcHBseVRvVGFnLmJpbmQobnVsbCxzdHlsZSxvcHRpb25zKTtyZW1vdmU9ZnVuY3Rpb24oKXtyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO307fXVwZGF0ZShvYmopO3JldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmope2lmKG5ld09iail7aWYobmV3T2JqLmNzcz09PW9iai5jc3MmJm5ld09iai5tZWRpYT09PW9iai5tZWRpYSYmbmV3T2JqLnNvdXJjZU1hcD09PW9iai5zb3VyY2VNYXApe3JldHVybjt9dXBkYXRlKG9iaj1uZXdPYmopO31lbHNle3JlbW92ZSgpO319O31tb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihsaXN0LG9wdGlvbnMpe29wdGlvbnM9b3B0aW9uc3x8e307Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5pZighb3B0aW9ucy5zaW5nbGV0b24mJnR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiE9PSdib29sZWFuJyl7b3B0aW9ucy5zaW5nbGV0b249aXNPbGRJRSgpO31saXN0PWxpc3R8fFtdO2xldCBsYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyk7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KXtuZXdMaXN0PW5ld0xpc3R8fFtdO2lmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSE9PSdbb2JqZWN0IEFycmF5XScpe3JldHVybjt9Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTt9Y29uc3QgbmV3TGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShuZXdMaXN0LG9wdGlvbnMpO2ZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2lmKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzPT09MCl7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsMSk7fX1sYXN0SWRlbnRpZmllcnM9bmV3TGFzdElkZW50aWZpZXJzO307fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISB0YWlsd2luZGNzcyB2Mi4yLjcgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tICovLyohIG1vZGVybi1ub3JtYWxpemUgdjEuMS4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUgKi9cXG5cXG4vKlxcbkRvY3VtZW50XFxuPT09PT09PT1cXG4qL1xcblxcbi8qKlxcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyoqXFxuVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLlxcbiovXFxuXFxuaHRtbCB7XFxuXFx0LW1vei10YWItc2l6ZTogNDtcXG5cXHR0YWItc2l6ZTogNDtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiovXFxuXFxuaHRtbCB7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZWN0aW9uc1xcbj09PT09PT09XFxuKi9cXG5cXG4vKipcXG5SZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbkltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuKi9cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHRzeXN0ZW0tdWksXFxuXFx0XFx0LWFwcGxlLXN5c3RlbSwgLyogRmlyZWZveCBzdXBwb3J0cyB0aGlzIGJ1dCBub3QgeWV0IGBzeXN0ZW0tdWlgICovXFxuXFx0XFx0J1NlZ29lIFVJJyxcXG5cXHRcXHRSb2JvdG8sXFxuXFx0XFx0SGVsdmV0aWNhLFxcblxcdFxcdEFyaWFsLFxcblxcdFxcdHNhbnMtc2VyaWYsXFxuXFx0XFx0J0FwcGxlIENvbG9yIEVtb2ppJyxcXG5cXHRcXHQnU2Vnb2UgVUkgRW1vamknO1xcbn1cXG5cXG4vKlxcbkdyb3VwaW5nIGNvbnRlbnRcXG49PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuKi9cXG5cXG5ociB7XFxuXFx0aGVpZ2h0OiAwOyAvKiAxICovXFxuXFx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5UZXh0LWxldmVsIHNlbWFudGljc1xcbj09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnJbdGl0bGVdIHtcXG5cXHQtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG5cXHQgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG5cXHRmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4xLiBJbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcbjIuIENvcnJlY3QgdGhlIG9kZCAnZW0nIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHR1aS1tb25vc3BhY2UsXFxuXFx0XFx0U0ZNb25vLVJlZ3VsYXIsXFxuXFx0XFx0Q29uc29sYXMsXFxuXFx0XFx0J0xpYmVyYXRpb24gTW9ubycsXFxuXFx0XFx0TWVubG8sXFxuXFx0XFx0bW9ub3NwYWNlOyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuXFx0Zm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcblByZXZlbnQgJ3N1YicgYW5kICdzdXAnIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG5cXHRmb250LXNpemU6IDc1JTtcXG5cXHRsaW5lLWhlaWdodDogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcblxcdGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG5cXHR0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG5UYWJ1bGFyIGRhdGFcXG49PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbiovXFxuXFxudGFibGUge1xcblxcdHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuXFx0Ym9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuRm9ybXNcXG49PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcblxcdG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxuMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG5cXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4qL1xcblxcbjo6LW1vei1mb2N1cy1pbm5lciB7XFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcblJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuXFx0b3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgJzppbnZhbGlkJyBzdHlsZXMgaW4gRmlyZWZveC5cXG5TZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3XFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG5cXHRib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0ICdmaWVsZHNldCcgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxubGVnZW5kIHtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuXFx0b3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byAnaW5oZXJpdCcgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG5cXHRmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuSW50ZXJhY3RpdmVcXG49PT09PT09PT09PVxcbiovXFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcblxcdGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59LyoqXFxuICogTWFudWFsbHkgZm9ya2VkIGZyb20gU1VJVCBDU1MgQmFzZTogaHR0cHM6Ly9naXRodWIuY29tL3N1aXRjc3MvYmFzZVxcbiAqIEEgdGhpbiBsYXllciBvbiB0b3Agb2Ygbm9ybWFsaXplLmNzcyB0aGF0IHByb3ZpZGVzIGEgc3RhcnRpbmcgcG9pbnQgbW9yZVxcbiAqIHN1aXRhYmxlIGZvciB3ZWIgYXBwbGljYXRpb25zLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4gKi9cXG5cXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmhyLFxcbmZpZ3VyZSxcXG5wLFxcbnByZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBUYWlsd2luZCBjdXN0b20gcmVzZXQgc3R5bGVzXFxuICovXFxuXFxuLyoqXFxuICogMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgKHdpdGggVGFpbHdpbmQncyBkZWZhdWx0XFxuICogICAgc2Fucy1zZXJpZiBmb250IHN0YWNrIGFzIGEgZmFsbGJhY2spIGFzIGEgc2FuZSBkZWZhdWx0LlxcbiAqIDIuIFVzZSBUYWlsd2luZCdzIGRlZmF1bHQgXFxcIm5vcm1hbFxcXCIgbGluZS1oZWlnaHQgc28gdGhlIHVzZXIgaXNuJ3QgZm9yY2VkXFxuICogICAgdG8gb3ZlcnJpZGUgaXQgdG8gZW5zdXJlIGNvbnNpc3RlbmN5IGV2ZW4gd2hlbiB1c2luZyB0aGUgZGVmYXVsdCB0aGVtZS5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDIgKi9cXG59XFxuXFxuXFxuLyoqXFxuICogSW5oZXJpdCBmb250LWZhbWlseSBhbmQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzXFxuICogYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuICovXFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLlxcbiAqXFxuICogICAgV2UgdXNlZCB0byBzZXQgdGhpcyBpbiB0aGUgaHRtbCBlbGVtZW50IGFuZCBpbmhlcml0IGZyb21cXG4gKiAgICB0aGUgcGFyZW50IGVsZW1lbnQgZm9yIGV2ZXJ5dGhpbmcgZWxzZS4gVGhpcyBjYXVzZWQgaXNzdWVzXFxuICogICAgaW4gc2hhZG93LWRvbS1lbmhhbmNlZCBlbGVtZW50cyBsaWtlIDxkZXRhaWxzPiB3aGVyZSB0aGUgY29udGVudFxcbiAqICAgIGlzIHdyYXBwZWQgYnkgYSBkaXYgd2l0aCBib3gtc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgLlxcbiAqXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80XFxuICpcXG4gKlxcbiAqIDIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLlxcbiAqXFxuICogICAgQnkgZGVmYXVsdCwgdGhlIHdheSB0aGUgYnJvd3NlciBzcGVjaWZpZXMgdGhhdCBhbiBlbGVtZW50IHNob3VsZCBoYXZlIG5vXFxuICogICAgYm9yZGVyIGlzIGJ5IHNldHRpbmcgaXQncyBib3JkZXItc3R5bGUgdG8gYG5vbmVgIGluIHRoZSB1c2VyLWFnZW50XFxuICogICAgc3R5bGVzaGVldC5cXG4gKlxcbiAqICAgIEluIG9yZGVyIHRvIGVhc2lseSBhZGQgYm9yZGVycyB0byBlbGVtZW50cyBieSBqdXN0IHNldHRpbmcgdGhlIGBib3JkZXItd2lkdGhgXFxuICogICAgcHJvcGVydHksIHdlIGNoYW5nZSB0aGUgZGVmYXVsdCBib3JkZXItc3R5bGUgZm9yIGFsbCBlbGVtZW50cyB0byBgc29saWRgLCBhbmRcXG4gKiAgICB1c2UgYm9yZGVyLXdpZHRoIHRvIGhpZGUgdGhlbSBpbnN0ZWFkLiBUaGlzIHdheSBvdXIgYGJvcmRlcmAgdXRpbGl0aWVzIG9ubHlcXG4gKiAgICBuZWVkIHRvIHNldCB0aGUgYGJvcmRlci13aWR0aGAgcHJvcGVydHkgaW5zdGVhZCBvZiB0aGUgZW50aXJlIGBib3JkZXJgXFxuICogICAgc2hvcnRoYW5kLCBtYWtpbmcgb3VyIGJvcmRlciB1dGlsaXRpZXMgbXVjaCBtb3JlIHN0cmFpZ2h0Zm9yd2FyZCB0byBjb21wb3NlLlxcbiAqXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2XFxuICovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4gKiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0XFxuICovXFxuXFxuaHIge1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbn1cXG5cXG4vKipcXG4gKiBVbmRvIHRoZSBgYm9yZGVyLXN0eWxlOiBub25lYCByZXNldCB0aGF0IE5vcm1hbGl6ZSBhcHBsaWVzIHRvIGltYWdlcyBzbyB0aGF0XFxuICogb3VyIGBib3JkZXIte3dpZHRofWAgdXRpbGl0aWVzIGhhdmUgdGhlIGV4cGVjdGVkIGVmZmVjdC5cXG4gKlxcbiAqIFRoZSBOb3JtYWxpemUgcmVzZXQgaXMgdW5uZWNlc3NhcnkgZm9yIHVzIHNpbmNlIHdlIGRlZmF1bHQgdGhlIGJvcmRlci13aWR0aFxcbiAqIHRvIDAgb24gYWxsIGVsZW1lbnRzLlxcbiAqXFxuICogaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zNjJcXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6ICM5Y2EzYWY7XFxufVxcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2ZcXG4gKiBvcHQtb3V0LlxcbiAqL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFJlc2V0IGZvcm0gZWxlbWVudCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGVhc3kgdG8gZm9yZ2V0IHRvXFxuICogc3R5bGUgZXhwbGljaXRseSBzbyB5b3UgZG9uJ3QgaW5hZHZlcnRlbnRseSBpbnRyb2R1Y2VcXG4gKiBzdHlsZXMgdGhhdCBkZXZpYXRlIGZyb20geW91ciBkZXNpZ24gc3lzdGVtLiBUaGVzZSBzdHlsZXNcXG4gKiBzdXBwbGVtZW50IGEgcGFydGlhbCByZXNldCB0aGF0IGlzIGFscmVhZHkgYXBwbGllZCBieVxcbiAqIG5vcm1hbGl6ZS5jc3MuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogVXNlIHRoZSBjb25maWd1cmVkICdtb25vJyBmb250IGZhbWlseSBmb3IgZWxlbWVudHMgdGhhdFxcbiAqIGFyZSBleHBlY3RlZCB0byBiZSByZW5kZXJlZCB3aXRoIGEgbW9ub3NwYWNlIGZvbnQsIGZhbGxpbmdcXG4gKiBiYWNrIHRvIHRoZSBzeXN0ZW0gbW9ub3NwYWNlIHN0YWNrIGlmIHRoZXJlIGlzIG5vIGNvbmZpZ3VyZWRcXG4gKiAnbW9ubycgZm9udCBmYW1pbHkuXFxuICovXFxuXFxucHJlLFxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdCBhcyB0aGF0J3NcXG4gKiAgICB0aGUgYmVoYXZpb3IgeW91IHdhbnQgYWxtb3N0IGFsbCBvZiB0aGUgdGltZS4gSW5zcGlyZWQgYnlcXG4gKiAgICBDU1MgUmVtZWR5LCB3aXRoIGBzdmdgIGFkZGVkIGFzIHdlbGwuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0XFxuICogXFxuICogMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlXFxuICogICAgc2Vuc2libHkgYnkgZGVmYXVsdCB3aGVuIG92ZXJyaWRpbmcgYGRpc3BsYXlgIGJ5IGFkZGluZyBhXFxuICogICAgdXRpbGl0eSBsaWtlIGBpbmxpbmVgLlxcbiAqXFxuICogICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnRpbmcgZXJyb3IgaW4gc29tZVxcbiAqICAgIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuICogXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwXFxuICovXFxuXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyxcXG5jYW52YXMsXFxuYXVkaW8sXFxuaWZyYW1lLFxcbmVtYmVkLFxcbm9iamVjdCB7XFxuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmVcXG4gKiB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLlxcbiAqXFxuICogaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNFxcbiAqL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIEVuc3VyZSB0aGUgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9mIHRoZSBgaGlkZGVuYCBhdHRyaWJ1dGUuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcblxcdC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuXFx0LS10dy10cmFuc2xhdGUteTogMDtcXG5cXHQtLXR3LXJvdGF0ZTogMDtcXG5cXHQtLXR3LXNrZXcteDogMDtcXG5cXHQtLXR3LXNrZXcteTogMDtcXG5cXHQtLXR3LXNjYWxlLXg6IDE7XFxuXFx0LS10dy1zY2FsZS15OiAxO1xcblxcdC0tdHctdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLXR3LXRyYW5zbGF0ZS14KSkgdHJhbnNsYXRlWSh2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoMjI5LCAyMzEsIDIzNSwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG5cXHQtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcblxcdC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXG5cXHQtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbn1cXG5cXG4uYWJzb2x1dGUge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnJlbGF0aXZlIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zdGlja3kge1xcblxcdHBvc2l0aW9uOiBzdGlja3k7XFxufVxcblxcbi50b3AtMVxcXFwvMiB7XFxuXFx0dG9wOiA1MCU7XFxufVxcblxcbi50b3AtMCB7XFxuXFx0dG9wOiAwcHg7XFxufVxcblxcbi50b3AtMzIge1xcblxcdHRvcDogOHJlbTtcXG59XFxuXFxuLmxlZnQtMTIge1xcblxcdGxlZnQ6IDNyZW07XFxufVxcblxcbi56LTUwIHtcXG5cXHR6LWluZGV4OiA1MDtcXG59XFxuXFxuLmNvbC1zcGFuLTMge1xcblxcdGdyaWQtY29sdW1uOiBzcGFuIDMgLyBzcGFuIDM7XFxufVxcblxcbi5tLTIge1xcblxcdG1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG4ubXgtYXV0byB7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubXktMyB7XFxuXFx0bWFyZ2luLXRvcDogMC43NXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG5cXG4ubXktYXV0byB7XFxuXFx0bWFyZ2luLXRvcDogYXV0bztcXG5cXHRtYXJnaW4tYm90dG9tOiBhdXRvO1xcbn1cXG5cXG4uLW1sLTMge1xcblxcdG1hcmdpbi1sZWZ0OiAtMC43NXJlbTtcXG59XFxuXFxuLm10LTIge1xcblxcdG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLm1iLTYge1xcblxcdG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLm1iLTUge1xcblxcdG1hcmdpbi1ib3R0b206IDEuMjVyZW07XFxufVxcblxcbi5tYi00IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ubWItMyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxuXFxuLm10LTMge1xcblxcdG1hcmdpbi10b3A6IDAuNzVyZW07XFxufVxcblxcbi5tdC01IHtcXG5cXHRtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbn1cXG5cXG4uZmxleCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmdyaWQge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5oaWRkZW4ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oLVxcXFxbMzAwcHhcXFxcXSB7XFxuXFx0aGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLmgtMTAge1xcblxcdGhlaWdodDogMi41cmVtO1xcbn1cXG5cXG4uaC04IHtcXG5cXHRoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5oLTYge1xcblxcdGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4uaC01IHtcXG5cXHRoZWlnaHQ6IDEuMjVyZW07XFxufVxcblxcbi5oLTk2IHtcXG5cXHRoZWlnaHQ6IDI0cmVtO1xcbn1cXG5cXG4uaC04MCB7XFxuXFx0aGVpZ2h0OiAyMHJlbTtcXG59XFxuXFxuLmgtMTYge1xcblxcdGhlaWdodDogNHJlbTtcXG59XFxuXFxuLmgtMjQge1xcblxcdGhlaWdodDogNnJlbTtcXG59XFxuXFxuLmgtNyB7XFxuXFx0aGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG5cXG4udy1mdWxsIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLnctMTIge1xcblxcdHdpZHRoOiAzcmVtO1xcbn1cXG5cXG4udy02NCB7XFxuXFx0d2lkdGg6IDE2cmVtO1xcbn1cXG5cXG4udy04MCB7XFxuXFx0d2lkdGg6IDIwcmVtO1xcbn1cXG5cXG4udy0xNiB7XFxuXFx0d2lkdGg6IDRyZW07XFxufVxcblxcbi53LTQwIHtcXG5cXHR3aWR0aDogMTByZW07XFxufVxcblxcbi53LTEwIHtcXG5cXHR3aWR0aDogMi41cmVtO1xcbn1cXG5cXG4ubWluLXctXFxcXFszMDBweFxcXFxdIHtcXG5cXHRtaW4td2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4ubWF4LXctNnhsIHtcXG5cXHRtYXgtd2lkdGg6IDcycmVtO1xcbn1cXG5cXG4uZmxleC1zaHJpbmstMCB7XFxuXFx0ZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5mbGV4LWdyb3cge1xcblxcdGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnRyYW5zZm9ybSB7XFxuXFx0dHJhbnNmb3JtOiB2YXIoLS10dy10cmFuc2Zvcm0pO1xcbn1cXG5cXG4uY3Vyc29yLXBvaW50ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyaWQtY29scy0xIHtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcblxcbi5ncmlkLWNvbHMtMyB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcbn1cXG5cXG4uZmxleC1jb2wge1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pdGVtcy1lbmQge1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLml0ZW1zLWNlbnRlciB7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmp1c3RpZnktZW5kIHtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5nYXAteS0xMCB7XFxuXFx0cm93LWdhcDogMi41cmVtO1xcbn1cXG5cXG4uc3BhY2UteC0zID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuXFx0LS10dy1zcGFjZS14LXJldmVyc2U6IDA7XFxuXFx0bWFyZ2luLXJpZ2h0OiBjYWxjKDAuNzVyZW0gKiB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKTtcXG5cXHRtYXJnaW4tbGVmdDogY2FsYygwLjc1cmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSkpO1xcbn1cXG5cXG4uc3BhY2UteS00ID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuXFx0LS10dy1zcGFjZS15LXJldmVyc2U6IDA7XFxuXFx0bWFyZ2luLXRvcDogY2FsYygxcmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSkpO1xcblxcdG1hcmdpbi1ib3R0b206IGNhbGMoMXJlbSAqIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpO1xcbn1cXG5cXG4uc3BhY2UteC00ID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuXFx0LS10dy1zcGFjZS14LXJldmVyc2U6IDA7XFxuXFx0bWFyZ2luLXJpZ2h0OiBjYWxjKDFyZW0gKiB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKTtcXG5cXHRtYXJnaW4tbGVmdDogY2FsYygxcmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSkpO1xcbn1cXG5cXG4uc3BhY2UteC0yID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuXFx0LS10dy1zcGFjZS14LXJldmVyc2U6IDA7XFxuXFx0bWFyZ2luLXJpZ2h0OiBjYWxjKDAuNXJlbSAqIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpO1xcblxcdG1hcmdpbi1sZWZ0OiBjYWxjKDAuNXJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpKTtcXG59XFxuXFxuLm92ZXJmbG93LXNjcm9sbCB7XFxuXFx0b3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLndoaXRlc3BhY2Utbm93cmFwIHtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ucm91bmRlZC1mdWxsIHtcXG5cXHRib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxufVxcblxcbi5yb3VuZGVkLTJ4bCB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLnJvdW5kZWQtbGcge1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLnJvdW5kZWQteGwge1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XFxufVxcblxcbi5yb3VuZGVkIHtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4uYm9yZGVyLTIge1xcblxcdGJvcmRlci13aWR0aDogMnB4O1xcbn1cXG5cXG4uYm9yZGVyIHtcXG5cXHRib3JkZXItd2lkdGg6IDFweDtcXG59XFxuXFxuLmJvcmRlci1iIHtcXG5cXHRib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxufVxcblxcbi5iZy13aGl0ZSB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctZ3JheS0xMDAge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMjQ0LCAyNDYsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLXRyYW5zcGFyZW50IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmJnLXJlZC00MDAge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLWdyYXktOTAwIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNywgMjQsIDM5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5wLTMge1xcblxcdHBhZGRpbmc6IDAuNzVyZW07XFxufVxcblxcbi5wLTUge1xcblxcdHBhZGRpbmc6IDEuMjVyZW07XFxufVxcblxcbi5wLTIge1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLnB4LTgge1xcblxcdHBhZGRpbmctbGVmdDogMnJlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG4ucHktOCB7XFxuXFx0cGFkZGluZy10b3A6IDJyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDJyZW07XFxufVxcblxcbi5weC0xNiB7XFxuXFx0cGFkZGluZy1sZWZ0OiA0cmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDRyZW07XFxufVxcblxcbi5weC0xMCB7XFxuXFx0cGFkZGluZy1sZWZ0OiAyLjVyZW07XFxuXFx0cGFkZGluZy1yaWdodDogMi41cmVtO1xcbn1cXG5cXG4ucHktNCB7XFxuXFx0cGFkZGluZy10b3A6IDFyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbi5weC0zMiB7XFxuXFx0cGFkZGluZy1sZWZ0OiA4cmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDhyZW07XFxufVxcblxcbi5weS0xNCB7XFxuXFx0cGFkZGluZy10b3A6IDMuNXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMy41cmVtO1xcbn1cXG5cXG4ucHktMiB7XFxuXFx0cGFkZGluZy10b3A6IDAuNXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ucHktMTYge1xcblxcdHBhZGRpbmctdG9wOiA0cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4ucHgtNCB7XFxuXFx0cGFkZGluZy1sZWZ0OiAxcmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbi5weS03IHtcXG5cXHRwYWRkaW5nLXRvcDogMS43NXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMS43NXJlbTtcXG59XFxuXFxuLnB4LTIge1xcblxcdHBhZGRpbmctbGVmdDogMC41cmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLnB0LTYge1xcblxcdHBhZGRpbmctdG9wOiAxLjVyZW07XFxufVxcblxcbi5wYi01IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcXG59XFxuXFxuLnB0LTE0IHtcXG5cXHRwYWRkaW5nLXRvcDogMy41cmVtO1xcbn1cXG5cXG4ucGwtNSB7XFxuXFx0cGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xcbn1cXG5cXG4ucGwtMiB7XFxuXFx0cGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5wdC0yIHtcXG5cXHRwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG5cXG4ucHQtNSB7XFxuXFx0cGFkZGluZy10b3A6IDEuMjVyZW07XFxufVxcblxcbi5wYi0yIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ucHItNCB7XFxuXFx0cGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0LXJpZ2h0IHtcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnRleHQtNHhsIHtcXG5cXHRmb250LXNpemU6IDIuMjVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDIuNXJlbTtcXG59XFxuXFxuLnRleHQteHMge1xcblxcdGZvbnQtc2l6ZTogMC43NXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuXFxuLnRleHQtM3hsIHtcXG5cXHRmb250LXNpemU6IDEuODc1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xcbn1cXG5cXG4udGV4dC1zbSB7XFxuXFx0Zm9udC1zaXplOiAwLjg3NXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxuXFxuLnRleHQtMnhsIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuXFxuLnRleHQtbGcge1xcblxcdGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcblxcbi50ZXh0LXhsIHtcXG5cXHRmb250LXNpemU6IDEuMjVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcblxcbi5mb250LXNlbWlib2xkIHtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZm9udC1ib2xkIHtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZm9udC1leHRyYWxpZ2h0IHtcXG5cXHRmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4udGV4dC1ncmF5LTgwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMzEsIDQxLCA1NSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi50ZXh0LXB1cnBsZS01MDAge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDEzOSwgOTIsIDI0NiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi50ZXh0LWdyYXktNDAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgxNTYsIDE2MywgMTc1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuXFxuLnRleHQtZ3JheS02MDAge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDc1LCA4NSwgOTksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG5cXG4udGV4dC13aGl0ZSB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi50ZXh0LWdyYXktNTAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgxMDcsIDExNCwgMTI4LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuXFxuLnRleHQtcmVkLTQwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi50ZXh0LXllbGxvdy00MDAge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDI1MSwgMTkxLCAzNiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi5wbGFjZWhvbGRlci1ncmF5LTQwMDo6cGxhY2Vob2xkZXIge1xcblxcdC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgxNTYsIDE2MywgMTc1LCB2YXIoLS10dy1wbGFjZWhvbGRlci1vcGFjaXR5KSk7XFxufVxcblxcbi5zaGFkb3ctbWQge1xcblxcdC0tdHctc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuXFxuLm91dGxpbmUtbm9uZSB7XFxuXFx0b3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdG91dGxpbmUtb2Zmc2V0OiAycHg7XFxufVxcblxcbi50cmFuc2l0aW9uIHtcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIGNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIGNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXI7XFxuXFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCBjb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXG5cXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG5cXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG59XFxuXFxuLmR1cmF0aW9uLTE1MCB7XFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcblxcbi5kdXJhdGlvbi0zMDAge1xcblxcdHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcbn1cXG5cXG4uZHVyYXRpb24tMjAwIHtcXG5cXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG59XFxuXFxuLmVhc2Utb3V0IHtcXG5cXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XFxufVxcblxcbi5zY3JvbGxiYXItaGlkZSB7XFxuXFx0c2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbn1cXG5cXG4uc2Nyb2xsYmFyLWhpZGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZmlyc3RcXFxcOmJvcmRlci10OmZpcnN0LWNoaWxkIHtcXG5cXHRib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbi5ob3ZlclxcXFw6c2NhbGUtMTA1OmhvdmVyIHtcXG5cXHQtLXR3LXNjYWxlLXg6IDEuMDU7XFxuXFx0LS10dy1zY2FsZS15OiAxLjA1O1xcblxcdHRyYW5zZm9ybTogdmFyKC0tdHctdHJhbnNmb3JtKTtcXG59XFxuXFxuLmhvdmVyXFxcXDpiZy1ncmF5LTEwMDpob3ZlciB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDQsIDI0NiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uaG92ZXJcXFxcOm9wYWNpdHktODA6aG92ZXIge1xcblxcdG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmhvdmVyXFxcXDpzaGFkb3ctMnhsOmhvdmVyIHtcXG5cXHQtLXR3LXNoYWRvdzogMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG5cXG4uaG92ZXJcXFxcOnNoYWRvdy1sZzpob3ZlciB7XFxuXFx0LS10dy1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCA2cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcblxcbi5hY3RpdmVcXFxcOnNjYWxlLTkwOmFjdGl2ZSB7XFxuXFx0LS10dy1zY2FsZS14OiAuOTtcXG5cXHQtLXR3LXNjYWxlLXk6IC45O1xcblxcdHRyYW5zZm9ybTogdmFyKC0tdHctdHJhbnNmb3JtKTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuXFxuXFx0LnNtXFxcXDpoLVxcXFxbNDAwcHhcXFxcXSB7XFxuXFx0XFx0aGVpZ2h0OiA0MDBweDtcXG5cXHR9XFxuXFxuXFx0LnNtXFxcXDpncmlkLWNvbHMtMiB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcblxcdH1cXG5cXG5cXHQuc21cXFxcOnB4LTE2IHtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDRyZW07XFxuXFx0XFx0cGFkZGluZy1yaWdodDogNHJlbTtcXG5cXHR9XFxuXFxuXFx0LnNtXFxcXDp0ZXh0LWxnIHtcXG5cXHRcXHRmb250LXNpemU6IDEuMTI1cmVtO1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuXFx0Lm1kXFxcXDpteC0yIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMC41cmVtO1xcblxcdFxcdG1hcmdpbi1yaWdodDogMC41cmVtO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOmlubGluZSB7XFxuXFx0XFx0ZGlzcGxheTogaW5saW5lO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOmlubGluZS1mbGV4IHtcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDpoLTgwIHtcXG5cXHRcXHRoZWlnaHQ6IDIwcmVtO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOmgtNTIge1xcblxcdFxcdGhlaWdodDogMTNyZW07XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6dy04IHtcXG5cXHRcXHR3aWR0aDogMnJlbTtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDp3LTgwIHtcXG5cXHRcXHR3aWR0aDogMjByZW07XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6Z3JpZC1jb2xzLTQge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDpib3JkZXItMiB7XFxuXFx0XFx0Ym9yZGVyLXdpZHRoOiAycHg7XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6cHgtNDAge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMTByZW07XFxuXFx0XFx0cGFkZGluZy1yaWdodDogMTByZW07XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6cHgtMTAge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMi41cmVtO1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDpzaGFkb3ctc20ge1xcblxcdFxcdC0tdHctc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcblxcdFxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuXFxuXFx0LmxnXFxcXDpoLVxcXFxbNTAwLXB4XFxcXF0ge1xcblxcdFxcdGhlaWdodDogNTAwIC0gcHg7XFxuXFx0fVxcblxcblxcdC5sZ1xcXFw6Z3JpZC1jb2xzLTMge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG5cXHR9XFxuXFxuXFx0LmxnXFxcXDp0ZXh0LXhsIHtcXG5cXHRcXHRmb250LXNpemU6IDEuMjVyZW07XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuXFxuXFx0LnhsXFxcXDpoLVxcXFxbNjAwcHhcXFxcXSB7XFxuXFx0XFx0aGVpZ2h0OiA2MDBweDtcXG5cXHR9XFxuXFxuXFx0LnhsXFxcXDpncmlkLWNvbHMtNCB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkge1xcblxcblxcdC5cXFxcMzJ4bFxcXFw6aC1cXFxcWzcwMHB4XFxcXF0ge1xcblxcdFxcdGhlaWdodDogNzAwcHg7XFxuXFx0fVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiLFwid2VicGFjazovL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy8lM0NpbnB1dCUyMGNzcyUyMDVDV1MtUyUzRVwiLFwid2VicGFjazovL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy8lM0NpbnB1dCUyMGNzcyUyMEM4OXhrNiUzRVwiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0VBQWMsQ0FBZCw4RkFBYzs7QUFBZDs7O0NBQWM7O0FBQWQ7O0NBQWM7O0FBQWQ7OztDQ2NDLHNCQUFzQjtBRGRUOztBQUFkOztDQUFjOztBQUFkO0NDc0JDLGdCQUFnQjtDQUNoQixXQUFXO0FEdkJFOztBQUFkOzs7Q0FBYzs7QUFBZDtDQ2dDQyxpQkFBaUIsRUFBRSxNQUFNO0NBQ3pCLDhCQUE4QixFQUFFLE1BQU07QURqQ3pCOztBQUFkOzs7Q0FBYzs7QUFBZDs7Q0FBYzs7QUFBZDtDQzhDQyxTQUFTO0FEOUNJOztBQUFkOztDQUFjOztBQUFkO0NDc0RDOzs7Ozs7Ozs7a0JBU2lCO0FEL0RKOztBQUFkOzs7Q0FBYzs7QUFBZDs7O0NBQWM7O0FBQWQ7Q0M2RUMsU0FBUyxFQUFFLE1BQU07Q0FDakIsY0FBYyxFQUFFLE1BQU07QUQ5RVQ7O0FBQWQ7OztD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QUE7QUhJbUI7O0FBQW5CO0NHSkEsc0JBQUE7QUhJbUI7O0FBQW5CO0NHSkEsbUJBQUE7QUhJbUI7O0FBQW5CO0NHSkEsbUJBQUE7QUhJbUI7O0FBQW5CO0NHSkEsYUFBQTtBSEltQjs7QUFBbkI7Q0dKQSxhQUFBO0FISW1COztBQUFuQjtDR0pBLGFBQUE7QUhJbUI7O0FBQW5CO0NHSkEsYUFBQTtBSEltQjs7QUFBbkI7Q0dKQSxjQUFBO0FISW1COztBQUFuQjtDR0pBLFlBQUE7QUhJbUI7O0FBQW5CO0NHSkEsY0FBQTtBSEltQjs7QUFBbkI7Q0dKQSxlQUFBO0FISW1COztBQUFuQjtDR0pBLGFBQUE7QUhJbUI7O0FBQW5CO0NHSkEsYUFBQTtBSEltQjs7QUFBbkI7Q0dKQSxZQUFBO0FISW1COztBQUFuQjtDR0pBLFlBQUE7QUhJbUI7O0FBQW5CO0NHSkEsZUFBQTtBSEltQjs7QUFBbkI7Q0dKQSxXQUFBO0FISW1COztBQUFuQjtDR0pBLFdBQUE7QUhJbUI7O0FBQW5CO0NHSkEsWUFBQTtBSEltQjs7QUFBbkI7Q0dKQSxZQUFBO0FISW1COztBQUFuQjtDR0pBLFdBQUE7QUhJbUI7O0FBQW5CO0NHSkEsWUFBQTtBSEltQjs7QUFBbkI7Q0dKQSxhQUFBO0FISW1COztBQUFuQjtDR0pBLGdCQUFBO0FISW1COztBQUFuQjtDR0pBLGdCQUFBO0FISW1COztBQUFuQjtDR0pBLGNBQUE7QUhJbUI7O0FBQW5CO0NHSkEsWUFBQTtBSEltQjs7QUFBbkI7Q0dKQSw4QkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxlQUFBO0FISW1COztBQUFuQjtDR0pBLGdEQUFBO0FISW1COztBQUFuQjtDR0pBLGdEQUFBO0FISW1COztBQUFuQjtDR0pBLHNCQUFBO0FISW1COztBQUFuQjtDR0pBLHFCQUFBO0FISW1COztBQUFuQjtDR0pBLG1CQUFBO0FISW1COztBQUFuQjtDR0pBLHlCQUFBO0FISW1COztBQUFuQjtDR0pBLDhCQUFBO0FISW1COztBQUFuQjtDR0pBLGVBQUE7QUhJbUI7O0FBQW5CO0NHSkEsdUJBQUE7Q0FBQSx1REFBQTtDQUFBLGdFQUFBO0FISW1COztBQUFuQjtDR0pBLHVCQUFBO0NBQUEsNERBQUE7Q0FBQSxxREFBQTtBSEltQjs7QUFBbkI7Q0dKQSx1QkFBQTtDQUFBLG9EQUFBO0NBQUEsNkRBQUE7QUhJbUI7O0FBQW5CO0NHSkEsdUJBQUE7Q0FBQSxzREFBQTtDQUFBLCtEQUFBO0FISW1COztBQUFuQjtDR0pBLGdCQUFBO0FISW1COztBQUFuQjtDR0pBLG1CQUFBO0FISW1COztBQUFuQjtDR0pBLHFCQUFBO0FISW1COztBQUFuQjtDR0pBLG1CQUFBO0FISW1COztBQUFuQjtDR0pBLHFCQUFBO0FISW1COztBQUFuQjtDR0pBLHNCQUFBO0FISW1COztBQUFuQjtDR0pBLHNCQUFBO0FISW1COztBQUFuQjtDR0pBLGlCQUFBO0FISW1COztBQUFuQjtDR0pBLGlCQUFBO0FISW1COztBQUFuQjtDR0pBLHdCQUFBO0FISW1COztBQUFuQjtDR0pBLGtCQUFBO0NBQUEsMkRBQUE7QUhJbUI7O0FBQW5CO0NHSkEsa0JBQUE7Q0FBQSwyREFBQTtBSEltQjs7QUFBbkI7Q0dKQSw2QkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxrQkFBQTtDQUFBLDJEQUFBO0FISW1COztBQUFuQjtDR0pBLGtCQUFBO0NBQUEsd0RBQUE7QUhJbUI7O0FBQW5CO0NHSkEsZ0JBQUE7QUhJbUI7O0FBQW5CO0NHSkEsZ0JBQUE7QUhJbUI7O0FBQW5CO0NHSkEsZUFBQTtBSEltQjs7QUFBbkI7Q0dKQSxrQkFBQTtDQUFBLG1CQUFBO0FISW1COztBQUFuQjtDR0pBLGlCQUFBO0NBQUEsb0JBQUE7QUhJbUI7O0FBQW5CO0NHSkEsa0JBQUE7Q0FBQSxtQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxvQkFBQTtDQUFBLHFCQUFBO0FISW1COztBQUFuQjtDR0pBLGlCQUFBO0NBQUEsb0JBQUE7QUhJbUI7O0FBQW5CO0NHSkEsa0JBQUE7Q0FBQSxtQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxtQkFBQTtDQUFBLHNCQUFBO0FISW1COztBQUFuQjtDR0pBLG1CQUFBO0NBQUEsc0JBQUE7QUhJbUI7O0FBQW5CO0NHSkEsaUJBQUE7Q0FBQSxvQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxrQkFBQTtDQUFBLG1CQUFBO0FISW1COztBQUFuQjtDR0pBLG9CQUFBO0NBQUEsdUJBQUE7QUhJbUI7O0FBQW5CO0NHSkEsb0JBQUE7Q0FBQSxxQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxtQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSx1QkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxtQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxxQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxvQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxtQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxvQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxzQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxtQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxrQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxpQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxrQkFBQTtDQUFBLG1CQUFBO0FISW1COztBQUFuQjtDR0pBLGtCQUFBO0NBQUEsaUJBQUE7QUhJbUI7O0FBQW5CO0NHSkEsbUJBQUE7Q0FBQSxvQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxtQkFBQTtDQUFBLG9CQUFBO0FISW1COztBQUFuQjtDR0pBLGlCQUFBO0NBQUEsaUJBQUE7QUhJbUI7O0FBQW5CO0NHSkEsbUJBQUE7Q0FBQSxvQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSxrQkFBQTtDQUFBLG9CQUFBO0FISW1COztBQUFuQjtDR0pBLGdCQUFBO0FISW1COztBQUFuQjtDR0pBLGdCQUFBO0FISW1COztBQUFuQjtDR0pBLGdCQUFBO0FISW1COztBQUFuQjtDR0pBLG9CQUFBO0NBQUEsK0NBQUE7QUhJbUI7O0FBQW5CO0NHSkEsb0JBQUE7Q0FBQSxpREFBQTtBSEltQjs7QUFBbkI7Q0dKQSxvQkFBQTtDQUFBLGtEQUFBO0FISW1COztBQUFuQjtDR0pBLG9CQUFBO0NBQUEsK0NBQUE7QUhJbUI7O0FBQW5CO0NHSkEsb0JBQUE7Q0FBQSxrREFBQTtBSEltQjs7QUFBbkI7Q0dKQSxvQkFBQTtDQUFBLGtEQUFBO0FISW1COztBQUFuQjtDR0pBLG9CQUFBO0NBQUEsa0RBQUE7QUhJbUI7O0FBQW5CO0NHSkEsb0JBQUE7Q0FBQSxpREFBQTtBSEltQjs7QUFBbkI7Q0dKQSwyQkFBQTtDQUFBLHlEQUFBO0FISW1COztBQUFuQjtDR0pBLGtGQUFBO0NBQUEsdUdBQUE7QUhJbUI7O0FBQW5CO0NHSkEsOEJBQUE7Q0FBQSxtQkFBQTtBSEltQjs7QUFBbkI7Q0dKQSx5SUFBQTtDQUFBLGlJQUFBO0NBQUEsMEpBQUE7Q0FBQSx3REFBQTtDQUFBLDBCQUFBO0FISW1COztBQUFuQjtDR0pBLDBCQUFBO0FISW1COztBQUFuQjtDR0pBLDBCQUFBO0FISW1COztBQUFuQjtDR0pBLDBCQUFBO0FISW1COztBQUFuQjtDR0pBLHNEQUFBO0FISW1COztBQUFuQjtDR0pBLHFCQUFBO0FISW1COztBQUFuQjtDR0pBLGFBQUE7QUhJbUI7O0FBSm5CO0NHQUEscUJBQUE7QUhxbUNBOztBQXJtQ0E7Q0dBQSxrQkFBQTtDQUFBLGtCQUFBO0NBQUEsOEJBQUE7QUgybUNBOztBQTNtQ0E7Q0dBQSxrQkFBQTtDQUFBLDJEQUFBO0FIZ25DQTs7QUFobkNBO0NHQUEsWUFBQTtBSG9uQ0E7O0FBcG5DQTtDR0FBLGtEQUFBO0NBQUEsdUdBQUE7QUh5bkNBOztBQXpuQ0E7Q0dBQSxvRkFBQTtDQUFBLHVHQUFBO0FIOG5DQTs7QUE5bkNBO0NHQUEsZ0JBQUE7Q0FBQSxnQkFBQTtDQUFBLDhCQUFBO0FIb29DQTs7QUFwb0NBOztDR0FBO0VBQUEsYUFBQTtDSDBvQ0M7O0NHMW9DRDtFQUFBLGdEQUFBO0NIOG9DQzs7Q0c5b0NEO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtDSG1wQ0M7O0NHbnBDRDtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7Q0h3cENDO0FBQ0Q7O0FBenBDQTs7Q0dBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7Q0hncUNDOztDR2hxQ0Q7RUFBQSxlQUFBO0NIb3FDQzs7Q0dwcUNEO0VBQUEsb0JBQUE7Q0h3cUNDOztDR3hxQ0Q7RUFBQSxhQUFBO0NINHFDQzs7Q0c1cUNEO0VBQUEsYUFBQTtDSGdyQ0M7O0NHaHJDRDtFQUFBLFdBQUE7Q0hvckNDOztDR3ByQ0Q7RUFBQSxZQUFBO0NId3JDQzs7Q0d4ckNEO0VBQUEsZ0RBQUE7Q0g0ckNDOztDRzVyQ0Q7RUFBQSxpQkFBQTtDSGdzQ0M7O0NHaHNDRDtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7Q0hxc0NDOztDR3JzQ0Q7RUFBQSxvQkFBQTtFQUFBLHFCQUFBO0NIMHNDQzs7Q0cxc0NEO0VBQUEsNENBQUE7RUFBQSx1R0FBQTtDSCtzQ0M7QUFDRDs7QUFodENBOztDR0FBO0VBQUEsZ0JBQUE7Q0hzdENDOztDR3R0Q0Q7RUFBQSxnREFBQTtDSDB0Q0M7O0NHMXRDRDtFQUFBLGtCQUFBO0VBQUEsb0JBQUE7Q0grdENDO0FBQ0Q7O0FBaHVDQTs7Q0dBQTtFQUFBLGFBQUE7Q0hzdUNDOztDR3R1Q0Q7RUFBQSxnREFBQTtDSDB1Q0M7QUFDRDs7QUEzdUNBOztDR0FBO0VBQUEsYUFBQTtDSGl2Q0M7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5cXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5cXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblwiLFwiLyohIG1vZGVybi1ub3JtYWxpemUgdjEuMS4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUgKi9cXG5cXG4vKlxcbkRvY3VtZW50XFxuPT09PT09PT1cXG4qL1xcblxcbi8qKlxcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyoqXFxuVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLlxcbiovXFxuXFxuaHRtbCB7XFxuXFx0LW1vei10YWItc2l6ZTogNDtcXG5cXHR0YWItc2l6ZTogNDtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiovXFxuXFxuaHRtbCB7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZWN0aW9uc1xcbj09PT09PT09XFxuKi9cXG5cXG4vKipcXG5SZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbkltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuKi9cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHRzeXN0ZW0tdWksXFxuXFx0XFx0LWFwcGxlLXN5c3RlbSwgLyogRmlyZWZveCBzdXBwb3J0cyB0aGlzIGJ1dCBub3QgeWV0IGBzeXN0ZW0tdWlgICovXFxuXFx0XFx0J1NlZ29lIFVJJyxcXG5cXHRcXHRSb2JvdG8sXFxuXFx0XFx0SGVsdmV0aWNhLFxcblxcdFxcdEFyaWFsLFxcblxcdFxcdHNhbnMtc2VyaWYsXFxuXFx0XFx0J0FwcGxlIENvbG9yIEVtb2ppJyxcXG5cXHRcXHQnU2Vnb2UgVUkgRW1vamknO1xcbn1cXG5cXG4vKlxcbkdyb3VwaW5nIGNvbnRlbnRcXG49PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuKi9cXG5cXG5ociB7XFxuXFx0aGVpZ2h0OiAwOyAvKiAxICovXFxuXFx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5UZXh0LWxldmVsIHNlbWFudGljc1xcbj09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnJbdGl0bGVdIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuMS4gSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4yLiBDb3JyZWN0IHRoZSBvZGQgJ2VtJyBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0dWktbW9ub3NwYWNlLFxcblxcdFxcdFNGTW9uby1SZWd1bGFyLFxcblxcdFxcdENvbnNvbGFzLFxcblxcdFxcdCdMaWJlcmF0aW9uIE1vbm8nLFxcblxcdFxcdE1lbmxvLFxcblxcdFxcdG1vbm9zcGFjZTsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcblxcdGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG5QcmV2ZW50ICdzdWInIGFuZCAnc3VwJyBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuXFx0Zm9udC1zaXplOiA3NSU7XFxuXFx0bGluZS1oZWlnaHQ6IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG5cXHRib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuXFx0dG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuVGFidWxhciBkYXRhXFxuPT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4qL1xcblxcbnRhYmxlIHtcXG5cXHR0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcblxcdGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkZvcm1zXFxuPT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHRtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbjEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuXFx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbkNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuKi9cXG5cXG46Oi1tb3otZm9jdXMtaW5uZXIge1xcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG5SZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuKi9cXG5cXG46LW1vei1mb2N1c3Jpbmcge1xcblxcdG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsICc6aW52YWxpZCcgc3R5bGVzIGluIEZpcmVmb3guXFxuU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczN1xcbiovXFxuXFxuOi1tb3otdWktaW52YWxpZCB7XFxuXFx0Ym94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dCAnZmllbGRzZXQnIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmxlZ2VuZCB7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcblxcdG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4qL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gJ2luaGVyaXQnIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuXFx0Zm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkludGVyYWN0aXZlXFxuPT09PT09PT09PT1cXG4qL1xcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5zdW1tYXJ5IHtcXG5cXHRkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblwiLFwiLyoqXFxuICogTWFudWFsbHkgZm9ya2VkIGZyb20gU1VJVCBDU1MgQmFzZTogaHR0cHM6Ly9naXRodWIuY29tL3N1aXRjc3MvYmFzZVxcbiAqIEEgdGhpbiBsYXllciBvbiB0b3Agb2Ygbm9ybWFsaXplLmNzcyB0aGF0IHByb3ZpZGVzIGEgc3RhcnRpbmcgcG9pbnQgbW9yZVxcbiAqIHN1aXRhYmxlIGZvciB3ZWIgYXBwbGljYXRpb25zLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4gKi9cXG5cXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmhyLFxcbmZpZ3VyZSxcXG5wLFxcbnByZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBUYWlsd2luZCBjdXN0b20gcmVzZXQgc3R5bGVzXFxuICovXFxuXFxuLyoqXFxuICogMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgKHdpdGggVGFpbHdpbmQncyBkZWZhdWx0XFxuICogICAgc2Fucy1zZXJpZiBmb250IHN0YWNrIGFzIGEgZmFsbGJhY2spIGFzIGEgc2FuZSBkZWZhdWx0LlxcbiAqIDIuIFVzZSBUYWlsd2luZCdzIGRlZmF1bHQgXFxcIm5vcm1hbFxcXCIgbGluZS1oZWlnaHQgc28gdGhlIHVzZXIgaXNuJ3QgZm9yY2VkXFxuICogICAgdG8gb3ZlcnJpZGUgaXQgdG8gZW5zdXJlIGNvbnNpc3RlbmN5IGV2ZW4gd2hlbiB1c2luZyB0aGUgZGVmYXVsdCB0aGVtZS5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5zYW5zJywgdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiKTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMiAqL1xcbn1cXG5cXG5cXG4vKipcXG4gKiBJbmhlcml0IGZvbnQtZmFtaWx5IGFuZCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXNcXG4gKiBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguXFxuICpcXG4gKiAgICBXZSB1c2VkIHRvIHNldCB0aGlzIGluIHRoZSBodG1sIGVsZW1lbnQgYW5kIGluaGVyaXQgZnJvbVxcbiAqICAgIHRoZSBwYXJlbnQgZWxlbWVudCBmb3IgZXZlcnl0aGluZyBlbHNlLiBUaGlzIGNhdXNlZCBpc3N1ZXNcXG4gKiAgICBpbiBzaGFkb3ctZG9tLWVuaGFuY2VkIGVsZW1lbnRzIGxpa2UgPGRldGFpbHM+IHdoZXJlIHRoZSBjb250ZW50XFxuICogICAgaXMgd3JhcHBlZCBieSBhIGRpdiB3aXRoIGJveC1zaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzRcXG4gKlxcbiAqXFxuICogMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguXFxuICpcXG4gKiAgICBCeSBkZWZhdWx0LCB0aGUgd2F5IHRoZSBicm93c2VyIHNwZWNpZmllcyB0aGF0IGFuIGVsZW1lbnQgc2hvdWxkIGhhdmUgbm9cXG4gKiAgICBib3JkZXIgaXMgYnkgc2V0dGluZyBpdCdzIGJvcmRlci1zdHlsZSB0byBgbm9uZWAgaW4gdGhlIHVzZXItYWdlbnRcXG4gKiAgICBzdHlsZXNoZWV0LlxcbiAqXFxuICogICAgSW4gb3JkZXIgdG8gZWFzaWx5IGFkZCBib3JkZXJzIHRvIGVsZW1lbnRzIGJ5IGp1c3Qgc2V0dGluZyB0aGUgYGJvcmRlci13aWR0aGBcXG4gKiAgICBwcm9wZXJ0eSwgd2UgY2hhbmdlIHRoZSBkZWZhdWx0IGJvcmRlci1zdHlsZSBmb3IgYWxsIGVsZW1lbnRzIHRvIGBzb2xpZGAsIGFuZFxcbiAqICAgIHVzZSBib3JkZXItd2lkdGggdG8gaGlkZSB0aGVtIGluc3RlYWQuIFRoaXMgd2F5IG91ciBgYm9yZGVyYCB1dGlsaXRpZXMgb25seVxcbiAqICAgIG5lZWQgdG8gc2V0IHRoZSBgYm9yZGVyLXdpZHRoYCBwcm9wZXJ0eSBpbnN0ZWFkIG9mIHRoZSBlbnRpcmUgYGJvcmRlcmBcXG4gKiAgICBzaG9ydGhhbmQsIG1ha2luZyBvdXIgYm9yZGVyIHV0aWxpdGllcyBtdWNoIG1vcmUgc3RyYWlnaHRmb3J3YXJkIHRvIGNvbXBvc2UuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTZcXG4gKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbiAqIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHRcXG4gKi9cXG5cXG5ociB7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbi8qKlxcbiAqIFVuZG8gdGhlIGBib3JkZXItc3R5bGU6IG5vbmVgIHJlc2V0IHRoYXQgTm9ybWFsaXplIGFwcGxpZXMgdG8gaW1hZ2VzIHNvIHRoYXRcXG4gKiBvdXIgYGJvcmRlci17d2lkdGh9YCB1dGlsaXRpZXMgaGF2ZSB0aGUgZXhwZWN0ZWQgZWZmZWN0LlxcbiAqXFxuICogVGhlIE5vcm1hbGl6ZSByZXNldCBpcyB1bm5lY2Vzc2FyeSBmb3IgdXMgc2luY2Ugd2UgZGVmYXVsdCB0aGUgYm9yZGVyLXdpZHRoXFxuICogdG8gMCBvbiBhbGwgZWxlbWVudHMuXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvaXNzdWVzLzM2MlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogdGhlbWUoJ2NvbG9ycy5ncmF5LjQwMCcsICNhMWExYWEpO1xcbn1cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mXFxuICogb3B0LW91dC5cXG4gKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBSZXNldCBmb3JtIGVsZW1lbnQgcHJvcGVydGllcyB0aGF0IGFyZSBlYXN5IHRvIGZvcmdldCB0b1xcbiAqIHN0eWxlIGV4cGxpY2l0bHkgc28geW91IGRvbid0IGluYWR2ZXJ0ZW50bHkgaW50cm9kdWNlXFxuICogc3R5bGVzIHRoYXQgZGV2aWF0ZSBmcm9tIHlvdXIgZGVzaWduIHN5c3RlbS4gVGhlc2Ugc3R5bGVzXFxuICogc3VwcGxlbWVudCBhIHBhcnRpYWwgcmVzZXQgdGhhdCBpcyBhbHJlYWR5IGFwcGxpZWQgYnlcXG4gKiBub3JtYWxpemUuY3NzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFVzZSB0aGUgY29uZmlndXJlZCAnbW9ubycgZm9udCBmYW1pbHkgZm9yIGVsZW1lbnRzIHRoYXRcXG4gKiBhcmUgZXhwZWN0ZWQgdG8gYmUgcmVuZGVyZWQgd2l0aCBhIG1vbm9zcGFjZSBmb250LCBmYWxsaW5nXFxuICogYmFjayB0byB0aGUgc3lzdGVtIG1vbm9zcGFjZSBzdGFjayBpZiB0aGVyZSBpcyBubyBjb25maWd1cmVkXFxuICogJ21vbm8nIGZvbnQgZmFtaWx5LlxcbiAqL1xcblxcbnByZSxcXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5tb25vJywgdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2UpO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdCBhcyB0aGF0J3NcXG4gKiAgICB0aGUgYmVoYXZpb3IgeW91IHdhbnQgYWxtb3N0IGFsbCBvZiB0aGUgdGltZS4gSW5zcGlyZWQgYnlcXG4gKiAgICBDU1MgUmVtZWR5LCB3aXRoIGBzdmdgIGFkZGVkIGFzIHdlbGwuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0XFxuICogXFxuICogMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlXFxuICogICAgc2Vuc2libHkgYnkgZGVmYXVsdCB3aGVuIG92ZXJyaWRpbmcgYGRpc3BsYXlgIGJ5IGFkZGluZyBhXFxuICogICAgdXRpbGl0eSBsaWtlIGBpbmxpbmVgLlxcbiAqXFxuICogICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnRpbmcgZXJyb3IgaW4gc29tZVxcbiAqICAgIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuICogXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwXFxuICovXFxuXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyxcXG5jYW52YXMsXFxuYXVkaW8sXFxuaWZyYW1lLFxcbmVtYmVkLFxcbm9iamVjdCB7XFxuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmVcXG4gKiB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLlxcbiAqXFxuICogaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNFxcbiAqL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIEVuc3VyZSB0aGUgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9mIHRoZSBgaGlkZGVuYCBhdHRyaWJ1dGUuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuICAgIC5idXR0b24ge1xcclxcblxcclxcbiAgICB0cmFuc2Zvcm06IHZhcigtLXR3LXRyYW5zZm9ybSk7XFxyXFxuXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcclxcblxcclxcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcblxcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcblxcclxcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xcclxcblxcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIGNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCBjb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIGNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXIsIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMG1zO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSlcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuXFxyXFxuICAgIC0tdHctc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG5cXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KVxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uOmFjdGl2ZSB7XFxyXFxuXFxyXFxuICAgIC0tdHctc2NhbGUteDogLjk1O1xcclxcblxcclxcbiAgICAtLXR3LXNjYWxlLXk6IC45NTtcXHJcXG5cXHJcXG4gICAgdHJhbnNmb3JtOiB2YXIoLS10dy10cmFuc2Zvcm0pO1xcclxcblxcclxcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDQsIDI0NiwgdmFyKC0tdHctYmctb3BhY2l0eSkpXFxufVxcclxcblxcclxcbi5maXJzdFxcXFw6Ym9yZGVyLXQ6Zmlyc3QtY2hpbGQge1xcclxcblxcclxcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHhcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpzY2FsZS0xMDU6aG92ZXIge1xcclxcblxcclxcbiAgICAtLXR3LXNjYWxlLXg6IDEuMDU7XFxyXFxuXFxyXFxuICAgIC0tdHctc2NhbGUteTogMS4wNTtcXHJcXG5cXHJcXG4gICAgdHJhbnNmb3JtOiB2YXIoLS10dy10cmFuc2Zvcm0pXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6YmctZ3JheS0xMDA6aG92ZXIge1xcclxcblxcclxcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDQsIDI0NiwgdmFyKC0tdHctYmctb3BhY2l0eSkpXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6b3BhY2l0eS04MDpob3ZlciB7XFxyXFxuXFxyXFxuICAgIG9wYWNpdHk6IDAuOFxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOnNoYWRvdy0yeGw6aG92ZXIge1xcclxcblxcclxcbiAgICAtLXR3LXNoYWRvdzogMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG5cXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KVxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOnNoYWRvdy1sZzpob3ZlciB7XFxyXFxuXFxyXFxuICAgIC0tdHctc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG5cXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KVxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlXFxcXDpzY2FsZS05MDphY3RpdmUge1xcclxcblxcclxcbiAgICAtLXR3LXNjYWxlLXg6IC45O1xcclxcblxcclxcbiAgICAtLXR3LXNjYWxlLXk6IC45O1xcclxcblxcclxcbiAgICB0cmFuc2Zvcm06IHZhcigtLXR3LXRyYW5zZm9ybSlcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxyXFxuXFxyXFxuICAgIC5zbVxcXFw6aC1cXFxcWzQwMHB4XFxcXF0ge1xcclxcblxcclxcbiAgICAgICAgaGVpZ2h0OiA0MDBweFxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbVxcXFw6Z3JpZC1jb2xzLTIge1xcclxcblxcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNtXFxcXDpweC0xNiB7XFxyXFxuXFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XFxyXFxuXFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNtXFxcXDp0ZXh0LWxnIHtcXHJcXG5cXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuXFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS43NXJlbVxcbiAgICB9XFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcbiAgICAubWRcXFxcOm14LTIge1xcclxcblxcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG5cXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1kXFxcXDppbmxpbmUge1xcclxcblxcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1kXFxcXDppbmxpbmUtZmxleCB7XFxyXFxuXFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleFxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZFxcXFw6aC04MCB7XFxyXFxuXFxyXFxuICAgICAgICBoZWlnaHQ6IDIwcmVtXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1kXFxcXDpoLTUyIHtcXHJcXG5cXHJcXG4gICAgICAgIGhlaWdodDogMTNyZW1cXG4gICAgfVxcclxcblxcclxcbiAgICAubWRcXFxcOnctOCB7XFxyXFxuXFxyXFxuICAgICAgICB3aWR0aDogMnJlbVxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZFxcXFw6dy04MCB7XFxyXFxuXFxyXFxuICAgICAgICB3aWR0aDogMjByZW1cXG4gICAgfVxcclxcblxcclxcbiAgICAubWRcXFxcOmdyaWQtY29scy00IHtcXHJcXG5cXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKVxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZFxcXFw6Ym9yZGVyLTIge1xcclxcblxcclxcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHhcXG4gICAgfVxcclxcblxcclxcbiAgICAubWRcXFxcOnB4LTQwIHtcXHJcXG5cXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTByZW07XFxyXFxuXFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbVxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZFxcXFw6cHgtMTAge1xcclxcblxcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XFxyXFxuXFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW1cXG4gICAgfVxcclxcblxcclxcbiAgICAubWRcXFxcOnNoYWRvdy1zbSB7XFxyXFxuXFxyXFxuICAgICAgICAtLXR3LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG5cXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdylcXG4gICAgfVxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFxyXFxuICAgIC5sZ1xcXFw6aC1cXFxcWzUwMC1weFxcXFxdIHtcXHJcXG5cXHJcXG4gICAgICAgIGhlaWdodDogNTAwIC0gcHhcXG4gICAgfVxcclxcblxcclxcbiAgICAubGdcXFxcOmdyaWQtY29scy0zIHtcXHJcXG5cXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKVxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sZ1xcXFw6dGV4dC14bCB7XFxyXFxuXFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuXFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS43NXJlbVxcbiAgICB9XFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXHJcXG5cXHJcXG4gICAgLnhsXFxcXDpoLVxcXFxbNjAwcHhcXFxcXSB7XFxyXFxuXFxyXFxuICAgICAgICBoZWlnaHQ6IDYwMHB4XFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnhsXFxcXDpncmlkLWNvbHMtNCB7XFxyXFxuXFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSlcXG4gICAgfVxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XFxyXFxuXFxyXFxuICAgIC5cXFxcMzJ4bFxcXFw6aC1cXFxcWzcwMHB4XFxcXF0ge1xcclxcblxcclxcbiAgICAgICAgaGVpZ2h0OiA3MDBweFxcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIjxubyBzb3VyY2U+XCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtJQUFBOztJQUFBLDhCQUFBOztJQUFBLGVBQUE7O0lBQUEscUJBQUE7O0lBQUEsaUJBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsbUJBQUE7O0lBQUEsc0JBQUE7O0lBQUEseUlBQUE7O0lBQUEsaUlBQUE7O0lBQUEsMEpBQUE7O0lBQUEsd0RBQUE7O0lBQUEsMEJBQUE7O0lBQUEsMEJBQUE7O0lBQUE7QUNnQ0E7O0FEaENBOztJQUFBLG9GQUFBOztJQUFBO0FDdUNBOztBRHZDQTs7SUFBQSxpQkFBQTs7SUFBQSxpQkFBQTs7SUFBQSw4QkFBQTs7SUFBQSxrQkFBQTs7SUFBQTtBQ29EQTs7QUFwREE7O0lEQUE7QUN5REE7O0FBekRBOztJREFBLGtCQUFBOztJQUFBLGtCQUFBOztJQUFBO0FDa0VBOztBQWxFQTs7SURBQSxrQkFBQTs7SUFBQTtBQ3lFQTs7QUF6RUE7O0lEQUE7QUM4RUE7O0FBOUVBOztJREFBLGtEQUFBOztJQUFBO0FDcUZBOztBQXJGQTs7SURBQSxvRkFBQTs7SUFBQTtBQzRGQTs7QUE1RkE7O0lEQUEsZ0JBQUE7O0lBQUEsZ0JBQUE7O0lBQUE7QUNxR0E7O0FBckdBOztJREFBOztRQUFBO0lDNEdJOztJRDVHSjs7UUFBQTtJQ2lISTs7SURqSEo7O1FBQUEsa0JBQUE7O1FBQUE7SUN3SEk7O0lEeEhKOztRQUFBLG1CQUFBOztRQUFBO0lDK0hJO0FBQ0o7O0FBaElBOztJREFBOztRQUFBLG1CQUFBOztRQUFBO0lDeUlJOztJRHpJSjs7UUFBQTtJQzhJSTs7SUQ5SUo7O1FBQUE7SUNtSkk7O0lEbkpKOztRQUFBO0lDd0pJOztJRHhKSjs7UUFBQTtJQzZKSTs7SUQ3Sko7O1FBQUE7SUNrS0k7O0lEbEtKOztRQUFBO0lDdUtJOztJRHZLSjs7UUFBQTtJQzRLSTs7SUQ1S0o7O1FBQUE7SUNpTEk7O0lEakxKOztRQUFBLG1CQUFBOztRQUFBO0lDd0xJOztJRHhMSjs7UUFBQSxvQkFBQTs7UUFBQTtJQytMSTs7SUQvTEo7O1FBQUEsNENBQUE7O1FBQUE7SUNzTUk7QUFDSjs7QUF2TUE7O0lEQUE7O1FBQUE7SUM4TUk7O0lEOU1KOztRQUFBO0lDbU5JOztJRG5OSjs7UUFBQSxrQkFBQTs7UUFBQTtJQzBOSTtBQUNKOztBQTNOQTs7SURBQTs7UUFBQTtJQ2tPSTs7SURsT0o7O1FBQUE7SUN1T0k7QUFDSjs7QUF4T0E7O0lEQUE7O1FBQUE7SUMrT0k7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbbnVsbCxcIkB0YWlsd2luZCBjb21wb25lbnRzO1xcclxcblxcclxcbkBsYXllciBjb21wb25lbnRzIHtcXHJcXG4gICAgLmJ1dHRvbiB7XFxyXFxuICAgICAgICBAYXBwbHkgcHgtNCBweS0yIGJvcmRlciByb3VuZGVkLWZ1bGxcXHJcXG4gICAgICAgIGN1cnNvci1wb2ludGVyIGhvdmVyOnNoYWRvdy1sZ1xcclxcbiAgICAgICAgYWN0aXZlOnNjYWxlLTk1IGFjdGl2ZTpiZy1ncmF5LTEwMCB0cmFuc2l0aW9uIHRyYW5zZm9ybSBkdXJhdGlvbi0xMDAgZWFzZS1vdXQ7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9ZXhwb3J0cy5yb3V0ZT12b2lkIDA7dmFyIF9wYXRoTWF0Y2g9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoXCIpKTt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7dmFyIF9wcmVwYXJlRGVzdGluYXRpb249cmVxdWlyZShcIi4uL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvblwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWNvbnN0IHJvdXRlPSgwLF9wYXRoTWF0Y2guZGVmYXVsdCkoKTtleHBvcnRzLnJvdXRlPXJvdXRlO2NvbnN0IGN1c3RvbVJvdXRlVHlwZXM9bmV3IFNldChbJ3Jld3JpdGUnLCdyZWRpcmVjdCcsJ2hlYWRlciddKTtmdW5jdGlvbiByZXBsYWNlQmFzZVBhdGgoYmFzZVBhdGgscGF0aG5hbWUpey8vIElmIHJlcGxhY2UgZW5kcyB1cCByZXBsYWNpbmcgdGhlIGZ1bGwgdXJsIGl0J2xsIGJlIGB1bmRlZmluZWRgLCBtZWFuaW5nIHdlIGhhdmUgdG8gZGVmYXVsdCBpdCB0byBgL2BcbnJldHVybiBwYXRobmFtZS5yZXBsYWNlKGJhc2VQYXRoLCcnKXx8Jy8nO31jbGFzcyBSb3V0ZXJ7Y29uc3RydWN0b3Ioe2Jhc2VQYXRoPScnLGhlYWRlcnM9W10sZnNSb3V0ZXM9W10scmV3cml0ZXM9e2JlZm9yZUZpbGVzOltdLGFmdGVyRmlsZXM6W10sZmFsbGJhY2s6W119LHJlZGlyZWN0cz1bXSxjYXRjaEFsbFJvdXRlLGR5bmFtaWNSb3V0ZXM9W10scGFnZUNoZWNrZXIsdXNlRmlsZVN5c3RlbVB1YmxpY1JvdXRlcyxsb2NhbGVzPVtdfSl7dGhpcy5iYXNlUGF0aD12b2lkIDA7dGhpcy5oZWFkZXJzPXZvaWQgMDt0aGlzLmZzUm91dGVzPXZvaWQgMDt0aGlzLnJlZGlyZWN0cz12b2lkIDA7dGhpcy5yZXdyaXRlcz12b2lkIDA7dGhpcy5jYXRjaEFsbFJvdXRlPXZvaWQgMDt0aGlzLnBhZ2VDaGVja2VyPXZvaWQgMDt0aGlzLmR5bmFtaWNSb3V0ZXM9dm9pZCAwO3RoaXMudXNlRmlsZVN5c3RlbVB1YmxpY1JvdXRlcz12b2lkIDA7dGhpcy5sb2NhbGVzPXZvaWQgMDt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuaGVhZGVycz1oZWFkZXJzO3RoaXMuZnNSb3V0ZXM9ZnNSb3V0ZXM7dGhpcy5yZXdyaXRlcz1yZXdyaXRlczt0aGlzLnJlZGlyZWN0cz1yZWRpcmVjdHM7dGhpcy5wYWdlQ2hlY2tlcj1wYWdlQ2hlY2tlcjt0aGlzLmNhdGNoQWxsUm91dGU9Y2F0Y2hBbGxSb3V0ZTt0aGlzLmR5bmFtaWNSb3V0ZXM9ZHluYW1pY1JvdXRlczt0aGlzLnVzZUZpbGVTeXN0ZW1QdWJsaWNSb3V0ZXM9dXNlRmlsZVN5c3RlbVB1YmxpY1JvdXRlczt0aGlzLmxvY2FsZXM9bG9jYWxlczt9c2V0RHluYW1pY1JvdXRlcyhyb3V0ZXM9W10pe3RoaXMuZHluYW1pY1JvdXRlcz1yb3V0ZXM7fWFkZEZzUm91dGUoZnNSb3V0ZSl7dGhpcy5mc1JvdXRlcy51bnNoaWZ0KGZzUm91dGUpO31hc3luYyBleGVjdXRlKHJlcSxyZXMscGFyc2VkVXJsKXsvLyBtZW1vaXplIHBhZ2UgY2hlY2sgY2FsbHMgc28gd2UgZG9uJ3QgZHVwbGljYXRlIGNoZWNrcyBmb3IgcGFnZXNcbmNvbnN0IHBhZ2VDaGVja3M9e307Y29uc3QgbWVtb2l6ZWRQYWdlQ2hlY2tlcj1hc3luYyBwPT57cD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwLHRoaXMubG9jYWxlcykucGF0aG5hbWU7aWYocGFnZUNoZWNrc1twXSl7cmV0dXJuIHBhZ2VDaGVja3NbcF07fWNvbnN0IHJlc3VsdD10aGlzLnBhZ2VDaGVja2VyKHApO3BhZ2VDaGVja3NbcF09cmVzdWx0O3JldHVybiByZXN1bHQ7fTtsZXQgcGFyc2VkVXJsVXBkYXRlZD1wYXJzZWRVcmw7Y29uc3QgYXBwbHlDaGVja1RydWU9YXN5bmMgY2hlY2tQYXJzZWRVcmw9Pntjb25zdCBvcmlnaW5hbEZzUGF0aG5hbWU9Y2hlY2tQYXJzZWRVcmwucGF0aG5hbWU7Y29uc3QgZnNQYXRobmFtZT1yZXBsYWNlQmFzZVBhdGgodGhpcy5iYXNlUGF0aCxvcmlnaW5hbEZzUGF0aG5hbWUpO2Zvcihjb25zdCBmc1JvdXRlIG9mIHRoaXMuZnNSb3V0ZXMpe2NvbnN0IGZzUGFyYW1zPWZzUm91dGUubWF0Y2goZnNQYXRobmFtZSk7aWYoZnNQYXJhbXMpe2NoZWNrUGFyc2VkVXJsLnBhdGhuYW1lPWZzUGF0aG5hbWU7Y29uc3QgZnNSZXN1bHQ9YXdhaXQgZnNSb3V0ZS5mbihyZXEscmVzLGZzUGFyYW1zLGNoZWNrUGFyc2VkVXJsKTtpZihmc1Jlc3VsdC5maW5pc2hlZCl7cmV0dXJuIHRydWU7fWNoZWNrUGFyc2VkVXJsLnBhdGhuYW1lPW9yaWdpbmFsRnNQYXRobmFtZTt9fWxldCBtYXRjaGVkUGFnZT1hd2FpdCBtZW1vaXplZFBhZ2VDaGVja2VyKGZzUGF0aG5hbWUpOy8vIElmIHdlIGRpZG4ndCBtYXRjaCBhIHBhZ2UgY2hlY2sgZHluYW1pYyByb3V0ZXNcbmlmKCFtYXRjaGVkUGFnZSl7Y29uc3Qgbm9ybWFsaXplZEZzUGF0aG5hbWU9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkoZnNQYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO2Zvcihjb25zdCBkeW5hbWljUm91dGUgb2YgdGhpcy5keW5hbWljUm91dGVzKXtpZihkeW5hbWljUm91dGUubWF0Y2gobm9ybWFsaXplZEZzUGF0aG5hbWUpKXttYXRjaGVkUGFnZT10cnVlO319fS8vIE1hdGNoZWQgYSBwYWdlIG9yIGR5bmFtaWMgcm91dGUgc28gcmVuZGVyIGl0IHVzaW5nIGNhdGNoQWxsUm91dGVcbmlmKG1hdGNoZWRQYWdlKXtjb25zdCBwYWdlUGFyYW1zPXRoaXMuY2F0Y2hBbGxSb3V0ZS5tYXRjaChjaGVja1BhcnNlZFVybC5wYXRobmFtZSk7Y2hlY2tQYXJzZWRVcmwucGF0aG5hbWU9ZnNQYXRobmFtZTtjaGVja1BhcnNlZFVybC5xdWVyeS5fbmV4dEJ1YmJsZU5vRmFsbGJhY2s9JzEnO2NvbnN0IHJlc3VsdD1hd2FpdCB0aGlzLmNhdGNoQWxsUm91dGUuZm4ocmVxLHJlcyxwYWdlUGFyYW1zLGNoZWNrUGFyc2VkVXJsKTtyZXR1cm4gcmVzdWx0LmZpbmlzaGVkO319Oy8qXG4gICAgICBEZXNpcmVkIHJvdXRlcyBvcmRlclxuICAgICAgLSBoZWFkZXJzXG4gICAgICAtIHJlZGlyZWN0c1xuICAgICAgLSBDaGVjayBmaWxlc3lzdGVtIChpbmNsdWRpbmcgcGFnZXMpLCBpZiBub3RoaW5nIGZvdW5kIGNvbnRpbnVlXG4gICAgICAtIFVzZXIgcmV3cml0ZXMgKGNoZWNraW5nIGZpbGVzeXN0ZW0gYW5kIHBhZ2VzIGVhY2ggbWF0Y2gpXG4gICAgKi9jb25zdCBhbGxSb3V0ZXM9Wy4uLnRoaXMuaGVhZGVycywuLi50aGlzLnJlZGlyZWN0cywuLi50aGlzLnJld3JpdGVzLmJlZm9yZUZpbGVzLC4uLnRoaXMuZnNSb3V0ZXMsLy8gV2Ugb25seSBjaGVjayB0aGUgY2F0Y2gtYWxsIHJvdXRlIGlmIHB1YmxpYyBwYWdlIHJvdXRlcyBoYXNuJ3QgYmVlblxuLy8gZGlzYWJsZWRcbi4uLih0aGlzLnVzZUZpbGVTeXN0ZW1QdWJsaWNSb3V0ZXM/W3t0eXBlOidyb3V0ZScsbmFtZToncGFnZSBjaGVja2VyJyxyZXF1aXJlQmFzZVBhdGg6ZmFsc2UsbWF0Y2g6cm91dGUoJy86cGF0aConKSxmbjphc3luYyhjaGVja2VyUmVxLGNoZWNrZXJSZXMscGFyYW1zLHBhcnNlZENoZWNrZXJVcmwpPT57bGV0e3BhdGhuYW1lfT1wYXJzZWRDaGVja2VyVXJsO3BhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZXx8Jy8nKTtpZighcGF0aG5hbWUpe3JldHVybntmaW5pc2hlZDpmYWxzZX07fWlmKGF3YWl0IG1lbW9pemVkUGFnZUNoZWNrZXIocGF0aG5hbWUpKXtyZXR1cm4gdGhpcy5jYXRjaEFsbFJvdXRlLmZuKGNoZWNrZXJSZXEsY2hlY2tlclJlcyxwYXJhbXMscGFyc2VkQ2hlY2tlclVybCk7fXJldHVybntmaW5pc2hlZDpmYWxzZX07fX1dOltdKSwuLi50aGlzLnJld3JpdGVzLmFmdGVyRmlsZXMsLi4uKHRoaXMucmV3cml0ZXMuZmFsbGJhY2subGVuZ3RoP1t7dHlwZToncm91dGUnLG5hbWU6J2R5bmFtaWMgcm91dGUvcGFnZSBjaGVjaycscmVxdWlyZUJhc2VQYXRoOmZhbHNlLG1hdGNoOnJvdXRlKCcvOnBhdGgqJyksZm46YXN5bmMoX2NoZWNrZXJSZXEsX2NoZWNrZXJSZXMsX3BhcmFtcyxwYXJzZWRDaGVja2VyVXJsKT0+e3JldHVybntmaW5pc2hlZDphd2FpdCBhcHBseUNoZWNrVHJ1ZShwYXJzZWRDaGVja2VyVXJsKX07fX0sLi4udGhpcy5yZXdyaXRlcy5mYWxsYmFja106W10pLC8vIFdlIG9ubHkgY2hlY2sgdGhlIGNhdGNoLWFsbCByb3V0ZSBpZiBwdWJsaWMgcGFnZSByb3V0ZXMgaGFzbid0IGJlZW5cbi8vIGRpc2FibGVkXG4uLi4odGhpcy51c2VGaWxlU3lzdGVtUHVibGljUm91dGVzP1t0aGlzLmNhdGNoQWxsUm91dGVdOltdKV07Y29uc3Qgb3JpZ2luYWxseUhhZEJhc2VQYXRoPSF0aGlzLmJhc2VQYXRofHxyZXEuX25leHRIYWRCYXNlUGF0aDtmb3IoY29uc3QgdGVzdFJvdXRlIG9mIGFsbFJvdXRlcyl7Ly8gaWYgYmFzZVBhdGggaXMgYmVpbmcgdXNlZCwgdGhlIGJhc2VQYXRoIHdpbGwgc3RpbGwgYmUgaW5jbHVkZWRcbi8vIGluIHRoZSBwYXRobmFtZSBoZXJlIHRvIGFsbG93IGN1c3RvbS1yb3V0ZXMgdG8gcmVxdWlyZSBjb250YWluaW5nXG4vLyBpdCBvciBub3QsIGZpbGVzeXN0ZW0gcm91dGVzIGFuZCBwYWdlcyBtdXN0IGFsd2F5cyBpbmNsdWRlIHRoZSBiYXNlUGF0aFxuLy8gaWYgaXQgaXMgc2V0XG5sZXQgY3VycmVudFBhdGhuYW1lPXBhcnNlZFVybFVwZGF0ZWQucGF0aG5hbWU7Y29uc3Qgb3JpZ2luYWxQYXRobmFtZT1jdXJyZW50UGF0aG5hbWU7Y29uc3QgcmVxdWlyZUJhc2VQYXRoPXRlc3RSb3V0ZS5yZXF1aXJlQmFzZVBhdGghPT1mYWxzZTtjb25zdCBpc0N1c3RvbVJvdXRlPWN1c3RvbVJvdXRlVHlwZXMuaGFzKHRlc3RSb3V0ZS50eXBlKTtjb25zdCBpc1B1YmxpY0ZvbGRlckNhdGNoYWxsPXRlc3RSb3V0ZS5uYW1lPT09J3B1YmxpYyBmb2xkZXIgY2F0Y2hhbGwnO2NvbnN0IGtlZXBCYXNlUGF0aD1pc0N1c3RvbVJvdXRlfHxpc1B1YmxpY0ZvbGRlckNhdGNoYWxsO2NvbnN0IGtlZXBMb2NhbGU9aXNDdXN0b21Sb3V0ZTtjb25zdCBjdXJyZW50UGF0aG5hbWVOb0Jhc2VQYXRoPXJlcGxhY2VCYXNlUGF0aCh0aGlzLmJhc2VQYXRoLGN1cnJlbnRQYXRobmFtZSk7aWYoIWtlZXBCYXNlUGF0aCl7Y3VycmVudFBhdGhuYW1lPWN1cnJlbnRQYXRobmFtZU5vQmFzZVBhdGg7fWNvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkoY3VycmVudFBhdGhuYW1lTm9CYXNlUGF0aCx0aGlzLmxvY2FsZXMpO2NvbnN0IGFjdGl2ZUJhc2VQYXRoPWtlZXBCYXNlUGF0aD90aGlzLmJhc2VQYXRoOicnO2lmKGtlZXBMb2NhbGUpe2lmKCF0ZXN0Um91dGUuaW50ZXJuYWwmJnBhcnNlZFVybC5xdWVyeS5fX25leHRMb2NhbGUmJiFsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKXtjdXJyZW50UGF0aG5hbWU9YCR7YWN0aXZlQmFzZVBhdGh9LyR7cGFyc2VkVXJsLnF1ZXJ5Ll9fbmV4dExvY2FsZX0ke2N1cnJlbnRQYXRobmFtZU5vQmFzZVBhdGg9PT0nLyc/Jyc6Y3VycmVudFBhdGhuYW1lTm9CYXNlUGF0aH1gO31pZihyZXEuX19uZXh0SGFkVHJhaWxpbmdTbGFzaCYmIWN1cnJlbnRQYXRobmFtZS5lbmRzV2l0aCgnLycpKXtjdXJyZW50UGF0aG5hbWUrPScvJzt9fWVsc2V7Y3VycmVudFBhdGhuYW1lPWAke3JlcS5fbmV4dEhhZEJhc2VQYXRoP2FjdGl2ZUJhc2VQYXRoOicnfSR7YWN0aXZlQmFzZVBhdGgmJmxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU9PT0nLyc/Jyc6bG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZX1gO31sZXQgbmV3UGFyYW1zPXRlc3RSb3V0ZS5tYXRjaChjdXJyZW50UGF0aG5hbWUpO2lmKHRlc3RSb3V0ZS5oYXMmJm5ld1BhcmFtcyl7Y29uc3QgaGFzUGFyYW1zPSgwLF9wcmVwYXJlRGVzdGluYXRpb24ubWF0Y2hIYXMpKHJlcSx0ZXN0Um91dGUuaGFzLHBhcnNlZFVybFVwZGF0ZWQucXVlcnkpO2lmKGhhc1BhcmFtcyl7T2JqZWN0LmFzc2lnbihuZXdQYXJhbXMsaGFzUGFyYW1zKTt9ZWxzZXtuZXdQYXJhbXM9ZmFsc2U7fX0vLyBDaGVjayBpZiB0aGUgbWF0Y2ggZnVuY3Rpb24gbWF0Y2hlZFxuaWYobmV3UGFyYW1zKXsvLyBzaW5jZSB3ZSByZXF1aXJlIGJhc2VQYXRoIGJlIHByZXNlbnQgZm9yIG5vbi1jdXN0b20tcm91dGVzIHdlXG4vLyA0MDQgaGVyZSB3aGVuIHdlIG1hdGNoZWQgYW4gZnMgcm91dGVcbmlmKCFrZWVwQmFzZVBhdGgpe2lmKCFvcmlnaW5hbGx5SGFkQmFzZVBhdGgmJiFyZXEuX25leHREaWRSZXdyaXRlKXtpZihyZXF1aXJlQmFzZVBhdGgpey8vIGNvbnNpZGVyIHRoaXMgYSBub24tbWF0Y2ggc28gdGhlIDQwNCByZW5kZXJzXG5yZXR1cm4gZmFsc2U7fS8vIHBhZ2UgY2hlY2tlciBvY2N1cnMgYmVmb3JlIHJld3JpdGVzIHNvIHdlIG5lZWQgdG8gY29udGludWVcbi8vIHRvIGNoZWNrIHRob3NlIHNpbmNlIHRoZXkgZG9uJ3QgYWx3YXlzIHJlcXVpcmUgYmFzZVBhdGhcbmNvbnRpbnVlO31wYXJzZWRVcmxVcGRhdGVkLnBhdGhuYW1lPWN1cnJlbnRQYXRobmFtZTt9Y29uc3QgcmVzdWx0PWF3YWl0IHRlc3RSb3V0ZS5mbihyZXEscmVzLG5ld1BhcmFtcyxwYXJzZWRVcmxVcGRhdGVkKTsvLyBUaGUgcmVzcG9uc2Ugd2FzIGhhbmRsZWRcbmlmKHJlc3VsdC5maW5pc2hlZCl7cmV0dXJuIHRydWU7fS8vIHNpbmNlIHRoZSBmcyByb3V0ZSBkaWRuJ3QgbWF0Y2ggd2UgbmVlZCB0byByZS1hZGQgdGhlIGJhc2VQYXRoXG4vLyB0byBjb250aW51ZSBjaGVja2luZyByZXdyaXRlcyB3aXRoIHRoZSBiYXNlUGF0aCBwcmVzZW50XG5pZigha2VlcEJhc2VQYXRoKXtwYXJzZWRVcmxVcGRhdGVkLnBhdGhuYW1lPW9yaWdpbmFsUGF0aG5hbWU7fWlmKHJlc3VsdC5wYXRobmFtZSl7cGFyc2VkVXJsVXBkYXRlZC5wYXRobmFtZT1yZXN1bHQucGF0aG5hbWU7fWlmKHJlc3VsdC5xdWVyeSl7cGFyc2VkVXJsVXBkYXRlZC5xdWVyeT17Li4ucGFyc2VkVXJsVXBkYXRlZC5xdWVyeSwuLi5yZXN1bHQucXVlcnl9O30vLyBjaGVjayBmaWxlc3lzdGVtXG5pZih0ZXN0Um91dGUuY2hlY2s9PT10cnVlKXtpZihhd2FpdCBhcHBseUNoZWNrVHJ1ZShwYXJzZWRVcmxVcGRhdGVkKSl7cmV0dXJuIHRydWU7fX19fXJldHVybiBmYWxzZTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=