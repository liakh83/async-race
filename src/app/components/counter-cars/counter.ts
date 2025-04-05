import '@/app/components/counter-cars/counter.scss';
import { createElement } from '@/app/utils/create-element';

export const createCount = (
  title: string,
  count: number,
): {
  element: HTMLDivElement;
  update: (newCount: number) => void;
} => {
  const counter = createElement('div', {
    className: ['counter'],
    textContent: `${title} (${count})`,
  });
  return {
    element: counter,
    update: (newCount: number): void => {
      counter.textContent = `${title} (${newCount})`;
    },
  };
};
