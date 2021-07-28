var garden,rabbit;
var gardenImg,rabbitImg;
var leaf,apple
var leafImg,appleImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg=loadImage("leaf.png")
  appleImg=loadImage("apple.png")
  
}

function setup(){
  
  createCanvas(400,400);
  edges= createEdgeSprites();

  apple = createSprite();
  apple.scale = 0.25;
  
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(180,340,30,30);

rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

leaf=createSprite()
leaf.addImage(leafImg)

}


function draw() {
  background(0);
  
  rabbit.velocityX=4


  rabbit.x = World.mouseX;

  drawSprites();
}