var car1,car2,car3,car4;
var wall1,wall2,wall3,wall4;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);

  car1 = createSprite(50, 50, 20, 10);
  wall1 = createSprite(1400,50,10,50);
  wall1.shapeColor = (80,80,80);

  car2 = createSprite(50, 150, 20, 10);
  wall2 = createSprite(1400, 150,10,50);
  wall2.shapeColor = (80,80,80);

  car3 = createSprite(50, 250, 20, 10);
  wall3 = createSprite(1400, 250,10,50);
  wall3.shapeColor = (80,80,80);

  car4 = createSprite(50, 350, 20, 10);
  wall4 = createSprite(1400, 350,10,50);
  wall4.shapeColor = (80,80,80);

}

function draw() 
{
  background(255,255,255);
if(keyDown("SPACE")){
  car1.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  car4.velocityX = speed;
}
    if(wall1.x-car1.x<(car1.width+wall1.width)/2){
    car1.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      car1.shapeColor = color(250,0,0);
    }
    if(deformation<180  &&  deformation>100){
      car1.shapeColor = color(230,230,0);
    }
    if(deformatin<100){
      car1.shapeColor = color(0,255,0);
    }
  }
  if(wall2.x-car2.x<(car2.width+wall2.width)/2){
    car2.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      car2.shapeColor = color(250,0,0);
    }
    if(deformation<180  &&  deformation>100){
      car2.shapeColor = color(230,230,0);
    }
    if(deformatin<100){
      car2.shapeColor = color(0,255,0);
    }
  }
  if(wall3.x-car3.x<(car3.width+wall3.width)/2){
    car3.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      car3.shapeColor = color(250,0,0);
    }
    if(deformation<180  &&  deformation>100){
      car3.shapeColor = color(230,230,0);
    }
    if(deformatin<100){
      car3.shapeColor = color(0,255,0);
    }
  }
  if(wall4.x-car4.x<(car4.width+wall4.width)/2){
    car4.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      car4.shapeColor = color(250,0,0);
    }
    if(deformation<180  &&  deformation>100){
      car4.shapeColor = color(230,230,0);
    }
    if(deformatin<100){
      car4.shapeColor = color(0,255,0);
    }
  }
  if(car1.collide(wall1)  &&  car2.collide(wall2)  &&  car3.collide(wall3)  &&  car4.collide(wall4)){
  car1.velocityX = 0;
  car2.velocityX = 0;
  car3.velocityX = 0;
  car4.velocityX = 0;
  }

  drawSprites();
}