var arr = [1, 2, 3, 4, 5, 6]; //homogeneous array
console.log(arr);
console.log(arr[2]);
console.log(arr.length);
arr.pop();
console.log(arr);
arr.push(12);
console.log(arr);
arr.shift(); //removes an element from the beginning of the array
console.log(arr);
arr.unshift(45); //adds an element at the beginning of the array
console.log(arr);
arr.forEach(function (el) {
    console.log(el);
});
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    console.log(i);
}
console.log(arr.toString()); //converts an array into a string
console.log(arr.join("-")); //joins all array elements into a string (seperated by the specified separator)
arr[2] = 7; //modifying an element 
console.log(arr);
var arr2 = [10, 11, 12, 13, 14];
console.log(arr.concat(arr2)); //merging two arrays
arr2.splice(2, 1); // first param --> the position, second param --> the number of elements we want to delete
console.log("New array: ", arr2);
arr.splice(4, 0, 98, 69, 45);
console.log(arr);
