// 1.Converting string variables into Number
let userId="user112"
let userPass="333"


// console.log(typeof(userId))
// console.log(typeof(userPass))


let valueInNumber = Number(userPass)
// console.log(typeof(valueInNumber)) 

// console.log(valueInNumber)
// 2.
let userPass2="333abc"

// console.log(typeof(userPass2))

let valueInNumber2 = Number(userPass2)
// console.log(typeof(valueInNumber2))
// console.log(valueInNumber2)//the output is Nan so its not reliable to always
//Sometime values convert if things are right sometime don't

// let score = null
// console.log(score)
// console.log(typeof(score))
// //converting to number

// let valueInNumber3 = Number(score)
// console.log(valueInNumber3)
// console.log(typeof(valueInNumber3))

let score = undefined
// console.log(score)
// console.log(typeof(score))
// //converting to number

// let valueInNumber3 = Number(score)
// console.log(valueInNumber3)
// console.log(typeof(valueInNumber3))


// Notes
// "33" => 33
// "33sjf" => NaN
// true = 1, false = 0

// let isLoggedIn = 1  //1 is true, 0 is false
// let isLoggedIn = ""  // "" =>false
let isLoggedIn = "Deepak"  //"Deepak" => true

 let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

let someNumber = 33
 let stringNumber = String(someNumber)

 console.log(stringNumber)
 console.log(typeof(stringNumber))
//  thus ,this will convert Number to String