import { createItem, path } from '../services/api/api';
import { nameCars, modelCars } from './cars-data';

const maxRgbColor = 16777215;

const getRandomCars = (): { name: string; color: string } => {
  const randomNameCar = nameCars[Math.floor(Math.random() * nameCars.length)];
  const randomModelCar = modelCars[Math.floor(Math.random() * modelCars.length)];
  const randomColor = Math.floor(Math.random() * maxRgbColor)
    .toString(16)
    .padStart(6, '0');
  return { name: `${randomNameCar} ${randomModelCar}`, color: `#${randomColor}` };
};

export const generateRandomCars = async (count = 100): Promise<void> => {
  const requests = Array.from({ length: count }).map(() => {
    const car = getRandomCars();
    return createItem(path.garage, car);
  });
  await Promise.all(requests);
};
