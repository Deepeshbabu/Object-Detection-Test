img = "" ;
status = "" ;
objects = [] ;

function setup() 
{
    canvas = createCanvas(640,420) ;
    canvas.position(420,215) ;
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

    if(status != "")
    {
        for (let i = 0; i < objects.length; i++) 
        {
            document.getElementById("status").innerHTML = "Status : Objects Detected" ;

            fill("#FF0000") ;
            percent = floor(objects[i].confidence * 100) ;
            text(objects[i].label + "" + percent + "%",objects[i].x + 15,objects[i].y + 15) ;
            noFill() ;
            stroke("#FF0000") ;
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height) ;
        }
    }
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
        objects = results ;
    }
}

function back() 
{
    window.location = "index.html" ;
}