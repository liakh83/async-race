import '@/app/components/control-button/control-btn.scss';
import { createElement } from '@/app/utils/create-element';
import { createButton } from '../button/button';

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

const startBtn = createButton({
  textContent: 'A',
  onclick: () => {
    console.log('click startBtn');
  },
});

const stopBtn = createButton({
  textContent: 'B',
  onclick: () => {
    console.log('click stopBtn');
  },
});

const carModel = createElement('span', {
  className: ['text-model'],
  textContent: 'Audi',
});

export const updateListBtn = createElement('div', {
  className: ['update-list-btn'],
  children: [removeBtn, selectBtn, carModel],
});

export const driveBtnControl = createElement('div', {
  className: ['drive-button'],
  children: [startBtn, stopBtn],
});
