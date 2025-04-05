import { createList } from '@/app/view/car-list/car-list';
import { createCount } from '@/app/components/counter-cars/counter';
import { createElement } from '@/app/utils/create-element';
import { path, getData } from '@/app/services/api/api';
import type { Winners } from '@/app/utils/types';
import { createWinnerRow, createWinnerTable } from '@/app/view/winner-table/winner-table';

const loadWinners = (): Promise<{ data: Winners[] }> => getData(path.winners);

export const winnerSection = createElement('section', {
  className: ['winner-section'],
});

export const createWinnerList = (): HTMLElement => {
  const counter = createCount('Winners', 0);
  const winnersTable = createWinnerTable();

  loadWinners().then(({ data }) => {
    const total = data.length;
    counter.update(total);
    data.forEach((winner, index) => {
      createWinnerRow(winner, index, winnersTable);
    });
  });
  return createElement('section', {
    className: ['section-winner'],
    children: [counter.element, winnersTable],
  });
};
