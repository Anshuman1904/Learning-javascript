/*console.log(Math.PI)
console.log(Math.max(77,99,80,83))
console.log(Math.min(99,82,32,22))
console.log(Math.round(1.2))
console.log(Math.floor(5.6)) // floor print the closest small number like in 5.6 closest small number is 5
console.log(Math.ceil(5.6)) */ // ceil print the closest large number like in 5.6 it will print 6

/*let curdate =  new Date()
let date = new Date('July 20 2024 13:59');
console.log(date.toString());*/

let curdate = new Date()
let options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
}
let formatteddate = curdate.toLocaleString('en-In', options)
console.log("Formatted date:", formatteddate)
// in this learned about two in built object math and date there are many more use of math and date which you have to go throught 
// google