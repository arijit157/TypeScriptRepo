//usage of type literals
function combine(param1, param2, type) {
    if (type === "as-number") {
        return (+param1) + (+param2);
    }
    else {
        return param1.toString() + param2.toString();
    }
}
console.log(combine(10, 85, "as-number"));
//# sourceMappingURL=typeLiterals2.js.map