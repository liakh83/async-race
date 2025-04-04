import { createElement } from '@/app/utils/create-element';

export const createList = (): {
  element: HTMLDivElement;
  update: (items: HTMLElement[]) => void;
} => {
  const listContainer = createElement('div', {
    className: ['list-container'],
  });
  return {
    element: listContainer,
    update: (items: HTMLElement[]): void => {
      listContainer.replaceChildren(...items);
    },
  };
};
