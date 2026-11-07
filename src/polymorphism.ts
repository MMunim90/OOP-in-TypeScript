// Polymorphism: different employees respond differently to the same method call

class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative value");
    }
    this._baseSalary = newSalary;
  }

  calculatePay(taxRate: number) {
    return this.baseSalary - this.baseSalary * taxRate;
  }
}

// if a parent class and child class constructor property was same then there is no need write separate constructor in the child class.
class Manager extends Employee {
  override calculatePay() {
    return this.baseSalary + 5000;
  }
}

class Developer extends Employee {
  constructor(
    name: string,
    _baseSalary: number,
    public type: string
  ) {
    super(name, _baseSalary);
  }

  override calculatePay(taxRate: number){
    return (this.baseSalary + 3000) - (this.baseSalary * taxRate);
  }
}

const employee = new Employee("Munim", 20000);
console.log(employee.calculatePay(0.05));

const manager = new Manager("Karim", 20000);
console.log(manager.calculatePay());

const developer = new Developer("Rajib", 20000, "Front-End");
console.log(developer.calculatePay(0.03));
