var length = parseFloat(prompt("What is the length of your ceiling?"));
var width = parseFloat(prompt("What is the width of your ceiling?"));
var squareFeet = length * width;
if (isNaN(squareFeet)) {
	console.log("You dun goofed. No paint for you. I'm afraid you would wind up eating it or something. Go home, you're drunk.");
}
else {
	console.log("How many square feet do you have to paint?: "+squareFeet);
	var gallons = Math.ceil(squareFeet/350);
	console.log("You will need to purchase "+gallons+" gallons of paint to cover "+squareFeet+" square feet.");
}
