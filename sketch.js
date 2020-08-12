var a,guy;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Engine=Matter.Engine;
var link=[]
var par=[]

function preload(){
umbre=loadImage("3-walking-man-holding-umbrella-cartoon-clipart.jpg")



}
function setup() {
createCanvas(1200,400);
engine=Engine.create()
world=engine.world;

  for(i=0;i<1200;i=i+50){
link.push(new Ball(i,100,5))
  }
  for(i=40;i<1160;i=i+50){
    par.push(new Ball(i,150,5))
      }

guy=createSprite(100,300,40,20)
guy.addImage("change",umbre)
guy.scale=.05
}

function draw() {
  background("white");  
  Engine.update(engine)

for(var i=0;i<link.length;i++){
link[i].display()

}
for(var i=0;i<link.length;i++){
  par[i].display()
  
  }
  








  drawSprites();
}