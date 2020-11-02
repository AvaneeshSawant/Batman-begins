const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload(){
    
}

function setup(){
    createCanvas(400, 800);
   
    engine = Engine.create();
    world = engine.world;

    var umbrellaObj = new Umbrella(400, 400);
}

function draw(){

    Engine.update(engine);
    
}   

