export function createElement<K extends keyof HTMLElementTagNameMap>(
  tegName: K,
  {
    className,
    textContent,
    attributes,
    children,
  }: {
    className?: string[];
    textContent?: string;
    attributes?: Record<string, string>;
    children?: HTMLElement[];
  } = {},
): HTMLElementTagNameMap[K] {
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
  return element;
}
