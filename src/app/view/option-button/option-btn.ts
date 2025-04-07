import '@/app/view/option-button/option-btn.scss';
import { createElement } from '@/app/utils/create-element';
import { createButton } from '@/app/components/button/button';
import { generateRandomCars } from '@/app/utils/random-cars';
import { createGarageCarsList } from '@/app/pages/garage/garage';

const startRaceBtn = createButton({
  textContent: 'Start Race',
});

const resetRaceBtn = createButton({
  textContent: 'Reset Race',
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
