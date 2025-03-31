import { form } from '@/app/components/form/form';
import { input } from '@/app/components/input/input';
import { button } from '@/app/components/button/button';

export const formUpdateCars = form();

const inputUpdate = input();
inputUpdate.setAttribute('type', 'text');
inputUpdate.setAttribute('placeholder', 'Car model');

const inputColor = input();
inputColor.setAttribute('type', 'color');

const createButton = button();
createButton.textContent = 'create';

formUpdateCars.append(inputUpdate, inputColor, createButton);
