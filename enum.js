var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male);
console.log(Gender["Male"]); //same as Gender.Male
console.log(Gender.Female);
console.log(Gender["Female"]); //same as Gender.Female
console.log(Gender[0]);
console.log(Gender[1]);
//# sourceMappingURL=enum.js.map