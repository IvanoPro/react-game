export default function createGameLoop(update) {
    requestAnimationFrame(onFrame);
  
    let lastTime = 0;
    let running = true;
  
    function onFrame(time) {
      if (!running) {
        return;
      }
      if (lastTime !== 0) {
        update(time - lastTime);
      }
      lastTime = time;
      requestAnimationFrame(onFrame);
    }
  
    return function cancelGameLoop() {
      running = false;
    };
  }