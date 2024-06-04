function* fibonacciGenerator(n) {
    let [a, b] = [0, 1];
    for (let i = 0; i < n; i++) { fi
        yield a;
        [a, b] = [b, a + b];
    }
}

console.log("\nFibonacci Sequence:");
for (const fib of fibonacciGenerator(number)) {
    console.log(fib);
}