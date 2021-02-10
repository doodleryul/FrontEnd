'use strict';

// JavaScript is symchronous. 순서대로 코드가 실행된다
// Execute the code block bu orger after hoisiting.
// hoisting: var, function declaration
// callback 함수는 위로 맨 위로 올라가서 먼저 실행됨
console.log('Javascript is symchronous');
console.log('1');
setTimeout(() => console.log('2'), 1000); // 1초 뒤에 실행해거는 것, 나중에 다시 해줘(callback)
console.log('3');

// Synchronous callabck
console.log('\n#Synchronous callabck')
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchromous callback
console.log('\n#Asynchronous callabck')
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);

// Callback Hell example
console.log('\nCallback Hell example');
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'rimiiii' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }
  
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'rimiiii') {
        onSuccess({name: 'rimiiii', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id, 
  password, 
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role.` 
          );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);  

// note
// 가독성이 떨어짐
// 디버깅도 어려움
