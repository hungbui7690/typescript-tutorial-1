/*
  Generics - Fundamentals
  - Generics in TypeScript are a way to create reusable code components that work with a variety of types as opposed to a single one.
  - In other words, generics allow you to write a function or a class that can work with any data type. You can think of generics as a kind of variable for types.


*/

// Without Generic
let array1: string[] = ['Apple', 'Banana', 'Mango'] // right click -> type definition -> pic
let array2: number[] = [1, 2, 3]
let array3: boolean[] = [true, false, true]

// Generic -> Array constructor is generic -> we can use < >
let array_1: Array<string> = ['Apple', 'Banana', 'Mango'] // ctrl + click
let array_2: Array<number> = [1, 2, 3]
let array_3: Array<boolean> = [true, false, true]
