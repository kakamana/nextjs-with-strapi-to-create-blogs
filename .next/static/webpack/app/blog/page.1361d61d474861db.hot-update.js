"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blog/page",{

/***/ "(app-pages-browser)/./app/_components/FeaturedItems/FeaturedItems.jsx":
/*!*********************************************************!*\
  !*** ./app/_components/FeaturedItems/FeaturedItems.jsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FeaturedArticle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeaturedArticle */ \"(app-pages-browser)/./app/_components/FeaturedItems/FeaturedArticle.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst FeaturedItems = (param)=>{\n    let { headline, items, itemType = \"article\" } = param;\n    _s();\n    const [itemNumber, setItemNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(3);\n    const onShowMore = ()=>{\n        if (itemNumber + 3 > items.length) {\n            return setItemNumber(items.length);\n        } else {\n            return setItemNumber(itemNumber + 3);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"featured-items\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"featured-items__headline\",\n                children: headline || \"Our featured articles\"\n            }, void 0, false, {\n                fileName: \"/Users/kakamana/Desktop/Work/Projects/Nextjs/nextjs-with-strapi-to-create-blogs/app/_components/FeaturedItems/FeaturedItems.jsx\",\n                lineNumber: 19,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"featured-items__container\",\n                children: items.slice(0, itemNumber).map((item)=>{\n                    if (itemType === \"article\") {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FeaturedArticle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            article: item\n                        }, item.slug, false, {\n                            fileName: \"/Users/kakamana/Desktop/Work/Projects/Nextjs/nextjs-with-strapi-to-create-blogs/app/_components/FeaturedItems/FeaturedItems.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 24\n                        }, undefined);\n                    } else {\n                    //return <FeaturedEvent key={item.id} event={item} />;\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/Users/kakamana/Desktop/Work/Projects/Nextjs/nextjs-with-strapi-to-create-blogs/app/_components/FeaturedItems/FeaturedItems.jsx\",\n                lineNumber: 22,\n                columnNumber: 11\n            }, undefined),\n            itemNumber < items.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn--medium btn--turquoise\",\n                onClick: onShowMore,\n                children: \"See more\"\n            }, void 0, false, {\n                fileName: \"/Users/kakamana/Desktop/Work/Projects/Nextjs/nextjs-with-strapi-to-create-blogs/app/_components/FeaturedItems/FeaturedItems.jsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kakamana/Desktop/Work/Projects/Nextjs/nextjs-with-strapi-to-create-blogs/app/_components/FeaturedItems/FeaturedItems.jsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FeaturedItems, \"PVkuyaL70tm7E0oQ/r1ZX+CpmwA=\");\n_c = FeaturedItems;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeaturedItems);\nvar _c;\n$RefreshReg$(_c, \"FeaturedItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9GZWF0dXJlZEl0ZW1zL0ZlYXR1cmVkSXRlbXMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDeUI7QUFDTztBQUNlO0FBRS9DLE1BQU1HLGdCQUFnQjtRQUFDLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxXQUFXLFNBQVMsRUFBQzs7SUFDM0QsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1RLGFBQWE7UUFDZixJQUFJRixhQUFhLElBQUlGLE1BQU1LLE1BQU0sRUFBRTtZQUNqQyxPQUFPRixjQUFjSCxNQUFNSyxNQUFNO1FBQ25DLE9BQU87WUFDTCxPQUFPRixjQUFjRCxhQUFhO1FBQ3BDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0k7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBR0QsV0FBVTswQkFDWFIsWUFBWTs7Ozs7OzBCQUVmLDhEQUFDVTtnQkFBSUYsV0FBVTswQkFDWlAsTUFBTVUsS0FBSyxDQUFDLEdBQUdSLFlBQVlTLEdBQUcsQ0FBQyxDQUFDQztvQkFDL0IsSUFBSVgsYUFBYSxXQUFXO3dCQUMxQixxQkFBTyw4REFBQ0osd0RBQWVBOzRCQUFpQmdCLFNBQVNEOzJCQUFwQkEsS0FBS0UsSUFBSTs7Ozs7b0JBQ3hDLE9BQU87b0JBQ0wsc0RBQXNEO29CQUN4RDtnQkFDRjs7Ozs7O1lBRURaLGFBQWFGLE1BQU1LLE1BQU0sa0JBQ3hCLDhEQUFDVTtnQkFBT1IsV0FBVTtnQkFBaUNTLFNBQVNaOzBCQUFZOzs7Ozs7Ozs7Ozs7QUFNcEY7R0FoQ01OO0tBQUFBO0FBa0NOLCtEQUFlQSxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9fY29tcG9uZW50cy9GZWF0dXJlZEl0ZW1zL0ZlYXR1cmVkSXRlbXMuanN4PzBmMzIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEZlYXR1cmVkQXJ0aWNsZSBmcm9tICcuL0ZlYXR1cmVkQXJ0aWNsZSdcblxuY29uc3QgRmVhdHVyZWRJdGVtcyA9ICh7IGhlYWRsaW5lLCBpdGVtcywgaXRlbVR5cGUgPSBcImFydGljbGVcIn0pID0+IHtcbiAgICBjb25zdCBbaXRlbU51bWJlciwgc2V0SXRlbU51bWJlcl0gPSB1c2VTdGF0ZSgzKTtcblxuICAgIGNvbnN0IG9uU2hvd01vcmUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpdGVtTnVtYmVyICsgMyA+IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBzZXRJdGVtTnVtYmVyKGl0ZW1zLmxlbmd0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNldEl0ZW1OdW1iZXIoaXRlbU51bWJlciArIDMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWF0dXJlZC1pdGVtc1wiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmZWF0dXJlZC1pdGVtc19faGVhZGxpbmVcIj5cbiAgICAgICAgICAgIHtoZWFkbGluZSB8fCBcIk91ciBmZWF0dXJlZCBhcnRpY2xlc1wifVxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlZC1pdGVtc19fY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7aXRlbXMuc2xpY2UoMCwgaXRlbU51bWJlcikubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpdGVtVHlwZSA9PT0gXCJhcnRpY2xlXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPEZlYXR1cmVkQXJ0aWNsZSBrZXk9e2l0ZW0uc2x1Z30gYXJ0aWNsZT17aXRlbX0gLz47XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9yZXR1cm4gPEZlYXR1cmVkRXZlbnQga2V5PXtpdGVtLmlkfSBldmVudD17aXRlbX0gLz47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtpdGVtTnVtYmVyIDwgaXRlbXMubGVuZ3RoICYmIChcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi0tbWVkaXVtIGJ0bi0tdHVycXVvaXNlXCIgb25DbGljaz17b25TaG93TW9yZX0+XG4gICAgICAgICAgICAgIFNlZSBtb3JlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZEl0ZW1zIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGZWF0dXJlZEFydGljbGUiLCJGZWF0dXJlZEl0ZW1zIiwiaGVhZGxpbmUiLCJpdGVtcyIsIml0ZW1UeXBlIiwiaXRlbU51bWJlciIsInNldEl0ZW1OdW1iZXIiLCJvblNob3dNb3JlIiwibGVuZ3RoIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgzIiwiZGl2Iiwic2xpY2UiLCJtYXAiLCJpdGVtIiwiYXJ0aWNsZSIsInNsdWciLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/FeaturedItems/FeaturedItems.jsx\n"));

/***/ })

});