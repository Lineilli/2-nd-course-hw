// задание 1

let password = String(prompt('Введите пароль'));

if (password === 'пароль') {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

// задание 2

let c = Number(prompt('Введите ответ'));

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// задание 3

let d, e = Number(prompt('Введите число'));

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// задание 4

let a = '2';
let b = '3';
alert(parseInt(a) + parseInt(b));

// задание 5

let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case 1, 2, 12:
        console.log('Зима');
        break;
    case 3, 4, 5:
        console.log('Весна');
        break;
    case 6, 7, 8:
        console.log('Лето');
        break;
    case 9, 10, 11:
        console.log('Осень');
        break;
    default: console.log('В году 12 месяцев');
    break;
    }

// задание 7

let answer = Number(prompt('Пожалуйста, введите любое число'));

if ("answer" > 0) {
   console.log('Верно, вы ввели число'); 
} else {
    console.log(NaN);
}
if ("answer" / 2 => !("answer" % 2)) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}






