import React from "react";
import { ICollectionItem } from "../../interfacses";
import { CustomButton } from "../CustomButton/CustomButton";
import { connect } from "react-redux";

import "./CollectionItem.scss";
import { addItem } from "../../redux/cardReducer/cardActions";
interface Props extends ICollectionItem {
  addItem: (item: ICollectionItem) => void;
}

const CollectionItem: React.FC<Props> = (props) => {
  const { addItem, ...item } = props;
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
      <CustomButton inverted type="button" onClick={() => addItem(item)}>
        Add to card
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
