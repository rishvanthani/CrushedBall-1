class PaperBall {
    constructor() {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.7,
          'density':1.2
      }
      this.body = Bodies.circle(100,646,25, options);
     
      
      World.add(world, this.body);
    }
    display(){
     
    
      
     ellipseMode(RADIUS)
      strokeWeight(4)
      stroke("red")
      fill("magenta");
      ellipse(this.body.position.x,this.body.position.y,20,20)
     
    }
  };