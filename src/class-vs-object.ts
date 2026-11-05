class Employee {
    name: string;
    baseSalary: number;

    constructor(name: string, baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary
    }
}

const employee = new Employee("Munim", 22000);
const employee2 = new Employee("Rahim", 25000);

console.log(employee);
console.log(employee2);
console.log(employee instanceof Employee)