// Домашнє завдання
// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind
console.log("Завдання 1:");
const student = {
  name: "Шаблон",
  specialty: "",
  avgGrade: 0,
  missedClasses: 0,
  logInfo() {
    console.log(`Ім'я: ${this.name}`);
    console.log(`Спеціальність: ${this.specialty}`);
    console.log(`Середній бал: ${this.avgGrade}`);
    console.log(`Пропущено занять: ${this.missedClasses}`);
  },
};

const student1 = {
  name: "Олег",
  specialty: "Frontend",
  avgGrade: 4.5,
  missedClasses: 1,
};
const student2 = {
  name: "Марія",
  specialty: "Backend",
  avgGrade: 4.8,
  missedClasses: 0,
};
const student3 = {
  name: "Дмитро",
  specialty: "Fullstack",
  avgGrade: 3.9,
  missedClasses: 7,
};
console.log("Виклик через call:");
student.logInfo.call(student1);
console.log("Виклик через apply:");
student.logInfo.apply(student2);
console.log("Виклик через bind:");
const logStudent3 = student.logInfo.bind(student3);
logStudent3();
// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке
console.log("Завдання 2:");
function showHtml() {
  alert("HTML — мова розмітки для створення структури веб-сторінок.");
}
function showCss() {
  alert("CSS — мова стилів для оформлення зовнішнього вигляду сторінок.");
}

document.getElementById("btnHtml").addEventListener("click", showHtml);
document.getElementById("btnCss").addEventListener("click", showCss);
// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4
// const student = {
//   name: "Шаблон",
//   specialty: "",
//   avgGrade: 0,
//   missedClasses: 0,
//   logInfo() {
//     console.log(`Ім'я: ${this.name}`);
//     console.log(`Спеціальність: ${this.specialty}`);
//     console.log(`Середній бал: ${this.avgGrade}`);
//     console.log(`Пропущено занять: ${this.missedClasses}`);
//   },
// };
console.log("Завдання 3:");
function shop(name, pricePerKg, quantity) {
  const total = (pricePerKg * quantity).toFixed(2);
  return `${name}: ${total} грн`;
}

console.log(shop("banana", 30, 4.5));
console.log(shop("cherry", 58, 1.3));
console.log(shop("jrange", 89, 3.4));
