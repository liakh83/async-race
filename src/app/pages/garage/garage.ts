import '@/app/pages/garage/garage.scss';
import { formCreateCars } from '@/app/view/create-car/create-car';
import { formUpdateCars } from '@/app/view/update-car/update-car';
import { createElement } from '@/app/utils/create-element';
import { optionBtnWrapper } from '@/app/view/option-button/option-btn';
import { createCount } from '@/app/components/counter-cars/counter';
import { createList } from '@/app/components/car-list/car-list';

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

  return createElement('section', {
    className: ['section-garage'],
    children: [counter.element, carsList.element],
  });
};
