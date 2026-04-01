// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruts = [
// { id: 0, name: "Apple" },
// { id: 1, name: "Tomat" },
// { id: 2, name: "Cherry" },
// { id: 3, name: "Orange" },
// ];
console.log("Завдання 1");
const fruits = [
  { id: 0, name: "Apple" },
  { id: 1, name: "Tomat" },
  { id: 2, name: "Cherry" },
  { id: 3, name: "Orange" },
];

const names = fruits.map((fruit) => fruit.name);

console.log(names);

// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
console.log("Завдання 2");
for (let i = 2; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}
// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.lpg( `цифра ${i}!` );
// }
console.log("Завдання 3");
let i = 0;
while (i < 5) {
  console.log(`цифра ${i}!`);
  i++;
}

// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
console.log("Завдання 4");
let number;

do {
  const input = prompt("Введіть число більше за 100:");

  if (input === "" || input === null) break;

  number = Number(input);
} while (number <= 100 || isNaN(number));

if (number > 100) {
  console.log(`Чудово! Ви ввели: ${number}`);
}
// -- 5 --
// Вирахуйте середній вік
// const girls = [
// { age: 23, name: "Оля" },
// { age: 29, name: "Аня" },
// { age: 10, name: "Юля" },
// { age: 20, name: "Катя" },
// ];
console.log("Завдання 5");
const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
];
let sum = 0;
for (let i = 0; i < girls.length; i++) {
  sum += girls[i].age;
}
console.log(`Середній вік: ${sum / girls.length}`);
