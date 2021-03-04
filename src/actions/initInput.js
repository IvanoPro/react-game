
export default function initInput(game) {
  document.body.addEventListener('keydown', (e) => {
    updateKeyDown(game, e.keyCode);
  });
}

export const KeyCode = {
  Up: 38,
  Down: 40, 
  Left: 37,
  Right: 39,
};

export function updateKeyDown(game, keyCode) {
  switch (keyCode) {
    case KeyCode.Up:
      game.inputDir = 'up';
      break;
    case KeyCode.Down:
      game.inputDir = 'down';
      break;
    case KeyCode.Left:
      game.inputDir = 'left';
      break;
    case KeyCode.Right:
      game.inputDir = 'right';
      break;
    default:
      break;
  }
}