const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey! Se cumplió');
        } else {
            reject('Whoops!!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whoooppsssiee!!');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

// Correr ambas promesas al mismo tiempo

Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response => console.log('Array of results', response))
    .catch(err => console.error(err));