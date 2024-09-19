declare function debounce(func: Function, delay: number, immediate?: boolean): (this: unknown, ...args: any[]) => void;

declare const throttle: (func: Function, delay: number, immediate?: boolean) => (this: unknown, ...args: any[]) => void;

export { debounce, throttle };
