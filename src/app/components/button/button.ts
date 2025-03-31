import '@/app/components/button/button.scss';
import { createElement } from '@/app/utils/create-element';
import type { OptionsElement } from '@/app/utils/types';

export const createButton = (options?: Partial<OptionsElement<'button'>>): HTMLElement => {
  return createElement('button', {
    className: ['button'],
    ...options,
  });
};
