import React from "react";
import { useSelector } from "react-redux";

import { CardItem } from "../CardItem/CardItem";
import { CustomButton } from "../CustomButton/CustomButton";
import { itemsSelector } from "../../store/card/card.selectors";

import "./CardDropdown.scss";

interface Props {}

const CardDropdown: React.FC<Props> = () => {
  const items = useSelector(itemsSelector);

  return (
    <div className="card-dropdown">
      <div className="card-items">
        {items.map((item) => (
          <CardItem {...item} key={item.id} />
        ))}
      </div>
      <CustomButton type="button"> Go to Checkout </CustomButton>
    </div>
  );
};

export default CardDropdown;
