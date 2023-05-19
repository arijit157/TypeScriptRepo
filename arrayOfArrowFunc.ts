let myArr2: Array<any>=[];

for(let i=0; i<10; i++){
    myArr.push(():number => i);    //(): number => return 0
}

for(let i=0; i<10; i++){
    console.log(myArr2[i]());
}