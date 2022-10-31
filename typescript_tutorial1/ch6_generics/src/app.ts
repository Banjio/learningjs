const names: Array<string> = []; // this is equivalent to string[]

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         resolve('This is done');
//     }, 2000)
// });

// promise.then(data => {
//     data.split(' ')
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'Max'}, {age: 30})
mergedObj.age


// This will fail silently without constraints
const mergedObj2 = merge({name: 'Max'}, 30)

console.log()