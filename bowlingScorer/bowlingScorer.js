'use strict';

class BowlingScorer {

  getScore(frames) {

    let totalGameSum = 0;
    for(let i = 0; i < frames.length; i++){
      // for(let j = 0; j < frames[i].length; j++){}
      let frameSum = frames[i][0] + frames[i][1];
      if(frames[i][0] === 10){
        frameSum += frames[i + 1][0] + frames[i + 1][1];
      }else if(frameSum === 10){
        frameSum += frames[i + 1][0];
      }
      totalGameSum += frameSum;
    }
    return totalGameSum;
  }

}
