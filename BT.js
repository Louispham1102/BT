function add (a, b) {
    return a + b;
}

function sub (a, b) {
    return a - b;
}

function mul (a, b) {
    return a * b;
}

function div(a, b) {
    if (y == 0) {
         console.log("Error");
    } else
    return a / b;
}

var operations = {
    '+': add,
    '-': sub,
    '*': mul,
    '/': div
}

var calculate = function(a, b, operation){
   return operations[operation](a, b);
}

console.log(calculate(10,2, '/'));
