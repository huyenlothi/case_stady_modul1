let Ball = function(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;

    this.stepForward = function() {
        if (this.x - this.radius < 0 || this.x + this.radius >= 700) {
            this.dx = -this.dx;
        }else {
            if (this.y - this.radius < 0 ) {
                this.dy = -this.dy;
            }else {
                if (this.y + this.radius == bar.y) {
                    if ( this.x+ this.radius > bar.x && this.x < (bar.x + bar.width )) {
                        score++;
                        // if( score == 2 || score == 5 || score==15 ) {
                        // this.dx = this.dx + 2;
                        // this.dy = this.dy +  2;
                        // }
                        this.dy = -this.dy;

                    }
                }
            }
        }
        if ((Math.abs(ball.y)+ ball.radius)>=900) {
            alert("GAME OVER !!!");
            document.location.reload();
            cancelAnimationFrame(draw);

        }

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
        console.log(Math.abs(this.y)+ this.radius);

        if (score==20) {
            alert("YOU WIN!!!");
            document.location.reload();
        }

    }
}
