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
const mergedObj2 = merge({name: 'Max'}, {age: 30})

console.log()

interface Lengthly {
    length: number;
}

function countAndDescribe<T extends Lengthly>(element: T): [T, string]{
    let descriptionText = 'Got no value.';
    if(element.length > 0){
        descriptionText = 'Got ' + element.length + ' elements.' ;
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(obj:  T, key: U) {
    return obj[key];
}

class DataStorage<T extends number | string | boolean> {
    private data: T[]  = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems(){
        return[...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

// Because of the logic of splice this does not work correctly with object. Thus it would be smarter to create a more specialised DataStorage for objects
// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'Max'});
// objStorage.addItem({name: 'Manu'})
// objStorage.removeItem({name: 'Manu'})
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal{
    // Partial "allows" our type to temporarily change its structure
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date
    return courseGoal as CourseGoal;
}

const vorNamen: Readonly<string[]> = ['Max', 'Manu'];
// This will not work because of the readonly modifier
// vorNamen.push('Theo');
// vorNamen.pop();