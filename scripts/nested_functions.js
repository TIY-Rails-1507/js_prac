

function circumference (radius)
{
  // nested function:
  function diameter(rad) { return 2*rad;   }
  
  // call the nested function
  return Math.PI * diameter(radius);
}

var result = circumference(10);
console.log(result);