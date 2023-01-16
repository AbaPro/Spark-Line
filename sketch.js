var sl, cn, fsl;
function setup() {
  cn = createCanvas(505, 310).parent("bottom");
  sl = createSlider(1, 50, 20, 1).parent("sld");
  fsl = createSlider(1, 60, 2, 1).parent("fsld");
}

function draw() {
  frameRate(fsl.value());
  background(51);
  noFill();
  stroke("lime");
  beginShape();
  for (var x = 0; x <= width; x += sl.value()) {
    vertex(x, random(100, 200));
    var txtsz = map(sl.value(), 1, 50, 1, 20);
    textSize(txtsz);
    noStroke();
    fill(240);
    text(x, x + 2, 225);
    noFill();
    stroke("lime");
  }
  endShape();
  stroke(240);
  line(0, 95, width, 95);
  line(0, 205, width, 205);
}
