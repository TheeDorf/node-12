// TODO: Import `maths.js`
const maths = require('./maths.js');
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation= process.argv[2];
const numOne = parseInt (process.argv[3]);
const numTwo = parseInt(process.argv[4]);
console.log(operation);
console.log(numOne);
console.log(numTwo);
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

// function operation(numeOne,numTwo,Operation){
//     let result;
    switch(operation){
        case 'sum':
            console.log("sum" + maths.sum(numOne,numTwo));
            
            break;
        case 'difference':
            console.log("difference" + maths.difference(numOne,numTwo));
            
            break;
        case 'product':
            console.log("product" + maths.product(numOne,numTwo));
           
            break;
        case 'quotient':
            console.log("quotient" + maths.quotient(numOne,numTwo));
            
            break;
        default:
            console.log("invalid");
            break;  
            
    }
    // console.log(`The result of ${operation}ing ${numOne} and ${numTwo} is ${result}`);
