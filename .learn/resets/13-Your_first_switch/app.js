function getColor(selection)
{
	let color;
	switch (Number(selection)){
		case blue:
			color = "blue";
			console.log("azul");
			break;
		case red:
			color = "red";
			console.log("rojo");
			break;
		case green:
			color = "green";
			console.log("verde");
			break;
		default:
			console.log("no computa ");
			return false;  //returns false because the user picked an unavailable color
	}
	return true;
}

let colorname = prompt('What color do you want?').trim();
let isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
