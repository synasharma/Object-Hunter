status="";
function preload()
{

}

function setup()
{
canvas=createCanvas(480,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("ModelLoaded!");
    status=true;
}
function draw()
{
image(video,0,0,480,400);
}