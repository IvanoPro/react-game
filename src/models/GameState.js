import random from 'lodash/random';

export default class GameState {
  mapWidth = 16;
  mapHeight = 16;
  turnDuration = 500;
  turnTimer = 0;
  score = 0;
  tiles = []; 
  apples = [];
  snake = {
    segments: [],
  };
  inputDir = 'up'; 

  findEntityAt(x, y) {
    for (const a of this.apples) {
      if (a.isAt(x, y)) {
        return a;
      }
    }
    for (const s of this.snake.segments) {
      if (s.isAt(x, y)) {
        return s;
      }
    }
  }

  getRandomEmptyLocation() {
    let location;
    while (!location || this.findEntityAt(location.x, location.y)) {
      location = this.getRandomLocation();
    }
    return location;
  }

  getRandomLocation() {
    return {
      x: random(this.mapWidth - 1),
      y: random(this.mapHeight - 1),
    }
  }
}