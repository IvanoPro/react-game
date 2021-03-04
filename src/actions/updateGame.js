import initGameState from './initGameState';
import Entity from '../models/Entity';
import last from 'lodash/last';

export default function updateGame(game, dt) {
  game.tickTimer += dt;

  game.tickDuration *= 0.9999;

  if (game.tickTimer >= game.tickDuration) {
    tick(game);
    game.tickTimer = 0;
  }
}

function tick(game) {
  updateInput(game);

  moveSnake(game.snake, game.snake.movementDirection);

  checkSnakeOutOfBounds(game);
  checkSnakeEatSelf(game);
  checkSnakeEatApple(game);
}

function updateInput(game) {
  const movementCommand = game.input.movementCommands.shift();
  if (movementCommand) {
    game.snake.movementDirection = movementCommand;
  }
}

function moveSnake(snake, movementCommand) {
  const head = snake.segments[0];

  head.moveDir(movementCommand);

  for (let i = 1; i < snake.segments.length; i++) {
    const prevSegment = snake.segments[i - 1];
    const currSegment = snake.segments[i];
    currSegment.moveTo(prevSegment.prevX, prevSegment.prevY);
  }
}

function checkSnakeOutOfBounds(game) {
  if (game.snake.segments[0].isOutOfBounds(game.mapWidth, game.mapHeight)) {
    killSnake(game);
  }
}

function killSnake(game) {
  initGameState(game);
}

function checkSnakeEatSelf(game) {
  const snakeHead = game.snake.segments[0];
  for (const segment of game.snake.segments) {
    if (segment !== snakeHead && segment.isCollidingWith(snakeHead)) {
      return killSnake(game);
    }
  }
}

function checkSnakeEatApple(game) {
  const snakeHead = game.snake.segments[0];
  for (const apple of game.apples) {
    if (snakeHead.isCollidingWith(apple)) {
      return eatApple(game, apple);
    }
  }
}

function eatApple(game, apple) {
  game.setScore(game.score + 1);

  game.apples.splice(game.apples.indexOf(apple), 1);

  const endTailSegment = last(game.snake.segments);
  const newEndTailSegment = endTailSegment.clone();

  newEndTailSegment.moveTo(endTailSegment.prevX, endTailSegment.prevY);
  game.snake.segments.push(newEndTailSegment);
  spawnApple(game);
}

function spawnApple(game) {
  const {x, y} = game.getRandomEmptyLocation();
  const apple = new Entity(x, y);
  game.apples.push(apple);
}