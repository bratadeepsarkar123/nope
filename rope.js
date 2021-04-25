class Line{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length:10
        }
        this.pointB = pointB
        this.Line= Constraint.create(options);
        World.add(world, this.Line);
    }
     fly(){
         this.Line.bodyA=null  

     }

      display(){
          if(this.Line.bodyA){
            var pointA = this.Line.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("white")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
         }
    }
    
                                    
    
}