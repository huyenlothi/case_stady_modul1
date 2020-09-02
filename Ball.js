function Ball(xpos, ypos, radius, xVelocity, yVelocity) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.xVelocity = xVelocity;
    this.yVelocity = yVelocity;

    //  this.drawBall = function() {
    //     let canvas = document.getElementById("canvas");
    //     let ctx = canvas.getContext("2d");
    //     ctx.beginPath();
    //     ctx.arc(this.xpos, this.ypos, this.radius, 0, Math.PI*2);
    //     ctx.fillStyle = "red";
    //     ctx.fill();
    //     ctx.closePath();
    //
    // }
     this.draw= function() {
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, 500, 700);
         ctx.beginPath();
         ctx.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2);
         ctx.fillStyle = "red";
         ctx.fill();
         ctx.closePath();

        this.xpos += this.xVelocity;
        this.ypos += this.yVelocity;
        if(this.xpos + this.xVelocity > 500 - this.radius || this.xpos + this.xVelocity<this.radius){
            this.xVelocity = -this.xVelocity;
        }
        if( this.ypos + this.yVelocity<this.radius) {
            this.ypos = - this.yVelocity;
        }else if((this.ypos + this.yVelocity)>= (700 -this.radius)) {
            if(this.xpos> bar.x && this.xpos< (bar.x + bar.width)) {
                this.ypos = - this.yVelocity;
            } else {
                alert("GAME OVER!!!")
                document.location.reload();
            }

        }
    }
    setInterval(this.draw,10);
}


   