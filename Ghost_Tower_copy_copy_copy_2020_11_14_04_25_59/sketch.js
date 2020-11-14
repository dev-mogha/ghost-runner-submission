
PLAY =  1 
END = 0 
var gamestate = PLAY






function preload (){
climberIMG =  loadImage("climber.png" ) 
doorIMG = loadImage("door.png")
gostjIMG =  loadImage("ghost-jumping.png" ) 
ghostsIMG = loadImage("ghost-standing.png")
towerIMG = loadImage("tower.png")
  
  
  
  
  
}


function setup(){
createCanvas(600, 600)
  
 tower = createSprite(300, 300)
tower.addImage(towerIMG)
  
  
doorsGroup = new Group()
climbersGroup = new Group()

invisibleSpriteGroup = new Group()  
  
ghost = createSprite(200, 200, 50, 50)
ghost.addImage("s", ghostsIMG)
ghost.scale = 0.5
  
ghost.debug = true
ghost.setCollider("rectangle", 0 ,0, 200, 260)
}


function draw() {
background("black")
if(gamestate == PLAY){
  


tower.velocityY= 3  
 if(tower.y > 600 ) {
tower.y = height/2
}
 
if(keyDown("space")){
  ghost.velocityY = -5
}  
if(keyDown("left_arrow")){
  ghost.x = ghost.x - 5
}    
if(keyDown("right_arrow")){
  ghost.x = ghost.x + 5
}    
  ghost.velocityY = ghost.velocityY + 0.1 
  spawnDoors();
  
  if(climbersGroup.isTouching(ghost)){
   ghost.velocityY = 0 
    }
if(invisibleSpriteGroup.isTouching(ghost)|| ghost.y>700){
  
  ghost.destroy();
  gamestate = END                            
}  
drawSprites()  
}
if(gamestate == END){
  fill("red")
  textSize(30)
 text("GAME OVER", 210, 250) 
  
}

  
}
function spawnDoors(){

if(frameCount%200 == 0 ){
doors = createSprite(200, -50)
  doors.velocityY = 3
doors.addImage(doorIMG)  
 doors.x = Math.round(random(120, 400))
 doors.lifetime = 200 
  doorsGroup.add(doors)
  climbers = createSprite(200, 10)
  climbers.addImage(climberIMG)
  climbers.x = doors.x
  climbers.y = doors.y + 50
  climbers.velocityY = 3
  climbers.lifetime = 200;
  climbersGroup.add(climbers)
   ghost.depth = doors.depth + 1 
  
invisibleSprite = createSprite(200, 15)
  invisibleSprite.x = climbers.x
  invisibleSprite.velocityY = 3 
  invisibleSprite.width = climbers.width
  invisibleSprite.height = 3
 invisibleSprite.visible = false
  
invisibleSpriteGroup.add(invisibleSprite)
}




}






