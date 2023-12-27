//usage of type literals
function combine(param1: string | number, param2: string | number, type: "as-string" | "as-number"): string | number{
    if(type==="as-number"){
        return (+param1)+(+param2);
    }
    else{
        return param1.toString()+param2.toString();
    }
}

console.log(combine(10, 85, "as-number"));