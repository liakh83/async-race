import { createForm } from '@/app/components/form/form';
import { createInput } from '@/app/components/input/input';
import { createButton } from '@/app/components/button/button';
import { createItem, path } from '@/app/services/api/api';
import { getCurrentGarageState } from '@/app/utils/global-state';
import { createGarageCarsList } from '@/app/pages/garage/garage';

const inputCreate = createInput({
  attributes: { type: 'text', placeholder: 'Car model' },
});

const inputColor = createInput({
  attributes: { type: 'color' },
});

const createCarBtn = createButton({
  textContent: 'create',
  disabled: true,
  onclick: async (event: MouseEvent) => {
    event.preventDefault();

    if (event.currentTarget instanceof HTMLElement) {
      event.currentTarget.blur();
    }
    const carModel = inputCreate.value;
    const carColor = inputColor.value;

    const newCar = {
      name: carModel,
      color: carColor,
    };

    await createItem(path.garage, newCar);
    const currentPage = getCurrentGarageState();
    createGarageCarsList(currentPage);

    inputCreate.value = '';
    inputColor.value = '#000000';
    validateForm();
  },
});

const validateForm = (): void => {
  const isValid = inputCreate.value.trim() !== '' && inputColor.value.trim() !== '';
  createCarBtn.disabled = !isValid;
};

inputCreate.addEventListener('input', validateForm);
inputColor.addEventListener('input', validateForm);

export const formCreateCars = createForm();

formCreateCars.append(inputCreate, inputColor, createCarBtn);
