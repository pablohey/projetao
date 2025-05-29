let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background(220);
  let distanciaX;
  let distanciaY;
  let distancia;
  distanciaX = mouseX - x;
  distanciaY = mouseY - y;
  distancia = sqrt(distanciaX*distanciaX + distanciaY*distanciaY);

  circle(x, y, 10);
  console.log(distancia);

  if (mouseX == x && mouseY == y) {
    text("vc conseguiu fofinho 🤯💋", 10, 200);
    noLoop();
  }
}

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background(0,0,0);
  let distanciaX;
  let distanciaY;
  let distancia;
  distanciaX = mouseX - x;
  distanciaY = mouseY - y;
  //distancia = sqrt(distanciaX*distanciaX + distanciaY*distanciaY);
  distancia = dist(mouseX,mouseY,x,y);
  fill ( 255,20,147)
  circle(mouseX, mouseY, distancia);
  //circle(x, y, 10);
  //console.log(distancia);
  textSize(30)

  if (distancia < 3) {
    text("o pablo hey te achou  ", 10, 200);
    noLoop();
  }
}