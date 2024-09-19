export const throttle = (func: Function, delay: number, immediate: boolean = false) => {
    let lastExecuted: number | null = null;
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return function (this: unknown, ...args: any[]) {
        const context = this;
        const now = performance.now();

        if (lastExecuted === null && immediate) {
            lastExecuted = now;
            func.apply(context, args);
            return;
        }

        const remainingTime = delay - (now - (lastExecuted || 0));

        if (remainingTime <= 0 || lastExecuted === null) {
            clearTimeout(timeout!);
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
