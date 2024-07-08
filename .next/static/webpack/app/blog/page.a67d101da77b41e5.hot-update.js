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

/***/ "(app-pages-browser)/./utils/strapi.utils.js":
/*!*******************************!*\
  !*** ./utils/strapi.utils.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   extractImageUrl: function() { return /* binding */ extractImageUrl; },\n/* harmony export */   fetchAllEvents: function() { return /* binding */ fetchAllEvents; },\n/* harmony export */   fetchBlogArticles: function() { return /* binding */ fetchBlogArticles; },\n/* harmony export */   fetchDataFromStrapi: function() { return /* binding */ fetchDataFromStrapi; },\n/* harmony export */   fetchIndividualEvent: function() { return /* binding */ fetchIndividualEvent; },\n/* harmony export */   formatDate: function() { return /* binding */ formatDate; },\n/* harmony export */   generateSignupPayload: function() { return /* binding */ generateSignupPayload; },\n/* harmony export */   processInfoBlocks: function() { return /* binding */ processInfoBlocks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\nconst BASE_URL = process.env.STRAPI_URL || \"http://localhost:1337\";\nasync function fetchDataFromStrapi(route) {\n    const url = \"\".concat(BASE_URL, \"/api/\").concat(route);\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(url);\n        return response.data.data;\n    } catch (error) {\n        console.log(error);\n        throw new Error(\"Error fetching data from \".concat(url));\n    }\n}\nfunction processInfoBlocks(data) {\n    const infoBlocksRaw = data.attributes.info_blocks.data;\n    return infoBlocksRaw.map((infoBlock)=>{\n        var _infoBlock_attributes_image_data_attributes, _infoBlock_attributes_image_data, _infoBlock_attributes_image, _infoBlock_attributes;\n        return {\n            ...infoBlock.attributes,\n            imageSrc: BASE_URL + ((_infoBlock_attributes = infoBlock.attributes) === null || _infoBlock_attributes === void 0 ? void 0 : (_infoBlock_attributes_image = _infoBlock_attributes.image) === null || _infoBlock_attributes_image === void 0 ? void 0 : (_infoBlock_attributes_image_data = _infoBlock_attributes_image.data) === null || _infoBlock_attributes_image_data === void 0 ? void 0 : (_infoBlock_attributes_image_data_attributes = _infoBlock_attributes_image_data.attributes) === null || _infoBlock_attributes_image_data_attributes === void 0 ? void 0 : _infoBlock_attributes_image_data_attributes.url),\n            id: infoBlock.id,\n            button: createInfoBlockButton(infoBlock.attributes.button)\n        };\n    });\n}\nfunction createInfoBlockButton(buttonData) {\n    if (!buttonData) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        href: \"/\".concat(buttonData.slug),\n        className: \"btn btn--medium btn--\".concat(buttonData.colour),\n        children: buttonData.text\n    }, void 0, false, {\n        fileName: \"/Users/kakamana/Desktop/Work/Projects/Nextjs/nextjs-with-strapi-to-create-blogs/utils/strapi.utils.js\",\n        lineNumber: 34,\n        columnNumber: 7\n    }, this);\n}\nasync function fetchBlogArticles() {\n    const blogData = await fetchDataFromStrapi(\"blog-articles?populate=deep\");\n    const processedBlogArticles = blogData.map(processBlogArticle);\n    processedBlogArticles.sort((a, z)=>new Date(z.publishedAt) - new Date(a.publishedAt));\n    return processedBlogArticles;\n}\nfunction processBlogArticle(article) {\n    var _article_attributes_featuredImage_data_attributes, _article_attributes_featuredImage_data, _article_attributes_featuredImage, _article_attributes;\n    return {\n        ...article.attributes,\n        id: article.id,\n        featuredImage: BASE_URL + ((_article_attributes = article.attributes) === null || _article_attributes === void 0 ? void 0 : (_article_attributes_featuredImage = _article_attributes.featuredImage) === null || _article_attributes_featuredImage === void 0 ? void 0 : (_article_attributes_featuredImage_data = _article_attributes_featuredImage.data) === null || _article_attributes_featuredImage_data === void 0 ? void 0 : (_article_attributes_featuredImage_data_attributes = _article_attributes_featuredImage_data.attributes) === null || _article_attributes_featuredImage_data_attributes === void 0 ? void 0 : _article_attributes_featuredImage_data_attributes.url)\n    };\n}\nfunction formatDate(dateString) {\n    const date = new Date(dateString);\n    const options = {\n        weekday: \"long\",\n        year: \"numeric\",\n        month: \"long\",\n        day: \"2-digit\"\n    };\n    return date.toLocaleDateString(\"en-US\", options);\n}\nfunction extractImageUrl(imageData) {\n    var _imageData_data_attributes, _imageData_data;\n    return BASE_URL + ((_imageData_data = imageData.data) === null || _imageData_data === void 0 ? void 0 : (_imageData_data_attributes = _imageData_data.attributes) === null || _imageData_data_attributes === void 0 ? void 0 : _imageData_data_attributes.url);\n}\nasync function fetchIndividualEvent(eventId) {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(BASE_URL, \"/api/events/\").concat(eventId));\n    return processEventData(response.data.data);\n}\nfunction processEventData(event) {\n    var _event_attributes_image_data_attributes, _event_attributes_image_data, _event_attributes_image, _event_attributes;\n    return {\n        ...event.attributes,\n        image: BASE_URL + ((_event_attributes = event.attributes) === null || _event_attributes === void 0 ? void 0 : (_event_attributes_image = _event_attributes.image) === null || _event_attributes_image === void 0 ? void 0 : (_event_attributes_image_data = _event_attributes_image.data) === null || _event_attributes_image_data === void 0 ? void 0 : (_event_attributes_image_data_attributes = _event_attributes_image_data.attributes) === null || _event_attributes_image_data_attributes === void 0 ? void 0 : _event_attributes_image_data_attributes.url),\n        id: event.id\n    };\n}\nfunction generateSignupPayload(formData, eventId) {\n    if (!eventId) {\n        return {\n            data: {\n                ...formData,\n                isGeneralInterest: true\n            }\n        };\n    } else {\n        return {\n            data: {\n                ...formData,\n                event: {\n                    connect: [\n                        eventId\n                    ]\n                }\n            }\n        };\n    }\n}\nfunction createEventQuery(eventIdToExclude) {\n    const queryObject = {\n        pagination: {\n            start: 0,\n            limit: 12\n        },\n        sort: [\n            \"startingDate:asc\"\n        ],\n        filters: {\n            startingDate: {\n                $gt: new Date()\n            }\n        },\n        populate: {\n            image: {\n                populate: \"*\"\n            }\n        }\n    };\n    if (eventIdToExclude) {\n        queryObject.filters.id = {\n            $ne: eventIdToExclude\n        };\n    }\n    return qs.stringify(queryObject, {\n        encodeValuesOnly: true\n    });\n}\nasync function fetchAllEvents() {\n    let eventIdToExclude = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;\n    //const query = createEventQuery(eventIdToExclude);\n    const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(BASE_URL, \"/api/events?\").concat(query));\n    return response.data.data.map((event)=>processEventData(event));\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxzL3N0cmFwaS51dGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFFN0IsTUFBTUUsV0FBV0MsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLElBQUk7QUFFcEMsZUFBZUMsb0JBQW9CQyxLQUFLO0lBQzNDLE1BQU1DLE1BQU0sR0FBbUJELE9BQWhCTCxVQUFTLFNBQWEsT0FBTks7SUFFL0IsSUFBSTtRQUNBLE1BQU1FLFdBQVcsTUFBTVQsNkNBQUtBLENBQUNVLEdBQUcsQ0FBQ0Y7UUFDakMsT0FBT0MsU0FBU0UsSUFBSSxDQUFDQSxJQUFJO0lBQzdCLEVBQUUsT0FBT0MsT0FBTztRQUNaQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1osTUFBTSxJQUFJRyxNQUFNLDRCQUFnQyxPQUFKUDtJQUNoRDtBQUNKO0FBRU8sU0FBU1Esa0JBQWtCTCxJQUFJO0lBQ2xDLE1BQU1NLGdCQUFnQk4sS0FBS08sVUFBVSxDQUFDQyxXQUFXLENBQUNSLElBQUk7SUFDdEQsT0FBT00sY0FBY0csR0FBRyxDQUFDLENBQUNDO1lBRUhBLDZDQUFBQSxrQ0FBQUEsNkJBQUFBO2VBRmtCO1lBQ3ZDLEdBQUdBLFVBQVVILFVBQVU7WUFDdkJJLFVBQVVwQixhQUFXbUIsd0JBQUFBLFVBQVVILFVBQVUsY0FBcEJHLDZDQUFBQSw4QkFBQUEsc0JBQXNCRSxLQUFLLGNBQTNCRixtREFBQUEsbUNBQUFBLDRCQUE2QlYsSUFBSSxjQUFqQ1Usd0RBQUFBLDhDQUFBQSxpQ0FBbUNILFVBQVUsY0FBN0NHLGtFQUFBQSw0Q0FBK0NiLEdBQUc7WUFDdkVnQixJQUFJSCxVQUFVRyxFQUFFO1lBQ2hCQyxRQUFRQyxzQkFBc0JMLFVBQVVILFVBQVUsQ0FBQ08sTUFBTTtRQUMzRDs7QUFDRjtBQUVBLFNBQVNDLHNCQUFzQkMsVUFBVTtJQUN2QyxJQUFJLENBQUNBLFlBQVk7UUFDZixPQUFPO0lBQ1Q7SUFFQSxxQkFDRSw4REFB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WjtRQUNGO0lBQ0Y7SUFFQSxJQUFJUixrQkFBa0I7UUFDcEJDLFlBQVlJLE9BQU8sQ0FBQzdDLEVBQUUsR0FBRztZQUN2QmlELEtBQUtUO1FBQ1A7SUFDRjtJQUNBLE9BQU9VLEdBQUdDLFNBQVMsQ0FBQ1YsYUFBYTtRQUFFVyxrQkFBa0I7SUFBSztBQUM1RDtBQUVPLGVBQWVDO1FBQWViLG1CQUFBQSxpRUFBbUI7SUFDdEQsbURBQW1EO0lBRW5ELE1BQU12RCxXQUFXLE1BQU1ULDZDQUFLQSxDQUFDVSxHQUFHLENBQUMsR0FBMEJvRSxPQUF2QjVFLFVBQVMsZ0JBQW9CLE9BQU40RTtJQUMzRCxPQUFPckUsU0FBU0UsSUFBSSxDQUFDQSxJQUFJLENBQUNTLEdBQUcsQ0FBQyxDQUFDc0MsUUFBVUQsaUJBQWlCQztBQUM1RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9zdHJhcGkudXRpbHMuanM/ZThiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IEJBU0VfVVJMID0gcHJvY2Vzcy5lbnYuU1RSQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMzM3JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YUZyb21TdHJhcGkocm91dGUpIHtcbiAgICBjb25zdCB1cmwgPSBgJHtCQVNFX1VSTH0vYXBpLyR7cm91dGV9YDtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGZldGNoaW5nIGRhdGEgZnJvbSAke3VybH1gKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzSW5mb0Jsb2NrcyhkYXRhKSB7XG4gICAgY29uc3QgaW5mb0Jsb2Nrc1JhdyA9IGRhdGEuYXR0cmlidXRlcy5pbmZvX2Jsb2Nrcy5kYXRhO1xuICAgIHJldHVybiBpbmZvQmxvY2tzUmF3Lm1hcCgoaW5mb0Jsb2NrKSA9PiAoe1xuICAgICAgLi4uaW5mb0Jsb2NrLmF0dHJpYnV0ZXMsXG4gICAgICBpbWFnZVNyYzogQkFTRV9VUkwgKyBpbmZvQmxvY2suYXR0cmlidXRlcz8uaW1hZ2U/LmRhdGE/LmF0dHJpYnV0ZXM/LnVybCxcbiAgICAgIGlkOiBpbmZvQmxvY2suaWQsXG4gICAgICBidXR0b246IGNyZWF0ZUluZm9CbG9ja0J1dHRvbihpbmZvQmxvY2suYXR0cmlidXRlcy5idXR0b24pLFxuICAgIH0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluZm9CbG9ja0J1dHRvbihidXR0b25EYXRhKSB7XG4gICAgaWYgKCFidXR0b25EYXRhKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIFxuICAgIHJldHVybiAoXG4gICAgICA8TGlua1xuICAgICAgICBocmVmPXtgLyR7YnV0dG9uRGF0YS5zbHVnfWB9XG4gICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tLW1lZGl1bSBidG4tLSR7YnV0dG9uRGF0YS5jb2xvdXJ9YH1cbiAgICAgID5cbiAgICAgICAge2J1dHRvbkRhdGEudGV4dH1cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQmxvZ0FydGljbGVzKCkge1xuICAgIGNvbnN0IGJsb2dEYXRhID0gYXdhaXQgZmV0Y2hEYXRhRnJvbVN0cmFwaShcImJsb2ctYXJ0aWNsZXM/cG9wdWxhdGU9ZGVlcFwiKTtcbiAgICBjb25zdCBwcm9jZXNzZWRCbG9nQXJ0aWNsZXMgPSBibG9nRGF0YS5tYXAocHJvY2Vzc0Jsb2dBcnRpY2xlKTtcbiAgXG4gICAgcHJvY2Vzc2VkQmxvZ0FydGljbGVzLnNvcnQoXG4gICAgICAoYSwgeikgPT4gbmV3IERhdGUoei5wdWJsaXNoZWRBdCkgLSBuZXcgRGF0ZShhLnB1Ymxpc2hlZEF0KVxuICAgICk7XG4gICAgcmV0dXJuIHByb2Nlc3NlZEJsb2dBcnRpY2xlcztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NCbG9nQXJ0aWNsZShhcnRpY2xlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFydGljbGUuYXR0cmlidXRlcyxcbiAgICAgIGlkOiBhcnRpY2xlLmlkLFxuICAgICAgZmVhdHVyZWRJbWFnZTpcbiAgICAgICAgQkFTRV9VUkwgKyBhcnRpY2xlLmF0dHJpYnV0ZXM/LmZlYXR1cmVkSW1hZ2U/LmRhdGE/LmF0dHJpYnV0ZXM/LnVybCxcbiAgICB9O1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZVN0cmluZykge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgfTtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBleHRyYWN0SW1hZ2VVcmwoaW1hZ2VEYXRhKSB7XG4gICAgcmV0dXJuIEJBU0VfVVJMICsgaW1hZ2VEYXRhLmRhdGE/LmF0dHJpYnV0ZXM/LnVybDtcbiAgfVxuICBcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoSW5kaXZpZHVhbEV2ZW50KGV2ZW50SWQpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtCQVNFX1VSTH0vYXBpL2V2ZW50cy8ke2V2ZW50SWR9YCk7XG4gICAgcmV0dXJuIHByb2Nlc3NFdmVudERhdGEocmVzcG9uc2UuZGF0YS5kYXRhKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gcHJvY2Vzc0V2ZW50RGF0YShldmVudCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5ldmVudC5hdHRyaWJ1dGVzLFxuICAgICAgaW1hZ2U6IEJBU0VfVVJMICsgZXZlbnQuYXR0cmlidXRlcz8uaW1hZ2U/LmRhdGE/LmF0dHJpYnV0ZXM/LnVybCxcbiAgICAgIGlkOiBldmVudC5pZCxcbiAgICB9O1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU2lnbnVwUGF5bG9hZChmb3JtRGF0YSwgZXZlbnRJZCkge1xuICAgIGlmICghZXZlbnRJZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogeyAuLi5mb3JtRGF0YSwgaXNHZW5lcmFsSW50ZXJlc3Q6IHRydWUgfSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgY29ubmVjdDogW2V2ZW50SWRdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50UXVlcnkoZXZlbnRJZFRvRXhjbHVkZSkge1xuICAgIGNvbnN0IHF1ZXJ5T2JqZWN0ID0ge1xuICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgbGltaXQ6IDEyLFxuICAgICAgfSxcbiAgICAgIHNvcnQ6IFtcInN0YXJ0aW5nRGF0ZTphc2NcIl0sXG4gICAgICBmaWx0ZXJzOiB7XG4gICAgICAgIHN0YXJ0aW5nRGF0ZToge1xuICAgICAgICAgICRndDogbmV3IERhdGUoKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBwb3B1bGF0ZToge1xuICAgICAgICBpbWFnZToge1xuICAgICAgICAgIHBvcHVsYXRlOiBcIipcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgXG4gICAgaWYgKGV2ZW50SWRUb0V4Y2x1ZGUpIHtcbiAgICAgIHF1ZXJ5T2JqZWN0LmZpbHRlcnMuaWQgPSB7XG4gICAgICAgICRuZTogZXZlbnRJZFRvRXhjbHVkZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBxcy5zdHJpbmdpZnkocXVlcnlPYmplY3QsIHsgZW5jb2RlVmFsdWVzT25seTogdHJ1ZSB9KTtcbiAgfVxuXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFsbEV2ZW50cyhldmVudElkVG9FeGNsdWRlID0gbnVsbCkge1xuICAgIC8vY29uc3QgcXVlcnkgPSBjcmVhdGVFdmVudFF1ZXJ5KGV2ZW50SWRUb0V4Y2x1ZGUpO1xuICBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtCQVNFX1VSTH0vYXBpL2V2ZW50cz8ke3F1ZXJ5fWApO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGEubWFwKChldmVudCkgPT4gcHJvY2Vzc0V2ZW50RGF0YShldmVudCkpO1xuICB9XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbImF4aW9zIiwiTGluayIsIkJBU0VfVVJMIiwicHJvY2VzcyIsImVudiIsIlNUUkFQSV9VUkwiLCJmZXRjaERhdGFGcm9tU3RyYXBpIiwicm91dGUiLCJ1cmwiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJFcnJvciIsInByb2Nlc3NJbmZvQmxvY2tzIiwiaW5mb0Jsb2Nrc1JhdyIsImF0dHJpYnV0ZXMiLCJpbmZvX2Jsb2NrcyIsIm1hcCIsImluZm9CbG9jayIsImltYWdlU3JjIiwiaW1hZ2UiLCJpZCIsImJ1dHRvbiIsImNyZWF0ZUluZm9CbG9ja0J1dHRvbiIsImJ1dHRvbkRhdGEiLCJocmVmIiwic2x1ZyIsImNsYXNzTmFtZSIsImNvbG91ciIsInRleHQiLCJmZXRjaEJsb2dBcnRpY2xlcyIsImJsb2dEYXRhIiwicHJvY2Vzc2VkQmxvZ0FydGljbGVzIiwicHJvY2Vzc0Jsb2dBcnRpY2xlIiwic29ydCIsImEiLCJ6IiwiRGF0ZSIsInB1Ymxpc2hlZEF0IiwiYXJ0aWNsZSIsImZlYXR1cmVkSW1hZ2UiLCJmb3JtYXREYXRlIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJvcHRpb25zIiwid2Vla2RheSIsInllYXIiLCJtb250aCIsImRheSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImV4dHJhY3RJbWFnZVVybCIsImltYWdlRGF0YSIsImZldGNoSW5kaXZpZHVhbEV2ZW50IiwiZXZlbnRJZCIsInByb2Nlc3NFdmVudERhdGEiLCJldmVudCIsImdlbmVyYXRlU2lnbnVwUGF5bG9hZCIsImZvcm1EYXRhIiwiaXNHZW5lcmFsSW50ZXJlc3QiLCJjb25uZWN0IiwiY3JlYXRlRXZlbnRRdWVyeSIsImV2ZW50SWRUb0V4Y2x1ZGUiLCJxdWVyeU9iamVjdCIsInBhZ2luYXRpb24iLCJzdGFydCIsImxpbWl0IiwiZmlsdGVycyIsInN0YXJ0aW5nRGF0ZSIsIiRndCIsInBvcHVsYXRlIiwiJG5lIiwicXMiLCJzdHJpbmdpZnkiLCJlbmNvZGVWYWx1ZXNPbmx5IiwiZmV0Y2hBbGxFdmVudHMiLCJxdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/strapi.utils.js\n"));

/***/ })

});