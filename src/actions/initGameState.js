import Entity from '../models/Entity';

export default function initGameState(game) {
  game.tickDuration = 120;
  game.tickTimer = 0;
  game.score = 0;
  game.highScore = Number(localStorage.getItem('game.highScore')) || 0;
  game.input.movementCommands = ['up'];

  game.tiles.length = 0;
  for (let x = 0; x < game.mapWidth; x++) {
    for (let y = 0; y < game.mapWidth; y++) {
      game.tiles.push(new Entity(x, y));
    }
  }

  if (game.apples.length !== 3) {
    game.apples.length = 0;
    game.apples.push(new Entity(0, 0));
    game.apples.push(new Entity(0, 0));
    game.apples.push(new Entity(0, 0));
  }
  game.apples[0].moveTo(1, 3);
  game.apples[1].moveTo(7, 2);
  game.apples[2].moveTo(5, 9);

  game.snake.movementDirection = 'up';
  game.snake.segments.length = 0;
  game.snake.segments.push(new Entity(4, 4));
  game.snake.segments.push(new Entity(4, 5));
  game.snake.segments.push(new Entity(5, 5));
  game.snake.segments.push(new Entity(5, 6));
  game.snake.segments.push(new Entity(5, 7));
}