"use strict";
class ProjectInput {
    constructor() {
        this.templateElem = document.getElementById('project-input');
        this.hostElem = document.getElementById('app');
        const importNode = document.importNode(this.templateElem.content, true);
        this.element = importNode.firstElementChild;
        this.element.id = 'user-input';
        this.attach();
    }
    attach() {
        this.hostElem.insertAdjacentElement('afterbegin', this.element);
    }
}
const prjInput = new ProjectInput();
//# sourceMappingURL=app.js.map