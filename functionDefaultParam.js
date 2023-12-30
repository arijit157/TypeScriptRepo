//TS function with default parameters
function sayHello(userName = 'Arijit Bhakta') {
    let firstName = userName.split(" ")[0];
    return `Hello! ${firstName}`;
}
console.log(sayHello('Raktim Karmakar'));
console.log(sayHello());
//# sourceMappingURL=functionDefaultParam.js.map