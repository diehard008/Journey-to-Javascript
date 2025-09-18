// 1.Converting string variables into Number
let userId="user112"
let userPass="333"


// console.log(typeof(userId))
// console.log(typeof(userPass))


let valueInNumber = Number(userPass)
// console.log(typeof(valueInNumber)) 

console.log(valueInNumber)
// 2.
let userPass2="333abc"

console.log(typeof(userPass2))

let valueInNumber2 = Number(userPass2)
console.log(typeof(valueInNumber2))
console.log(valueInNumber2)//the output is Nan so its not reliable to always
//Sometime values convert if things are right sometime don't

 