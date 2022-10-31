abstract class Departement {
    // private id: string;
    // private name: string ;
    static fiscalYear = 2020
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) { 
        //this.name = n;
    }

    abstract describe(this: Departement): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

    static createEmployee(name: string){
        return {name: name}
    }
}

class ITDepartement extends Departement {
    // We an only use the shorthand initilization. But this is to make clear that we have to use super before all other this calls.
    admins: string[];

    constructor(id: string, admins: string[]){
        super(id, 'IT');
        this.admins = admins;
    }

    describe(this: ITDepartement): void {
        console.log("IT Departement ID :" + this.id)
    }
}

class AccountingDepartement extends Departement {
    // We an only use the shorthand initilization. But this is to make clear that we have to use super before all other this calls.
    private _lastReport: string;
    private static instance: AccountingDepartement;

    get lastReport(){
        if(this._lastReport){
            return this._lastReport;
        }
        throw new Error('No report found.')
        //return "Test";
    }

    set lastReport(value: string){
        if(!value){
            throw  new Error('Please pass in a valid value!')
        }
        this._lastReport = value
    }

    private constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
        // This does work in the tutorial but not my code. 
        this._lastReport = reports[0];
    }

    addEmployee(name: string){
        if(name === 'Max'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string){
        this.reports.push(text);
    }

    printReports(){
        console.log(this.reports);
    }

    describe(this: AccountingDepartement): void {
        console.log("This Accountment Departement ID: " + this.id)
    }
    static getInstance() {
        if(AccountingDepartement.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartement('d2', []);
        return this.instance;
    }
}

const accountingIT = new ITDepartement("d1", ['Max']);

const empl1 = Departement.createEmployee('Max')
console.log(empl1, Departement.fiscalYear)


console.log(accountingIT)

//console.log(accounting)
accountingIT.describe();
//accounting.employees[2] = 'Anna' 
//const accountingCp = { describe: accounting.describe };
//accountingCp.describe();

accountingIT.addEmployee('Max');
accountingIT.addEmployee('Manu')
accountingIT.printEmployeeInformation()


//const accounting = new AccountingDepartement('d2', [])
const accounting = AccountingDepartement.getInstance() 
accounting.lastReport = 'Year Added' 
accounting.addReport('Something went wrong ...')
console.log(accounting.lastReport)

accounting.addEmployee('Max')
accounting.addEmployee('Manu')
accounting.printReports()

accounting.describe()

