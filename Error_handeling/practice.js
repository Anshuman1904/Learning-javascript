// foctorial 
/*let number = 5
let result = 1

const factorial = (num) => {
    for (let i=2; i<=num; i++)
        result *= i
return result;
}
console.log("The factorial of the number is ",factorial(number))*/

//remove vowels
/*let str = "Hello myself Anshuman sharma"
const remove = (vowels) => {
    return str.replace(/[aeiouAEIOU]/g, '')
}
console.log("The modified string is ", remove(str))*/


//Count occurrences of a specific character in a string

/*let str = "Hello I am Anshuman Sharma"

const occurrence = (value,char) => {
    let count = 0
    value = value.toLowerCase();
    char = char.toLowerCase();

    for (let i=0; i<value.length; i++) {
        if (value[i] === char) {
            count++
        }
    }
    return count
}
console.log("The occurence is ", occurrence(str,'a'))*/

//reverse the words
/*let str = "Hello the people of ahemdabad"

const reversestr = (value) => {
    return value.split(' ').reverse().join(' ')
}
console.log("The reverse of the given string is ", reversestr(str))*/


// to convert the string to title case 
/*let str = "hello myself anshuman sharma"
const titlecase = (value) => {
    return value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
console.log("The title case of the string is ", titlecase(str))*/


//check if all the elements are even 
/*let arr = [4,8,7]

const alleven = (value) => {
    for (let i=0; i<value.length; i++) {
        if (value[i]%2 !== 0) {
            return false
        }
    }
    return true
}
console.log("All the elements in the array is even ", alleven(arr))*/


// second largest number in an array 
let arr = [34,89,88,76]
let largest = -Infinity
let second = -Infinity

const secondlargest = (num) => {
    for(let i=0; i<num.length; i++) {
        let value = num[i]
        if (value>largest) {
            second = largest 
            largest = value
        }else if (value>second && value<largest) {
            second = value
        }
    }
    return second 
}
console.log("The second largest number of the array is ", secondlargest(arr))