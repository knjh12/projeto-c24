class Ferro{
  constructor(x,y){
    
    var options={
      'restitution':0.8,
          'friction':3,
          'density':30
    }

    this.x=x;
    this.y=y;
    this.width=40;
    this.height=40;

    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
  }
  display(){
  var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
      
  }
}