// Utility Types

// Partial

interface User {
    id: string;
    name: string;
    email: string;
}

// interface OptionalUser{
//     id?: string;
//     name?: string;
//     email?: string;
// }

// using partial instade of interface

type PartialUser = Partial<User>

const updateProfile = (id: string, data: Partial<User>) => {

};

updateProfile("id-1", {name: "munim"});


// Required

interface Config {
    apiKey?: string;
    timeout?: number;
}

const initialize = (config: Required<Config>) => {

};

initialize({apiKey : "api-key", timeout: 30000});


// Pick

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

type ProductPreview = Pick<Product, "name" | "description">;

const preview: ProductPreview = {
    name: "ABC",
    description: "EFG",
};


// Omit

interface Employee {
    id: number;
    name: string;
    salary: number;
    nid: string;
}

type PublicEmployee = Omit<Employee, "salary" | "nid">

const directoryEntry: PublicEmployee = {
    id: 42,
    name: "Bob",
};


// Record

type Environment = "development" | "staging" | "production";

// interface IEnvironment {
//     development: string,
//     staging: string,
//     production: string
// }

// using record intade of interface

const apiUrls: Record<Environment, string> = {
    development: "http://localhost:3000",
    staging: "https://staging.api.com",
    production: "https://api.com",
};
