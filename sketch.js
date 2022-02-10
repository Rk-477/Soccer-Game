var team_2=[]
var team_1=[]
var fieldImage
var soccerball
var soccerballimage
var borderL,borderR,borderU,borderD
var goal1,goal2
var scoreRed = 0
var scoreYellow = 0

function setup() {
  createCanvas(800,400);
  player = createSprite(410, 177, 50, 50);
  player.addImage(playerImage)
  player.scale=0.3
  player.mirrorX(-1)
  edges = createEdgeSprites()
  borderL= createSprite(50,200,5,height)
  borderR= createSprite(width-50,200,5,height)
  borderU= createSprite(width/2,30,width,5)
  borderD= createSprite(width/2,height-65,width,5)
  borderD.visible=false
  borderL.visible=false
  borderR.visible=false
  borderU.visible=false



   // ball sprite
   soccerball = createSprite(width/2, height/2-10, 10,10)
   soccerball.addImage(soccerballimage)
   soccerball.scale=0.017
   goal1 = createSprite(50,180,50,100)
   goal2 = createSprite(750,180,50,100)
    goal1.visible=false
  goal2.visible=false

   


  // team_2plr = createSprite(400, 200, 50, 50);
  team_2plr1=createSprite(325, 200, 50, 50);
  team_2plr2=createSprite(175, 120, 50, 50);
  team_2plr3 =createSprite(175, 180, 50, 50);
  team_2plr4 =createSprite(175, 270, 50, 50);
  team_2plr5=createSprite(225, 80, 50, 50);
  team_2plr6=createSprite(225, 300, 50, 50);
  team_2plr7=createSprite(100, 100, 50, 50);
  team_2plr8=createSprite(100, 300, 50, 50);
  team_2plr9=createSprite(270, 150, 50, 50);
  team_2plr10=createSprite(270, 240, 50, 50);
  team_2plr11=createSprite(55, 180, 50, 50);

  // team_2plr = createSprite(400, 200, 50, 50);
  team_1plr1=createSprite(475, 200, 50, 50);
  team_1plr2=createSprite(625, 120, 50, 50);
  team_1plr3 =createSprite(625, 180, 50, 50);
  team_1plr4 =createSprite(625, 270, 50, 50);
  team_1plr5=createSprite(575, 80, 50, 50);
  team_1plr6=createSprite(575, 300, 50, 50);
  team_1plr7=createSprite(700, 100, 50, 50);
  team_1plr8=createSprite(700, 300, 50, 50);
  team_1plr9=createSprite(530, 150, 50, 50);
  team_1plr10=createSprite(530, 240, 50, 50);
  team_1plr11=createSprite(745, 180, 50, 50);
  team_1=[team_1plr1,team_1plr2,team_1plr3,team_1plr4,team_1plr5,team_1plr6,team_1plr7,team_1plr8,team_1plr9,team_1plr10,team_1plr11]
  team_2=[team_2plr1,team_2plr2,team_2plr3,team_2plr4,team_2plr5,team_2plr6,team_2plr7,team_2plr8,team_2plr9,team_2plr10,team_2plr11]
  for( var i=0; i<11;i++){
    team_2[i].addImage(player2Image)
    team_2[i].scale=0.3
    team_1[i].velocityX=random(-1.7,1.5)
    team_1[i].velocityY=random(-1.7,1.5)
    team_2[i].velocityY=random(-1.3,1.5)
    team_2[i].velocityX=random(-1.7,1.5)
    team_1[i].addImage(playerImage)
    team_1[i].scale=0.3
    team_1[i].mirrorX(-1)

  }

 

  }
  // player2.mirrorX(-1)

function preload(){
  playerImage=loadImage("p1.png")
  player2Image=loadImage("p2.png")
  fieldImage=loadImage("field.png")
  soccerballimage=loadImage("soccerballimage1.png")
}
function draw() {
  background(fieldImage); 
  soccerball.collide(player)
  player.bounceOff(edges)
  soccerball.bounceOff(edges)
  // noStroke()
 if(keyDown(DOWN_ARROW)){
  soccerball.velocityX=-2;
  soccerball.velocityY=-0.8
 }
  soccerball.bounceOff(borderR)
  soccerball.bounceOff(borderD)
  soccerball.bounceOff(borderU)
  soccerball.bounceOff(borderL)




if(soccerball.isTouching(goal1)||soccerball.isTouching(goal2)){
  if(soccerball.isTouching(goal1)){
    scoreRed = scoreRed+1
  }
  if(soccerball.isTouching(goal2)){
    scoreYellow = scoreYellow+1
  }
  soccerball.velocityX=0
  soccerball.velocityY=0
  soccerball.x=391
  soccerball.y=210
 
}
fill("black")
text("Team Red: "+ scoreRed,500,25)
fill("black")
text("Team Yellow: "+ scoreYellow,200,25)






  drawSprites();
  for( var i=0; i<11;i++){
    soccerball.bounceOff(team_1[i])
    soccerball.bounceOff(team_2[i])
    team_1[i].bounceOff(borderD)
    team_1[i].bounceOff(borderU)
    team_1[i].bounceOff(borderL)
    team_1[i].bounceOff(borderR)
    team_2[i].bounceOff(borderD)
    team_2[i].bounceOff(borderU)
    team_2[i].bounceOff(borderL)
    team_2[i].bounceOff(borderR)
    

  }
}

function mouseClicked() {
  
  circle=createSprite(mouseX,mouseY,100) 
  circle.visible=false;
  fill("black")
  if(circle.x>200&&circle.y>200) {
    player.setSpeedAndDirection(3.5,35);
    player.mirrorX(1)
  }
  else if(circle.x>200 && circle.y<200) {
    player.setSpeedAndDirection(3.5,-35);
    player.mirrorX(1)
  }
  else if(circle.x<200&&circle.y<200) {
    player.setSpeedAndDirection(3.5,-135);
    player.mirrorX(-1)
  }
  else{
    player.setSpeedAndDirection(3.5,135);
    player.mirrorX(-1)
  }

  // moving ball with space key

  

}
