class Paper {
    constructor(x,y,radius){
        var options = {
            'restitution':0.3,
            'friction': 0.5,
            'density':1.2
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = 30;

        this.image = loadImage("sprites/paper.png");       

        World.add(world,this.body);
    }
    display(){ 
        var pos = this.body.position; 
        var angle = this.body.angle; 
        push(); 
        translate(pos.x,pos.y); 
        rotate(angle); 
        imageMode(CENTER); 
        fill("white"); 
        //ellipse(0,0,this.radius); 
        image(this.image,0,0,75, 75); 
        pop(); 
    }
}
    
   