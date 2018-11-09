let b = 5;  //global scope let variable b is declared and assigned a value of 5

a = b;  //assign b as a value to a

{
  let c = a;    //in the block level c is declared and assigned the value of a
}

var a = 1;  //global scope declare variable a and assign a value of 1 which is overwritten by a = b

var c;  //global scope declare variable c

console.log(a, b, c); //1, 5, undefined