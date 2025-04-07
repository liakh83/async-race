let currentGarageState: number = 1;

export const getCurrentGarageState = (): number => currentGarageState;

export const setCurrentGarageState = (newState: number): void => {
  currentGarageState = newState;
};
