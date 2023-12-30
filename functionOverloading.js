//function overloading in TS
function doubleMe(val) {
    if (typeof val !== 'undefined' && typeof val === 'number') {
        return val * 2;
    }
    else {
        return val.concat(" ", val);
    }
}
console.log(doubleMe('Arijit'));
console.log(doubleMe(12));
//# sourceMappingURL=functionOverloading.js.map