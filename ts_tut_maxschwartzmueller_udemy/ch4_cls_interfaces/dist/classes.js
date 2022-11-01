"use strict";
class Departement {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static createEmployee(name) {
        return { name: name };
    }
}
Departement.fiscalYear = 2020;
class ITDepartement extends Departement {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log("IT Departement ID :" + this.id);
    }
}
class AccountingDepartement extends Departement {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this._lastReport = reports[0];
    }
    get lastReport() {
        if (this._lastReport) {
            return this._lastReport;
        }
        throw new Error('No report found.');
    }
    set lastReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this._lastReport = value;
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    describe() {
        console.log("This Accountment Departement ID: " + this.id);
    }
    static getInstance() {
        if (AccountingDepartement.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartement('d2', []);
        return this.instance;
    }
}
const accountingIT = new ITDepartement("d1", ['Max']);
const empl1 = Departement.createEmployee('Max');
console.log(empl1, Departement.fiscalYear);
console.log(accountingIT);
accountingIT.describe();
accountingIT.addEmployee('Max');
accountingIT.addEmployee('Manu');
accountingIT.printEmployeeInformation();
const accounting = AccountingDepartement.getInstance();
accounting.lastReport = 'Year Added';
accounting.addReport('Something went wrong ...');
console.log(accounting.lastReport);
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printReports();
accounting.describe();
//# sourceMappingURL=classes.js.map