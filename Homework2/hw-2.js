// задание 1
let a = 10;
alert(a);

let a = 20;
alert(a);

// задание 2
let yearIPhone = 2007;
alert(yearIPhone);

// задание 3
let nameJS = 'Brendan Eich';
alert(nameJS);

// задание 4
let a = 10;
let b = 2;
alert(a + b);

let a = 10;
let b = 2;
alert(a - b);

let a = 10;
let b = 2;
alert(a * b);

let a = 10;
let b = 2;
alert(a / b);

// задание 5
let a = 2;
let b = 5;
let result = a ** b;
alert(result);

// задание 6
let a = 9;
let b = 2;
let result = a % b;
alert(result);

// задание 7
let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num++;
num--;
alert(num);

// задание 8
let age = prompt('Сколько вам лет?');
alert(age);


// задание 9
let user = {
    name: "Rhysand",
    age: 500,
    isAdmin: true
}

// задание 9.1
let user = {
    name: "Rhysand",
    age: 500,
    isAdmin: true,
    "city of Residence": Prythian
};

// задание 9.2
let user = {
    name: "Rhysand",
    age: 500,
    isAdmin: true,
    "city of Residence": Prythian
};
user.age = 521;

// задание 9.3
let user = {
    name: "Rhysand",
    age: 500,
    isAdmin: true,
    "city of Residence": Prythian
};
delete user["city of Residence"];

// задание 9.4
let user = {
    name: "Rhysand",
    age: 500,
    isAdmin: true
};

let info = prompt("Какую информацию хотите узнать о пользователе?", "name", "age", "isAdmin");

alert(user[info]);

// задание 10
let name = prompt('Как вас зовут?', 'name');
alert('Привет, ' + name + '!');