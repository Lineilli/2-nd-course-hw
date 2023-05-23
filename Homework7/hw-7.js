// задание 1

const stringJs = ('js');

console.log(stringJs.toUpperCase());

// задание 2

function searchStart(arr, str) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].toLowerCase().startsWith(str.toLowerCase())) {
        newArr.push(arr[i].toLowerCase());
      }
    }
  }

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); 
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); 
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); 

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

let a = 1;
let b = 10;

function getRandomInt(a, b) {
    min = Math.ceil(a);
    max = Math.floor(b);
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

console.log(getRandomInt(a, b));

// задание 6

function getRandomArrNumbers(n) {
  const arr = [];

  for (let i = 0; i < n / 2; i++) {
    arr.push(Math.floor(Math.random() * (n + 1)));
  }
  return arr;
}
console.log(getRandomNumbers(7));
console.log(getRandomNumbers(12));

// задание 7

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  console.log(getRandomInt(1, 10));

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


