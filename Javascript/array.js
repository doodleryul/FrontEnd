'use strict';

// Array🎉

// 1. Declaration
console.log('1. Declaration');
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
console.log('\n2. Index position');
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);//마지막을 가져오기

// 3. Looping over an Array
// print all fruits
// a.for
console.log('\n3. Looping over an array');
console.log('\n#a.for');
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
} 

// b.for of
console.log('\n#b.for of');
for(let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
console.log('\n#c.forEach');
fruits.forEach((fruit) => console.log(fruit)); //callback함수를 불러옴

// 4. Addtion, deletion, copy
console.log('\n4. Addtion, deletion, copy')
// push: add an item to the end
console.log('\n#push');
fruits.push('🍓', '🍋');
console.log(fruits);

// pop: remove an item from the end
console.log('\n#pop');
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
console.log('\n#unshift')
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the benigging
console.log('\n#shift')
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// 앞을 제거하고 뒤에서 하나씩 제거된 공간을 채워넣음
// splice: remove an item by index position
console.log('\n#splice');
fruits.push('🍓', '🍑', '🥝');
console.log(fruits);
fruits.splice()
