console.log("ready");

var imageY = -20;
var Y_AXIS = 1;
var b1, b2;
var rectangles = [];

var scubaimg;
var icons = [];
var photos = [];
var text0 = "'The Beginning of an endless journey' \n\n\nSpearfishing is not a hobby; it is a way of life." +
"\n\nDating back to my Cypriot ancestors, spearfishing \n\nis deeply rooted in my family's traditions. " +
"\n\nMy father introduced me to this wonderful activity \n\nwhen I was only 7 years old, and \n\n" +
"ever since it has become my dearly passion. \n\nThis is a storyline of some of my most treasured \n\n" +
"adventures over the years. \n\nWelcome to this underwater journey.";

var text1 = "'The Legend of South Andros' \n\n\nAfter graduating from High School in December" +
"\n\n2014, my family decided to explore a new \n\nspearfishing location. After some research, we" +
"\n\ndecided to go to Andros, the biggest yet \n\nwildest island in the Bahamas. Once we arrived to the \n\n" +
"lodge and had dinner with the owners, they told us \n\nthe story of a huge Black Grouper that inhabited \n\n" +
"the shallow reefs of South Andros. \n\nWe decided to head there early next morning," +
"\n\nand after a couple of hours in the water, \n\nwe found the legendary Grouper we were looking" + 
"\n\nfor. It was one of the tastiest meals we ever had.";

var text2 = "'The new generation' \n\n\nThe most rewarding part of spearfishing is" +
"\n\npassing the knowledge to the younger generations. \n\nIt is particularly important for my " +
"\n\nfamily to preserve the heritage that we have\n\nbuilt after years and years of experience. \n\n" +
"This is a photo of my brother, my 6 year old cousin \n\nand myself after our first dive together. \n\n" +
"A very successful debut for Porter!";

var text3 = "'Double Trouble' \n\n\n2016, South Florida. We headed to a \n\nfishing shop to upgrade" +
" our equipment. \n\nAfter speaking with the shop owner for a while, \n\nhe told us about a reef 15 miles off" +
"\n\nthe coast from where we were staying. \n\nWhat was interesting about this reef is that \n\n" +
"it served as a spawning area for Groupers. \n\nAt about 18 metres deep, I managed to land \n\n" +
"a shot on a big Tiger Grouper (right), \n\nwhile my brother got hold of an even \n\nbigger " +
"Black Grouper (left).";

var x, y;
var bubbles = [];

function preload(){

  scubaimg = loadImage("scuba.png");
  
  for (var i=0; i < 4; i++){
    icons[i] = loadImage("icon" + i + ".png");
  }

  for (var i=0; i < 4; i++){
    photos[i] = loadImage("photo" + i + ".jpg");
  }
}


function setup(){
  createCanvas(windowWidth,2400);

  x = width/2;
  y = height;

  b1 = color(0, 191, 255);
  b2 = color(0, 0, 255);

  var posX = (width/2-50);
  var posY = (570);
  var rectW = (60);
  var rectH = (60);


  for (var i=0; i < 4; i++){
    var aRect = new Rectangle(posX, posY + (i * 570), rectW, rectH, icons[i], i);
    rectangles.push(aRect);    
  }


}

function draw() {


  setGradient(0, 0, width, height, b1, b2, Y_AXIS);
  
  for (var i=120; i<height; i+=120){
    stroke(255);
    text(i/120 + " m", 10, i);
  }

  image(scubaimg, 140, imageY, scubaimg.width/8, scubaimg.height/8);
  imageY = mouseY;

  if (imageY > 0 && imageY < 500){
    text("The shallows", 200, imageY);
  } else if (imageY > 500 && imageY < 1200){
    text("Intermittent zone",200, imageY);
  } else if (imageY > 1200 && imageY < height){
    text("Deeper waters", 200, imageY);
  }

  for (var i = 0; i < rectangles.length; i++){
    rectangles[i].display();
  } 

  for (let i = 0; i < bubbles.length; i++ ) {
    noFill;
    stroke(255);

      bubbles[i].display();
      bubbles[i].y += bubbles[i].speed;
  }

  if (bubbles.length > 150) {
    bubbles.splice(0 , 1);
  }

  for (var i=0; i<1; i++){
    bubbles.push(new Bubble(random(0,width), height));
  }


}


function mousePressed(){
  for (var i = 0; i < rectangles.length; i++){
    rectangles[i].clicked();
  } 


}


  function setGradient(x, y, w, h, b1, b2, axis){

  if (axis==Y_AXIS){
    for(var i=y; i<=y+h; i++){
      var inter = map(i, y, y+h, 0, 1);
      var b = lerpColor(b1, b2, inter);
      stroke(b);
      line(x, i, x+w, i);
    }

  }

}


  function Rectangle(posX, posY, rectW, rectH, theImage, number){


    this.img = theImage;
    this.posX = posX;
    this.posY = posY;
    this.rectW = rectW;
    this.rectH = rectH;
    this.col = color(255, 100);
    this.number = number;

    var image0 = false;
    var image1 = false;
    var image2 = false;
    var image3 = false;

    this.display = function() {
      noStroke();
      fill(this.col);

      imageMode(CENTER);
      image(this.img, this.posX, this.posY, this.rectW, this.rectH);


      if (image0){
        fill(255, 255, 255, 255);
        rect(this.posX-310, this.posY-490, 620, 440);
        image(photos[0], this.posX, this.posY-270, 600, 420);
        rect(this.posX+330, this.posY-490, 320, 440);
        fill(0);
        text(text0, this.posX+350, this.posY-460);
      }

      if (image1){
        fill(255, 255, 255, 255);
        rect(this.posX-310, this.posY-490, 620, 440);
        image(photos[1], this.posX, this.posY-270, 600, 420);
        rect(this.posX+330, this.posY-490, 320, 440);
        fill(0);
        text(text1, this.posX+350, this.posY-460);
      }

      if (image2){
        fill(255, 255, 255, 255);
        rect(this.posX-310, this.posY-490, 620, 440);
        image(photos[2], this.posX, this.posY-270, 600, 420);
        rect(this.posX+330, this.posY-490, 320, 440);
        fill(0);
        text(text2, this.posX+350, this.posY-460);
      }

      if (image3){
        fill(255, 255, 255, 255);
        rect(this.posX-310, this.posY-490, 620, 440);
        image(photos[3], this.posX, this.posY-270, 600, 420);
        rect(this.posX+330, this.posY-490, 320, 440);
        fill(0);
        text(text3, this.posX+350, this.posY-460);
      }

      noStroke();
      fill(this.col);

    }

    this.clicked = function(){
      var theDistance = dist(mouseX, mouseY, this.posX, this.posY);
      if (theDistance < this.img.height/16){

          console.log("Clicked the image " + this.number);

          if (this.number == 0){
            image0 = !image0;
          } else if (this.number == 1){
            image1 = !image1;
          } else if (this.number == 2){
            image2 = !image2;
          } else if (this.number == 3){
            image3 = !image3;
          }
      } 
    }

  } 

  function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.diameter = random(0,20);
  this.speed = -15;
  this.display = function() {
    return ellipse(this.x,this.y,this.diameter,this.diameter)
  }
}
  


