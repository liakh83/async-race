import { createElement } from './create-element';
import { appMain } from '@/app/app';
let overlayElement: HTMLElement | null = null;

export const showWinnerOverlay = (name: string, time: string): void => {
  overlayElement = createElement('span', {
    className: ['winner-overlay'],
    textContent: `${name} won!  (${time}s)`,
  });
  appMain.append(overlayElement);
};

export const removeWinnerOverlay = (): void => {
  if (overlayElement) {
    overlayElement.remove();
    overlayElement = null;
  }
};
