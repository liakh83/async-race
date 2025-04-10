import { patchEngin } from '@/app/services/api/api';
import { animations, stopAnimation } from './animate-car';
import { removeWinnerOverlay } from '@/app/utils/modal';
import { startRaceBtn } from '@/app/view/option-button/option-btn';
import { loadCars } from '@/app/pages/garage/garage';
import { getCarElementById, getCurrentGarageState } from '@/app/utils/global-state';

export const resetCar = async (id: number, car: HTMLElement): Promise<void> => {
  stopAnimation(id);

  car.style.transform = 'translateX(0)';

  await patchEngin(id, 'stopped');
};

export const stopAllAnimations = (): void => {
  for (const id of animations.keys()) {
    stopAnimation(id);
  }
};

export const resetRace = async (): Promise<void> => {
  const starBtn = document.querySelectorAll('.start-btn');
  starBtn.forEach((btn) => {
    if (btn instanceof HTMLButtonElement) {
      btn.disabled = false;
    }
  });
  const stopBtn = document.querySelectorAll('.stop-btn');
  stopBtn.forEach((btn) => {
    if (btn instanceof HTMLButtonElement) {
      btn.disabled = true;
    }
  });
  stopAllAnimations();
  removeWinnerOverlay();
  const { data: cars } = await loadCars(getCurrentGarageState());

  await Promise.all(
    cars.map(({ id }) => {
      const carElement = getCarElementById(id);
      return resetCar(id, carElement);
    }),
  );
};
