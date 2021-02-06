'use.strict'

// function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body ... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS -> object는 속성값을 고를 수 있음
console.log('1. Function declaration');
function printHello() {
  console.log('Hello');
}
printHello()

function log(message) {
  console.log(message);
}
log('Hello22')

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
console.log('\n2. Parameters');
function changeName(obj) {
  obj.name = 'coder';
}
const rimiiii = {name: 'rimiiii'};
changeName(rimiiii);
console.log(rimiiii);

// 3. Default parameters (added in ES6)
console.log('\n3. Default parameters (added in ES6)');
function showMessage(message, from = 'unknown') {
  console.log('${message} by ${from}');
}
showMessage('Hi');

// 4. Rest prameters (added in ES6)
console.log('\n4. Rest prameters (added in ES6)');
function printAll(...args) {
  for (let i = 0; i < args.length; i++) { // Method1
    console.log(args[i]);
  }
  
  for (const arg of args) { // Method2
    console.log(arg);
  }
  
  args.forEach((arg) => console.log(arg)); // Mehod3
}
printAll('dream', 'coding', 'rimiiii')

// 5. Local scope
console.log('\n5. Local scope')
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
//  console.log(childMessage); // 창문 안에 들어가 있어 밖에서는 불러올 수 없음
}
printMessage();

// 6. Return a value
console.log('\n// 6. Return a value');
function sum(a, b) {
  return a+b;
}
const result = sum(1,2);
console.log(sum(1,2));
console.log(result);

// 7. Early return, early exit 
// 현업에서의 팁!
console.log('\n7. Early return, early exit');
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic..
  } 
}

// good
// 빨리 return시키기
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long variable logic..
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functins
// can be returned by another function
console.log('\nFirst-class function');

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reached it
console.log('\n1. Function expression');
const print = function () {
  console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. callback function using functin expression
// 상황에 맞으면
console.log('\n2. callback function using functin expression')
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debuggin in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
  //print(); loop에 빠짐
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
console.log('\nArrow function');
//const simplePrint = function () {
//  console.log('simplePrint!');
//};

const simplePrint = () => console.log('simplePrint!');
//const add = (a,b) => a+b; // simple Method
const add = function(a, b) {
  return a+b;
}

// IIFE: Immediagely Invoked Function expression: 즉시 호출
//(function hello() {
//  console.log('IIFE');
//})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
console.log('\nFun quiz time')
function calculate(command, a, b) {
  if (command == 'add') {
    console.log(a+b);
  }
  
  else if (command === 'substract') {
    console.log(a-b);
  }
  
  else if (command === 'divide') {
    console.log(a/b);
  }
  
  else if (command === 'multiply') {
    console.log(a*b);
  }
  
  else if (command === 'remainder') {
    console.log(a%b);
  }
  
  else {
    console.log('Not in command!');
  }
};
calculate('remaindedr', 3, 5);
