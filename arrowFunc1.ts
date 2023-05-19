let doubleMeArrow = (val: any): any => {
    if (typeof val !== 'undefined' && typeof val === 'number') {
        return val * 2;
    }
    else{
        return val.concat(" ", val);
    }
}

console.log(doubleMeArrow(10));
console.log(doubleMeArrow('Arijit Bhakta'));