"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  debounce: () => debounce,
  throttle: () => throttle
});
module.exports = __toCommonJS(src_exports);

// src/debounce.ts
function debounce(func, delay, immediate = false) {
  let debounceTimer;
  return function(...args) {
    const context = this;
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    const callNow = immediate && !debounceTimer;
    debounceTimer = setTimeout(() => {
      debounceTimer = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }, delay);
    if (callNow) {
      func.apply(context, args);
    }
  };
}

// src/throttle.ts
var throttle = (func, delay, immediate = false) => {
  let lastExecuted = null;
  let timeout = null;
  return function(...args) {
    const context = this;
    const now = performance.now();
    if (lastExecuted === null && immediate) {
      lastExecuted = now;
      func.apply(context, args);
      return;
    }
    const remainingTime = delay - (now - (lastExecuted || 0));
    if (remainingTime <= 0 || lastExecuted === null) {
      clearTimeout(timeout);
      timeout = null;
      lastExecuted = now;
      func.apply(context, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        lastExecuted = performance.now();
        timeout = null;
        func.apply(context, args);
      }, remainingTime);
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  debounce,
  throttle
});
//# sourceMappingURL=index.cjs.map