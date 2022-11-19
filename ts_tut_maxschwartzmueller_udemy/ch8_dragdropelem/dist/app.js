"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Autobind(_, _2, descriptor) {
    const origMethod = descriptor.value;
    const adjDescriptor = {
        enumerable: false,
        configurable: true,
        get() {
            const boundFunc = origMethod.bind(this);
            return boundFunc;
        }
    };
    return adjDescriptor;
}
function Validate(target, name, position) {
    console.log(target, name, position);
}
class ProjectInput {
    constructor() {
        this.templateElem = document.getElementById('project-input');
        this.hostElem = document.getElementById('app');
        const importNode = document.importNode(this.templateElem.content, true);
        this.element = importNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInputElem = this.element.querySelector('#title');
        this.descriptionInputElem = this.element.querySelector('#description');
        this.peopleInputElem = this.element.querySelector('#people');
        this.configure();
        this.attach();
    }
    gatherUserInput() {
        const enteredTitle = this.titleInputElem.value;
        const enteredDesc = this.descriptionInputElem.value;
        const entererdPeople = this.peopleInputElem.value;
        if (enteredTitle.trim().length === 0 ||
            enteredDesc.trim().length === 0 ||
            entererdPeople.trim().length === 0) {
            alert('Invalid input please try again!');
        }
        else {
            return [enteredTitle, enteredDesc, +entererdPeople];
        }
    }
    clearInputs() {
        this.titleInputElem.value = '';
        this.descriptionInputElem.value = '';
        this.peopleInputElem.value = '';
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            console.log(title, desc, people);
            this.clearInputs();
        }
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }
    attach() {
        this.hostElem.insertAdjacentElement('afterbegin', this.element);
    }
    testFunc(n) {
        return n * n;
    }
}
__decorate([
    Autobind
], ProjectInput.prototype, "submitHandler", null);
__decorate([
    __param(0, Validate)
], ProjectInput.prototype, "testFunc", null);
const prjInput = new ProjectInput();
prjInput.testFunc(4);
//# sourceMappingURL=app.js.map