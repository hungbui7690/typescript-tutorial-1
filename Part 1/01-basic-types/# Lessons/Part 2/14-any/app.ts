/*
  any
  - Sometimes, you may need to store a value in a variable. But you don’t know its type when writing the program. And the unknown value may come from a third-party API or user input.
  - In this case, you want to opt out of the type checking and allow the value to pass through the compile-time check.
  - To do so, you use the any type. The any type allows you to assign a value of any type to a variable. 


*/

// 1. For example:
const json = `{"latitude": 10.11, "longitude":12.12}` // json may come from a third-party API
const currentLocation = JSON.parse(json) // parse JSON to find location
console.log(currentLocation) // any

// In this example, the currentLocation variable is assigned to an object returned by the JSON.parse() function.
// However, when you use the currentLocation variable to access object properties, TypeScript also won’t carry any checks:
console.log(currentLocation.x) // undefined > TS does not check in this case
/*
  The TypeScript compiler doesn’t complain or issue any errors.

  The any type provides you with a way to work with the existing JavaScript codebase. It allows you to gradually opt in and opt out of type-checking during compilation. Therefore, you can use the any type for migrating a JavaScript project over to TypeScript.
*/

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 2. TypeScript any: implicit typing
// If you declare a variable without specifying a type, TypeScript assumes that you use the any type. This feature is called type inference. TypeScript guesses the type of the variable. For example:
let result
// In this example, TypeScript infers the type for you. This practice is called implicit typing.
// Note that to disable implicit typing to the any type, you change the <noImplicitAny> option in the <tsconfig>.json file to true. You’ll learn more about the tsconfig.json in the later tutorial.

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 3. TypeScript any vs. object
// If you declare a variable with the object type, you can also assign it any value.
// However, you cannot call a method on it even if the method exists. For example:
let resultX: any
resultX = 10.123 // any
console.log(resultX.toFixed())
resultX.willExist()
/*
  In this example, the TypeScript compiler doesn’t issue any warning even the willExist() method doesn’t exist at compile time because the willExist() method might be available at runtime.

  If you run the code, you’ll see the following error message on the console window:
    TypeError: result.willExist is not a function
*/

// 4. However, if you change the type of the result variable to object, the TypeScript compiler will issue two errors:
let resultY: object
resultY = 10.123 // err: Type 'number' is not assignable to type 'object'.
resultY.toFixed() // err: Property 'toFixed' does not exist on type 'object'.

/*
  Summary
  - The TypeScript any type allows you to store a value of any type. It instructs the compiler to skip type-checking.
  - Use the any type to store a value that you don’t know its type at the compile-time or when you migrate a JavaScript project over to a TypeScript project.
*/
