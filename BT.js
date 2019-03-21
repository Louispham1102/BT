function plus (x, y) {
    return x + y;
}

function subs (x, y) {
    return x - y;
}

function mult (x, y) {
    return x * y;
}

function divi(x, y) {
    if (y == 0) {
         console.log("Error");
    } else
    return x / y;
}

var operations = {
    '+': plus,
    '-': subs,
    '*': mult,
    '/': div
}

var calculate = function(a, b, operation){
   return operations[operation](a, b);
}

console.log(calculate(10,2, '/'));
