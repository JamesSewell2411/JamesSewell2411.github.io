var canvas;
var my_context;
var check = false;
var lastX;
var lastY;
var CustomColour;
//When the document loads the local storage is checked for the users prefered background colour
$( document ).ready(function(){
	console.log("jquery works");
	//if the document uses local storage and there is an item saved called background
	if(localStorage && localStorage.getItem("background")){
		var colour = localStorage.getItem('background');
		//a colour is set to the locally saved colour and the background is set to that colour
		$("body").css("background-color", colour);
	}
	//if ever a new colour is selected 
	$('#selColour').change(function() {
		//the colour variable is set to the new value
		var bg_col = $('#selColour').val();
		//the background is updated
		$("body").css("background-color", bg_col);
		//and re-saved to local storage
		localStorage.setItem("background", bg_col);
	});
	
	
		
	if(localStorage && localStorage.getItem("Cbackground")){
		var colour = localStorage.getItem('Cbackground');
		$("canvas").css("background-color", colour);
	}
	$('#CustomColour1').change(function() {
		var bg_col = $('#CustomColour1').val();
		$("canvas").css("background-color", bg_col);
		localStorage.setItem("Cbackground", bg_col);
	});
});

window.onload = function()
{//Triggers when the webpage is loaded
	
	canvas = document.getElementById("canvas");
	if (window.innerWidth <=400)
	{
		//Mobile sized screen
		//sets the size of the canvas to fit a mobile screen
		canvas.width = window.innerWidth-25;
		canvas.height = window.innerWidth-25;
	}
	else if ((window.innerWidth > 400) && (window.innerWidth< 510))
	{
		//Mobile sized screen
		//sets for a large phone or very small tablet
		canvas.width = 380;
		canvas.height = 380;
	}
		else if ((window.innerWidth > 500) && (window.innerWidth< 610))
	{
		//Tablet sized screen
		//increasingly larger screen sizes just resize the canvas to fit better on the new screen
		canvas.width = 480;
		canvas.height = 480;
	}
		else if ((window.innerWidth > 600) && (window.innerWidth< 710))
	{
		//Tablet sized screen
		canvas.width = 580;
		canvas.height = 580;
	}
		else if ((window.innerWidth > 700) && (window.innerWidth< 810))
	{
		//Desktop/Laptop sized screen
		canvas.width = 680;
		canvas.height = 680;
	}
	
	else if (window.innerWidth > 800)
	{
		//Desktop sized screen
		//If the screen is any bigger than this the canvas remains the same size
		canvas.width = 800;
		canvas.height = 800;
	}
	my_context = canvas.getContext('2d');
	Init();
	//when the loading is done the initialise function is called
}
function Init(){
canvas.addEventListener("mousemove",function(canvas)
{//When the cursor is moved on the canvas this event triggers
//it triggers many times very very fast
	if (check == true)
	{//check is only true if the mouse is being held down so something must be drawn
	//gets the current position of the mouse on the page and offsets it for canvas
		var x = canvas.pageX - this.offsetLeft;
		var y = canvas.pageY - this.offsetTop;
		console.log("X=",x,"Y=",y)
		//logs the location
		draw(x,y,check);
		//calls the "draw" event and passes the co-ordinates and the current value of check
	}
	})
canvas.addEventListener("mousedown",function(canvas)
{
	//when the mouse is clicked down this event triggers
	LastX=canvas.pageX - this.offsetLeft;
	LastY=canvas.pageY - this.offsetTop;
	//the start and end point for a line are recorded 
	console.log("loaded");
	//check is set to true so that when the mouse is moved the draw method will trigger
	//and a line will be drawn
	check=true;
	console.log("MouseDown");
	//logged
	
});	
canvas.addEventListener("mouseup",function(canvas)
{//triggers when the user is done drawing a line 
//and so resets the check variable to false so the draw event will not trigger again
	check=false;
});
}
function draw(x,y,isDown){
	//the draw function
	console.log("DrawStart" + x,y,isDown);
	my_context.beginPath();
	//begins drawing a straight line
	my_context.fillStyle="blue";
	//the default colour for drawing, this is instantly set to something different, but
	//has to be here to load properly
	my_context.fill();
	my_context.moveTo(LastX,LastY);
	//moves to the place where the previous line ended, thus drawing a line
	//essentially draws from B to A then draws another line from C to B creating one continuous line
	my_context.lineTo(x,y);
	//actually draws the line
	my_context.closePath();
	my_context.stroke();
	LastX=x;
	LastY=y;
	//sets the lastx and lasty to the end point of the line to be used next time the draw event triggers
	console.log("DrawDone");
}


//All of these do the same thing, they set the color of the line to draw to the colour corresponding to the pressed button
function colourCustom()
{
	my_context.strokeStyle = CustomColour;
}

function colourBlack()
{
	my_context.strokeStyle = "#000000";
}
function colourGrey()
{
	my_context.strokeStyle = "#7F7F7F";
}
function colourAqua()
{
	my_context.strokeStyle = "#00A3E8";
}
function colourBiege()
{
	my_context.strokeStyle = "#EFE3AF";
}
function colourBlue()
{
	my_context.strokeStyle = "#7092BF";
}
function colourBrown()
{
	my_context.strokeStyle = "#B97A57";
}
function colourBurgandy()
{
	my_context.strokeStyle = "#880016";
}
function colourGreen()
{
	my_context.strokeStyle = "#23B14D";
}
function colourLBlue()
{
	my_context.strokeStyle = "#9AD9EA";
}
function colourLGrey()
{
	my_context.strokeStyle = "#C3C3C3";
}
function colourLOrange()
{
	my_context.strokeStyle = "#FFC90D";
}
function colourLPurple()
{
	my_context.strokeStyle = "#C7BFE6";
}
function colourLGreen()
{
	my_context.strokeStyle = "#B5E51D";
}
function colourOrange()
{
	my_context.strokeStyle = "#FF7F26";
}
function colourPink()
{
	my_context.strokeStyle = "#FEAEC9";
}
function colourPurple()
{
	my_context.strokeStyle = "#A349A3";
}
function colourPBlue()
{
	my_context.strokeStyle = "#3F47CC";
}
function colourRed()
{
	my_context.strokeStyle = "#ED1B24";
}
function colourWhite()
{
	my_context.strokeStyle = "#FFFFFF";
}
function colourYellow()
{
	my_context.strokeStyle = "#FEF200";
}



