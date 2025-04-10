import { getCarElementById, getCurrentGarageState } from '@/app/utils/global-state';
import { loadCars } from '@/app/pages/garage/garage';
import { patchEngin } from '@/app/services/api/api';
import { stopAnimation, carPosition } from '@/app/services/animate-car/animate-car';
import { showWinnerOverlay } from '@/app/utils/modal';
import { startRaceBtn } from '@/app/view/option-button/option-btn';
import { saveWinner } from '../winners/save-winner';
import { createWinnerList } from '@/app/pages/winner/winner';
import { runCar } from '../animate-car/start-car';

export const startRaceHandler = async (): Promise<void> => {
  startRaceBtn.disabled = true;
  const starBtn = document.querySelectorAll('.start-btn');
  starBtn.forEach((btn) => {
    if (btn instanceof HTMLButtonElement) {
      btn.disabled = true;
    }
  });
  const stopBtn = document.querySelectorAll('.stop-btn');
  stopBtn.forEach((btn) => {
    if (btn instanceof HTMLButtonElement) {
      btn.disabled = false;
    }
  });
  let winnerShown = false;

  const { data: carData } = await loadCars(getCurrentGarageState());

  const carElements = carData.map(({ id, name }: { id: number; name: string }) => {
    const carElement = getCarElementById(id);

    return { id, name, element: carElement };
  });
  const racePromises = carElements.map(async ({ id, name, element }) => {
    try {
      const startTime = performance.now();
      const finished = await runCar(id, element);
      if (!finished) return;
      const endTime = performance.now();
      const timeSec = +(endTime - startTime) / 1000;

      if (!winnerShown) {
        winnerShown = true;
        showWinnerOverlay(name, timeSec.toFixed(2));
        saveWinner(id, timeSec);
        createWinnerList();
      }
    } catch (error) {
      stopAnimation(id);

      await patchEngin(id, 'stopped');
      const currentPosition = carPosition.get(id);
      element.style.transform = `translateX(${currentPosition}px)`;
      console.log(`${id}`, error);
    }
  });

  await Promise.all(racePromises);
};
