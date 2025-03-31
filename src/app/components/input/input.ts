import '@/app/components/input/input.scss';
import { createElement } from '@/app/utils/create-element';
import type { OptionsElement } from '@/app/utils/types';

export const createInput = (options?: OptionsElement<'input'>): HTMLInputElement => {
  const inputElement = createElement('input', {
    className: ['input'],
    ...options,
  });
  return inputElement;
};
