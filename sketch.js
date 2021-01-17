var movingsquare
var fixedsquare
var movingball
var fixedball
var car

function setup() {
  createCanvas(800,400);
  movingsquare = createSprite(250 , 150 , 65 , 90);
  car = createSprite (200 , 300 , 55 , 75 );
  fixedball = createSprite(170 , 120 ,50 , 70);
  movingball = createSprite(200 , 190 , 40 , 50);
  fixedsquare = createSprite(600 , 300 , 100 , 50);
  movingball.debug = true ;
  fixedsquare.debug = true ; 

}

function draw() {
  background("black");  
  drawSprites();
  movingsquare.velocityX = 0.1;
  movingsquare.y = mouseY;
  movingball.x = mouseX;
  movingball.y = mouseY;
  if(touching(movingball,fixedball)){
    movingball.shapeColor = ("green")
     fixedball.shapeColor = ("green")
  }
  else{
    movingball.shapeColor = ("yellow")
    fixedsquare.shapeColor = ("yellow")
  }

  console.log(movingball.x - fixedsquare.x);
 

if(touching(movingsquare , car)){
movingsquare.shapeColor = ("blue")
car.shapeColor = ("blue")
car.velocityY=1
}
else{
 movingsquare.shapeColor = ("purple")
 car.shapeColor = ("purple")

}}