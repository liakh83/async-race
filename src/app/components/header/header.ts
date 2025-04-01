import '@/app/components/header/header.scss';
import { createButton } from '@/app/components/button/button';
import { createElement } from '@/app/utils/create-element';
import { appMain } from '@/app/app';
import { optionSection } from '@/app/pages/garage/page-garage';
import { winnerSection } from '@/app/pages/winner/winner-section';

const toGarageBtn = createButton({
  textContent: 'To Garage',
  onclick: () => {
    appMain.replaceChildren(optionSection);
  },
});

const toWinnerBtn = createButton({
  textContent: 'To Winner',
  onclick: () => {
    appMain.replaceChildren(winnerSection);
  },
});

export const header = createElement('header', {
  className: ['header'],
  children: [toGarageBtn, toWinnerBtn],
});
