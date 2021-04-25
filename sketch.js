const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world,ground,ball,rope;

function setup() {
  var canvas = createCanvas(windowWidth,windowHeight);
 
  engine = Engine.create();
	world = engine.world;

  Engine.run(engine);
  //creating main objects
    ground=new Ground(width/2,19/20*height,width,height/30)
    ball = new Ball(width/10,5*height/7,height/30)
    rope= new Line(ball.body,{x:width/5,y:3*height/5})
  
  //CREATING GROUND
    g1= new Ground(3*width/5,3*height/5,width/5,height/30)
    g2 = new Ground(29*width/48,((3*height/5)-(4*height/50)-(height/60)),4*width/25,1)
    g3 = new Ground(4.3*width/5,2*height/5,width/5,height/30)
    g4 = new Ground(4.3*width/5,((2*height/5)-(4*height/50)-(height/60)),4*width/25,1)

  //creating blocks
    b1= new Block(16*width/24,((3*height/5)-(height/50)-(height/60)))
    b2= new Block(15*width/24,((3*height/5)-(height/50)-(height/60)))
    b3= new Block(14*width/24,((3*height/5)-(height/50)-(height/60)))
    b4= new Block(13*width/24,((3*height/5)-(height/50)-(height/60)))

   // ab1= new Block(33*width/48,3*height/8)
    ab2= new Block(31*width/48,((3*height/5)-(3*height/50)-(height/60)))
    ab3= new Block(29*width/48,((3*height/5)-(3*height/50)-(height/60)))
    ab4= new Block(27*width/48,((3*height/5)-(3*height/50)-(height/60)))

    h2= new Block(31*width/48,((3*height/5)-(7*height/50)-(height/60)))
    h3= new Block(29*width/48,((3*height/5)-(7*height/50)-(height/60)))
    h4= new Block(27*width/48,((3*height/5)-(7*height/50)-(height/60)))

    cb1= new Block(15.5*width/24,((3*height/5)-(5*height/50)-(height/60)))
    cb2= new Block(15*width/24,((3*height/5)-(5*height/50)-(height/60)))
    cb3= new Block(14*width/24,((3*height/5)-(5*height/50)-(height/60)))
    cb4= new Block(13.5*width/24,((3*height/5)-(5*height/50)-(height/60)))

    j2= new Block(15*width/24,((3*height/5)-(9*height/50)-(height/60)))
    j3= new Block(14*width/24,((3*height/5)-(9*height/50)-(height/60)))

    k3= new Block(29*width/48,((3*height/5)-(11*height/50)-(height/60)))



    //d1= new Block(4.6*width/5,((2*height/5)-(height/50)-(height/60)))
    d2= new Block(4.45*width/5,((2*height/5)-(height/50)-(height/60)))
    d3= new Block(4.35*width/5,((2*height/5)-(height/50)-(height/60)))
    d4= new Block(4.25*width/5,((2*height/5)-(height/50)-(height/60)))
    d5= new Block(4.15*width/5,((2*height/5)-(height/50)-(height/60)))

    e2= new Block(4.5*width/5,((2*height/5)-(3*height/50)-(height/60)))
    e3= new Block(4.1*width/5,((2*height/5)-(3*height/50)-(height/60)))
    e4= new Block(4.3*width/5,((2*height/5)-(3*height/50)-(height/60)))

    i2= new Block(4.5*width/5,((2*height/5)-(7*height/50)-(height/60)))
    i3= new Block(4.1*width/5,((2*height/5)-(7*height/50)-(height/60)))
    i4= new Block(4.3*width/5,((2*height/5)-(7*height/50)-(height/60)))

    f1= new Block(4.15*width/5,((2*height/5)-(5*height/50)-(height/60)))
    f2= new Block(4.45*width/5,((2*height/5)-(5*height/50)-(height/60)))
    f3= new Block(4.35*width/5,((2*height/5)-(5*height/50)-(height/60)))
    f4= new Block(4.25*width/5,((2*height/5)-(5*height/50)-(height/60)))

    l2= new Block(4.4*width/5,((2*height/5)-(9*height/50)-(height/60)))
    l3= new Block(4.2*width/5,((2*height/5)-(9*height/50)-(height/60)))

    m3= new Block(4.3*width/5,((2*height/5)-(11*height/50)-(height/60)))

}

function draw() {
  background(0);  
  text(mouseX + "," + mouseY,100,100)
  Engine.update(engine);
   ground.display();
   g1.display();
   g3.display();
  
   rope.display();
   ball.display();
    
   b1.display();
   b2.display();
   b3.display();
   b4.display();

   //d1.display();
  

   //ab1.display();
   ab2.display();
   ab3.display();
   ab4.display();

   cb1.display();
   cb2.display();
   cb3.display();
   cb4.display();
   /* cb5.display();
   cb6.display();*/
   d2.display();
   d3.display();
   d4.display();
   d5.display();

   e2.display();
   e3.display();
   e4.display();
   

   f1.display();
   f2.display();
   f4.display();
   f3.display();

   h2.display();
   h3.display();
   h4.display();

   i2.display();
   i3.display();
   i4.display();

   j2.display();
   j3.display();
  
   k3.display();

   l2.display();
   l3.display();
  
   m3.display();
   
   

    
   // g2.display();
    /*if(ball.body.position.x > (29*width/48-6*width/25) && ball.body.position.y === ((3*height/5)-(4*height/50)-(height/60)) ){
      Matter.Body.setStatic(g2.body,false)

    }*/
    
    if(ball.body.position.x-g2.body.position.x < (height/30+6*width/25)/2 && ball.body.position.y-g2.body.position.y < ((height/30)+1)/2 ){
      Matter.Body.setStatic(g2.body,false)

    }

    if(ball.body.position.x-g4.body.position.x < (height/30+6*width/25)/2 && ball.body.position.y-g4.body.position.y < ((height/30)+1)/2 ){
      Matter.Body.setStatic(g4.body,false)

    }
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}


