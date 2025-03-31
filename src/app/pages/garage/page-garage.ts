import '@/app/pages/garage/page-garage.scss';
import { formCreateCars } from '@/app/view/create-car/create-car';
import { formUpdateCars } from '@/app/view/update-car/update-car';
import { createElement } from '@/app/utils/create-element';

export const inputsContainer = createElement('div', {
  className: ['input-container'],
});

inputsContainer.append(formCreateCars, formUpdateCars);
