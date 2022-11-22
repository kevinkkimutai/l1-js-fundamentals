// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
const pi = 3.142
printValue(pi)

//TODO: ADD redeclarable variable
var score = 100
var score = 80
score = 99
printValue(score)
 
//TODO: ADD re-assignable but not redeclarable variable
let age = 16

printValue(age)
// var age = 19

// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value
const task = 2.1
printValue(task)

//TODO: Create a redeclarable variable with a boolean value
var isAlligible = true
printValue(isAlligible)

//TODO: Create a re-assignable variable with a string value
let names = "Kevin Kirui"
printValue(names)


// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
const message = 'i am in phase 1.'
const time = "12:00 pm"
const mes = message + time
printValue(mes)


//TODO: Interpolate string (`${}`)
const other = `${message} and the time is ${time}`
printValue(other)

//TODO: Convert to uppercase
const otherVar = `${message} and the time is ${time}`
const otherVariable = otherVar.toUpperCase()
printValue(otherVariable)


//TODO: Convert to lowercase
const otherVari = `${message} and the time is ${time}`
const otherVariableL = otherVari.toLowerCase()
printValue(otherVariableL)

//TODO: Index a specific character
printValue("ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(9))

//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality
const one = 1
const otherOne = '1'
console.log('Strict Equality:', one === otherOne)

//TODO: strict inequality

console.log('Strict inequality:', one !== otherOne)
//TODO: equality
console.log('Loose Equality:', one == otherOne)

//TODO: inequality

console.log('Loose inequality:', one != otherOne)
//TODO: greater than
console.log('Greater than:', 5 > 4)

//TODO: less than
console.log('Less than:', 5 < 4)

//TODO: greater or equal to
console.log('Greater than:', 5 >= 4)

//TODO: less or equal to
console.log('Less than:', 5 <= 4)


// 5.0 CONTROL FLOW
// TODO: if-else 
if(age >=18 && age < 80 ) {
    console.log('Eligible:', true)
}
else if(age >= 16 && age < 18){
    console.log('Eligible chini ya maji:', true)

}
else{
    console.log('Eligible:', false)
}

//TODO: switch-case
const grade = 99
switch(grade){
    case 100:
        console.log('Grade:', "perfect")
        break
    case 80:
        console.log('Grade:', "pass")
        break
    default:
        console.log('Grade:', "retake")    
}




