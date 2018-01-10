var canvas;
var my_context;
var check = false;
var lastX;
var lastY;
window.onload = function()
{
	canvas = document.getElementById("canvas");
	if (window.innerWidth <=400)
	{
		//Mobile sized screen
		canvas.width = (window.innerWidth)-25;
		canvas.height = canvas.width;
	}
	else if ((window.innerWidth > 400) && (window.innerWidth< 800))
	{
		//Tablet sized screen
		canvas.width = (window.innerWidth - 38)
		canvas.height = canvas.width;
	}
	else if (window.innerWidth > 800)
	{
		//Desktop sized screen
		canvas.width = window.innerWidth - 200;
		if (canvas.width > 1600)
		{
			canvas.width = 1600;
		}
		canvas.height = canvas.width;
		if (canvas.height > 1100)
		{
			canvas.height = 1100;
		}
	}

	my_context = canvas.getContext('2d');
	Init();
}
function Init(){
canvas.addEventListener("mousemove",function(canvas)
{
	if (check == true)
	{
		var x = canvas.pageX - this.offsetLeft;
		var y = canvas.pageY - this.offsetTop;
		console.log("X=",x,"Y=",y)
		draw(x,y,check);
	}
	})
canvas.addEventListener("mousedown",function(canvas)
{
	LastX=canvas.pageX - this.offsetLeft;
	LastY=canvas.pageY - this.offsetTop;
	console.log("loaded");
	check=true;
	console.log("MouseDown");
	
});	
canvas.addEventListener("mouseup",function(canvas)
{
	check=false;
});
}
function draw(x,y,isDown){
	console.log("DrawStart" + x,y,isDown);
	my_context.beginPath();
	my_context.fillStyle="black";
	my_context.fill();
	my_context.moveTo(LastX,LastY);
	my_context.lineTo(x,y);
	my_context.closePath();
	my_context.stroke();
	LastX=x;
	LastY=y;
	console.log("DrawDone")
}

var upload = document.getElementById("btn-upload")

//Ask Wayne about this. the error is that it cannot add an event listener to type null.
//The same is wrong with the download (below) but that one works for some reason
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

//upload.addEventListener('click', function(){
//	Console.log("Upload image popup");
//})


var button = document.getElementById('btn-download');
if (button){
button.addEventListener('click',function(e) {
	var dataURL = canvas.toDataURL('image.png');
	button.href = dataURL;
});
}

