import '@/app/pages/garage/page-garage.scss';
import { formContainer } from '@/app/view/create-car/create-car';
import { createElement } from '@/app/utils/create-element';

export const inputsContainer = createElement('div', {
  className: ['input-container'],
});

inputsContainer.append(formContainer);
