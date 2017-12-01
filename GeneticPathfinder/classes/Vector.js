class Vector{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  distance(otherVector){
    let distY = otherVector.y - this.y;
    let distX = otherVector.x - this.x;
    return sqrt((distY * distY) + (distX * distX));
  }
  show(){
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 10, 10);
  }
}
class Color {
  constructor(R, G, B, A) {
    this.r = R;
    this.g = G;
    this.b = B;
    this.a = A;
  }
}
