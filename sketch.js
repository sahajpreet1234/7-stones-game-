const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
 
var engine,world;
var bg,boy,ball;
var score=0;
var gameState = "play";

function preload(){
  bg=loadImage("bg.jpg");
  boy=loadImage("boy.png");
  ball=loadImage("ball.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);
  ground=new Ground(windowWidth/2,windowHeight,windowWidth,20);
  wall1 = new Ground(-20,windowHeight/2,10,windowHeight)
  wall2 = new Ground(windowWidth,windowHeight/2,10,windowHeight)
 
  ball=new Ball(330,390,60);
  sling=new SlingShot(ball.body,{x:320,y:335});
  box1=new Box(970,600,180,25)
  box2=new Box(970,580,170,25)
  box3=new Box(970,560,160,25)
  box4=new Box(970,540,150,25)  
  box5=new Box(970,520,140,25)
  box6=new Box(970,500,130,25)
  box7=new Box(970,480,120,25)
  
}

function draw() {
  background(bg);  

  fill("aqua");
  stroke('black');
  strokeWeight(3);
  textSize(20)
  text("Note:Press space button to get another chance",450,50)
  text("SCORE: "+score,50,50)
  
  if(score>=100){
    gameState="end";
    push();
    fill("aqua");
    stroke('black');
    strokeWeight(4);
    textSize(50)
    text('You Win!', windowWidth/2-100,windowHeight/2);
    pop();
  }
  ground.display();
  image(boy,150,260,200,400);
  sling.display();
  ball.display();
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  
  box1.score()
  box2.score()
  box3.score()
  box4.score()
  box5.score()
  box6.score()
  box7.score()

} 

function mouseDragged(){
  if(gameState==="play"){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }
}

function mouseReleased(){
  sling.fly();
}

function keyPressed() {
  if(keyCode===32&&gameState==="play"){
    Matter.Body.setPosition(ball.body,{x:330,y:390})
    sling.attach(ball.body);
  }

  /*
  if(keyCode===UP_ARROW){
    gameState="play";
    score = 0;
    Matter.Body.setPosition(box1.body,{x:970,y:620})
    Matter.Body.setPosition(box2.body,{x:970,y:580})
    Matter.Body.setPosition(box3.body,{x:970,y:540})
    Matter.Body.setPosition(box4.body,{x:970,y:500})
    Matter.Body.setPosition(box5.body,{x:970,y:460})
    Matter.Body.setPosition(box6.body,{x:970,y:420})
    Matter.Body.setPosition(box7.body,{x:970,y:380})
    Matter.Body.setVelocity(box1.body,{x:0,y:0})
    Matter.Body.setVelocity(box2.body,{x:0,y:0})
    Matter.Body.setVelocity(box3.body,{x:0,y:0})
    Matter.Body.setVelocity(box4.body,{x:0,y:0})
    Matter.Body.setVelocity(box5.body,{x:0,y:0})
    Matter.Body.setVelocity(box6.body,{x:0,y:0})
    Matter.Body.setVelocity(box7.body,{x:0,y:0})
    Matter.Body.setAngle(box1.body,0)
    Matter.Body.setAngle(box2.body,0)
    Matter.Body.setAngle(box3.body,0)
    Matter.Body.setAngle(box4.body,0)
    Matter.Body.setAngle(box5.body,0)
    Matter.Body.setAngle(box6.body,0)
    Matter.Body.setAngle(box7.body,0)
    Matter.Body.setStatic(box1,false)
    Matter.Body.setStatic(box2,false)
    Matter.Body.setStatic(box3,false)
    Matter.Body.setStatic(box4,false)
    Matter.Body.setStatic(box5,false)
    Matter.Body.setStatic(box6,false)
    Matter.Body.setStatic(box7,false)
    
  }
  */
}