// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
var firstAge = ages[0];
var lastAge = ages[ages.length-1];

console.log(firstAge);
console.log(lastAge);

function ageSubtract(ages) {
    
    return console.log(lastAge - firstAge);
}

ageSubtract(ages);

// Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push(22);

var firstAge = ages[0];
var lastAge = ages[ages.length-1];

console.log(firstAge);
console.log(lastAge);

ageSubtract(ages);

console.log(ages);

// Use a loop to iterate through the array and calculate the average age. Print the result to the console.
var sum = 0;

for (i = 0; i < ages.length ; i++){
    sum = sum + ages[i];
    console.log(sum)
}
var avg = sum/ages.length;
console.log(avg);

// Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
var nameSum = 0;

for (i = 0; i < names.length; i++) {
    nameSum = nameSum + names[i].length;
}
nameAvg = nameSum / names.length;
console.log(nameAvg);

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
var gap = ' ';
var allNames = '';

for(i = 0; i < names.length; i++) {
    allNames = allNames + gap + names[i];
}
console.log(allNames);

// How do you access the last element of any array?

var finalName = names[names.length-1];
console.log(finalName);

// How do you access the first element of any array?

var firstName = names[0];
console.log(firstName);

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = [];

for (i=0; i < names.length; i++) {
    nameLengths[i] = names[i].length;
}
console.log(nameLengths);

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
var lengthSum = 0;

for (i = 0; i < nameLengths.length; i++) {

    lengthSum = lengthSum + nameLengths[i];

} 
console.log(lengthSum);
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
concatWord = '';
function concatenator(word, n) {
    for (i = 0; i <= n; i++) {
        concatWord = concatWord + word;
    }
    console.log(concatWord);
}

concatenator('word', 5);
// Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
fullName = '';
function fullNameMaker(firstName, lastName) {
    fullName = firstName +  ' ' + lastName;
    console.log(fullName);
}
fullNameMaker('Robby', 'Tomahawk');

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.


function array100(arrayName) {
var arraySum = 0;
    for(i=0; i < arrayName.length; i++) {
        arraySum = arraySum + arrayName[i];
    }
    if(arraySum > 100) {
        return true;
    }else{ return false;}
}
console.log(array100(ages));
// Write a function that takes an array of numbers and returns the average of all the elements in the array.

function arrayAverager(arrayName) {
    var arrayAvg = 0;
    var arraySum = 0;
    for(i=0; i<arrayName.length;i++) {
        arraySum = arraySum + arrayName[i];
        
    }
    arrayAvg = arraySum / arrayName.length;
    return arrayAvg;
}

console.log(arrayAverager(ages));
// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function arrayBattler(arrayName1, arrayName2) {
    if(arrayAverager(arrayName1) > arrayAverager(arrayName2)) {
        return true;
    } else {return false;} 
}
console.log(arrayBattler(ages, nameLengths));

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside) {
    if(isHotOutside = true && moneyInPocket > 10.50) {
        return true;
    } else {return false;}
}
// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function arrayPusher (word, array) {
    array.push(word);
    console.log(array);
}
arrayPusher('Johnny', names)
//this method prints the log for the user so they can instantly see the newly pushed array element.