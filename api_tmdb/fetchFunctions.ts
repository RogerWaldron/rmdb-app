export const basicFetch = async <ReturnType>(
  url: string
): Promise<ReturnType> => {
  const response = await fetch(url);

  if (!response.ok)
    throw new Error(`${response.status} ${response.statusText}`);

  const data = await response.json();
  return data;
};
