
let target = new Vector(390, 390);
let spawnPoint = new Vector(10, 10);
let pops;
let k = false;
let cooldown = new Timer(2);
function setup(){
  createCanvas(400, 400);
  pops = new Population(100);
}

function draw(){
  if(!k){
    background(0);
    spawnPoint.show();
    target.show();
    k = true;
  }
  if(pops.hasUnfinished()){
    pops.drawPopulation();

  }
  else{
    if(cooldown.countDown()){
      pops.mutateAndReproduce();
      k = false;
    }

  }

}
