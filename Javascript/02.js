// 1. String concatenattion
console.log('my'+' cat');
console.log('1' + 2);
//console.log('string literals: 

//1 + 2 = ${1 + 2}');

console.log('Rimiiii\'\s book');
console.log("Rimiiii's \tbook");
console.log("Rimiiii's \nbook");

// 2. Numeric operators
console.log(1+1); // add
console.log(1-1); // substractor
console.log(1/1); // divide
console.log(1*1); // multiply
console.log(5%2); // remainder
console.log(2 ** 3); // exponetiation

/// 다시 이해해보기 //
// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(preIncrement);
console.log(counter);
const postIncrement = counter++;
// postIncrement == counter;
// counter = counter;
console.log(preIncrement);
console.log(counter);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// 함수가 콘솔보다 뒤에 있는데 되네?
console.log(value1 || value2 || check()) //check는 무거우니까 제일 뒤에 배치하는 것이 효율적이다.

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱')
  }
  return true;
}

// && (and), finds the first falsy value 다 true여야함
console.log(value1 && value2 && check())

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱')
  }
  return true;
}
// often used to compress long if-statement
// nullableObject && nullableObject.something
//if (nullableObject != null) {
//  nullableObject.something;
//}

//function check() {
//  for (let i = 0; i < 10; i++) {
    //wasting time
//    console.log('😱')
//  }
//  return true;
//}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equlity, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
// object는 python에서 class와 같은 의미로 보임
const rimiiii1 = {name: 'rimiiii'};
const rimiiii2 = {name: 'rimiiii'};
const rimiiii3 = rimiiii1;
console.log(rimiiii1 === rimiiii2);
console.log(rimiiii2 === rimiiii3);
console.log(rimiiii3 === rimiiii1);

// equality - puzzler
console.log('## equality - puzzler')
console.log(0 == false); //t
console.log(0 === false); //f
console.log('' == false); //t
console.log('' === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f

// 8. Conditional operators: if
// if, else if , else
console.log('\n##if, else if, else')
const name = 'rimiiii';
if (name === 'rimiiii') {
  console.log('Welcome, Rimiiii!');
} else if (name === 'coder') {
  console.log('Welcome, Coder!');
} else {
  console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log('\ncondition ? value1 : value2;');
console.log(name === 'rimiiii' ? 'yes' : 'no');

// 10. Switch if-statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
console.log('\n10. Switch if-statement')
const browser = 'Chrome';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy.
// body code is executed
console.log('\n11. Loops');
let i = 3;
while (i > 0) {
  console.log('while: '+ i);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
// 계산을 미리하고 싶을떄
console.log('\n#do while');
console.log('i: ' + i);
do {
  console.log('do while ' + i);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
// 출력 후 계산
console.log('\n##for loop, for(begin; condition; step')
for (i = 3; i > 0; i--) {
  console.log('for: '+ i);
}

for (let i = 3; i > 0; i = i-2) {
  // inline variable declaration
  console.log('inline variable for: ' + i);
}

// nested Loops
// i^j만큼 출력됨
console.log('\n## nested loop');
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log('i: ' + i, 'j: ' + j);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
console.log('\nQ1. iterate from 0 to 10 and print only even numbers (use continue)');
console.log('\n## Method1'); //내가 짠 것, continue를 이해하려고 낸 문제이며 실제로는 이 방법이 더 직관적이라 좋음.
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log('i: ' + i);
  }
}

console.log('\n## Method2');
for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log('i: ' + i);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
console.log('\nQ2. iterate from 0 to 10 and print numbers until reaching 8 (use break)')
// 내가 짠 코드
console.log('\nMethod1');
for (let i = 0; i <= 10; i++) {
  if (i <= 7) {
    console.log('i: '+ i);
  }
  else if (i === 8) {
    console.log('i: ' + i);
    break;
  }
}

// 더 깔끔한 코드(엘리님 코드)
console.log('\nMethod2')
for (let i = 0; i <= 10; i++) {
  if (i > 8) {
    break;
  }
  console.log('i: ' + i);
}
