'use strict';

// МАССИВЫ. МЕТОДЫ:

// * 1. Убираем последний элемент массива. Метод pop.

// const arr = [1, 2, 3, 6, 8];

// arr.pop();

// console.log(arr);


// * 2. Добавляем элемент в конце массива. Метод push.

// const arr = [1, 2, 3, 6, 8];

// arr.push(10);

// console.log(arr);


// * 3. Перебор элементов массива циклом length

// const arr = [1, 2, 3, 6, 8, 10];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// * Или аналогичный метод через for of:

// const arr = [1, 2, 3, 6, 8, 10];

// for (let value of arr) {
//     console.log(value);
// }


// // * 4. Метод forEach - используется для перебора массива:

// const arr = [1, 2, 3, 6, 8, 10];

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// }); 


// * 5. Метод split - формируем массив  из строк по порядку:

// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products);

// * 5.1. Метод join - делает из массива строку и метод sort сортирует данные в алфавитном порядке.

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort(); 
// console.log(products.join('; '));


// * 6. Сетод сортировки массива по порядку через функцию compareNum:

// const arr = [1, 20, 13, 6, 18, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }