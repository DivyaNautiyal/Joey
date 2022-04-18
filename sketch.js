var player, playerImg,carrotImg, super_carrotImg , enemyImg , jump_boostImg , canvasImg

function preload() {
  playerImg= loadImage("Pictures/Ninja Bunny.png")
  carrotImg = loadImage("Pictures/Carrot.png")
  super_carrotImg = loadImage("Pictures/Super Carrot.png")
  canvasImg = loadImage("Pictures/Background.jpg")
  jump_boostImg = loadImage("Pictures/Jump Icon.png")
  enemyImg = loadImage("Pictures/Enemy Bunny.png")
}

function setup() {
  createCanvas(800,400);
  player= createSprite( 200, 200, 50, 50)
  player.addImage(playerImg)

  enemy = createSprite(650, 560 , 1, 1)
  enemy.addImage (enemyImg)
   enemy.scale = 1

  carrot = createSprite(500, 500,20,20)
  carrot.addImage (carrotImg)
  carrot.scale = 1


}

function draw() {
  background("blue"); 

  drawSprites()
  if (keyDown(LEFT_ARROW)){
    player.x= player.x-2
  }
  
}