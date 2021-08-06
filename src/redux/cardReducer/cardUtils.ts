export const addItemToCard = (cardItems, newItem) => {
  const duplicateItem = cardItems.find((item) => item.name === newItem.name);

  if (duplicateItem) {
    return cardItems.map((item) =>
      item.name === newItem.name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cardItems, { ...newItem, quantity: 1 }];
};
