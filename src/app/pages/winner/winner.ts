import { createList } from '@/app/view/car-list/car-list';
import { createCount } from '@/app/components/counter-cars/counter';
import { createElement } from '@/app/utils/create-element';

export const winnerSection = createElement('section', {
  className: ['winner-section'],
});

export const createWinnerList = (): HTMLElement => {
  const counter = createCount('Winner', 0);
  const carsList = createList();

  return createElement('section', {
    className: ['section-winner'],
    children: [counter.element, carsList.element],
  });
};
