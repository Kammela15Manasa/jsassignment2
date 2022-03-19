// Find Length
var a = ("Skill Safari")
console.log(a.length)

// UpperCase
console.log(a.toUpperCase())

// Index of a
console.log(a.indexOf("a"))

// Conversation between Iron Man & Captain America
console.log("Tony stark to Captain\" Hi Captain I can Lift Thor's Hammer\"")
console.log("Captain to Tony stark\" Ohh Tony you Kidding , even i cant do that\"")
console.log("Tony stark to Captain\" I have Invented a New Suit which is capable of lifting any Galactic Weapon\"")
console.log("Captain to Tony stark\" Wow That's Awesome Tony\"")
console.log("Tony stark to Captain\" Ok Cap Let me try it First\"")
console.log("Captain to Tony stark\" Ok...Best Of Luck Tony\"")
console.log("Tony stark to Captain\" Shit i'm using full force still unable to Lift it\"")
console.log("Captain to Tony stark\" Good Try...Now My Chance\"")
console.log("Tony stark to Captain\"Ohh come on cap you cant do that\"")
console.log("Captain to Tony stark\"Let's see\"")
console.log("Captain Lifts The Hammer")
console.log("Tony stark to Captain\"Shit...I gotto go before everyone makes fun of me\"")
console.log("THE END")



// Body Mass Index
window.onload = () => {
	let button = document.querySelector("#btn");

	
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {


	let height = parseInt(document
			.querySelector("#height").value);
	let weight = parseInt(document
			.querySelector("#weight").value);
	let result = document.querySelector("#result");
	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";
	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!";
		else {		
		let bmi = (weight / ((height * height)
							/ 10000)).toFixed(2);		
		if (bmi < 18.6) result.innerHTML =
			`Under Weight : <span>${bmi}</span>`;

		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				`Normal : <span>${bmi}</span>`;

		else result.innerHTML =
			`Over Weight : <span>${bmi}</span>`;
	}
}