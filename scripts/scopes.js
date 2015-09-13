

var milesInKm = 1.6 // milesInKm is a global scope

function convertMilesToKm(distance) {
	return distance * milesInKm;
}

var miles = 10;

var kilometres = convertMilesToKm(miles);

console.log(kilometres);

// Braces don't make a scope
// Only functions create a scope
var x = 10;
if ( x < 100) {
	var y = x;
}

var z = y;
console.log(z);

// 