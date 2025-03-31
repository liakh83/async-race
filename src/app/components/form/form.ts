import '@/app/components/form/form.scss';
import { createElement } from '@/app/utils/create-element';
import type { OptionsElement } from '@/app/utils/types';

export const createForm = (options?: OptionsElement<'form'>): HTMLFormElement => {
  return createElement('form', {
    className: ['form'],
    ...options,
  });
};
