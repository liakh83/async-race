import '@/app/components/header/header.scss';
import { createButton } from '@/app/components/button/button';
import { createElement } from '@/app/utils/create-element';
import { appMain } from '@/app/app';
import { optionSection } from '@/app/pages/garage/page-garage';
import { winnerSection } from '@/app/pages/winner/winner-section';
import { sectionPagination } from '../../components/pagination/pagination';

const toGarageBtn = createButton({
  textContent: 'To Garage',
  onclick: () => {
    appMain.replaceChildren(optionSection, sectionPagination);
  },
});

const toWinnerBtn = createButton({
  textContent: 'To Winner',
  onclick: () => {
    appMain.replaceChildren(winnerSection, sectionPagination);
  },
});

export const header = createElement('header', {
  className: ['header'],
  children: [toGarageBtn, toWinnerBtn],
});
