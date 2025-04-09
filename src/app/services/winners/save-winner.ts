import type { Winners } from '@/app/utils/types';
import { createItem, getItemById, path, updateItem } from '../api/api';

export const saveWinner = async (id: number, time: number): Promise<void> => {
  try {
    const res = await fetch(`http://127.0.0.1:3000/winners/${id}`);

    if (res.status === 404) {
      await createItem(path.winners, {
        id,
        wins: 1,
        time: +time.toFixed(2),
      });
      return;
    }

    const existingWinner: Winners = await res.json();
    const bestTime = Math.min(existingWinner.time, time);

    await updateItem(path.winners, id, {
      id,
      wins: existingWinner.wins + 1,
      time: +bestTime.toFixed(2),
    });
  } catch (error) {
    console.error('Failed to save winner:', error);
  }
};
