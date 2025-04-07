import { createForm } from '@/app/components/form/form';
import { createInput } from '@/app/components/input/input';
import { createButton } from '@/app/components/button/button';
import { getSelectedCarId } from '@/app/utils/selected-id';
import { path, updateItem } from '@/app/services/api/api';
import { createGarageCarsList } from '@/app/pages/garage/garage';
import { getCurrentGarageState } from '@/app/utils/global-state';

export const formUpdateCars = createForm();

export const inputUpdateName = createInput({
  attributes: { type: 'text' },
});
inputUpdateName.disabled = true;

export const inputUpdateColor = createInput({
  attributes: { type: 'color' },
});
inputUpdateColor.disabled = true;

export const updateCarBtn = createButton({
  textContent: 'update',
  disabled: true,
  onclick: async (event: MouseEvent) => {
    event.preventDefault();

    if (event.currentTarget instanceof HTMLElement) {
      event.currentTarget.blur();
    }

    const id = getSelectedCarId();
    const name = inputUpdateName.value;
    const color = inputUpdateColor.value;

    if (id !== null && name && color) {
      await updateItem(path.garage, id, { name, color });

      inputUpdateName.value = '';
      inputUpdateColor.value = '#000000';

      updateCarBtn.disabled = true;
      inputUpdateName.disabled = true;
      inputUpdateColor.disabled = true;

      createGarageCarsList(getCurrentGarageState());
    }
  },
});

export const validateForm = (): void => {
  const isValid = inputUpdateName.value.trim() !== '' && inputUpdateColor.value.trim() !== '';
  updateCarBtn.disabled = !isValid;
};

inputUpdateName.addEventListener('input', validateForm);
inputUpdateColor.addEventListener('input', validateForm);

formUpdateCars.append(inputUpdateName, inputUpdateColor, updateCarBtn);
