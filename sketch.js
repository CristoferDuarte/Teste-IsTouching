var retFixo, retMovendo;
var obj1,obj2,obj3,obj4;
function setup() {
  createCanvas(1200,800);
  retFixo = createSprite(600, 400, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;

  retMovendo = createSprite(400,200,80,30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;

  obj1 = createSprite(350,200,80,30);
  obj1.shapeColor = "blue";
  obj1.debug = true;

  obj2 = createSprite(250,200,80,30);
  obj2.shapeColor = "yellow";
  obj2.debug = true;

  obj3 = createSprite(400,100,80,30);
  obj3.shapeColor = "white";
  obj3.debug = true;

  obj4 = createSprite(400,800,80,30);
  obj4.shapeColor = "gray";
  obj4.debug = true;

  obj3.velocityY = +5;
  obj4.velocityY = -5;
}

function draw() {
  background(0,0,0);  
  retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY;
  if (isTouching(retMovendo,obj2)){
    retMovendo.shapeColor = "red";
    obj2.shapeColor = "red";
  }
  else{
    retMovendo.shapeColor = "green";
    obj2.shapeColor = "green";
    
  }
  bounceOff(obj3,obj4);
   
  drawSprites();
}






