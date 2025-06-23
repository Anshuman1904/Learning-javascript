// two types of error are there 
// 1) compile time error

// syntax error -  below the syntax of the code is wrong thus its a syntax error it is done before the run time 
// during parsing 
//console.log("Hi";

// 2) run time error
// caused during the run time/ we get to know about it after we run the code 
//console.log(x); in this x is not defined so it will cause a reference error when we will run it so its a run time error

//Error Handeling
// for error handeling we use try catch method in this inside try we write the code where error can be there and in catch we write 
// want we to do with error liike retry or etc 

/*try {
    console.log("error handling ")
    console.log(x)
    console.log("The error hadling is done ")

}
catch (err) {
    console.log("The try catch is working")
    console.log("your code error is ", err)// this line will print whatever the error is err is the varible assign in catch 
}
finally {
    console.log("you have successfully learned the try cath method and finally blovk also")
}*/

// we can also throw our own error 
try {
    console.log(x)
}
catch(err) {
throw new Error("you havent declare the variable ")
}