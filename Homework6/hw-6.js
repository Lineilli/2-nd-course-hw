// задание 1

let numb = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numb.length; i++) {
    if (numb[i] == 10) break;
    console.log(numb[i]);
}

// задание 2

const numbs = [1, 5, 4, 10, 0, 3];
numbs.forEach((el, index) => {
    console.log(`${index}: ${el}`);
});

// задание 3

let numbers = [1, 3, 5, 10, 20];
numbers = numbers.join('');

console.log(numbers);

// задание 4

let arr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
];

for (let arrIn of arr) {
    for (let element of arrIn) {
        console.log(element);
    }
}

// задание 5

let addArr = [1, 1, 1];

addArr.push(2, 2, 2);

console.log(addArr);

// задание 6

let arr = [9, 8, 7, 'a', 6, 5];

arr = arr.sort();

console.log(arr);

console.log(arr.pop());

console.log(arr);

// задание 7

let array = [9, 8, 7, 6, 5];

let num = Number(prompt('Введите число от 1 до 10'));

function enteredNum(array, num) {
    for (let i = 0; i < array.length; i++) {
        if (num === array) {
            return true;
        }
    }
    return false;
}

enteredNum();

// второй вариант решения задания 7


let massiv = [9, 8, 7, 6, 5];

let num = Number(prompt('Введите число от 1 до 10'));

massiv.includes(num);

// задание 8

let string = ['abcdef'];

string.split('');

string.reverse();

string = string.join('');

console.log(string);

// задание 9

let mass = [
    [1, 2, 3,],
    [4, 5, 6],
];

let mass2 = [];
for (let i = 0; i < mass.length; i++) {
    for (let j = 0; j < mass.length; j++) {
        mass2.push(mass[i][j]);
    }
}
console.log(mass2);

// задание 10

let numbs = [2, 4, 6, 8];

let result = 0;

for (let i = 0; i < numbs.length; i++) {
    result += numbs[i];
}

console.log(result);

// задание 11

let arr = [2, 4, 6];

let squareOfArray = arr.map((num) => num * num);

return squareOfArray;

// задание 12

function words() {
    getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);
    return getLengthWords.length;
}

console.log(words());

// задание 13

function filterPositive(array) {
    let arr = [];
    return array.filter(arr <= -1);
}

console.log(filterPositive([-1, 0, 5, -10, 56]));