const a = 5;
const b = 2;
let myName = "dwen";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(myName);

myName = "JG";
console.log(myName);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

const player = {
	name: "dwen",
	age: 30,
	fat: true
}

player.age = 29

console.log(player)

function sayHello(nameOfPerson, age) {
	console.log("Hello" + nameOfPerson + "I'm" + age);
}

sayHello("dwen", 30)