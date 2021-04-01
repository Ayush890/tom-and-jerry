
var mouse,mouseImg ;
var backGround ,backGroundImg;
var cat,catImg;
var catAnimation ,mouseAnimation;


function preload() {
    //load the images here
    backGroundImg = loadImage("images/garden.png");
    mouseImg = loadImage("images/mouse1.png");
    catImg = loadImage("images/cat1.png");
    mouseAnimation = loadAnimation("images/mouse2","images/mouse3");
    catAnimation = loadAnimation("images/cat2.png","images/cat3.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

   backGround = createSprite(500,400,20,20);
   backGround.addImage(backGroundImg);

    mouse = createSprite(200,500,20,20);
    mouse.addImage(mouseImg);
    mouse.scale = 0.1;

    cat = createSprite(800,500,20,20);
    cat.addImage(catImg);
    cat.scale = 0.2;

}

function draw() {

if(cat.x - mouse.x < mouse.width/2 - cat.width/2 && mouse.x - cat.x < mouse.width/2 - cat.width/2 ){

 cat.velocityX = 0;


}
   
  keyPressed();

    drawSprites();
}


function keyPressed(){

      //For moving and changing animation write code here

      if(keyCode === LEFT_ARROW){
      
        cat.velocityX = -5;  
        cat.addAnimation("catRunning",catAnimation);
        cat.changeAnimation("catAnimation");

      }

}
