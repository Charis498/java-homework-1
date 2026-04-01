// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.
console.log("Завдання 1:");
var a = 1;
if (a > 0) {
  console.log(true);
  var a = 0;
} else {
  console.log(false);
}
if (a > 0) {
  console.log(true);
  var a = -3;
} else {
  console.log(false);
}
if (a > 0) {
  console.log(true);
} else {
  console.log(false);
}

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test', "qwerty", true
console.log("Завдання 2:");
var srt = "test";
if (srt === "test") {
  console.log(true);
  var srt = "qwerty";
} else {
  console.log(false);
}
if (srt === "test") {
  console.log(true);
  var srt = true;
} else {
  console.log(false);
}
if (srt === "test") {
  console.log(true);
} else {
  console.log(false);
}

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.
console.log("Завдання 3:");
var num = 1;
if (num > 10) {
  console.log(num - 5);
} else {
  console.log(num + 5);
  var num = 10;
}
if (num > 10) {
  console.log(num - 5);
} else {
  console.log(num + 5);
  var num = 13;
}
if (num > 10) {
  console.log(num - 5);
} else {
  console.log(num + 5);
}

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
console.log("Завдання 4:");
const months = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

var monthNumber = 2; // замінити на потрібне число від 1 до 12
if (monthNumber >= 1 && monthNumber <= 12) {
  console.log(months[monthNumber - 1]);
} else {
  console.log("Невірний номер місяця");
}

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
console.log("Завдання 5:");
const numtask = 487; // замінити на потрібне тризначне число
var srt = String(Math.abs(numtask));
if (srt.length !== 3) {
  console.log("Введіть тризначне число!");
} else {
  var sum = Number(srt[0]) + Number(srt[1]) + Number(srt[2]);
  console.log(sum);
}
