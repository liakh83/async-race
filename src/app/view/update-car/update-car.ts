import { createForm } from '@/app/components/form/form';
import { createInput } from '@/app/components/input/input';
import { createButton } from '@/app/components/button/button';

export const formUpdateCars = createForm();

const inputUpdate = createInput({
  attributes: { type: 'text', placeholder: 'Car model' },
});

const inputColor = createInput({
  attributes: { type: 'color' },
});

const updateCarBtn = createButton({
  textContent: 'update',
});

formUpdateCars.append(inputUpdate, inputColor, updateCarBtn);
