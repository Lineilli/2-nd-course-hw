function game1() {
    let month = Number(prompt('Введите номер месяца'));
    function seasons(num) {
        if (num <= 0 || num >= 13) {
            alert('неверное значение')
        } else if (num === 1 || num === 2 || num === 12) {
            alert('Зима')
        } else if (num >= 3 && num <= 5) {
            alert('Весна')
        } else if (num >= 6 && num <= 8) {
            alert('Лето')
        } else {
            alert('Осень')
        }
    }

    seasons(month);
}

function game2() {
    let fruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruit = fruit.sort(() => Math.random() - 0.5);
    alert(fruit);
    let questionOne = prompt('Чему равнялся первый элемент массива?');
    let questionTwo = prompt('Чему равнялся последний элемент массива?');

    if (fruit[0].toLowerCase() === questionOne.toLowerCase() && fruit[fruit.length - 1].toLowerCase() === questionTwo.toLowerCase()) {
        alert('Вы победили! Поздравляем!')
    } else if (fruit[0].toLowerCase() === questionOne.toLowerCase() || fruit[fruit.length - 1].toLowerCase() === questionTwo.toLowerCase()) {
        alert('Вы были близки к победе!')
    } else {
        alert('Вы ответили неверно!')
    }

}