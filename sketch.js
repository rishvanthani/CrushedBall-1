
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground
var box1,box2,box3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ball=new PaperBall()
	ground=new Ground(400,683,800,30)
	box1=new Box(600,670,200,20)
	box2=new Box(510,610,20,120)
	box3=new Box(690,610,20,120)

	Engine.run(engine);
  
}


function draw() {
  
  background("black");
  
 

  ball.display()
  ground.display()
  box1.display()
  box2.display()
  box3.display()
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){}
  
	Matter.Body.applyForce(ball.body,ball.body.position,{x:95,y:-95})
  }