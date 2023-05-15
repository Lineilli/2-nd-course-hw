// задание 1

const stringJs = ('js');

console.log(stringJs.toUpperCase());

// задание 2

const arrayOfStrings = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';

arrayOfStrings.forEach((searchStart) => {
    if (searchStart.toLowerCase().includes(search.toLowerCase())) {
		console.log(searchStart);
	}
});

// задание 3

const x = 32.58884;

console.log(Math.floor(x));
console.log(Math.ceil(x));
console.log(Math.round(x));

// задание 4

let arr = [52, 53, 49, 77, 21, 32];
let min = Math.min.apply(null, arr);
let max = Math.max.apply(null, arr);

console.log(min);
console.log(max);

// задание 5

function getRandomInt(1, 10) {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}

console.log(getRandomInt(1, 10));

// задание 6

function getRandomArrNumbers(num) {
    min = 0;
    max = num;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

// задание 7

let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));

function getRandomInt(min, max) {
    min = Math.min(a, b);
    max = Math.max(a, b);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt());

// задание 8

let myDate = new Date();
console.log(currentDate);

// задание 9

function futureData() {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 73);
    alert(currentDate);
  }
  
// задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

function setDate() {
    let myDate = new Date();
    let fullDate = "Дата:" + "" + myDate.getDate() + "" + myDate.getMonth() + "" + myDate.getFullYear() + "- это" + "" + myDate.getDay() + "
    " + "Время:" myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
}

console.log(setDate());


