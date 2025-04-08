import { patchEngin } from '@/app/services/api/api';
import { animateCar, stopAnimation, carPosition } from './animate-car';

export const runCar = async (id: number, car: HTMLElement): Promise<void> => {
  try {
    const { velocity, distance } = await patchEngin(id, 'started');

    const duration = distance / velocity;

    await animateCar(car, duration, id);

    await patchEngin(id, 'drive');
  } catch (error) {
    await patchEngin(id, 'stopped');
    stopAnimation(id);
    const currentPosition = carPosition.get(id);
    car.style.transform = `translateX(${currentPosition}px)`;
  }
};
