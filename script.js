const numbers = [22, 56, 31, 27, 42, 75, 98, 21, 0, 29, 66];

const evenNumbers = []; // Для четных чисел
const oddNumbers = [];  // Для нечетных чисел

numbers.forEach(number => {
  if (number % 2 === 0) {
    evenNumbers.push(number); // Если число четное
  } else {
    oddNumbers.push(number);  // Если число нечетное
  }
});

console.log("Четные числа:", evenNumbers); // [22, 56, 42, 98, 0, 66]
console.log("Нечетные числа:", oddNumbers); // [31, 27, 75, 21, 29]

