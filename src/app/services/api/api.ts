const BASE_URL = 'http://127.0.0.1:3000';

export const path = {
  garage: 'garage',
  winners: 'winners',
};

export type QueryParam = { key: string; value: string | number };

const generateQueryString = (queryParams: QueryParam[] = []): string =>
  queryParams.length ? `?${queryParams.map((parts) => `${parts.key}=${parts.value}`).join('&')}` : '';

export const getData = async <T>(
  pathKey: string,
  queryParams: QueryParam[] = [],
): Promise<{ data: T[]; totalItem: number }> => {
  const response = await fetch(`${BASE_URL}/${pathKey}${generateQueryString(queryParams)}`);
  const data: T[] = await response.json();
  const totalItem = Number(response.headers.get('X-Total-Count') || '0');
  return { data, totalItem };
};

export const getItemById = async <T>(pathKey: string, id: number): Promise<T> => {
  const response = await fetch(`${BASE_URL}/${pathKey}/${id}`);
  return response.json();
};

export const createItem = async <T>(pathKey: string, body: T): Promise<T> => {
  const response = await fetch(`${BASE_URL}/${pathKey}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response.json();
};

export const updateItem = async <T>(pathKey: string, id: number, body: T): Promise<T> => {
  const response = await fetch(`${BASE_URL}/${pathKey}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response.json();
};

export const patchEngin = async <T = { velocity: number; distance: number }>(
  id: number,
  status: 'started' | 'stopped' | 'drive',
): Promise<T> => {
  const response = await fetch(`${BASE_URL}/engine?id=${id}&status=${status}`, {
    method: 'PATCH',
  });
  return response.json();
};

export const deleteItem = async (pathKey: string, id: number): Promise<boolean> => {
  const response = await fetch(`${BASE_URL}/${pathKey}/${id}`, {
    method: 'DELETE',
  });
  return response.ok;
};
