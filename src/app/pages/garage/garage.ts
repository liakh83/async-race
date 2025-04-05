import '@/app/pages/garage/garage.scss';
import { formCreateCars } from '@/app/view/create-car/create-car';
import { formUpdateCars } from '@/app/view/update-car/update-car';
import { createElement } from '@/app/utils/create-element';
import { optionBtnWrapper } from '@/app/view/option-button/option-btn';
import { createCount } from '@/app/components/counter-cars/counter';
import { createList } from '@/app/view/car-list/car-list';
import { createCarItem } from '@/app/components/car-item/car-item';
import { getData, path } from '@/app/services/api/api';
import type { Car } from '@/app/utils/types';

const loadCars = (): Promise<{ data: Car[] }> => getData(path.garage);

export const inputsContainer = createElement('div', {
  className: ['input-container'],
  children: [formCreateCars, formUpdateCars],
});

export const optionSection = createElement('section', {
  className: ['option-section'],
  children: [inputsContainer, optionBtnWrapper],
});

export const createGarageCarsList = (): HTMLElement => {
  const counter = createCount('Garage', 0);
  const carsList = createList();

  loadCars().then(({ data }) => {
    const total = data.length;
    counter.update(total);
    const carItems = data.map((car) => {
      return createCarItem(car).element;
    });
    carsList.update(carItems);
  });

  return createElement('section', {
    className: ['section-garage'],
    children: [counter.element, carsList.element],
  });
};
