var path,pathIMG;
var runner,runnerIMG;
function preload(){

  //pre-load images
  pathIMG=loadImage("path.png");
 runnerIMG=loadAnimation("Runner-1.png","Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathIMG);
  path.velocityY=4;
  path.scale=1.2;

  runner=createSprite(200,350);
runner.addAnimation("JakeRunning",runnerIMG);
runner.scale=0.05;
}

function draw() {
  background(0);

  if(path.y>400){
    path.y=height/2;
  }

drawSprites();
}
