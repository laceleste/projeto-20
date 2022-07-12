
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world

var bloco1,bloco2,bloco3


function setup() {
	createCanvas(550, 600);


	engine = Engine.create();
	world = engine.world;
// propriedade do solo
	var ground_options = {
		isStatic:true
	}
// corpo do solo
	ground = Bodies.rectangle(600,580,1200,2,ground_options)
	World.add(world,ground)
// propriedade do bloco1
	var bloco1_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	  }
//crie a propriedade do bloco2 aqui

//crie a propriedade do bloco3 aqui


// corpo do bloco1
	bloco1 = Bodies.circle(220,10,10,bloco1_options);
	World.add(world,bloco1);

//crie o corpo do bloco2 e adicione ao mundo aqui

//crie o corpo do bloco3 e adicione ao mundo aqui


//estamos estilizando os corpos aqui
    fill(23);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
	
  background(23);
  Engine.update(engine)

  //  desenhamos o retângulo do solo
  rect(ground.position.x,ground.position.y,1200);

  // desenhamos o ellipse do bloco1
  ellipse(bloco1.position.x,bloco1.position.y,30);
  
  //desenhe outro retangulo aqui para o bloco2

  //desenhe outro retangulo aqui para o bloco3



}



