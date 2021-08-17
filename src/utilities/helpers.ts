export const isObjectEmpty = (object): boolean => {
  if (object) return Object.keys(object).length === 0;
  return true;
};
