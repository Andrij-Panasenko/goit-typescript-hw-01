// type User = {
//    name: string;
//    age: number | string,
// };

// явне визначення типів
// let tod: number = 100;

// let userName: string = "bob";
// let isActive: boolean = false;
// let empty: null = null;
// let undf: undefined = undefined;

// неявне визначення типів
// let age = 10;

// age = 12;

//визначення типів в складних типах данних
// const numbers: number[] = [1, 2, 3, 4, 5, 6];

// numbers.push(12);

// const user: User = {
//   name: "bob",
//   age: 10,
// };


// type size = "smal" | "medium" | "large";
// enum Sizes {
//    small = "small",
//    medium = "medium",
//    large="large",
// }
// const button: size = "large";
// const buttonA: Sizes = Sizes.large;


//Типізація функцій                      //типізація повернення з ф-ція
// function add(num1: number, num2: number): string {
//    return `${num1} + ${num2}`;
// }

// console.log(add(2, 3));

                                         //без return
// function add(num1: number, num2: number): void {
//    console.log(num1 + num2);
// }

// add(23,32)

// type User = {
//    name: string;
// }
// function getHello(user: User): void {
//    console.log('Hello', user.name)
// }


//тип return(-y)
// type User = {
//    name: string,
//    age: number,
//    hobbie:string,
// }
// function userConstructor(name: string, age: number, hobbie: string): User {
//    return {
//       name, age, hobbie,
//    }
// }




// type Car = {
//    color: string,
//    price: number,
//    currency: string,
//    start: () => {}
// }
// const Car = {
//    color: "red",
//    price: 1000,
//    currency: "UAH",
//    start() {
//       console.log("Start")
//    }
// }

type User = { 
   name: string;
   age: number;
   role?: string; //опційна типізація
}

const admin: User = {
   name: "jou",
   age: 12,
   role: "admin"
}

const user: User = {
   name: 'lolo',
   age: 44,
   
}