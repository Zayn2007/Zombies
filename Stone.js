class Stone{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        
        var options ={
            restitution : 0.8   
        }

        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }

    display(){

        push();
        var pos = this.body.position;
        fill("white");
        ellipseMode(CENTER);
        translate(pos.x,pos.y);
        ellipse(0,0,80,80);
        pop();
    }
}