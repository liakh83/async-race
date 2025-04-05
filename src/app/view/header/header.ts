import '@/app/view/header/header.scss';
import { createButton } from '@/app/components/button/button';
import { createElement } from '@/app/utils/create-element';
import { appMain, garageCarsList, winnersList } from '@/app/app';
import { optionSection } from '@/app/pages/garage/garage';
import { sectionPagination } from '../../components/pagination/pagination';

const toGarageBtn = createButton({
  textContent: 'To Garage',
  onclick: () => {
    appMain.replaceChildren(optionSection, sectionPagination, garageCarsList);
  },
});

const toWinnerBtn = createButton({
  textContent: 'To Winner',
  onclick: () => {
    appMain.replaceChildren(sectionPagination, winnersList);
  },
});

export const header = createElement('header', {
  className: ['header'],
  children: [toGarageBtn, toWinnerBtn],
});
