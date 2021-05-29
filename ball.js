class Ball{
	constructor(x,y,r)
	{
		var options={
			restitution:0.5,
			friction:2,
			density:0.8
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2,options)
		World.add(world, this.body);
       this.image=loadImage("ball.png")
	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
            rotate(this.body.angle)
			imageMode(CENTER)
		    image(this.image,0,0,this.r, this.r);
			pop()
	}

}