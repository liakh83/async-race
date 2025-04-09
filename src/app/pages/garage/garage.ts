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
import { createPagination } from '@/app/components/pagination/pagination';
import { clearCurrentPageCarElements, getCurrentGarageState, setCurrentGarageState } from '@/app/utils/global-state';
import { addCarElementToCurrentPage } from '@/app/utils/global-state';
const maxCarsOnPage = 7;

export const loadCars = (page: number): Promise<{ data: Car[]; totalItem: number }> => {
  return getData(path.garage, [
    { key: '_page', value: String(page) },
    { key: '_limit', value: String(maxCarsOnPage) },
  ]);
};

export const inputsContainer = createElement('div', {
  className: ['input-container'],
  children: [formCreateCars, formUpdateCars],
});

export const optionSection = createElement('section', {
  className: ['option-section'],
  children: [inputsContainer, optionBtnWrapper],
});

export const garageContainer = createElement('section', {
  className: ['section-garage'],
});

export const createGarageCarsList = (page: number = 1): void => {
  const counter = createCount('Garage', 0);
  const carsList = createList();

  loadCars(getCurrentGarageState()).then(({ data, totalItem }) => {
    clearCurrentPageCarElements();

    counter.update(totalItem);
    const carItems = data.map((car) => {
      const { element, carContainer } = createCarItem(car);
      addCarElementToCurrentPage(car.id, carContainer);
      return element;
    });

    carsList.update(carItems);

    const totalPages: number = totalItem <= maxCarsOnPage ? 1 : Math.ceil(totalItem / maxCarsOnPage);

    const sectionPagination = createPagination(
      totalPages,
      (newPage) => {
        setCurrentGarageState(newPage);
        createGarageCarsList(newPage);
      },
      false,
    );

    const garageCarsList = createElement('div', {
      className: ['garage-car-list'],
      children: [counter.element, carsList.element],
    });
    garageContainer.replaceChildren(sectionPagination, garageCarsList);
  });
};
