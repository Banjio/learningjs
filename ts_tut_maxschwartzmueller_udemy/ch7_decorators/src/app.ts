function Logger(logString: string){
    return function(constructor: Function){
        console.log(logString)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string) {
    return function<T extends {new(...args: any[]): {name: string}}>(origConstructor: T) {
      
      return class extends origConstructor {
          constructor(..._: any[]) {
            super();
            const hookEl = document.getElementById(hookId);
            if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = this.name;
      }

          }
      }
    }
  }
  

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person object</h1>', 'app')
class Person {
    name = 'Max';

    constructor(){
        console.log('Creating person object ...')
    }
}

const max = new Person();

console.log(max)

// --- 

function Log(target: any, propertyName: string | Symbol) {
    console.log('Poperty decorator!');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accesor decorator!');
    console.log(target, name, descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
    console.log(target, name, descriptor);
}

function Log4(target: any, name: string, position: number) {
    console.log('Parameter decorator!');
    console.log(target, name, position);
}


class Product {
    @Log
    title: string;
    _price: number;

    @Log2
    set price(val: number){
        if(val > 0){
            this._price = val;
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;

    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor){
    const origMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = origMethod.bind(this)
            return boundFn;
        }
    };
    return adjDescriptor
}

class Printer {
    message = 'This works!';

    @Autobind
    showMessage(){
        console.log(this.message);
    }
}

const p = new Printer();
const button = document.querySelector('button')!;
// Without the Autobind we had to call it like this
// button.addEventListener('click', p.showMessage.bind(p))
button.addEventListener('click', p.showMessage)

interface ValidatorConfig {
    [property: string]: {
        [validateProp: string]: string[]
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    };
}
 
function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    };
}

function validate(obj: any) {
    const objValiatorConfig = registeredValidators[obj.constructor.name]
    // If we find no config we want to return that it is valid
    if (!objValiatorConfig) {
        return true; 
    }

    let isValid = true;
    for (const prop in objValiatorConfig){
        for (const validator of objValiatorConfig[prop]){
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;   
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @Required
    price:  number;

    constructor(t: string, p: number){
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price)

    if (!validate(createdCourse)){
        throw new Error('User Input incorrect. Please choose other values!')
    }

    console.log(createdCourse)
})
