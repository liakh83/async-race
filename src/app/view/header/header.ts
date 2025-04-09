import '@/app/view/header/header.scss';
import { createButton } from '@/app/components/button/button';
import { createElement } from '@/app/utils/create-element';
import { appMain } from '@/app/app';
import { createGarageCarsList, garageContainer, optionSection } from '@/app/pages/garage/garage';
import { createWinnerList, winnerContainer } from '@/app/pages/winner/winner';
import { getCurrentWinnerPage } from '@/app/utils/global-state';

const toGarageBtn = createButton({
  textContent: 'To Garage',
  onclick: () => {
    appMain.replaceChildren(optionSection, garageContainer);
    createGarageCarsList(getCurrentWinnerPage());
  },
});

const toWinnerBtn = createButton({
  textContent: 'To Winner',
  onclick: () => {
    appMain.replaceChildren(winnerContainer);
    createWinnerList();
  },
});

export const header = createElement('header', {
  className: ['header'],
  children: [toGarageBtn, toWinnerBtn],
});
