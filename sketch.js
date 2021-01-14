var canvas;
var music;
var blueRect, orangeRect, redRect, greenRect;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces

    blueRect = createSprite(70, 575, 130, 30);
    blueRect.shapeColor = "blue";

    orangeRect = createSprite(220, 575, 130, 30);
    orangeRect.shapeColor = "orange";

    redRect = createSprite(370, 575, 130, 30);
    redRect.shapeColor = "red";

    greenRect = createSprite(520, 575, 130, 30);
    greenRect.shapeColor = "green";

    box = createSprite(random(1,550));
    box.shapeColor = "white";
    box.scale = 0.3;

    createEdgeSprites();


    //create box sprite and give velocity

    

    box.bounceOff(edges);


}

function draw() {
    background(rgb(169,169,169));
    box.velocityY = 5;
    box.velocityX = 2;
    
    if(blueRect.isTouching(box) && box.bounceOff(blueRect)){
        box.shapeColor = "blue";
        box.velocityY = 0;
        box.velocityX = 0;
    }

    if(orangeRect.isTouching(box) && box.bounceOff(orangeRect)){
        box.shapeColor = "orange";
        box.velocityY = 0;
        box.velocityX = 0;
    }

    if(redRect.isTouching(box) && box.bounceOff(redRect)){
        box.shapeColor = "red";
        box.velocityY = 0;
        box.velocityX = 0;
    }

    if(greenRect.isTouching(box) && box.bounceOff(greenRect)){
        box.shapeColor = "green";
        box.velocityY = 0;
        box.velocityX = 0;
    }

    

    
    
    

    //if(box.isTouching(Edges)){
    // box.bounceOff(Edges);

   // }

    

    //add condition to check if box touching surface and make it box
    drawSprites();

}
