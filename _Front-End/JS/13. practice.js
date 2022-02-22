class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === '승연' && password === '최고') ||
                (id === '개발자' && password === '가즈아')
            ) {
                onSuccess(password);
            } else {
                onError(new Error ('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if( user === '최고') {
                onSuccess({sound:'hahaha'});
            } else {
                onError(new Error ('no access'));
            }
        }, 2000);
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
                alert(`${userWithRole.sound}`)
            },
            error => {
                console.log(error);
            }
        )
    },
    error => {
        console.log(error);
    }
);


class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
         setTimeout(() => {
             if (
                 (id === '승연' && password === '최고')||
                 (id === '도영' && password === '메롱')
             ) {
                resolve(id);
             } else {
                reject(new Error ('not found'));
             }
         }, 2000);   
        });
    }

    getRoles(user) {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if (
                    (user === '승연')||
                    (user === '도영')
                ) {
                    resolve({name: 'gg'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter tour id:');
const password = prompt('enter your password');
userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`${user.name}`))
.catch(console.log);



function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}











