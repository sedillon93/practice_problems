'use strict';

function SetOfStacks(x){
  this.stacks = [];
  this.maxStackSize = x;
}

SetOfStacks.prototype.push = function(value){
  if(!this.stacks[0]){
    this.stacks.push([value]);
  }else{
    if(this.stacks[this.stacks.length - 1].length < this.maxStackSize){
      this.stacks[this.stacks.length - 1].push(value);
    }else {
      this.stacks.push([value]);
    }
  }
};

SetOfStacks.prototype.pop = function(){
  if(!this.stacks[0]){
    return null;
  }else {
    let elementToReturn = this.stacks[this.stacks.length - 1].pop();
    if(this.stacks[this.stacks.length - 1].length < 1){
      this.stacks.pop();
    }
    return elementToReturn;
  }
};

module.exports = SetOfStacks;
