
console.log('// Promise Example 3');

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded');
});

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded');
});

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded');
});

// .all - Retorna todos os resultados das promises na ordem aleatória
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log('Promise.all: ' + messages);
})

// .race = Retorna apenas o primeiro resultado que for processado
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log('Promise.race: ' + message);
})

console.log('// END Promise Example 3');
console.log('\n');