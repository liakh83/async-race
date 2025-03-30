import { createElement } from '@/app/utils/create-element';

export const form = (): HTMLFormElement => {
  const formElement = createElement('form', {
    className: ['form'],
  });
  return formElement;
};
