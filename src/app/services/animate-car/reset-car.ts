import { patchEngin } from '@/app/services/api/api';
import { stopAnimation } from './animate-car';

export const resetCar = async (id: number, car: HTMLElement): Promise<void> => {
  stopAnimation(id);

  car.style.transform = 'translateX(0)';

  await patchEngin(id, 'stopped');
};
