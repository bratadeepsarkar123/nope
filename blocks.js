class Block {
    constructor(x,y) {
       var options = {
         isStatic:false,
         restitution:0,
         friction:0.5,
         density:0.8
        }
      this.body = Bodies.rectangle(x, y, width/25, height/25, options);
      this.width = width;
      this.height = height;
     // this.image=loadImage("paper.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER)
      strokeWeight(3)
      stroke("white");
      rect(pos.x,pos.y, width/25,height/25)
     // imageMode(CENTER)
      //image(this.image,pos.x,pos.y+(this.height/6),this.width,this.height)
      
     
    }
  }