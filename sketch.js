function setup() {
  createCanvas(800,600);
  background(39,99,124);
  noStroke();
}

function draw() {
  // bottom
  fill(244,158,76);
  ellipse(400,425,210,210);
  fill(39,99,124);
  rect(285,330,230,155);
  
  // arm
  stroke(63,63,63);
  strokeWeight(15);
  line(450,325,500,375);
  strokeWeight(12);
  line(502,377,530,320);
  noStroke();
  fill(244,158,76);
  ellipse(530,320,50,50);

  // body
  stroke(63,63,63);
  strokeWeight(5);
  line(335,360,275,330);
  line(325,385,275,360);
  line(320,415,275,390);
  noStroke();
  
  fill(59,142,165);
  quad(350,300,450,300,500,475,300,475);
  fill(255,255,255);
  triangle(345.5,300,400,300,370,375);
  ellipse(415,360,15,15);
  ellipse(415,395,15,15);
  ellipse(415,430,15,15);
  fill(39,99,124);
  ellipse(400,220,200,200);
  
  // head
  stroke(63,63,63);
  strokeWeight(7);
  line(365,100,400,150);
  line(445,75,410,175);
  noStroke();
  
  fill(59,142,165);
  ellipse(400,225,167.5,167.5);
  
  // eye
  fill(245,238,158);
  ellipse(400,225,75,75);
  fill(208,68,54);
  ellipse(400,225,50,50);
  fill(255,255,255);
  ellipse(415,210,20,20);
}

// PALETTE
  // black      #333333  rgb(63,63,63)
  // dark blue  #27637c  rgb(39,99,124)
  // mid blue   #3b8ea5  rgb(59,142,165)
  // red        #d04436  rgb(208,68,54)
  // orange     #f49e4c  rgb(244,158,76)
  // yellow     #f5ee9e  rgb(245,238,158)
  // white      #ffffff  rgb(255,255,255)
