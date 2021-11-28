// async & await
// clear style of using promise :)

// 1. async
function fetchUser() {
    return new Promise((resolve, reject)=> {
       // do network request in 10 secs...
    resolve('ellie'); 
    });
}

// promise를 간편하게 쓸 수 있는 synthetic sugar
async function fetchUser() {
          // do network request in 10 secs...
    return 'ellie'; 
    }


const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

function delay(ms) {
    return new Promise (resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(3000);
    return '🍎';
}

async function getBanana() {
    await delay(3000);
    return '🍌';
}

// promise chaining
function getBanana() {
    return delay(3000)
    .then(() => '🍌');
}

// 살짝 callback 지옥
function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + &{banana}`);
    });
}

pickFruits().then(console.log);

// async와 await쓰니까 동기적인 것처럼 보여서 참 좋음
// 문제는 apple과 banana가 동기적으로 처리되서 시간 오래걸림
async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log)

// promise 함수 만들어서 비동기적으로 처리하기 (시간 빠르게)
async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs //.all
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(` + `)
    );
}

                          //.race
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log)

