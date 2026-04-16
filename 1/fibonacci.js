export function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }

    let forrige = 1;
    let naa = 1;

    for (let i = 3; i <= n; i++) {
        const neste = forrige + naa;
        forrige = naa;
        naa = neste;
    }

    return naa;
}
