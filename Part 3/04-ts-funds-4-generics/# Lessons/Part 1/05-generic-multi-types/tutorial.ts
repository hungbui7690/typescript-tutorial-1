/*
  Generics - Multiple Types
  - more params 
    => T, U, V...


*/

function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2]
}

// Usage
let result = pair<number, string>(123, 'Hello')
console.log(result) // [123, "Hello"]
