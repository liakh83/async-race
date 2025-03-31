export interface OptionsElement<K extends keyof HTMLElementTagNameMap> extends Partial<GlobalEventHandlers> {
  elementType?: K;
  className?: string[];
  textContent?: string;
  attributes?: Record<string, string>;
  children?: HTMLElement[];
}
