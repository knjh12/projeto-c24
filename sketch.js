const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var ferro, borracha,pedra;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    ferro= new Ferro(250,200);
    borracha= new Rubber(400,250,50);
    pedra= new Stone(500,300,50,50);
    hammer= new Hammer(100,400);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    ferro.display();
    pedra.display();
    hammer.display();
    borracha.display();
   
    
    
 
}