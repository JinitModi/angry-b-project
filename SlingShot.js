class SlingShot{
    constructor(bodyA,pointB){
    var options = {
        bodyA:bodyA,
        pointB:pointB,
        stifness:0.5,
        length : 10
    }
    this.pointB = pointB
    this.slingshot = Constraint.create(options);
    World.add(world, this.slingshot)
}
fly(){
this.slingshot.bodyA = null;
}

display(){
if(this.slingshot.bodyA){
var pointA = this.slingshot.bodyA;
var pointB = this.pointB;
strokeWeight(10);
line(pointA.x, pointA.y, pointB.x, pointB.y)
}
}
}