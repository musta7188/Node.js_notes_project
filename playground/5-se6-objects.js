
// Object property shorthand
const name = "Mustafa"

const age = 32

////when property and value has the same name we can just write it once
////instead of {name:name} == {name}
const user = {
  name,
  age,
  location: 'Philadelphia'
}


console.log(user)

////Object destructuring 

const product  = {
  label: ' Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
}


////this is how we can re-assign a new name to the property we destructured (first example label)
//// sales price is setting a default value in case there is no one 
const {label: productLabel, price, stock, salePrice = 5} = product



////here we are destructuring the object we passing before to give it tot he function 
const transaction = (type, {label, stock = 0, price} = {}) => {

}
////passing the object 
transaction('order', product)