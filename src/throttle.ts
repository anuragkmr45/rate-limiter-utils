export const throttle = (func: Function, delay: number) => {

    // Previously called time of the function
    let prev: number = 0;
    return (...args: any[]) => {
        let now: number = new Date().getTime();

        // If difference is greater (now - prev, delay)
        // than delay call the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread
            // operator here 
            // returning the function with the 
            // array of arguments
            return func(...args);
        }
    }
}
