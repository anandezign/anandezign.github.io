// gui params
var page_width = 297;
var page_height = 210;
var orientation = ["portrait", "landscape"];
var page_color = '#FFF9C0';
var page_size = ["custom", "A4", "A0", "A1", "A2", "A3", "A5", "A6", "A7", "A8"];
var page_style = ["color", "ivory", "linen", "buff"];
var page_scale = 0.5
var page_ratio = 6.2
var gui;

let ivory, linen, buff;
function preload() { 
  ivory = loadImage("img/ivory-off-white-paper-texture.jpg");
  linen = loadImage("img/white-linen-background.jpg");
  buff = loadImage("img/simple-old-paper-2-transparent.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  imageMode(CENTER);
  // Create the GUI
  sliderRange(2, 500, 1);
  gui = createGui('p5.gui');
  gui.addGlobals("page_size", 'page_width', 'page_height', "page_style", 'page_color', "orientation");
  sliderRange(0.1, 2, 0.1);
  gui.addGlobals("page_scale");
  // Only call draw when then gui is changed
  noLoop();
}

function draw() {
  // this is a piece of cake
  background(30);
  fill(page_color);  

  switch(page_size) {
  case "custom":
    page_width = page_width; page_height = page_height; break;    
  case "A4":
    page_width = 210; page_height = 297; break;
  case "A0":
    page_width = 841; page_height = 1189; break;
  case "A1":
    page_width = 594; page_height = 841; break;
  case "A2":
    page_width = 420; page_height = 594; break;
  case "A3":
    page_width = 297; page_height = 420; break;
  case "A5":
    page_width = 148; page_height = 210; break;
  case "A6":
    page_width = 105; page_height = 148; break;
  case "A7":
    page_width = 74; page_height = 105; break;
  case "A8":
    page_width = 52; page_height = 74; break;
  }

  switch(orientation) {
  case "portrait":
    switch(page_style) {
    case "color":
      rect(width/2, height/2, page_scale * page_ratio * min(page_width, page_height), page_scale * page_ratio * max(page_width, page_height)); break;    
    case "ivory":
      image(ivory, width/2, height/2, page_scale * page_ratio * min(page_width, page_height), page_scale * page_ratio * max(page_width, page_height)); break;
    case "linen":
      image(linen, width/2, height/2, page_scale * page_ratio * min(page_width, page_height), page_scale * page_ratio * max(page_width, page_height)); break;
    case "buff":
      image(buff, width/2, height/2, page_scale * page_ratio * min(page_width, page_height), page_scale * page_ratio * max(page_width, page_height)); break;
    }
    break;
  case "landscape":
    switch(page_style) {
    case "color":
      rect(width/2, height/2, page_scale * page_ratio * max(page_width, page_height), page_scale * page_ratio * min(page_width, page_height)); break;    
    case "ivory":
      image(ivory, width/2, height/2, page_scale * page_ratio * max(page_width, page_height), page_scale * page_ratio * min(page_width, page_height)); break;
    case "linen":
      image(linen, width/2, height/2, page_scale * page_ratio * max(page_width, page_height), page_scale * page_ratio * min(page_width, page_height)); break;
    case "buff":
      image(buff, width/2, height/2, page_scale * page_ratio * max(page_width, page_height), page_scale * page_ratio * min(page_width, page_height)); break;
    }
    break;
  }
}

// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
