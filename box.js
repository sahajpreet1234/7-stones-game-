class Box {
  constructor(x, y, width, height) {
    var options = {
        
      restitution :0.4,
      friction :0.1,
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    World.add(world, this.body);
  }

  display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    if(this.body.speed<15){
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("brown");
      stroke("black")
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
      push();
      this.visibility = this.visibility - 5;
      World.remove(world,this.body)
      pop();
    }
    
  }

  score(){
    if(this.visibility<0 && this.visibility>-105){
      score= score+1;
    }
  }
};