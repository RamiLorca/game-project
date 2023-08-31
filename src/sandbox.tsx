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


//function types
let greet = () => {
    console.log('hello world');
}

//below technically possible but removes type safety so not recommended 
let greet2: Function;
greet = () => {
    console.log('hello world');
}

//below function includes optional parameter in c with "?", which also has union types
//note: if c not used in code, TS throws error
const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b);

    if(c){
       console.log(c); 
    }
}

//below is another way to make c optional parameter.
//if nothing is passed for c, the default value will be 10. If something is passed, then it overrides the default value.
const add2 = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b);

    if(c){
       console.log(c); 
    }
}

//below, even tho "result" outside of function, TS will infer its type is number, since the parameters of minus were numbers
const minus = (a: number, b: number) => {
    return a + b;
}

let result = minus(10, 7);

//however, TS also lets you explicitly name type of returned value
const minus2 = (a: number, b: number): number => {
    return a + b;
}

//type aliases - use when you have to use the same parameters in multiple functions, save time
type StringOrNum = string | number;

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} had a uid of ${uid}`);
}

//type alias can also be used for object, and even have other aliases within it
type objWithName = { name: string, uid: StringOrNum };

const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

//function signature - describes structure of fundtion

