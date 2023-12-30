function multiply(n1, n2, n3) {
    if (typeof n3 !== 'undefined') {
        return n1 * n2 * n3;
    }
    else {
        return n1 * n2;
    }
}
console.log(multiply(10, 20, 30));
console.log(multiply(10, 20));
//# sourceMappingURL=functionOptionalParam.js.map