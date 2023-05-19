enum Gender{
    Male,
    Female
}

console.log(Gender.Male);
console.log(Gender["Male"]);   //same as Gender.Male

console.log(Gender.Female);
console.log(Gender["Female"]);   //same as Gender.Female

console.log(Gender[0]);
console.log(Gender[1]);