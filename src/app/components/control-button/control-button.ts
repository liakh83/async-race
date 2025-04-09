import '@/app/components/control-button/control-btn.scss';
import { createElement } from '@/app/utils/create-element';
import { createButton } from '../button/button';
import { inputUpdateName, inputUpdateColor } from '@/app/view/update-car/update-car';
import { setSelectedCarId } from '@/app/utils/selected-id';
import { validateForm } from '@/app/view/update-car/update-car';
import { deleteItem, path } from '@/app/services/api/api';
import { getCurrentGarageState } from '@/app/utils/global-state';
import { createGarageCarsList } from '@/app/pages/garage/garage';
import { runCar } from '@/app/services/animate-car/start-car';
import { resetCar } from '@/app/services/animate-car/reset-car';

export const createUpdateListBtn = (id: number, model: string, color: string): HTMLDivElement => {
  const selectBtn = createButton({
    textContent: 'Select',
    onclick: () => {
      setSelectedCarId(id);
      inputUpdateName.value = model;
      inputUpdateColor.value = color;
      validateForm();
      inputUpdateName.disabled = false;
      inputUpdateColor.disabled = false;
    },
  });

  const removeBtn = createButton({
    textContent: 'Remove',
    onclick: async () => {
      const isDelete = await deleteItem(path.garage, id);
      if (isDelete) {
        await deleteItem(path.winners, id);
        const currentPage = getCurrentGarageState();
        createGarageCarsList(currentPage);
      }
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

export const createDriveBtnControl = (id: number, car: HTMLElement): HTMLDivElement => {
  const startBtn = createButton({
    textContent: 'Start',
    onclick: () => {
      runCar(id, car);
      startBtn.disabled = true;
      stopBtn.disabled = false;
    },
  });

  const stopBtn = createButton({
    textContent: 'Reset',
    onclick: () => {
      resetCar(id, car);
      startBtn.disabled = false;
      stopBtn.disabled = true;
    },
  });

  return createElement('div', {
    className: ['drive-button'],
    children: [startBtn, stopBtn],
  });
};
