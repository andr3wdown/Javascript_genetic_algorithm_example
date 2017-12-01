class Timer{
  constructor(delay){
    this.c = delay;
    this.d = delay;

  }
  countDown(){
    this.c -= 0.1;
    if(this.c <= 0){
      this.c = this.d;
      return true;
    }
    return false;
  }
}
