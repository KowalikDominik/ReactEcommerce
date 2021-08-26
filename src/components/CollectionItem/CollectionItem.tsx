import React from "react";
import { ICollectionItem } from "../../interfaces";
import { CustomButton } from "../CustomButton/CustomButton";
import { useDispatch } from "react-redux";

import "./CollectionItem.scss";
import loader from "../../assets/imageSpinner.gif";
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
        style={{
          backgroundImage: `url(${imageUrl}), url(${loader})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="collection-footer">
        <div className="name">
          <div className="name-content">{name}</div>
        </div>
        <span className="price">{price} $</span>
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
