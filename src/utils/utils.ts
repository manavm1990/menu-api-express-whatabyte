type MenuNameAndDescription = {
  name?: string;
  description?: string;
};

export const makeValuesLowercase = (filter: MenuNameAndDescription = {}) =>
  Object.fromEntries(
    Object.entries(filter).map((entry) => {
      const [key, value] = entry;
      return [key, value.toLowerCase()];
    }),
  );
