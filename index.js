//Дан масив. Знайти суму та кількість позитивних елементів.

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let quantityOfPositive = 0;
let sumOfPositive = 0;
arr.forEach((number) => {
    if (number > 0) {
        sumOfPositive += number;
        quantityOfPositive += 1;
    }
});
console.log(`Сума всіх позитивних елементів: ${sumOfPositive}`);
console.log(`Кількість позитивних елементів: ${quantityOfPositive}`);

//Знайти мінімальний елемент масиву та його порядковий номер.

let minNumber = arr[0];
arr.forEach((number) => {
    if (minNumber > number) {
        minNumber = number;
    }
});
console.log(`Мінімальний елемент масиву: ${minNumber}`);
console.log(`Порядковий номер мінімального елементу: ${arr.indexOf(minNumber)}`);

//Знайти максимальний елемент масиву та його порядковий номер.
let maxNumber = arr[0];
arr.forEach((number) => {
    if (maxNumber < number) {
        maxNumber = number;
    }
});
console.log(`Максимальний елемент масиву: ${maxNumber}`);
console.log(`Порядковий номер максимального елементу: ${arr.indexOf(maxNumber)}`)

//Визначити кількість негативних елементів.

let quantityOfNegative = 0;
arr.forEach((number) => {
    if (number < 0) {
        quantityOfNegative += 1;
    }
});
console.log(`Кількість негативних елементів: ${quantityOfNegative}`);

//Знайти кількість непарних позитивних елементів.

let quantityOfOddPositive = 0;
arr.forEach((number) => {
   if (number > 0 && number % 2 !== 0) {
        quantityOfOddPositive += 1;
   }
});
console.log(`Кількість непарних позитивних елементів: ${quantityOfOddPositive}`);

//Знайти кількість парних позитивних елементів.

let quantityOfEvenPositive = 0;
arr.forEach((number) => {
    if (number > 0 && number % 2 === 0) {
        quantityOfEvenPositive += 1;
    }
});
console.log(`Кількість парних позитивних елементів: ${quantityOfEvenPositive}`);

//Знайти суму парних позитивних елементів.

let sumOfEvenPositive = 0;
arr.forEach((number) => {
   if (number > 0 && number % 2 === 0) {
       sumOfEvenPositive += number;
   }
});
console.log(`Сума парних позитивних елементів: ${sumOfEvenPositive}`);

//Знайти суму непарних позитивних елементів.

let sumOfOddPositive = 0;
arr.forEach((number) => {
   if (number > 0 && number % 2 !== 0) {
       sumOfOddPositive += number;
   }
});
console.log(`Сума непарних позитивних елементів: ${sumOfOddPositive}`);

//Знайти добуток позитивних елементів.

let multiOfPositive = 1;
arr.forEach((number) => {
   if (number > 0) {
       multiOfPositive *= number;
   }
});
console.log(`Добуток всіх позитивних елементів: ${multiOfPositive}`);

//Знайти найбільший серед елементів масиву, остальні обнулити

const  newArr = arr.map((number) => {
   if (number !== maxNumber) {
       return number = 0;
   } return maxNumber;
});
console.log(newArr);