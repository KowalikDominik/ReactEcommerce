import { addItemType, ICardItem } from "../../interfaces";

export const addItemToCard = (cardItems: ICardItem[], newItem: addItemType) => {
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

export const decreaseItemQuantity = (
  cardItems: ICardItem[],
  decreaseItem: ICardItem
) => {
  const itemExisting = cardItems.find((item) => item.id === decreaseItem.id);
  if (itemExisting) {
    if (itemExisting.quantity > 1) {
      return cardItems.map((item) =>
        item.id === decreaseItem.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
  }
  return cardItems;
};
