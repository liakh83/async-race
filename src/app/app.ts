import '@/app/app.scss';
import { createElement } from '@/app/utils/create-element';
import { inputsContainer } from '@/app/pages/garage/page-garage';

export const app_main = createElement('main', {
  className: ['app-main'],
});

app_main.append(inputsContainer);
