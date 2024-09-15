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
export {
  debounce,
  throttle
};
//# sourceMappingURL=index.js.map