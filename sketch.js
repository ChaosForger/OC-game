var footmanImg, legionaryImg, championImg;
var knightImg, knightImg2, finalBossImg;
var armorImg;
var backgroundImg, backgroundImg2, backgroundImg3, backgroundImg4;
var fireballImg, explosionImg;

var knight
var footman
var legionary
var champion
var finalBoss
var armor
var fireball
var footmanGroup
var legionaryGroup
var championGroup


function preload() {
  footmanImg = loadImage("footman.png")
  legionaryImg = loadImage("legionary.png")
  championImg = loadImage("champion.png")

  finalBossImg = loadImage("final boss.png")


  knightImg = loadImage("knight2.png")
  knightImg4 = loadImage("knight4.png")
 
  fireballImg = loadImage("attack.png")
  explosionImg = loadImage("explode.png")
 
  armorImg  = loadImage("armor3.png")
  
  backgroundImg  = loadImage("lvl 1.jpg")
  backgroundImg2 = loadImage("lvl 2.png")
  backgroundImg3 = loadImage("lvl 3.jpg")
  backgroundImg4 = loadImage("lvl 4.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   
 footmanGroup = new Group()
 legionaryGroup = new Group()
 championGroup = new Group()
  
  armor = createSprite(4500,750,10,10)
  armor.addImage(armorImg)
  armor.scale = 0.5

  knight = createSprite(100,750,10,10)
  knight.addAnimation("boi_runnin", knightImg)
  knight.scale = 0.45
  knight.addAnimation("powerfulboi_running",knightImg4)
  
 finalBoss = createSprite(10000,700, 20,20)
 finalBoss.addImage(finalBossImg)
 finalBoss.scale = 2
  
 fireball = createSprite(10,10,10,10)
 fireball.addAnimation("zapp", fireballImg)
 fireball.addAnimation("boom", explosionImg)
 fireball.visible = false
 fireball.scale = 0.4
}

function draw() {
  background(255,255,255);  
  imageMode(CENTER)
  image(backgroundImg, windowWidth/2, windowHeight/2, 4500, windowHeight)
  image(backgroundImg2, 4050, windowHeight/2, 4500, windowHeight)
  image(backgroundImg3, 6750,  windowHeight/2, 4500, windowHeight)
  image(backgroundImg4, 9450,  windowHeight/2, 4500, windowHeight)
   camera.position.x = knight.x

  if (keyDown(RIGHT_ARROW)){
    knight.x += 100
  }

 console.log(knight.x)

 if(keyDown(LEFT_ARROW)){
   knight.x -= 100
  
 }

 if(knight.isTouching(armor)){
  knight.changeAnimation("powerfulboi_running")
  knight.scale = 0.85
  
  
}

spawnFireball()

if(fireball.isTouching(footmanGroup)||fireball.isTouching(legionaryGroup) ||fireball.isTouching(championGroup)){
fireball.changeAnimation("boom")
fireball.velocityX = 0
    if(fireball.isTouching(footmanGroup)){
      footmanGroup.destroyEach()
    }

    if(fireball.isTouching(legionaryGroup)){
      legionaryGroup.destroyEach()
    }

    if(fireball.isTouching(championGroup)){
      championGroup.destroyEach()
    }

}

 spawnFootman();
 spawnLegionary ();
 spawnChampion ()
 

  drawSprites();
  showLife()
}

function spawnFootman (){

  if(frameCount%150 === 0){
    footman = createSprite(500,750, 20, 40)
    footman.addImage(footmanImg)
    footman.scale = 0.5
    footman.velocityX = -3
    
    footman.debug = true
    footman.setCollider("rectangle", 75,0, 1, footman.height)
    
    footmanGroup.add(footman)
  }
 
 
}

function spawnLegionary (){

  if(frameCount%300 === 0){
    legionary = createSprite(4200,750,20,20)
    legionary.addImage(legionaryImg)
    legionary.scale = 0.5
    legionary.velocityX = -4
   
    legionary.debug = true
    legionary.setCollider("rectangle",75,0,1, legionary.height)

    legionaryGroup.add(legionary)
  }
 
}

function spawnChampion (){

  if(frameCount%300 == 0){
  champion = createSprite(7000, 750, 20,20)
  champion.addImage(championImg)
  champion.scale = 0.5
  champion.velocityX = -5
  
  champion.debug = true
  champion.setCollider("rectangle", 60,0,1,champion.height)

  championGroup.add(champion)
  }

}

function spawnFireball(){
  if(keyDown("SPACE")){
   fireball.x = knight.x
   fireball.y = knight.y
   fireball.velocityX = 50
   fireball.visible = true
   fireball.changeAnimation("zapp")
  }
}
function showLife() {
  push();
  fill("white");
  rect(9900, 30, 185, 20);
  fill("blue");
  rect(9900, 30, 185, 20);
  noStroke();
  pop();
}