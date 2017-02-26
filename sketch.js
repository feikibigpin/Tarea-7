var x = 0;
var mySong;
var analyzer;

function preload() {
    mySong = loadSound('assets/lunedi-cinema.mp3');
    //mySong = loadSound('assets/smack.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);  
  stroke(255);     // Set line drawing color to white
  frameRate(200);
  background(0);   // Set the background to black
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
  mySong.loop();
}

function draw() {
    if (mySong.isPlaying() === true) {
        var volume = analyzer.getLevel();
        h=mySong.rate(mouseX*0.001+1);
        i=mySong.amp(mouseY*0.01+1);
       
        translate(0,height);
  
        x = x + 1; 
        if (x == width) { 
         background(0);   // Set the background to black
         x = 0; 
        } 
        line(x, 0, x, -volume*1000);  
    } 

     else {
        background(255,0,0)
    }
    
}

function mousePressed() {
    if (mySong.isPlaying() === true) {
        mySong.pause();
        background(255,0,0);
    } else {
        mySong.play();
        background(0);
    }
}

//line(frameCount, -volume*1000, frameCount,0 );
