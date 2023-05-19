let str1: string="Arijit Bhakta Bhakta";

console.log(str1);
console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.split(" "));
console.log(str1.split(""));
console.log(str1[5]);   //same as str1.charAt(5)
console.log(str1.charAt(5));
console.log(str1.charCodeAt(5));  //returns the unicode value of a character of the specified index (0 - 65535)
console.log(str1.indexOf("Bhakta"));
console.log(str1.lastIndexOf("Bhakta"));
console.log(str1.slice(0, 14));
console.log(str1.slice(0));
console.log(str1.substring(0, -7));  //same as slice but it will treat -ve index as 0
console.log(str1.replace("Bhakta", "bhakta"));
console.log(str1.replace(/Bhakta/g, "bhakta"));
console.log(str1.concat(" ", "CSE"));
console.log(str1.includes("rijit"));
console.log(str1.startsWith("Arijit"));
console.log(str1.endsWith("Bhakta"));
console.log(str1.startsWith("Arijit", 5));   //searching will starts from index 5

let str2: string="                 TypeScript      ";

console.log(str2.trim());
// console.log(str2.trimStart());
// console.log(str2.trimEnd());