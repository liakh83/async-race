import '@/app/app.scss';
import { createElement } from '@/app/utils/create-element';
import { optionSection } from '@/app/pages/garage/page-garage';

export const appMain = createElement('main', {
  className: ['app-main'],
  children: [optionSection],
});
