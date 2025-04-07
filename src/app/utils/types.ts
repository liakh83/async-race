export interface OptionsElement<K extends keyof HTMLElementTagNameMap> extends Partial<GlobalEventHandlers> {
  elementType?: K;
  disabled?: boolean;
  className?: string[];
  textContent?: string;
  attributes?: Record<string, string>;
  children?: HTMLElement[];
  src?: string;
}

export interface Car {
  id: number;
  name: string;
  color: string;
}

export interface Winners {
  id: number;
  wins: number;
  time: number;
}
