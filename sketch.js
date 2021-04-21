const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var papers = [];
function setup() {
  createCanvas(500,800);
  engine = Engine.create();
  world = engine.world;



  g1 = new Ground(250,790,500,10)

  g2 = new Ground(5,400,10,800)
  g3 = new Ground(100,790,10,400)
  g4 = new Ground(200,790,10,400)
  g5 = new Ground(300,790,10,400)
  g6 = new Ground(400,790,10,400)
  g7 = new Ground(495,400,10,800)


  p1 = new Box(50,100);
  p2 = new Box(150,100);
  p3 = new Box(250,100);
  p4 = new Box(350,100);
  p5 = new Box(450,100);

  p6 = new Box(50,250);
  p7 = new Box(150,250);
  p8 = new Box(250,250);
  p9 = new Box(350,250);
  p10 = new Box(450,250);

  p11 = new Box(50,400);
  p12 = new Box(150,400);
  p13 = new Box(250,400);
  p14 = new Box(350,400);
  p15 = new Box(450,400);

  b1 = new Box(100,170)
  b2 = new Box(200,170)
  b3 = new Box(300,170)
  b4 = new Box(400,170)

  
  b5 = new Box(100,320)
  b6 = new Box(200,320)
  b7 = new Box(300,320)
  b8 = new Box(400,320)

   
  b9 = new Box(100,500)
  b10 = new Box(200,500)
  b11 = new Box(300,500)
  b12 = new Box(400,500)


 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);  

  Engine.update(engine);

  for (var j = 0 ; j < papers.length;j++){


    papers[j].display();
  }
if(frameCount%30===0){

  papers.push(new Paper(random(width/2 +10,width/2-10),10,10)) 
}


  


  g1.display();
  g2.display();
  g3.display();
  g4.display();
  g5.display();
  g6.display();
  g7.display();

  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();

  p6.display();
  p7.display();
  p8.display();
  p9.display();
  p10.display();

  p11.display();
  p12.display();
  p13.display();
  p14.display();
  p15.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();

  b5.display();
  b6.display();
  b7.display();
  b8.display();

  b9.display();
  b10.display();
  b11.display();
  b12.display();

 // drawSprites();
}