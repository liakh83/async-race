import '@/app/view/header/header.scss';
import { createButton } from '@/app/components/button/button';
import { createElement } from '@/app/utils/create-element';
import { appMain, winnersList } from '@/app/app';
import { createGarageCarsList, garageContainer, optionSection } from '@/app/pages/garage/garage';

const toGarageBtn = createButton({
  textContent: 'To Garage',
  onclick: () => {
    appMain.replaceChildren(optionSection, garageContainer);
    createGarageCarsList();
  },
});

const toWinnerBtn = createButton({
  textContent: 'To Winner',
  onclick: () => {
    appMain.replaceChildren(winnersList);
  },
});

export const header = createElement('header', {
  className: ['header'],
  children: [toGarageBtn, toWinnerBtn],
});
