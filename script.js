var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var bodyBackground = getComputedStyle(body).getPropertyValue("background-image");
var randomizerButton = document.getElementsByClassName("randomizer");


console.log(bodyBackground);

function initialPageLoad() {
	color1.value = "#FF0000";
	color2.value = "#FFFF00";
	css.textContent = bodyBackground;
}

var changeBackgroundColor = function() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background +";"
}

var changeRandomColor = function(){
	var randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
	color1.value = randomColor1;
	color2.value = randomColor2;
	changeBackgroundColor();
}


initialPageLoad();

color1.addEventListener("input", changeBackgroundColor);

color2.addEventListener("input", changeBackgroundColor);

randomizerButton[0].addEventListener("click", changeRandomColor);