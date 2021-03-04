
export default function initGameLoop(game, update) {
    requestAnimationFrame(onFrame);
  
    let lastTime = 0;
  
    function onFrame(time) {
      if (lastTime !== 0) {
        update(time - lastTime);
      }
      lastTime = time;
      requestAnimationFrame(onFrame);
    }
  }