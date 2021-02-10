'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// WHen new promise is created, the executor runs automatically.
console.log('1. Producer');
// promise가 만들어지는 순간 바로 실행됨
const promise = new Promise((resolve, reject) => {
  // doing some heavy work ()
  console.log('doing something...');
  setTimeout(() => {
    resolve('rimiiii');
    //reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
// promise가 잘되면 resolve값이 들어옴
console.log('\n2. Consumers: then, catch, finally');
promise //
  .then(value => {
  console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  })//성공하든 실패하든 무조건 받는 것
  
// 3. Promise chaining
console.log('\n3. Promise chaining');
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num*2)
.then(num => num*3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num - 1), 1000);
  });
})
.then(num => console.log(num));

// 4. Error Handling
console.log('\n4. Error Handling');
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });
  
getHen() //
  .then(getEgg)
  .catch(error => {
    return '🥖'; // error일때 닭->계란 대신에 빵을 출력해줘!
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
