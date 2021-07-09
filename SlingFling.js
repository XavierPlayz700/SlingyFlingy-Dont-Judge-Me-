class SlingFling {

    constructor (bodyA, pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 5
        }
    
        this.pointB = pointB;
        this.slingy = Constraint.create(options);
        World.add(world, this.slingy);
    }

    fly () {
        this.slingy.bodyA = null;   
    }

    display () {
      if (this.slingy.bodyA !== null){
        var pointyA = this.slingy.bodyA.position;
        var pointyB = this.pointB;

        push();
        strokeWeight(4);
        stroke("cyan");
        line(pointyA.x, pointyA.y, pointyB.x, pointyB.y);
        pop();
    }
  }
}