/*
  Tuples
  - In TypeScript, a Tuple is a special type that allows you to create an array where the type of a fixed number of elements is known, but not need be the same 
    -> in other words it's an array with fixed length and ordered with fixed types
      # This is useful when you want to group different types of values together.

  - Tuples are useful when you want to return multiple values from a function.

  - By default, tuples in TypeScript are not read-only. 
    -> This means you can modify the values of the elements in the tuple.
    -> However, TypeScript does provide a way to make tuples read-only using the readonly keyword.


*/

// 1. create tuple
let person: [string, number, number] = ['john', 25, 9.0] // fixed length + fixed type + fixed order
console.log(person[0]) // john
console.log(person[1]) // 25
console.log(person[2]) // 9.0

// 2. optional
let john: [string, number?] = ['john']

// 3. tuple in function
function getPerson(): [string, number] {
  return ['john', 25]
}
let randomPerson = getPerson()
console.log(randomPerson[0]) // john
console.log(randomPerson[1]) // 25

// 4. Gotcha: TS does not check the tuple when we use .push()
let susan: [string, number] = ['susan', 25]
susan[0] = 'bob'
susan.push('some random value')
console.log('susan: ', susan)

let date: [number, number, number] = [12, 12, 2024]
date.push(12)
date.push(12)
date.push(12)
date.push(12)
console.log('date: ', date)

// 4. To prevent pushing data to tuple -> after "readonly", we cannot use push(), pop()...
let tina: readonly [string, number] = ['tina', 25]
// tina[0] = 'bob'
// tina.push('some random value');
console.log('tina: ', tina)
