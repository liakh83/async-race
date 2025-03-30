import '@/app/components/header/header.scss';
import { button } from '@/app/components/button/button';
import { createElement } from '@/app/utils/create-element';

const toGarage = button();
toGarage.textContent = 'To Garage';

const toWinner = button();
toWinner.textContent = 'To Winner';

export const header = createElement('header', {
  className: ['header'],
});

header.append(toGarage, toWinner);
