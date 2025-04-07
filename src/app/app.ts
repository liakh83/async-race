import '@/app/app.scss';
import { createElement } from '@/app/utils/create-element';
import { garageContainer, optionSection } from '@/app/pages/garage/garage';
import { createGarageCarsList } from '@/app/pages/garage/garage';
import { createWinnerList } from './pages/winner/winner';

export const winnersList = createWinnerList();
export const appMain = createElement('main', {
  className: ['app-main'],
  children: [optionSection, garageContainer],
});

createGarageCarsList();
