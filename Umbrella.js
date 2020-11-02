class Umbrella {
    constructor(x, y) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.circle(x, y, 20, options);
        this.x = x;
        this.y = y;
        this.image = loadImage("images/Walking Frame/walking_1.png");

    }

    display() {
        var angle = this.body.angle;

        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 20, 20);
        pop()
    }
}