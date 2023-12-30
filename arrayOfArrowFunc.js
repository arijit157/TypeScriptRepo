let myArr2 = [];
for (let i = 0; i < 10; i++) {
    myArr2.push(() => i); //(): number => return 0
}
for (let i = 0; i < 10; i++) {
    console.log(myArr2[i]());
}
//# sourceMappingURL=arrayOfArrowFunc.js.map