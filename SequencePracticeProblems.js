// 1.Use REPL - Random Function to get single Digit.
let a = Math.floor(Math.random() * 10);
console.log(a);

// 2.Use REPL - Use Random function to get dice number between 1 to 6
let dice = Math.floor((Math.random() * 6)+ 1);
console.log(dice);

// 3.Use REPL - Add two Random Dice Number and print the Result
let firstDiceNumber = Math.floor((Math.random() * 6)+ 1);
let secondDiceNumber = Math.floor((Math.random() * 6)+ 1);
let sumOfRandomDice = firstDiceNumber + secondDiceNumber;
console.log(sumOfRandomDice);

// 4.Use Script & Debug - Write a program that reads 5 Random 2 Digit Values, then find their sum and avg
let numberOne = Math.floor((Math.random() * 90)+ 10);
let numberTwo = Math.floor((Math.random() * 90)+ 10);
let numberThree = Math.floor((Math.random() * 90)+ 10);
let numberFour = Math.floor((Math.random() * 90)+ 10);
let numberFive = Math.floor((Math.random() * 90)+ 10);

let sumOfAll = (numberOne + numberTwo + numberThree + numberFour + numberFive);
let avgOfAll = sumOfAll/5;
console.log(avgOfAll);

// 5.Use Script & Debug - Unit Conversion
// a. 1ft = 12 in then 42 in = ? ft
    let conversion = 42/12;
// b.Rectangular Plot of 60 feet * 40 feet in meters
    let conversionInMtrs = (60*40)/10.764;
// c.Calculate area of 25 such plots in acres
    let conversionInAcres = (60*40*25)/43560;
    
