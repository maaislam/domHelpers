!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.domHelpers=t():e.domHelpers=t()}(self,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{getElement:()=>o,pollerLite:()=>n,waitForConditions:()=>r});const o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,o=document.querySelectorAll(e);return o.length>0?Promise.resolve({selector:e,elements:Array.from(o)}):new Promise((function(o,r){var n=new MutationObserver((function(t){t.forEach((function(){var t=document.querySelectorAll(e);t.length>0&&(n.disconnect(),o({selector:e,elements:Array.from(t)}))}))}));n.observe(document.body,{childList:!0,subtree:!0}),setTimeout((function(){n.disconnect(),r(new Error("Timeout while waiting for ".concat(e)))}),t)}))},r=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100;if(!Array.isArray(e))throw new TypeError("The first parameter must be an array");if("function"!=typeof t)throw new TypeError("The second parameter must be a function");if("number"!=typeof r||r<1e3)throw new TypeError("The third parameter must be a number greater than or equal to 1000");var i=e.map((function(e){return"function"==typeof e?new Promise((function(t,o){var i,c,l=function(){clearInterval(i),clearTimeout(c)};i=setInterval((function(){e()&&(l(),t())}),n),c=setTimeout((function(){l(),o(new Error("Timeout while waiting for ".concat(e)))}),r)})):o(e).catch((function(t){throw new Error("Failed to find elements matching selector '".concat(e,"': ").concat(t))}))}));Promise.all(i).then((function(e){var o=e.reduce((function(e,t){return t&&(e[t.selector]=t.elements),e}),{});console.log("All conditions are true"),t(o)})).catch((function(e){console.error(e)}))},n=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4,r=Date.now(),n=setInterval((function(){e.every((function(e){return"function"==typeof e?e():!!document.querySelector(e)}))?(clearInterval(n),t()):Date.now()-r>=o&&(clearInterval(n),console.error("Polling exceeded maximum time limit"))}),25)};return t})()));