class Paper{
    constructor(x,y) {
      var options = {
          'friction':0.3,
          'restitution': 0.8,
          'density': 1
      }
      this.body = Bodies.circle(x,y,10,options);
      this.color = color(random(0,255),random(0,255),random(0,255)) 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.color);
      ellipse(pos.x, pos.y,20,20);
    }
  };
