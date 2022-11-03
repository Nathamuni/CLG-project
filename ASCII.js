//const density = "N@#W$9876543210?!abc;:+=-,._"; 
// represents the density (maximum to minimum) Each pixel get 1 character 
const density = ' .:-i|=+%O#@'


let video;
let asciiDiv

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
    video.size(64,48);
  asciiDiv = createDiv();
}





function draw() {
  video.loadPixels();
  let aciiImg = '';
  for (let j = 0; j < video.height; j++) {

      for (let i = 0; i < video.width; i++) {
        //Every pixer has RGB value and an Alpha value(transparency) and each pixel contains all these 4 values
          const pixelIndex = (i + j * video.width) * 4;
          const r = video.pixels[pixelIndex + 0];
          const g = video.pixels[pixelIndex + 1];
          const b = video.pixels[pixelIndex + 2];
          const avg = (r + g + b) / 3; //to get one char to represent the brightness(RGB (0-255)) of the pixel me compute the average
          const len = density. length;
          const charIndex = floor(map(avg,0, 255, 0, len)); // take n.o from 0 to 255 and map it to  0 to length of the String
          
        const c = density.charAt(charIndex);
        if (c == " ") aciiImg += '&nbsp;'//Two words separated by a non-breaking space will stick together (not break into a new line). This is handy when breaking the words might be disruptive.
        else aciiImg += c;
      }
        aciiImg += '<br/>'; // line break

      }
    asciiDiv.html(aciiImg); // update div
  }
