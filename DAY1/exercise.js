//write a code to find area of rectangle

let length = 3;
let width = 4;

let area = length * width ;

console.log(area);

//write a code to find perimeter of rectangle

let perimeter = 2 * (length + width);

console.log(perimeter);

//write a code to find diameter, circumference and area of a circle

let r = 7;
let phi = 3.14;

let diameter = 2 * r;
let areacircle = phi * r * r;
let circumference = phi * diameter;

console.log(diameter);
console.log(areacircle);
console.log(circumference);

//write code to find angles of triangle if two angles are given.

let angles = 180;
let anglesA = 90; 
let anglesB = 60;

let anglesC = angles - (anglesA + anglesB);

console.log(anglesC);

//write code to get difference between in days

let date1 = new Date('12/11/2022')
let date2 = new Date('10/11/2022');

let diff = date1.getTime() - date2.getTime();
console.log(diff);

let diffDays = Math.ceil(diff  / (1000 * 3600 * 24));
console.log(diffDays);

//Write a code to convert days to years, months and days

let Days = 400;
let years = Math.floor(Days/365);
let months = Math.floor((Days%365)/30);
let day = Math.floor((Days%365)%30);
console.log(`${years} Year, ${months} Months, ${day} Days`)