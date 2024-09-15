declare function debounce(func: Function, delay: number): (this: unknown, ...args: any[]) => any;

declare const throttle: (func: Function, delay: number) => (...args: any[]) => any;

export { debounce, throttle };
