
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
      game.inputMovementCommand('up');
      break;
    case KeyCode.Down:
      game.inputMovementCommand('down');
      break;
    case KeyCode.Left:
      game.inputMovementCommand('left');
      break;
    case KeyCode.Right:
      game.inputMovementCommand('right');
      break;
    default:
      break;
  }
}