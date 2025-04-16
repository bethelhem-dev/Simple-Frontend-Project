// spread operator used to separate elements(unpacks the elements) the symbool is ...
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers); // if we didnt use ... operator the output will NaN
console.log(minimum);
console.log(maximum);
let username = "Bro code";
let letters = [...username].join("-");
console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);
