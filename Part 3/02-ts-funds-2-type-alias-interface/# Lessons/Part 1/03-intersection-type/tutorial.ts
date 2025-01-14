/*
  Intersection Types
  - in TypeScript, an intersection type (TypeA & TypeB) is a way of combining multiple types into one. 
    -> This means that an object of an intersection type will have all the properties of TypeA and all the properties of TypeB. 
    -> It's a way of creating a new type that merges the properties of existing types.


*/

type Book = { id: number; name: string; price: number }

const book1: Book = {
  id: 2,
  name: 'How to Cook a Dragon',
  price: 15,
}

const book2: Book = {
  id: 3,
  name: 'The Secret Life of Unicorns',
  price: 18,
}

// Instead of create a new type alias with discount prop { id: number; name: string; price: number; discount: number } -> we can combine it using "intersection type <&>"  -> add new property to the type alias
type DiscountedBook = Book & { discount: number }

const discountedBook: DiscountedBook = {
  id: 4,
  name: 'Gnomes vs. Goblins: The Ultimate Guide',
  price: 25,
  discount: 0.15,
}
