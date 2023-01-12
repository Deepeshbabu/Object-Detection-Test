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
    img = loadImage("fr.jpg") ;
}

function draw() 
{
    image(img,0,0,640,420) ;
    fill("#FF0000") ;
    text("Fruit Basket",57,51) ;
    noFill() ;
    stroke("#FF0000") ;
    rect(42,36,550,375) ;
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