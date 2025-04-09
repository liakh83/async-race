let currentGarageState: number = 1;

export const getCurrentGarageState = (): number => currentGarageState;

export const setCurrentGarageState = (newState: number): void => {
  currentGarageState = newState;
};

export const currentPageCarElements: Map<number, HTMLElement> = new Map();

export const addCarElementToCurrentPage = (id: number, elem: HTMLElement): void => {
  currentPageCarElements.set(id, elem);
};

export const clearCurrentPageCarElements = (): void => {
  currentPageCarElements.clear();
};

export const getCarElementById = (id: number): HTMLElement => {
  const element = currentPageCarElements.get(id);
  if (!element) {
    throw new Error(`Element with id ${id} not found`);
  }
  return element;
};

let currentWinnerPage = 1;

export const getCurrentWinnerPage = (): number => currentWinnerPage;
export const setCurrentWinnerPage = (page: number): void => {
  currentWinnerPage = page;
};
