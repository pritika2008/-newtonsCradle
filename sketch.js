var wood;
var ball1, ball2, ball3, ball4;
const Engine = Matter.Engine;
const World = Matter.World;


function setup() {
	createCanvas(200, 200);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);

	ball1 = new Ball(50,150);
	ball2 = new Ball(100,150);
	ball3 = new Ball(150,150);
	ball4 = new Ball(200,150);
	wood = new Wood(100,200,200,20);

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  wood.display();

  
  drawSprites();

 
}



