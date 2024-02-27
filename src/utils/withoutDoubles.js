export const withoutDoubles = (items) => {
  const result = new Map();

  items.forEach((item) => {
    if (!result.has(item.id)) {
      result.set(item.id, item);
    }
  });

  return [...result.values()];
};
