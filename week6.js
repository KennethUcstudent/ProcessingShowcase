function setup() {
    createCanvas(400, 400);
    pixelDensity(1);
  }
  function draw() {
  //background color
    background(1)
    loadPixels();
    for (var y = 0;y < height; y++){
      for (var x =0;x < width; x++){
        var index=(x + y* width)*4;
        pixels[index+0] =x;
        pixels[index+1] ==(255);
        pixels[index+2] =y;
        pixels[index+3] =255;
      }
    }
    updatePixels();

//practice how to use mouseispressed 
    // function draw() {        
    //     background("#ccc");
    //     if (mouseIsPressed === true) {
    //     stroke(pmouseX, pmouseX, mouseY);
    //     line(0, 0, mouseX, mouseY);
    //     line(0, 400, mouseX, mouseY);
    //     line(400, 0, mouseX, mouseY);
    //     line(400, 400, mouseX, mouseY);
    //     }
    //     if (mouseIsPressed === false) {
    //     background("#ccc");
    //     line(0,0,400,400);
    //     line(0,400,400,0);
    //     }
    
  //circle
    stroke("#0012FF"); 
    strokeWeight(5)
    fill (190, 190, 190);
    ellipse(200, 200, 250, 250);

  //Vector
    angleMode(DEGREES)
      translate(width / 2, height / 2);
      if (mouseIsPressed === true) {
      for (let B1= 30; B1<=360; B1+=30){
        let a1 = createVector(125*cos(B1),125*sin(B1))
        m=createVector(mouseX-200,mouseY-200)
        stroke(2)
        line( m.x,m.y, a1.x, a1.y);
        } 
      }
    
  //fixed line
    if (mouseIsPressed === false) {
    angleMode(DEGREES);
    for (let A1= 30; A1<=360; A1+=30){
      let a1 = 125*cos(A1);
      let a2 = 125*sin(A1);
    stroke("#0012FF"); 
    line(0,0, a1, a2);
    }
    }
  }

