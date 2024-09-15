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
function debounce(func, delay) {
  let debounceTimer;
  return function(...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
    return func.apply(context, args);
  };
}

// src/throttle.ts
var throttle = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = (/* @__PURE__ */ new Date()).getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  debounce,
  throttle
});
//# sourceMappingURL=index.cjs.map