$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
function getInfo() {
	var birthMonth = document.getElementById("month").value
	var birthDate = document.getElementById("date").value

	if (birthMonth == "march") {
		if (birthDate <=20)
			document.getElementById("poop").innerHTML = "<h1>Pisces</h1>";
		else document.getElementById("poop").innerHTML = "<h1>Aries</h1>";
	}
	else if (birthMonth == "april") {
		if (birthDate <=19)
			document.getElementById("poop").innerHTML = "<h1>Aries</h1>";
		else document.getElementById("poop").innerHTML = "<h1>Taurus</h1>";
	}
	else if (birthMonth == "may") {
		if (birthDate <=20)
			document.getElementById("poop").innerHTML = "<h1>Taurus</h1>";
		else document.getElementById("poop").innerHTML = "<h1>Gemini</h1>";
	}
	else if (birthMonth == "june") {
		if (birthDate <=20)
			document.getElementById("poop").innerHTML = "<h1>Gemini</h1>";
		else document.getElementById("poop").innerHTML = "<h1>Cancer</h1>";
	}
	else if (birthMonth == "july") {
		if (birthDate <=21)
			document.getElementById("poop").innerHTML = "<h1>Cancer</h1>";
		else document.getElementById("poop").innerHTML = "<h1>Leo</h1>";
	}
	else if (birthMonth == "august") {
		if (birthDate <=22)
			document.getElementById("poop").innerHTML = "<h1>Leo</h1>";
		else document.getElementById("poop").innerHTML = "<h1>Virgo</h1>";
	}
	else if (birthMonth == "september") {
		if (birthDate <=22)
			document.getElementById("poop").innerHTML = "<h1>Virgo</h1>";
		else document.getElementById("poop").innerHTML = "<h1>Libra</h1>";
	}
	else if (birthMonth == "october") {
		if (birthDate <=22)
			document.getElementById("poop").innerHTML = "<h1>Libra</h1>";
		else document.getElementById("poop").innerHTML = "<h1>Scorpio</h1>";
	}
	else if (birthMonth == "november") {
		if (birthDate <=19)
			document.getElementById("poop").innerHTML = "<h1>Scorpio</h1>";
		else document.getElementById("poop").innerHTML = "<h1>Sagittarius</h1>";
	}
	else if (birthMonth == "december") {
		if (birthDate <=20)
			document.getElementById("poop").innerHTML = "<h1>Sagittarius</h1>";
		else document.getElementById("poop").innerHTML = "<h1>Capricorn</h1>";
	}
	else if (birthMonth == "january") {
		if (birthDate <=19)
			document.getElementById("poop").innerHTML = "<h1>Capricorn</h1>";
		else document.getElementById("poop").innerHTML = "<h1>Aquarius</h1>";
	}
	else if (birthMonth == "february") {
		if (birthDate <=18)
			document.getElementById("poop").innerHTML = "<h1>Aquarius</h1>";
		else document.getElementById("poop").innerHTML = "<h1>Pisces</h1>";
	}
	
}





