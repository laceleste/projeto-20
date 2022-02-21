
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world

var block1,block2,block3


function setup() {
	createCanvas(550, 600);


	engine = Engine.create();
	world = engine.world;

	var plane_options = {
		isStatic:true
	}
	//Crie os Corpos Aqui.
	plane = Bodies.rectangle(600,580,1200,2,plane_options)
	World.add(world,plane)
	
	var block1_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	  }
	//crie as outras duas variaveis




	block1 = Bodies.circle(220,10,10,block1_options);
	World.add(world,block1);
    //crie os outros corpos



	//estilizando os corpos aqui
    fill(23);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
	
  background(23);
  Engine.update(engine)
  rect(plane.position.x,plane.position.y,1200);

  ellipse(block1.position.x,block1.position.y,30);
  //desenhe os outros dois retangulos



}



