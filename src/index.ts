// явне визначення типів
let tod: number = 100;

let userName: string = "bob";
let isActive: boolean = false;
let empty: null = null;
let undf: undefined = undefined;

// неявне визначення типів
let age = 10;

age = 12


//визначення типів в складних типах данних
const numbers: number[] = [1, 2, 3, 4, 5, 6];

numbers.push(12)

type User = { name: string, age: number }
const user: User = {
   name: "bob",
   age: 10,
}