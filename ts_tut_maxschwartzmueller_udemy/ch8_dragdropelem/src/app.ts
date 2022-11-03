//import $ from "jquery";

class ProjectInput {

    templateElem: HTMLTemplateElement;
    hostElem: HTMLDivElement;
    element: HTMLFormElement;

    constructor() {
        this.templateElem = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElem = document.getElementById('app')! as HTMLDivElement;

        const importNode = document.importNode(this.templateElem.content, true);
        this.element = importNode.firstElementChild! as HTMLFormElement;
        //this.element.className = 'user-input';
        this.element.id = 'user-input';
        this.attach();
    }

    private attach() {
        this.hostElem.insertAdjacentElement('afterbegin', this.element)
    }
}

const prjInput = new ProjectInput();