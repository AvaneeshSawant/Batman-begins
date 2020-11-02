class Drop {
    constructor(x, y) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.circle(x, y, 10, options);
        this.x = x;
        this.y = y;
    }

    update() {
        this.x = 0;
        this.y = 0;
    }

    display() {
        var angle = this.body.angle;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(x, y, 10, 10);
        pop();
    }
}