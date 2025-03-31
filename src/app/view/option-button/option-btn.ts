import '@/app/view/option-button/option-btn.scss';
import { createElement } from '@/app/utils/create-element';
import { createButton } from '@/app/components/button/button';

const startRaceBtn = createButton({
  textContent: 'Start Race',
});

const resetRaceBtn = createButton({
  textContent: 'Reset Race',
});

const createCarsBtn = createButton({
  textContent: 'Create 100 Cars',
});

export const optionBtnWrapper = createElement('div', {
  className: ['option-btn-wrapper'],
  children: [startRaceBtn, resetRaceBtn, createCarsBtn],
});
