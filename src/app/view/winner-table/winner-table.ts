import '@/app/view/winner-table/winner-table.scss';
import { createElement } from '@/app/utils/create-element';
import { createCarSVG } from '@/app/components/car-svg/car-svg';
import type { Winners, Car } from '@/app/utils/types';
import { getItemById, path } from '@/app/services/api/api';
export const createWinnerTable = (): HTMLTableElement => {
  const table = createElement('table', {
    className: ['winner-table'],
  });

  const headerRow = createElement('tr');
  ['№', 'ID', 'Car', 'Name', 'Wins', 'Time'].forEach((text) =>
    headerRow.append(createElement('th', { textContent: `${text}` })),
  );

  table.append(headerRow);
  return table;
};

export const createWinnerRow = (winner: Winners, index: number, table: HTMLTableElement): void => {
  const rowTable = createElement('tr');
  const numberCell = createElement('td', { textContent: `${index + 1}` });
  const idCell = createElement('td', { textContent: `${winner.id}` });
  const carCell = createElement('td');

  const nameCell = createElement('td');
  const winsCell = createElement('td', { textContent: `${winner.wins}` });
  const timeCell = createElement('td', { textContent: `${winner.time}` });
  rowTable.append(numberCell, idCell, carCell, nameCell, winsCell, timeCell);
  table.append(rowTable);

  getItemById<Car>(path.garage, winner.id).then((carData) => {
    createCarSVG(carData.color).then((carSvg) => {
      carCell.append(carSvg);
    });
    nameCell.textContent = carData.name;
  });
};
