import { patchEngin } from '@/app/services/api/api';
import { animateCar, stopAnimation, carPosition } from './animate-car';

export const runCar = async (id: number, car: HTMLElement): Promise<boolean> => {
  try {
    const { velocity, distance } = await patchEngin(id, 'started');
    const duration = distance / velocity;

    const animation = animateCar(car, duration, id);

    await patchEngin(id, 'drive');

    await animation;
    return true;
  } catch (error) {
    stopAnimation(id);
    await patchEngin(id, 'stopped');
    const currentPosition = carPosition.get(id);
    car.style.transform = `translateX(${currentPosition}px)`;
    return false;
  }
};
