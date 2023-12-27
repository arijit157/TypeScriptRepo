var myArr2 = [];
var _loop_1 = function (i) {
    myArr2.push(function () { return i; }); //(): number => return 0
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
for (var i = 0; i < 10; i++) {
    console.log(myArr2[i]());
}
