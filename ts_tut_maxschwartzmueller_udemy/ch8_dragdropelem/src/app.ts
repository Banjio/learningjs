//import $ from "jquery";

class ProjectInput {

    templateElem: HTMLTemplateElement;
    hostElem: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElem: HTMLInputElement;
    descriptionInputElem: HTMLInputElement;
    peopleInputElem: HTMLInputElement;


    constructor() {
        this.templateElem = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElem = document.getElementById('app')! as HTMLDivElement;

        const importNode = document.importNode(this.templateElem.content, true);
        this.element = importNode.firstElementChild! as HTMLFormElement;
        //this.element.className = 'user-input';
        this.element.id = 'user-input';

        // This is the same as using as HTMLInputElement
        this.titleInputElem = <HTMLInputElement>this.element.querySelector('#title');
        this.descriptionInputElem = <HTMLInputElement>this.element.querySelector('#description');
        this.peopleInputElem = <HTMLInputElement>this.element.querySelector('#people');
        
        this.configure()

        this.attach();
    }

    private submitHandler(event: Event){
        // This prevents that a default event can be triggered (submitting an empty form)
        event.preventDefault();
        console.log(this.titleInputElem.value);
    }

    private configure(){    
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }   

    private attach() {
        this.hostElem.insertAdjacentElement('afterbegin', this.element)
    }
}

const prjInput = new ProjectInput();