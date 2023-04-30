function game1() {
    let month = Number(prompt('Введите номер месяца'));
    function seasons(num) {
        if (num <= 0 || num >= 13) {
            alert('НЕ верное значение')
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