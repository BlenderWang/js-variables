a = 2;  //global variable a assigned
const b = 5;    //global variable b declared and assigned

const sum = function(a, b) {    //a & b becomes declared with value of undefined
    return a + b;
};  //7

if(b > a) { //both variable declared and assigned
    let multResult = mult(a, b);    //block scope let variable multResult declared and assigned
    finalResult = multResult;   //this line of code is executed
}else {
    let sumResult = sum(a, b);
    finalResult = sumResult;
}

var a;

function mult(a, b) {
    result = a * b;
    return result;
    var result;
}

console.log(finalResult);   //find finalResult in the global scope and the result is 10