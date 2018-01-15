var numSqu = 6;
var colorList = [];
var pickedColor;
var btnMode = document.querySelectorAll(".mode");
var squares = document.getElementsByClassName("square");
var rgbDisplay = document.querySelector("#rgbDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");

init();

function init(){
  btnListener();
  squareListener();
  resetfunc(numSqu);
}

function btnListener(){
	for(var i = 0; i<btnMode.length; i++){
		btnMode[i].addEventListener("click", function(){
			btnMode[0].classList.remove("selected");
			btnMode[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent ==="EASY"? numSqu = 3 : numSqu = 6;
			resetfunc(numSqu);
		})
	}
}

function squareListener(){
	for(var i = 0; i<squares.length; i++){
		squares[i].addEventListener("click", function(){
			//grab color of the clicked one
			var clickedColor = this.style.background;
			//compare the color to the picked color
			if(clickedColor === pickedColor){ 
				for(var i = 0; i<squares.length; i++){
					squares[i].style.background = pickedColor;
					message.textContent = "Correct!";
					reset.textContent = "PLAY AGAIN";
				}
				h1.style.background = pickedColor;
			}else{
				this.style.background = "#232323";
				message.textContent = "Try again";
			}
		})
	}
}

reset.addEventListener("click", function(){
	resetfunc(numSqu);
})

function pickRandomColor(){
	var pickedColor = Math.floor(Math.random() * colorList.length);
	return pickedColor;
} 

function makeColorList(num){
	var arr = [];
	for(var i = 0; i<num; i++){
		var color = randomRgbColor();
		arr.push(color);
	}
	return arr;
}	

function randomRgbColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}		

function resetfunc(numSqu)
{
	//reset 6 random colors
	colorList = makeColorList(numSqu);
	//reset picked color
	pickedColor = colorList[pickRandomColor()];
	//change the color of the squares
	for(var i = 0; i<squares.length; i++){
		if(colorList[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colorList[i];
		}else{
			squares[i].style.display = "none";
		}
	}

	rgbDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";
	message.textContent= "";
	reset.textContent = "RESET COLOR";
}
