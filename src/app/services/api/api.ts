const BASE_URL = 'http://127.0.0.1:3000';

export const path = {
  garage: 'garage',
  winner: 'winner',
};

export type QueryParam = { key: string; value: string | number };

const generateQueryString = (queryParams: QueryParam[] = []): string =>
  queryParams.length ? `?${queryParams.map((parts) => `${parts.key}=${parts.value}`).join('&')}` : '';

export const getData = async <T>(
  pathKey: string,
  queryParams: QueryParam[] = [],
): Promise<{ data: T[]; total: number }> => {
  const response = await fetch(`${BASE_URL}/${pathKey}${generateQueryString(queryParams)}`);
  const data: T[] = await response.json();
  const total = Number(response.headers.get('X-Total-Count') || '0');
  return { data, total };
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

export const patchItem = async <T>(pathKey: string, id: number, body: Partial<T>): Promise<T> => {
  const response = await fetch(`${BASE_URL}/${pathKey}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response.json();
};

export const deleteItem = async (pathKey: string, id: number): Promise<boolean> => {
  const response = await fetch(`${BASE_URL}/${pathKey}/${id}`, {
    method: 'DELETE',
  });
  return response.ok;
};
