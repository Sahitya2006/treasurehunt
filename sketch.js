var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("t1.jpg");
  b = loadImage("b1.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  // Add code to display score in the middle of the screen
  fill("lightgreen");
   text("NOTE: Type Answers in CAPITALS only",350,460);
   fill("yellow");
   strokeWeight(1);
   stroke("yellow");
   text("SCORE: "+score,500,60);
   

  // Add code to display the end screen
   if (score === 15){
     clear();
     background(bg2);
     fill(0);
     textSize(38);
     text("TREASURE UNLOCKED",250,200);
   }

  drawSprites()
}