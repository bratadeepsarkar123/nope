class Ball {
    constructor(x, y,radius) {
      var options = {
        isStatic:false,
        restitution:0,
        friction:1,
        frictionAir:0.001,
        density:1.2
      }
      this.body = Bodies.circle(x, y,radius, options);
     this.radius=radius
     // this.image=loadImage("dustbingreen.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      ellipseMode(RADIUS)
      strokeWeight(0);
      ellipse(pos.x,pos.y,this.radius)
      
      //imageMode(CENTER)
      //image(this.image,pos.x,pos.y,this.width,this.width)
    }
  }