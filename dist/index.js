!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.pageutilities=t():e.pageutilities=t()}(self,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{getElement:()=>o,pollerLite:()=>r,waitForConditions:()=>n});const o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,o=document.querySelectorAll(e);return o.length>0?Promise.resolve({selector:e,elements:o}):new Promise((function(o,n){var r=new MutationObserver((function(t){t.forEach((function(){var t=document.querySelectorAll(e);t.length>0&&(r.disconnect(),o({selector:e,elements:t}))}))}));r.observe(document.body,{childList:!0,subtree:!0}),setTimeout((function(){r.disconnect(),n(new Error("Timeout while waiting for ".concat(e)))}),t)}))},n=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100;if(!Array.isArray(e))throw new TypeError("The first parameter must be an array");if("function"!=typeof t)throw new TypeError("The second parameter must be a function");if("number"!=typeof n||n<1e3)throw new TypeError("The third parameter must be a number greater than or equal to 1000");var i=e.map((function(e){return"function"==typeof e?new Promise((function(t,o){var i,c,l=function(){clearInterval(i),clearTimeout(c)};i=setInterval((function(){e()&&(l(),t())}),r),c=setTimeout((function(){l(),o(new Error("Timeout while waiting for ".concat(e)))}),n)})):o(e).catch((function(t){throw new Error("Failed to find elements matching selector '".concat(e,"': ").concat(t))}))}));Promise.all(i).then((function(e){var o=e.reduce((function(e,t){return t&&(e[t.selector]=t.elements),e}),{});console.log("All conditions are true"),t(o)})).catch((function(e){console.error(e)}))},r=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4,n=Date.now(),r=setInterval((function(){e.every((function(e){return"function"==typeof e?e():!!document.querySelector(e)}))?(clearInterval(r),t()):Date.now()-n>=o&&(clearInterval(r),console.error("Polling exceeded maximum time limit"))}),25)};return t})()));