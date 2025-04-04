import '@/app/components/car-item/car-item.scss';
import { createElement } from '@/app/utils/create-element';
import { createCarSVG } from '@/app/components/car-svg/car-svg';
import { driveBtnControl, updateListBtn } from '../control-button/control-button';

export const createCarItem = (): {
  element: HTMLDivElement;
} => {
  createCarSVG().then((carSVG) => {
    carContainer.append(carSVG);
  });

  const finishFlag = createElement('img', {
    className: ['finish-flag'],
    src: './images/finish-flag.png',
  });

  const carContainer = createElement('div', {
    className: ['car-svg-container'],
  });

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
