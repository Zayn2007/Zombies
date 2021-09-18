const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var leftWall, rightWall, ground;
var bridge;
var link;
var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  leftWall = new Base(50,height/2,150,150);
  rightWall = new Base(width - 200,height/2,150,150);
  ground = new Base(width/2,height,width,5);
  bridge = new Bridge(18,{x : 100,y : height/2});
  link = new Link(bridge,rightWall);

  for(var i = 0; i <= 7; i++){
    var x = random(width/2 - 100,width/2 + 100);
    var y = random(-10,140);
    var stone = new Stone(x,y,80,80);
    stones.push(stone);
  } 
}

function draw() {
  background(51);
  Engine.update(engine);
  leftWall.display();
  rightWall.display();
  ground.display();
  bridge.show();
  for(var i = 0; i < stones.length; i++){
    stones[i].display();
  }
}