import '@/app/view/option-button/option-btn.scss';
import { createElement } from '@/app/utils/create-element';
import { createButton } from '@/app/components/button/button';
import { generateRandomCars } from '@/app/utils/random-cars';

const startRaceBtn = createButton({
  textContent: 'Start Race',
});

const resetRaceBtn = createButton({
  textContent: 'Reset Race',
});

const createCarsBtn = createButton({
  textContent: 'Create 100 Cars',
  onclick: () => {
    console.log('Create 100 Cars');
    generateRandomCars();
  },
});

export const optionBtnWrapper = createElement('div', {
  className: ['option-btn-wrapper'],
  children: [startRaceBtn, resetRaceBtn, createCarsBtn],
});
