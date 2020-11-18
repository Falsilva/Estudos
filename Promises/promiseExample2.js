
console.log('// Promise Example 2');

let userLeft = false;
let userWatchingCatMeme = false;

function watchTutorialPromise(){

    return new Promise((resolve, reject) => {
        
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            });
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            });
        } else {
            resolve('Thumbs up and Subscrible');
        }

    });
}

// Muitos encadeamentos para tratar resultados - Exemplo 3 mostra jeito mais clean
watchTutorialPromise()
    .then((message) => {
        console.log('Success: ' + message);
        return 'Final Process';
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error.name + ' ' + error.message);
    });

console.log('// END Promise Example 2');
console.log('\n');