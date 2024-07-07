const debounce = (func, delay) => {
    let timeoutId;
    return () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func();
        }, delay);
    };
};