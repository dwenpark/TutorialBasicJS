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

function plus(a, b) {
	console.log(a + b);
}

plus(5, 5)

const calculator = {
	add: function (a, b) {
		return (a + b);
	},
	minus: function (a, b) {
		return (a - b);
	},
	times: function (a, b) {
		return (a * b);
	},
	divide: function (a, b) {
		return (a / b);
	},
	power: function (a, b) {
		return (a ** b);
	},

}

const age = 96;

function calculateKrAge(ageOfForeigner) {
	return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);