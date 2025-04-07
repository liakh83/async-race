let selectedCarId: number | null = null;

export const getSelectedCarId = (): number | null => selectedCarId;

export const setSelectedCarId = (id: number): void => {
  selectedCarId = id;
};
