import Entity, {createTile, createApple, createSnakeSegment} from '../models/Entity';

export default function initGameState(game) {
  game.turnDuration = 200;
  game.turnTimer = 0;
  game.score = 0;
  game.inputDir = 'up';

  game.tiles.length = 0;
  for (let x = 0; x < game.mapWidth; x++) {
    for (let y = 0; y < game.mapWidth; y++) {
      game.tiles.push(new Entity(x, y));
    }
  }
  game.tiles.forEach(createTile);

  game.apples.length = 0;
  game.apples.push(new Entity(1, 3));
  game.apples.push(new Entity(7, 2));
  game.apples.forEach(createApple);

  game.snake.segments.length = 0;
  game.snake.segments.push(new Entity(4, 4));
  game.snake.segments.push(new Entity(4, 5));
  game.snake.segments.push(new Entity(5, 5));
  game.snake.segments.push(new Entity(5, 6));
  game.snake.segments.push(new Entity(5, 7));
  game.snake.segments.forEach(createSnakeSegment);
}