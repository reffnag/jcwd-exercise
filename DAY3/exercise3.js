//Write a code to display the multiplication table of a given integer
//medium must try again
let number = 4;

for(let i = 1 ; i <= 10 ; i++){

    let result = number * i;

    console.log(`${number} * ${i} = ${result}`);
}

//Write a code to check whether a string is a palindrome or not
//verry hard must try again


//write code to convert to cm to km
//easy 

let cm = 1000;
let km = cm / 1000000;

console.log(`jadi ${cm} cm = ${km} km`);


//write a code number to currency IDR
//medium 

let money = 10000;
let result = "Rp " + money.toFixed(2);

console.log(result);
//with tolocaleString
money = money.toLocaleString('id-ID',{
    style: 'currency',
    currency: 'IDR'
});

console.log(money);


//Write a code to remove the first occurrence of a given “search string” from a string

//Write a code to capitalize the first letter of each word in a string
