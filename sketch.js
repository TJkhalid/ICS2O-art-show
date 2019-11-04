let sceneNum = 0;
let dot = new Mover();
let dots = [];

//Changed Canvas size to 600,600
//Changed dot cap to 6000
function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 6000; i++) {
    dots[i] = new Mover();
  }
}

function draw() {
  mouseClicked = function() {
    sceneNum++;
  }
  //Changed background colors and the titles
  if (sceneNum == 0) {
    background(200,200,200);
    fill(7, 14, 145);
    textSize(30);
    text("Coulorful Bees", 225, 290);
    textSize(25);
    text("Click to Start", 250, 340)
  } else if (sceneNum == 1) {
    background(0);

    for (let i = 0; i < 6000; i++) {
      dots[i].update();
      dots[i].show();
    }
  } else if (sceneNum == 2) {
    background(0, 0, 0);
    textSize(30);
    text("Thank you for watching!", 150, 300);
  }


}
