//function overloading in TS

function doubleMe(val: number): number;   //important part
function doubleMe(val: string): string;    //important part

function doubleMe(val: any): any{
    if(typeof val !== 'undefined' && typeof val === 'number'){
        return val*2;
    }
    else{
        return val.concat(" ", val);
    }
}

console.log(doubleMe('Arijit'));
console.log(doubleMe(12));