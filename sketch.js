var garden,rabbit,apple,orangeleaves,redleaves,greenleavesImg;
var gardenImg,rabbitImg,appleImg,orangeleavesImg,redleavesImg,greenleavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  orangeleavesImg = loadImage("orangeLeaf.png")
  redleavesImg = loadImage("redImage.png")
  greenleavesImg = loadImage("leaf.png")
}

function setup(){
  createCanvas(400,400);
//creating garden
garden = createSprite(200,200);
garden.addImage(gardenImg);
//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
    var select_sprites = Math.round(random(1,4));
  if(frameCount % 80 == 0){
    if (select_sprites == 1){
      createApples();
    }
    else if (select_sprites == 2){
      createRedleaves();
    }
    else if (select_sprites == 3){
      createGreenleaves();
    }
  
    else {
      createOrangeleaves();
    }
  }
  
}

//creating apple
function createApples() {
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.05;
  apple.velocityY = 3;
  apple.lifetime=150;
  }

  //creating orange leaves
  function createOrangeleaves() {
  orangeleaves = createSprite(random(50,350),40,10,10);
  orangeleaves.addImage(orangeleavesImg);
  orangeleaves.scale=0.05;
  orangeleaves.velocityY = 3;
  orangeleaves.lifetime=150;
    }
  
  //creating red leaves
  function createRedleaves() {
    redleaves = createSprite(random(50,350),40,10,10);
    redleaves.addImage(redleavesImg);
    redleaves.scale=0.05;
    redleaves.velocityY = 3;
    redleaves.lifetime=150;
      }

  //creating green leaves
  function createGreenleaves() {
    greenleaves = createSprite(random(50,350),40,10,10);
    greenleaves.addImage(greenleavesImg);
    greenleaves.scale=0.05;
    greenleaves.velocityY = 3;
    greenleaves.lifetime=150;
      }
