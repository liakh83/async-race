import { form } from '@/app/components/form/form';
import { input } from '@/app/components/input/input';
import { button } from '@/app/components/button/button';

export const formContainer = form();

const inputCreate = input();
inputCreate.setAttribute('type', 'text');
inputCreate.setAttribute('placeholder', 'Car model');

const inputColor = input();
inputColor.setAttribute('type', 'color');

const createButton = button();
createButton.textContent = 'create';

formContainer.append(inputCreate, inputColor, createButton);
