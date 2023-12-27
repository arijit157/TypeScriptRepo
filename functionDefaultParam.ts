//TS function with default parameters

function sayHello(userName: string='Arijit Bhakta'): string{
    let firstName=userName.split(" ")[0];
    return `Hello! ${firstName}`;
}

console.log(sayHello('Raktim Karmakar'));
console.log(sayHello());