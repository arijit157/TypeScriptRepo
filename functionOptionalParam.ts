function multiply(n1: number, n2: number, n3?: number): number{
    if(typeof n3 !== 'undefined'){
        return n1*n2*n3;
    }
    else{
        return n1*n2;
    }
}

console.log(multiply(10,20,30));
console.log(multiply(10,20));