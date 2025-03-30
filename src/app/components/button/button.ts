import '@/app/components/button/button.scss';
import { createElement } from '@/app/utils/create-element';

export const button = (): HTMLElement => {
  const button = createElement('button', { className: ['button'] });
  return button;
};
