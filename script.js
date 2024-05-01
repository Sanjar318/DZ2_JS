let age = +prompt("Введите свой возраст в цыфрах");

if(age < 0){
    alert("Что то пошло не так, у тебя случаем не 47 хромосом?");
} else if (age <= 18) {
    alert("Молокосос, иди учись!");
} else if (age <= 50){
    alert("Иди похай раб");
} else if (age <= 59){
    alert("Эй хрыч иди на пенсию");
} else if (age <= 100){
    alert("Эх ты где ты забыл молодость");
} else if (age > 100){
    alert("Чо пишешь иди дальше лежи в своём гробу");
} else if (isNaN(age)){
    console.error("Долбень ты совершил в своеё жизни много ошибок");
    alert("Далбень ты не знаешь как числа пишатся?");
} else {
    alert("Что то пошло не так, у тебя случаем не 47 хромосом?");
}


let time = +prompt("Введите время от 0 до 23")
switch (time) {
    case 0:
        alert("00:00 Часов ночи");
        break;
    case 1:
        alert("1 Час ночи");
        break;
    case 2:
        alert("2 Час ночи");
        break;
    case 3:
        alert("3 Час ночи");
        break;
    case 4:
        alert("4 Час ночи");
        break;
    case 5:
        alert("5 Час ночи");
        break;
    case 6:
        alert("6 Час утра");
        break;
    case 7:
        alert("7 Час утра");
        break;
    case 8:
        alert("8 Час утра");
        break;
    case 9:
        alert("9 Час утра");
        break;
    case 10:
        alert("10 Час утра");
        break;
    case 11:
        alert("11 Час утра");
        break;
    case 12:
        alert("12 Час утра");
        break;
    case 13:
        alert("1 Час обеда");
        break;
    case 14:
        alert("2 Часа обеда");
        break;
    case 15:
        alert("3 Часа обеда");
        break;
    case 16:
        alert("4 Часа полдника");
        break;
    case 17:
        alert("5 Часа полдника");
        break;
    case 18:
        alert("6 Часов вечера");
        break;
    case 19:
        alert("7 Часов вечера");
        break;
    case 20:
        alert("8 Часов вечера");
        break;
    case 21:
        alert("9 Часов вечера");
        break;
    case 22:
        alert("10 Часов вечера");
        break;
    case 23:
        alert("11 Часов вечера");
        break;
    case 24:
        alert("00:00 Часов ночи");
        break;

    default:
        alert("Введите заново числа от 0 до 23");
        time = +prompt("Введите время от 0 до 23");
        alert("Иди в жопу")
        break;
 }

let a = +prompt("Введите любое первое число");
let b = +prompt("Введите любое второе число");
let c = +prompt("Введите любое третье число");

if ((a >= b && a <= c) || (a <= b && a >= c)) {
    alert(a);
} else if ((b >= a && b <= c) || (b <= a && b >= c)) {
    alert(b);
} else {
    alert(c);
}
