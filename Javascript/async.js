// async & await
// clear style of using promise

// 1. async
console.log('1. async')
async function fetchUser() {
  // do netwrok request in 10 secs....
  return 'rimiiii';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
console.log('\n2. await')
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function getApple() {
  await delay(1000);
  return '🍎';
}

async function getBanana() {
  await delay(2000);
  return '🍌';
}

// Method1 
async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
// 코드가 독립적이라서 병렬적으로 실행이 가능할 경우
console.log('\n3. useful Promise APIs')
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + ')
  );
}

pickAllFruits().then(console.log);

// 가장 먼저 return하는 값만 출력하기
console.log('\n#Promise.race');
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()])
}

pickOnlyOne().then(console.log);
