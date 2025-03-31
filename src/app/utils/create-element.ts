import type { OptionsElement } from './types';

export function createElement<K extends keyof HTMLElementTagNameMap>(
  tegName: K,
  options: OptionsElement<K> = {},
): HTMLElementTagNameMap[K] {
  const { className, textContent, attributes, children, ...events } = options;
  const element = document.createElement(tegName);

  if (className) element.classList.add(...className);
  if (textContent) element.textContent = textContent;
  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }
  if (children) {
    element.append(...children);
  }
  Object.assign(element, events);
  return element;
}
