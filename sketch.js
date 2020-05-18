var tank;
var bullet;
var bomb;
var bulletGroup;
var bombGroup;
function setup() {
  createCanvas(displayWidth,displayHeight -150);
   bulletGroup = new Group();
   bombGroup = new Group();
  tank = createSprite(1300,600);
  tank.addImage("tank.jpg",tank_Image);
}
function preload(){
  tank_Image = loadImage("tank.jpg");
  bullet_Image = loadImage("bullet.png");
  bomb_Image = loadImage("bomb.png");
}
function keyPressed(){
  if(keyCode === 32){
    bullet = createSprite(1140,595,5,10);
    bomb = createSprite(random(200,1000),-5,50,50)
    bullet.addImage("bullet.png",bullet_Image);
    bomb.addImage("bomb.png",bomb_Image);
    bullet.velocityX =-5;
    bomb.velocityY =5;
    bullet.scale = 0.15;
    bomb.scale = 0.1;
    bulletGroup.add(bullet);
    bombGroup.add(bomb); 
    bullet.display();
    bomb.display();
}
}
function draw() {
  background("white");
  text(mouseX + ',' + mouseY, 10, 15);
  for(var i = 0;i<bombGroup.length;i++){
    if(bulletGroup.isTouching(bombGroup.get(i))){
      bulletGroup.get(i).destroy();
      bombGroup.get(i).destroy();
}
}
  drawSprites();
  tank.display();
}