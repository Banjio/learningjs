//import $ from "jquery";

// This is the signature of a method decorator (Function of a class), we need to pass three values to it, target: any (Origninal method), name: string (Name of the method) and descriptor: PropertyDescriptor (Description of the method) -> For the autobind however we only need the descriptor thus we cann mark them as _ (This tells ts to ignore them), Alternatively we can deactivate NoUnusedParameters 
// By overriding the descriptor we can automatically bind the method itself to an instance of a class
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor){
    const origMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        enumerable: false,
        configurable: true,
        get(){
            const boundFunc = origMethod.bind(this);
            return boundFunc;
        }
    }
    return adjDescriptor;
}

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
    @Autobind
    private submitHandler(event: Event){
        // This prevents that a default event can be triggered (submitting an empty form)
        event.preventDefault();
        console.log(this.titleInputElem.value);
    }

    private configure(){    
        this.element.addEventListener('submit', this.submitHandler);
    }   

    private attach() {
        this.hostElem.insertAdjacentElement('afterbegin', this.element)
    }
}

const prjInput = new ProjectInput();

