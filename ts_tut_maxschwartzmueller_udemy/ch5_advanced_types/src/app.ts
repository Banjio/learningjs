type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = number | string;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: Combinable, b: Combinable){
    // This is called a type guard
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString()
    }

    return a + b;
}

const result = add('Max', ' Beier');
result.split('')

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee){
    console.log('Name: ' + emp.name);
    if('privileges' in emp){
        console.log('Privileges: ' + emp.privileges);
    }

    if('startDate' in emp){
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInfo(e1)

class Car {
    drive(){
        console.log('Driving ...');
    }
}

class Truck {
    drive(){
        console.log('Driving a truck ...');
    }

    loadCargo(amount: number){
        console.log('Loading cargo ... ' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Car();


function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1)
useVehicle(v2)

interface Bird{
    type: 'Bird';
    flyingSpeed: number;
}

interface Horse{
    type: 'Horse'
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed;
    switch(animal.type){
        case 'Bird':
            speed = animal.flyingSpeed;
            break;
        case 'Horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed ' +  speed)
}

moveAnimal({type: 'Bird', flyingSpeed: 10})

//const paragraph = document.getElementById('message-output');
//const userInputElement = <HTMLInputElement>document.getElementById('user-input');
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

// This is an alternative to using ! as ... 
// if(userInputElement){
//     (userInputElement as HTMLInputElement).value = 'Hi Ho !'
// }

userInputElement.value = 'Hi there';

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    uName: 'Must start with a capital character!'
}

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: {title: 'CEO', description: 'My own company'}
}

// This would be the vanilla js way
//console.log(fetchedUserData.job && fetchedUserData.job.title)

console.log(fetchedUserData?.job?.title);

const userInput = null;
// This would however tread '' as fale
//const storedData = userInput || 'DEFAULT';
const storedData = userInput ?? 'DEFAULT';
console.log(storedData)
