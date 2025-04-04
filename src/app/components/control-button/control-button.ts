import '@/app/components/control-button/control-btn.scss';
import { createElement } from '@/app/utils/create-element';
import { createButton } from '../button/button';

export const createUpdateListBtn = (model: string): HTMLDivElement => {
  const selectBtn = createButton({
    textContent: 'Select',
    onclick: () => {
      console.log('click startBtn');
    },
  });

  const removeBtn = createButton({
    textContent: 'Remove',
    onclick: () => {
      console.log('click removeBtn');
    },
  });

  const carModel = createElement('span', {
    className: ['text-model'],
    textContent: model,
  });

  return createElement('div', {
    className: ['update-list-btn'],
    children: [removeBtn, selectBtn, carModel],
  });
};

export const createDriveBtnControl = (): HTMLDivElement => {
  const startBtn = createButton({
    textContent: 'Start',
    onclick: () => {
      console.log('click startBtn');
    },
  });

  const stopBtn = createButton({
    textContent: 'Reset',
    onclick: () => {
      console.log('click stopBtn');
    },
  });

  return createElement('div', {
    className: ['drive-button'],
    children: [startBtn, stopBtn],
  });
};
