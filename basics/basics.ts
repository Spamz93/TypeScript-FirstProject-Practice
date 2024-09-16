//primitives: number, string, boolean
// arrays, obj
// function types, params,

// Primitives

let age: number

age =  12

let userName: string

let isInstructor: boolean

// more complex types

let hobbies: string[];
hobbies = ['Sports', 'Cooking']

let person: {
    name: string;
    age: number;
};

person = {
    name: 'Max',
    age: 32
};

// person = {
//     isEmployee: true
// }

let people: {
    name: string;
    age: number;
}[]

// type inference

let course = 'React - The Complete Guide'

// course = 12341