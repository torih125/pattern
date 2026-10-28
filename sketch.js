let cols
let rows
let gridSize = 80
function setup() {
  createCanvas(1600, 1600);
  cols = int(width/gridSize)
  rows = int(height/gridSize)
}

function draw() {
  background(70);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let x = i * gridSize + gridSize/2 
            let y = j * gridSize + gridSize/2
            push()
            translate(x, y) // makes 0,0 new center for cell
            //adding detail to sketch
            if (i % 2 === 0) {
                fill("yellow")
                stroke("black")
                strokeWeight(3)

            } else {
                noFill()
                strokeWeight(3)
                stroke("hotPink")
            }
            // distance btwn mouse and each circle
             let d = dist(x, y, mouseX, mouseY)
             let circleSize = map(d, 100, 900, gridSize * 0.7, gridSize)

            rotate((frameCount*0.05+i+j))
            circle(0, 0, circleSize,)
            arc(0, 0, gridSize/2.5, gridSize/2.5, 0, 160, HALF_PI)
            fill("black")
            circle(0-gridSize*0.1, 0-gridSize*0.125, gridSize*0.05,)
            circle(0+gridSize*0.1, 0-gridSize*0.125, gridSize*0.05,)
            console.log(mouseX, mouseY)
            pop()

        }
    }
}