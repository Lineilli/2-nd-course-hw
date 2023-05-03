// задание 1

function min(a, b) {
    return a < b ? a : b;
}

console.log(min(8, 4));
console.log(min(6, 6));

// задание 2

let num = Number(prompt('Введите число'));

let numberEven = (num) => {
    if (num % 2 == 0) {
        return ('Число четное')
    } else {
        return ('Число нечетное')
    }
}

console.log(numberEven(num));

// задание 3

userNumber = prompt('Введите число для возведения в квадрат');

const giveSquare = (a) => {
    console.log(findSquareNumber(a));
}

giveSquare(userNumber);

function findSquareNumber(a) {
    return a ** 2;
}

// задание 4

let age = Number(prompt("Сколько Вам лет?"));

function printMessage(num) {

    if (12 > num && num >= 0) {
        alert("Привет, друг!");

    } else if (+num >= 13) {
        alert("Добро пожаловать!");

    } else {
        alert("Вы ввели неправильное значение.");
    }

}

printMessage(age);

// задание 5

numA = Number(prompt('Введите первое число.'));
numB = Number(prompt('Введите второе число.'));

const numberNew = (a, b) => {

    if (isNaN(a) || isNaN(b)) {
        return ('Одно или оба значения не являются числом.')

    } else {
        return a * b;
    }
}

numberNew();

// задание 6

let x = prompt('Введите число для возведения в куб');

function cubeNumber() {

    if (isNaN(x)) {
        let y = x * x * x;
        return (`${x} в кубе равняется ${y}`);

    } else {
        return ('Переданный параметр не является числом');
    }
}

cubeNumber();

// задание 7

function getCircleArea() {
    return this.radius * 3.14;
}

function getCirclePerimeter() {
    return this.radius * 3.14 * 2;
}

const circle1 {
    radius = 14,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

const circle2 {
    radius = 20,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());