let x, y;

function setup() {
    createCanvas(windowWidth, windowHeight);

    background(220);
    x = random([2, 3, 4, 5, 6, 7, 8, 9]);
    y = random([2, 3, 4, 5, 6, 7, 8, 9]);


}

function draw() {
    background(220);

    push();
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(200);
    text(x + "x" + y, width / 2, height / 2);
    pop();

}

function touchStarted() {
    x = random([2, 3, 4, 5, 6, 7, 8, 9]);
    y = random([2, 3, 4, 5, 6, 7, 8, 9]);
}
