// 1) receivesAFunction
function receivesAFunction(callback) {
    callback();}
// test
receivesAFunction(() => console.log("Callback function called!"));

// 2) returnsANamedFunction
function returnsANamedFunction() {
    return function namedFunction() {
        console.log("This is a named function.");
    };
}
// test
const namedFunc = returnsANamedFunction();
namedFunc(); 

// 3) returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function.");
    };
}
// test
const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc(); 