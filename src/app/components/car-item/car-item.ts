import '@/app/components/car-item/car-item.scss';
import { createElement } from '@/app/utils/create-element';
import { createCarSVG } from '@/app/components/car-svg/car-svg';
import { createDriveBtnControl, createUpdateListBtn } from '../control-button/control-button';
import type { Car } from '@/app/utils/types';

export const createCarItem = (
  car: Car,
): {
  element: HTMLDivElement;
} => {
  const { name, color } = car;
  const carContainer = createElement('div', {
    className: ['car-svg-container'],
  });

  createCarSVG(color).then((carSVG) => {
    carContainer.append(carSVG);
  });

  const finishFlag = createElement('img', {
    className: ['finish-flag'],
    src: './images/finish-flag.png',
  });

  const updateListBtn = createUpdateListBtn(name);
  const driveBtnControl = createDriveBtnControl();

  const wrapper = createElement('div', {
    className: ['wrapper'],
    children: [driveBtnControl, carContainer],
  });

  const carItem = createElement('div', {
    className: ['car-item'],
    children: [updateListBtn, wrapper, finishFlag],
  });
  return {
    element: carItem,
  };
};
