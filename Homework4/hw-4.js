// задание 1

let i = 0;
while (i < 2) {
    console.log("Привет");
    i++;
}

// задание 2

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// задание 3

let i = 7;
while (i <= 22) {
    console.log(i);
    i++;
}

//задание 4

let obj = { 'Коля': '200', 'Вася': '300', 'Петя': '400' };
for (let name in obj) {
    alert(`${name} — зарплата ${obj[name]} долларов.`);
}

// задание 5

let num = 0;
for(let n = 1000; n > 25; n /= 2) {
console.log(n);
num++;
}

// второе решение

let num = 0, n = 1000;
while(n > 50) {
    n /= 2;
    console.log(n);
    num++;
}

// задание 6

let friday = 7;

for (let friday = 5; friday <= 31; friday = friday += 7) { 
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
}
