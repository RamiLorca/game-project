//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

//arrays
let ninjas: string[] = [];
ninjas.push("shaun");

//union types -- like saying "could be one of these types". Parentheses only needed when using arrays
let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(25);
mixed.push(false);

let uid: string | number;
uid = "123";
uid = 123;

//objects
let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };

//allowed, since arrays are technically a type of object
ninjaOne = ["yoshi", 30];

//here we set the type to object while specifying what properties are expected in the object
//whatever new value is assigned will need to have these same properties
let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

ninjaTwo = { name: "mario", age: 20, beltColor: "black" };

//any types - can be any type and later changed to other type
//however, this cancels out most of the benefits of TS, essentially going back to JS
let numberOfNinjas: any = 25;
numberOfNinjas = true;
numberOfNinjas = "hello";
numberOfNinjas = { name: "luigi", age: 32 };

//any can be used with arrays like this:
let mixed2: any[] = [];
mixed2.push(5);
mixed2.push("hello");
mixed2.push(true);

//any can be used with objects like this:
//notice colon after ninja. The type here is an object which contains two variables of type any
let ninja: { name: any; age: any };
ninja = { name: "yoshi", age: 25 };
