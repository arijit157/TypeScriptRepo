//TS function with default parameters
function sayHello(userName) {
    if (userName === void 0) { userName = 'Arijit Bhakta'; }
    var firstName = userName.split(" ")[0];
    return "Hello! ".concat(firstName);
}
console.log(sayHello('Raktim Karmakar'));
console.log(sayHello());
