import React from "react";
import { ICollectionItem } from "../../interfaces";
import { CustomButton } from "../CustomButton/CustomButton";
import { useDispatch } from "react-redux";

import "./CollectionItem.scss";

import { addItem } from "../../store/card/card.slice";

interface Props extends ICollectionItem {}

const CollectionItem: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const item = props;
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        inverted
        type="button"
        onClick={() => dispatch(addItem(item))}
      >
        Add to card
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
