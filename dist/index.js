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
export {
  debounce,
  throttle
};
//# sourceMappingURL=index.js.map