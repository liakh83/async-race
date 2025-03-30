import { createElement } from '@/app/utils/create-element';

export const input = (): HTMLInputElement => {
  const inputElement = createElement('input', {
    className: ['input'],
  });
  return inputElement;
};
