//Changed position of dots
var Mover = function(){
  this.x = 600/2;
  this.y = 600/2;
  
};
//Changed movement to 10
Mover.prototype.update = function(){
    this.x += random(-10,10);
    this.y += random(-10,10);
};

Mover.prototype.show = function(){
  
//Removed rectangles and Changed size of dots
//Changed fill to be relative to x and y
    noStroke();
    fill(this.x-100,this.x+200,this.y+200);
  ellipse(this.x,this.y,7,5);
  
};
