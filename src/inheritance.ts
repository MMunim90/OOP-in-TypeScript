//* Inheritance: a Manager is an Employee with an additional responsibility.

class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  get baseSalary() : number {
    return this._baseSalary
  }

  set baseSalary(newSalary: number){
    if(newSalary < 0) {
      throw new Error("Salary cannot be negative value");
    }
    this._baseSalary = newSalary;
  }

  describe(): string {
    return `${this.name} earns ${this.baseSalary}`;
  }
}

class Manager extends Employee {
    teamMemberCount: number;

    constructor(teamMemberCount: number) {
        this.teamMemberCount = teamMemberCount;
    }
}

const employee = new Employee("Munim", 22000)

console.log(employee.describe());