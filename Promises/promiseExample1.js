console.log('// Promise Example 1');

// Criando a promise
let myPromise = new Promise((resolve, reject) => {

    let x = 1 + 1;

    if(x = 2){
        resolve("Success");
    }else{
        reject("Failed");
    }
});

// O parâmetro message é o resultado do resolve ou reject da promise
myPromise.then((message) => {
    console.log("This is in the then " + message);
}).catch((message) => {
    console.log("This is in the catch " + message);
});

console.log('// END Promise Example 1');
console.log('\n');