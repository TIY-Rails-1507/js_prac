// A closure - the functions is called within the scope it was declared, not the scope in which it was invoked

function multiplier (leftFactor)
{
  function product(rightFactor) { return leftFactor * rightFactor;   }
  
  return product;
}

var doubler = multiplier(2);
var trippler = multiplier(3);

var num = 5;
var doubled = doubler(num);
var trippled = trippler(num);

console.log(num);
console.log(doubled);
console.log(trippled);