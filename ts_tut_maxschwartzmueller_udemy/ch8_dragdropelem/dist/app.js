"use strict";
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
    submitHandler(event) {
        event.preventDefault();
        console.log(this.titleInputElem.value);
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
    attach() {
        this.hostElem.insertAdjacentElement('afterbegin', this.element);
    }
}
const prjInput = new ProjectInput();
//# sourceMappingURL=app.js.map