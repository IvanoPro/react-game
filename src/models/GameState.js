import random from 'lodash/random';

const MOVEMENT_COMMAND_QUEUE_SIZE = 4;

export default class GameState {
  mapWidth = 16;
  mapHeight = 16;
  tickDuration = 200;
  tickTimer = 0;
  score = 0;
  tiles = []; 
  apples = [];
  snake = {
    movementDirection: 'up',
    segments: [],
  };
  input = {
    movementCommands: [],
  };

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

  inputMovementCommand(movementCommand) {
    this.input.movementCommands.push(movementCommand);
    while (this.input.movementCommands.length > MOVEMENT_COMMAND_QUEUE_SIZE) {
      this.input.movementCommands.shift();
    }
  }
}