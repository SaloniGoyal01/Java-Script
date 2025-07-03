const promiseOne = new Promise(function (resolve, reject){
// DO an Async Task
// DB call, Cryptography, Network
setTimeout(function(){
console.log('Async Task is Complete');
resolve()
}, 1000)
})

promiseOne.then(function (){
    console.log('Promise Consumed')
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve()
    },1000)

}).then(function(){
    console.log('Async 2 resolved');
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Saloni", email: "abc@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})


const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: 'Saloni', password: '123'})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promisefour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
})

promisefour.then((user) => {
console.log(user);
return user.password
}).then((password) => {
    console.log(password);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The Promise either resolved or rejected"))


const promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'JS', password: '456'})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
try {
    const response = await promisefive
    console.log(response);
}
catch (error){
    console.log(error);
}
}
consumePromiseFive()



// async function getAllUsers(){
//     try{
//         const response = await fetch('https://github.com/hiteshchoudhary/')
//  const data = await response.json()
//     console.log(data);
//     }
//     catch(error){
//         console.log('E: ', error);
//     }

// }
// getAllUser()




fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))