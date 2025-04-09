import '@/app/view/winner-table/winner-table.scss';
import { createElement } from '@/app/utils/create-element';
import { createCarSVG } from '@/app/components/car-svg/car-svg';
import type { Winners, Car } from '@/app/utils/types';
import { getItemById, path } from '@/app/services/api/api';
import { handleSort, maxCarsOnPage } from '@/app/pages/winner/winner';

export const createWinnerTable = (): HTMLTableElement => {
  const table = createElement('table', {
    className: ['winner-table'],
  });

  const headerRow = createElement('tr', { className: ['header-row'] });
  ['№', 'ID', 'Car', 'Name', 'Wins', 'Time'].forEach((text) => {
    const th = createElement('th', { className: ['header-cell'], textContent: `${text}` });

    if (text === 'Wins' || text === 'Time') {
      th.addEventListener('click', () => {
        const field: 'wins' | 'time' = text === 'Wins' ? 'wins' : 'time';
        handleSort(field);
      });
    }
    headerRow.append(th);
  });

  table.append(headerRow);
  return table;
};

export const createWinnerRow = (winner: Winners, index: number, table: HTMLTableElement, currentPage: number): void => {
  const orderNumber = (currentPage - 1) * maxCarsOnPage + index + 1;
  const rowTable = createElement('tr', { className: ['table-row'] });
  const numberCell = createElement('td', { className: ['table-cell'], textContent: `${orderNumber}` });
  const idCell = createElement('td', { className: ['table-cell'], textContent: `${winner.id}` });
  const carCell = createElement('td', { className: ['table-cell'] });

  const nameCell = createElement('td', { className: ['table-cell'] });
  const winsCell = createElement('td', {
    className: ['table-cell'],
    textContent: `${winner.wins}`,
    onclick: () => handleSort('wins'),
  });
  const timeCell = createElement('td', {
    className: ['table-cell'],
    textContent: `${winner.time}`,
    onclick: () => handleSort('time'),
  });

  rowTable.append(numberCell, idCell, carCell, nameCell, winsCell, timeCell);
  table.append(rowTable);

  getItemById<Car>(path.garage, winner.id).then((carData) => {
    createCarSVG(carData.color).then((carSvg) => {
      carCell.append(carSvg);
    });
    nameCell.textContent = carData.name;
  });
};
