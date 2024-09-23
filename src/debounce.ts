export function debounce(func: Function, delay: number, immediate: boolean = false) {
    let debounceTimer: ReturnType<typeof setTimeout> | null;

    return function (this: unknown, ...args: any[]) {
        const context = this;

        const callNow = immediate && debounceTimer === null;

        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

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
