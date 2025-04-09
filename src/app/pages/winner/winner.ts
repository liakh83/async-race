import '@/app/pages/winner/winner.scss';
import { createCount } from '@/app/components/counter-cars/counter';
import { createElement } from '@/app/utils/create-element';
import { path, getData } from '@/app/services/api/api';
import type { Winners } from '@/app/utils/types';
import { createWinnerRow, createWinnerTable } from '@/app/view/winner-table/winner-table';
import { getCurrentWinnerPage, setCurrentWinnerPage } from '@/app/utils/global-state';
import { createPagination } from '@/app/components/pagination/pagination';
export const maxCarsOnPage = 10;
const loadWinners = (page: number): Promise<{ data: Winners[]; totalItem: number }> => {
  return getData(path.winners, [
    { key: '_page', value: String(page) },
    { key: '_limit', value: String(maxCarsOnPage) },
  ]);
};
export const winnerContainer = createElement('section', {
  className: ['section-winner'],
});

export const createWinnerList = (page: number = 1): void => {
  const counter = createCount('Winners', 0);
  const winnersTable = createWinnerTable();

  loadWinners(getCurrentWinnerPage()).then(({ data, totalItem }) => {
    counter.update(totalItem);
    data.forEach((winner, index) => {
      createWinnerRow(winner, index, winnersTable, page);
    });
    const totalPages: number = totalItem <= maxCarsOnPage ? 1 : Math.ceil(totalItem / maxCarsOnPage);
    const pagination = createPagination(
      totalPages,
      (newPage) => {
        setCurrentWinnerPage(newPage);
        createWinnerList(newPage);
      },
      true,
    );
    winnerContainer.replaceChildren(counter.element, pagination, winnersTable);
  });
};
