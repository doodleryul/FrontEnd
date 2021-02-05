// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict'

// 2. Variable
// let added in (ES6)
let globalName = 'global name'//memory에 탑재되어 있으니 가능한 안사용하는 것이 좋음

{
  let name = 'Rimiiii';
  console.log(name);
  name = 'hello world';
  console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
//console.log(age);
//age = 4; //가능함

// hoisting: 코드 순서에 상관없이 맨 위로 끌어올리는 기능
console.log(dontuse);
var dontuse;
dontuse = 444;

// 3. Constants
// favor immutable data type always for a few reasons:
// - security
// - thread sagery
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;
console.log(maxNumber);

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
const count = 17; //integer
const size = 17.1; //decimal number
//console.log('value: ${count}, type: ${typeof count}');
//console.log('value: ${size}, type: ${typeof size}');
console.log(count);
console.log(typeof count);
console.log(size);
console.log(typeof size);

//number - special numeric values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairy new, don't use it yet)
const bigInt = 12345678901234567890;
//console.log('value: ${bigInt}, type: ${typeof bigInt}');
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
//console.log('value: ${greeting}, type: ${typeof greeting}');
console.log(greeting);
console.log(typeof greeting);
const helloBob = 'hi ${brendan}!'; //template literals (stirng)
//console.log('value: ${helloBob}, type: ${typeof helloBob}');
console.log(helloBob);
console.log(typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3<1; //false
console.log(canRead);
console.log(typeof canRead);
console.log(test);
console.log(typeof test);

// null
let nothing = null;
console.log(nothing);
console.log(typeof nothing);

// undefined
let x;
console.log(x);
console.log(typeof x);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);

// object, real-life object, data structure
const rimiiii = {name: 'rimiiii', age: 20};
rimiiii.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(text);
console.log(typeof text);
text = 1;
console.log(typeof text);
text = '7' + 5;
console.log(typeof text);
text = '8' / '2';
console.log(typeof text);
//console.log(text.charAt(0));

