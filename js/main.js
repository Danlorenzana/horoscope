$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
function getInfo() {
	var birthMonth = document.getElementById("month").value
	var birthDate = document.getElementById("date").value

	if (birthMonth == "march") {
		if (birthDate <=20)
			console.log("Pisces");
		else console.log("Aries");
	}
	else if (birthMonth == "april") {
		if (birthDate <=19)
			console.log("Aries");
		else console.log("Taurus");
	}
	else if (birthMonth == "may") {
		if (birthDate <=20)
			console.log("Taurus");
		else console.log("Gemini");
	}
	else if (birthMonth == "june") {
		if (birthDate <=20)
			console.log("Gemini");
		else console.log("Cancer");
	}
	else if (birthMonth == "july") {
		if (birthDate <=21)
			console.log("Cancer");
		else console.log("Leo");
	}
	else if (birthMonth == "august") {
		if (birthDate <=22)
			console.log("Leo");
		else console.log("Virgo");
	}
	else if (birthMonth == "september") {
		if (birthDate <=22)
			console.log("Virgo");
		else console.log("Libra");
	}
	else if (birthMonth == "october") {
		if (birthDate <=22)
			console.log("Libra");
		else console.log("Scorpio");
	}
	else if (birthMonth == "november") {
		if (birthDate <=19)
			console.log("Scorpio");
		else console.log("Sagittarius");
	}
	else if (birthMonth == "december") {
		if (birthDate <=20)
			console.log("Sagittarius");
		else console.log("Capricorn");
	}
	else if (birthMonth == "january") {
		if (birthDate <=19)
			console.log("Capricorn");
		else console.log("Aquarius");
	}
	else if (birthMonth == "february") {
		if (birthDate <=18)
			console.log("Aquairus");
		else console.log("Pisces");
	}
	
}



// all opt-ins should be included here 