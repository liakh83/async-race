import '@/app/app.scss';
import { createElement } from '@/app/utils/create-element';
import { optionSection } from '@/app/pages/garage/garage';
import { sectionPagination } from '@/app/components/pagination/pagination';
import { createGarageCarsList } from '@/app/pages/garage/garage';
import { createWinnerList } from './pages/winner/winner';

export const garageCarsList = createGarageCarsList();
export const winnersList = createWinnerList();
export const appMain = createElement('main', {
  className: ['app-main'],
  children: [optionSection, sectionPagination, garageCarsList],
});
