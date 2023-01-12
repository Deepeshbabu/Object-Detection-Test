img = "" ;
status = "" ;

function setup() 
{
    canvas = createCanvas(640,420) ;
    canvas.center() ;
    objectDetector = ml5.objectDetector('cocossd',modelLoaded) ;
    document.getElementById("status").innerHTML = "Status : Detecting Objects" ;
}

function modelLoaded() 
{
    console.log("Model Loaded !");
    status = true ;
    objectDetector.detect(img, gotResult) ;
}

function preload() 
{
    img = loadImage("wb.webp") ;
}

function draw() 
{
    image(img,0,0,640,420) ;
    fill("#FF0000") ;
    text("Bottles",45,45) ;
    noFill() ;
    stroke("#FF0000") ;
    rect(30,30,580,375) ;
}

function gotResult(error, results) 
{
    if(error) 
    {
        console.error(error);
    }
    else
    {
        console.log(results);
    }
}