import { getCarElementById, getCurrentGarageState } from '@/app/utils/global-state';
import { loadCars } from '@/app/pages/garage/garage';
import { patchEngin } from '@/app/services/api/api';
import { animateCar, stopAnimation } from '@/app/services/animate-car/animate-car';
import { showWinnerOverlay } from '@/app/utils/modal';
import { startRaceBtn } from '@/app/view/option-button/option-btn';

export const startRaceHandler = async (): Promise<void> => {
  startRaceBtn.disabled = true;

  let winnerShown = false;

  const { data: carData } = await loadCars(getCurrentGarageState());

  const carElements = carData.map(({ id, name }: { id: number; name: string }) => {
    const carElement = getCarElementById(id);

    return { id, name, element: carElement };
  });
  const racePromises = carElements.map(async ({ id, name, element }) => {
    try {
      const { velocity, distance } = await patchEngin(id, 'started');
      const duration = distance / velocity;
      const startTime = performance.now();
      await animateCar(element, duration, id);

      const endTime = performance.now();
      const timeSec = +(endTime - startTime) / 1000;

      if (!winnerShown) {
        winnerShown = true;
        showWinnerOverlay(name, timeSec.toFixed(2));
      }
    } catch (error) {
      stopAnimation(id);
      console.error(`${id}`, error);
    }
  });

  await Promise.all(racePromises);

  startRaceBtn.disabled = false;
};
