// write a function to write out the vowels of a string

/*let str = "Hi i am Anshuman sharma"
const newstr = (value) => {
    return value.replace(/[aeiouAEIOU]/g, '');
}
console.log(newstr(str))*/

/*let num = 5
const factorial = (value) => {
    let result = 1
    for (let i=1; i<=value; i++) {
        result *= i
    }
    return result 
}
console.log("The Factorial of the entered number is ", factorial(num))*/

let str = "Myself Anshuman"
const reversestr = (newstr) => {
    return newstr.split(' ').reverse().join(' ')
}
console.log(reversestr(str))