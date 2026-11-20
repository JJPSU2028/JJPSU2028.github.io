
function Submit()
{
	let name = document.getElementById("name").value;
	let message = document.getElementById("message").value;
	let color = document.getElementById("colors").value;

	document.getElementById("greeting").innerHTML = "Hello " + name + "!";
	
	document.getElementById("messageDisplay").innerHTML = message;
	
    document.body.style.backgroundColor = color;

}