import { createForm } from '@/app/components/form/form';
import { createInput } from '@/app/components/input/input';
import { createButton } from '@/app/components/button/button';

export const formCreateCars = createForm();

const inputCreate = createInput({
  attributes: { type: 'text', placeholder: 'Car model' },
});

const inputColor = createInput({
  attributes: { type: 'color' },
});

const createCarBtn = createButton({
  textContent: 'create',
});

formCreateCars.append(inputCreate, inputColor, createCarBtn);
