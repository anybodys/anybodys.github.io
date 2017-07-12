noStroke();
fill(255, 255, 184);
var numStars = 500;
var starSize = 2;

var myStarsX = [];
var myStarsY = [];
for (var i = 0; i < numStars; i++) {
    myStarsX[i] = random(0, 400);
    myStarsY[i] = random(0, 400);
}

var shooting = floor(random(0, numStars));
var shootingYSpeed = 3;

var draw = function() {
    background(0, 4, 56);
    for (var x = 0; x < numStars; x++) {
        ellipse(myStarsX[x], myStarsY[x], starSize, starSize);
        if (x === shooting) {
            myStarsX[x] += 4;
            myStarsY[x] += shootingYSpeed;
        } else {
            myStarsX[x]++;
        }
        if (myStarsX[x] > 405) {
            myStarsX[x] = -5;
            myStarsY[x] = random(0, 400);
            if (x === shooting) {
                shootingYSpeed = random(-3, 5);
            }
        }
    }
};
