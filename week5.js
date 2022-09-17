let cX = 150;
let cY = 150;
let xSpeed = 7;
let ySpeed = 8;
let r=30 //control ball size//

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
}

function draw() {
  background(220);
  
 // TV noise background  
  loadPixels();
  for (var y = 0;y < height; y++){
    for (var x =0;x < width; x++){
      var index=(x + y* width)*4;
      pixels[index+0] =(100); //red value
      pixels[index+1] =(200);//Green
      pixels[index+2] =(100);//blue
      pixels[index+3] =random(255);//alpha
    }
  }
  updatePixels();

  ellipse(cX, cY, r*2, r*2);
  
  cX += xSpeed; //control the ball//
  if (cX < 0 || cX > width){
    xSpeed *= -1;
  }
   cY += ySpeed;
  if (cY < 0 || cY > height){
    ySpeed *= -2;
  }
  
  if (cX > width - r || cX < r) { //control the ball radius//
    xSpeed = -xSpeed;
    fill(random(255),random(255),random(255))
  }
  
  if (cY > height - r || cY < r) {
    ySpeed = -ySpeed;
    fill(random(255),random(255),random(255))
  }
}
