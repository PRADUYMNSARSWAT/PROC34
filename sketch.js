 const Engine = Matter.Engine;
 const World  = Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
 var engine,world

 function setup (){
createCanvas (3000,600);
engine=Engine.create();
world=engine.world;
ground1=new Ground(1500,600,3000,30);
box1=new Box(1500,600,60,60);
box2=new Box(1500,540,60,60);
box3=new Box(1500,480,60,60);
box4=new Box(1500,420,60,60);
box5=new Box(1500,360,60,60);
box6=new Box(1500,300,60,60);
box7=new Box(1500,240,60,60);
box8=new Box(1500,180,60,60);
 }
 

 function draw (){
    background("skyblue");
    Engine.update(engine);
    ground1.display();
    box1.display();
    box2.display();  
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
 }