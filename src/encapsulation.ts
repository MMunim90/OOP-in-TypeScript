//* Encapsulation: protect a state and change it through methods.

//* Access Modifier
//? public
//? private
//? protected
//? readonly


// this is typescript shortcut to make class with constructor
// class Employee {
//   constructor(
//     public name: string,
//     private _baseSalary: number,
//   ) {}
// }

// of this class
// class Employee {
//     public name: string;
//     private baseSalary: number;

//     constructor(name: string, baseSalary: number){
//         this.name = name;
//         this.baseSalary = baseSalary
//     }
// }


// this is typescript shortcut to make class with constructor
class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  // new way to write the get and set method

  get baseSalary() : number {
    return this._baseSalary
  }

  get salaryWithBonus(): number {
    return this._baseSalary + 5000;
  }

  set baseSalary(newSalary: number){
    if(newSalary < 0) {
      throw new Error("Salary cannot be negative value");
    }
    this._baseSalary = newSalary;
  }

  // older way to write the get and set method

  // getBaseSalary() : number {
  //   return this._baseSalary
  // }

  // getSalaryWithBonus(): number {
  //   return this._baseSalary + 5000;
  // }

  // setBaseSalary(newSalary: number){
  //   if(newSalary < 0) {
  //     throw new Error("Salary cannot be negative value");
  //   }
  //   this._baseSalary = newSalary;
  // }
}

const employee = new Employee("Munim", 22000);
const employee2 = new Employee("Rahim", 25000);


// first way to call the get and set method

console.log(employee.baseSalary);
employee.baseSalary = 3300;
console.log(employee.salaryWithBonus);


// second way to call the get and set method

// console.log(employee.getBaseSalary());
// employee.setBaseSalary(3300);
// console.log(employee.getSalaryWithBonus());
