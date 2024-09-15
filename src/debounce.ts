export function debounce(func: Function, delay: number) {
    let debounceTimer: ReturnType<typeof setTimeout>;

    return function (this: unknown, ...args: any[]) {
        const context = this;

        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);

        return func.apply(context, args);
    };
}