import '@/app/view/winner-table/winner-table.scss';
import { createElement } from '@/app/utils/create-element';
import { createCarSVG } from '@/app/components/car-svg/car-svg';
import type { Winners, Car } from '@/app/utils/types';
import { getItemById, path } from '@/app/services/api/api';
import { maxCarsOnPage } from '@/app/pages/winner/winner';

export const createWinnerTable = (): HTMLTableElement => {
  const table = createElement('table', {
    className: ['winner-table'],
  });

  const headerRow = createElement('tr', { className: ['header-row'] });
  ['№', 'ID', 'Car', 'Name', 'Wins', 'Time'].forEach((text) =>
    headerRow.append(createElement('th', { className: ['header-cell'], textContent: `${text}` })),
  );

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
  const winsCell = createElement('td', { className: ['table-cell'], textContent: `${winner.wins}` });
  const timeCell = createElement('td', { className: ['table-cell'], textContent: `${winner.time}` });
  rowTable.append(numberCell, idCell, carCell, nameCell, winsCell, timeCell);
  table.append(rowTable);

  getItemById<Car>(path.garage, winner.id).then((carData) => {
    createCarSVG(carData.color).then((carSvg) => {
      carCell.append(carSvg);
    });
    nameCell.textContent = carData.name;
  });
};
