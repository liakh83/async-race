import '@/app/components/header/header.scss';
import { createButton } from '@/app/components/button/button';
import { createElement } from '@/app/utils/create-element';

const toGarageBtn = createButton({
  textContent: 'To Garage',
});

const toWinnerBtn = createButton({
  textContent: 'To Winner',
});

export const header = createElement('header', {
  className: ['header'],
});

header.append(toGarageBtn, toWinnerBtn);
