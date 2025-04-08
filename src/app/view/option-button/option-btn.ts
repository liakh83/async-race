import '@/app/view/option-button/option-btn.scss';
import { createElement } from '@/app/utils/create-element';
import { createButton } from '@/app/components/button/button';
import { generateRandomCars } from '@/app/utils/random-cars';
import { createGarageCarsList } from '@/app/pages/garage/garage';
import { startRaceHandler } from '@/app/services/race/car-race';
import { removeWinnerOverlay } from '@/app/utils/modal';
import { resetRace, stopAllAnimations } from '@/app/services/animate-car/reset-car';

export const startRaceBtn = createButton({
  textContent: 'Start Race',
  onclick: async () => {
    startRaceBtn.disabled = true;
    await startRaceHandler();
  },
});

export const resetRaceBtn = createButton({
  textContent: 'Reset Race',
  onclick: async () => {
    startRaceBtn.disabled = false;
    resetRace();
  },
});

const createCarsBtn = createButton({
  textContent: 'Create 100 cars',
  onclick: async () => {
    await generateRandomCars(100);
    createGarageCarsList();
  },
});

export const optionBtnWrapper = createElement('div', {
  className: ['option-btn-wrapper'],
  children: [startRaceBtn, resetRaceBtn, createCarsBtn],
});
