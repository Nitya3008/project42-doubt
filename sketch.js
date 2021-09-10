var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  
  
}

function draw() {
  background("#BDA297");

  //display Score and number of lifes

  if(gameState===1){
    gun.y=mouseY  
if(keyDown("space")){
  shootBullet();
}

if(frameCount %80===0){
  drawblueBubble();
}
    
    drawSprites();
  }
     
}

function shootBullet(){
  bullet=createSprite(150,width/2,50,20);
  bullet.y=gun.y-20;
  bullet.velocityX=9;
  bullet.addImage(bulletImg);
  bullet.scale=0.04;
  bullet.lifeTime=100;
  bulletGroup.add(bullet);
}

function  drawblueBubble(){
  bluebubble=createSprite(120,120);
  bluebubble.y = Math.round(random(80,120));
  bluebubble.x=Math.round(random(80,120));
  bluebubble.velocityX=-10;
  bluebubble.addImage(bubbleImg);
  bluebubble.lifeTime=200;
  blueBubbleGroup.add(bluebubble);
}

//function drawRedBubble(){
//redbubble=createSprite(x,y);
//}


