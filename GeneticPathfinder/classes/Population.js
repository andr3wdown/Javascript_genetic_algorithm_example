class Population {
  constructor(populationCount, cutoff=0.2) {
    this.populationCount = populationCount;
    this.cutoff = cutoff;
    this.denizens = [];
    for(let i = 0; i < populationCount; i++)
    {
      this.denizens[i] = new DNA(spawnPoint, 70);
    }
  }
  drawPopulation(){
    for(let i = 0; i < this.populationCount; i++){
      this.denizens[i].drawStepByStep(new Color(255, 0, 255, 60));
    }
  }
  hasUnfinished(){
    for(let i = 0; i < this.denizens.length; i++){
      if(!this.denizens[i].finished){
        return true;
      }
    }
    return false;
  }
  mutateAndReproduce(){
    let survivorCut = floor(this.populationCount * this.cutoff);
    let survivors = [];
    for(let i = 0; i < survivorCut; i++){
      survivors[i] = this.findFittest()[0];
    }
    this.denizens = [];
    while(this.denizens.length < this.populationCount){
      for(let i = 0; i < survivors.length; i++){
        this.denizens[this.denizens.length] = new DNA(spawnPoint, 70, false, survivors[i].genome, survivors[floor(random(0, survivors.length * 0.3))].genome);
        if(this.denizens.length >= this.populationCount){
          break;
        }
      }
    }
  }
  findFittest(){
    let maxFitness = -1000;
    let index = -1;
    for(let i = 0; i < this.denizens.length; i++){
      if(this.denizens[i].fitness() > maxFitness){
        maxFitness = this.denizens[i].fitness();
        index = i;
      }
    }
    return this.denizens.splice(index, 1);
  }
}
