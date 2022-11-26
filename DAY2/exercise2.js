//write a code to convert celcius to fahrenheit

let celcius = 20;
let fahrenheit = celcius * (9 / 5) + 32;

console.log("Celcius to fahrenheit is = " + fahrenheit);

//write a code to check odd or even number

let number = 1;

if (number % 2 == 0) {
  console.log("This is even number");
} else {
  console.log("This is odd number");
}

//write a code to check prime number or not

let primeNumber = true;
if (number == 0 || number == 1) primeNumber = false;

for (let i = 2; i <= number / 2; ++i) {
  if (number % i == 0) {
    primeNumber = false;
  }
}
primeNumber
  ? console.log(number + " is a prime number. ")
  : console.log(number + " is not a prime number. ");

//find the sum of the number

let sum = 0;
let text = `${number} -> `;
for (let i = 1; i <= number; i++) {
  i == 1 ? (text += `${i}`) : (text += ` +${i}`);
  sum += i;
}

console.log(text + " = " + sum);

//find factorical number

let factorical = 1;
text = `${number} ->`;
for (let i = 1; i <= number; i++) {
  i == 1 ? (text += ` ${i}`) : (text += ` x ${i}`);
  factorical = factorical * i;
}
console.log(`Factorical of ${text} = ${factorical}`);

//write a code to print first N fibonacci number

let temp1 = 0,
  temp2 = 1,
  temp3 = 0;
number = 10;
text = `${number} number(s) of fibonacci : ${temp1} , ${temp2}`;
for (let i = 2; i < number; ++i) {
  temp3 = temp1 + temp2;
  text += `${temp3}`;
  temp1 = temp2;
  temp2 = temp3;
}
console.log(text);

//bmi

let height = 170;
let weight = 65;
let bmi = weight / (height / 100) ** 2;
console.log(bmi);

if (bmi > 18.5 && bmi < 24.9) {
  console.log("ideal");
} else {
  console.log("tidak ideal");
}

//fuzz buzz challange

text = "";
number = 15;
for (let i = 1; i <= number; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    text += ` FuzzBuzz `;
  } else if (i % 5 == 0) {
    text += ` Fuzz `;
  } else if (i % 3 == 0) {
    text += ` Buzz `;
  } else {
    text += `${i}`;
    console.log(i);
  }
}
console.log(text);
