const animations = new Map<number, number>();
export const carPosition = new Map<number, number>();

export const animateCar = (car: HTMLElement, duration: number, id: number): Promise<void> => {
  return new Promise((resolve) => {
    const start = performance.now();

    const frame = (now: number): void => {
      const elapsed = now - start;
      const distance = window.innerWidth - car.offsetWidth - 175;
      const progress = Math.min(elapsed / duration, 1);
      const carCurrentPosition = distance * progress;

      car.style.transform = `translateX(${carCurrentPosition}px)`;
      carPosition.set(id, carCurrentPosition);

      console.log(progress);
      if (progress < 1) {
        const animateId = requestAnimationFrame(frame);
        animations.set(id, animateId);
      } else {
        resolve();
      }
    };
    const animateId = requestAnimationFrame(frame);
    animations.set(id, animateId);
  });
};

export const stopAnimation = (id: number): void => {
  const animateId = animations.get(id);
  if (animateId) {
    cancelAnimationFrame(animateId);
    animations.delete(id);
  }
};
