
var person = {
	firstName: "Bob",
	lastName: "Smith"
};

console.log(person.firstName);

console.log(person.age);

person.age = 20;

console.log(person.age);
console.log(person['age']);



// Alternative object syntax 

function Foo(){
    this.confusing = 'hell yeah';
}
var myObject = new Foo();
console.log(myObject.confusing);