const Bee = require('./Bee');

class ForagerBee extends Bee {
  // TODO..
  constructor(color, food){
    super(color, food);

    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(el){
    this.treasureChest.push(el);
  }
}

module.exports = ForagerBee;
