exports.fibonacci = function(n) {
    if (n >= 0) {
        if (n === 0 || n === 1) {
            return n;
        }
        return exports.fibonacci(n - 1) + exports.fibonacci(n - 2);
    } else if (n < 0) {
        return undefined;
    }
}