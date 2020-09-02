let Ball = function(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx =dx;
    this.dy = dy;
    this.stepForward = function() {
        if (this.x - this.radius < 0 || this.x + this.radius >= 700) {
            this.dx = -this.dx;
        }
        if (this.y - this.radius < 0 ) {
            this.dy = -this.dy;
        }else {
            if (this.y == bar.y) {
                if ( this.x > bar.x && this.x < (bar.x + bar.width )) {
                    this.dy = -this.dy;
                    score++;
                } else {
                    alert("GAME OVER !!!");
                    document.location.reload();
                }
            }
        }
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
        if (score==20) {
            alert("YOU WIN!!!");
            document.location.reload();
        }
    }
}
