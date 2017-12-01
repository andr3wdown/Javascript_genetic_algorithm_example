class DNA{
  constructor(startingPoint, genomeLenght = 50, firstGen=true, parentA=[], parentB=[], mutationRate=0.01){
    this.pathIndex = 0;
    this.finished = false;
    this.genomeLenght = genomeLenght;
    this.x = startingPoint.x;
    this.y = startingPoint.y;
    this.genome = [];
    if(firstGen){
      for(let i = 0; i < genomeLenght; i++){
        this.genome[i] = new Vector(random(-1,1), random(-1,1));
      }
    }
    else{
      for(let i = 0; i < genomeLenght; i++){
        let chance = random(0,1);
        if(chance > 0.5){
          this.genome[i] = parentA[i];
        }
        else{
          this.genome[i] = parentB[i];
        }
        let test = random(0,1);
        if(test <= mutationRate){
          this.genome[i] = new Vector(random(-1,1), random(-1,1));
        }
      }
    }

  }
  calculatePos(){
    for(var i = 0; i < this.genomeLenght; i++){
      this.x += this.genome[i].x;
      this.y += this.genome[i].y;
    }
    this.finished = true;
  }
  fitness(){
    if(!this.finished)
    {
      this.calculatePos();
    }
    let t = new Vector(this.x, this.y).distance(target);
    if(t == 0){
      t = 0.001;
    }
    return 60/t;
  }
  drawPath(color){
    stroke(color.r, color.g, color.b, color.a);
    for(let i = 0; i < this.genomeLenght; i++){
      line(this.x, this.y, this.x + this.genome[i].x * 10, this.y + this.genome[i].y * 10);
      this.x += this.genome[i].x * 10;
      this.y += this.genome[i].y * 10;
    }
    noStroke();
    fill(0, 255, 255, 255);
    ellipse(this.x, this.y, 3, 3);
    this.finished = true;
  }
  drawStepByStep(color){
    if(!this.finished){
      stroke(color.r, color.g, color.b, color.a);
      line(this.x, this.y, this.x + this.genome[this.pathIndex].x * 10, this.y + this.genome[this.pathIndex].y * 10);
      this.x += this.genome[this.pathIndex].x * 10;
      this.y += this.genome[this.pathIndex].y * 10;
      this.pathIndex += 1;
      if(this.pathIndex == this.genomeLenght){
        noStroke();
        fill(0, 255, 255, 255);
        ellipse(this.x, this.y, 3, 3);
        this.finished = true;

      }
    }

  }
}
