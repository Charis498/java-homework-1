// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }
console.log("Завдання 1");

function checkAge(age) {
  return age > 18 || confirm("Батьки дозволили?");
}
const age = 12;
console.log(checkAge(age));
// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
console.log("Завдання 2");
function min(a, b) {
  return a < b ? a : b;
}
console.log(min(5, 10));
console.log(min(200, -10));
// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?",
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );
console.log("Завдання 3");
const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Ви згодні?",
  () => alert("Ви погодились."),
  () => alert("Ви скасували виконання."),
);
