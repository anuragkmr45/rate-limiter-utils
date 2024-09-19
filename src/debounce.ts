export function debounce(func: Function, delay: number, immediate: boolean = false) {
    let debounceTimer: ReturnType<typeof setTimeout> | null;

    return function (this: unknown, ...args: any[]) {
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
