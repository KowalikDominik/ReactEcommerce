import React from "react";
import { useSelector } from "react-redux";

import { CardItem } from "../CardItem/CardItem";
import { CustomButton } from "../CustomButton/CustomButton";
import { RootState } from "../../store/store";

import "./CardDropdown.scss";

interface Props {}

const CardDropdown: React.FC<Props> = () => {
  const items = useSelector(({ card: { items } }: RootState) => items);

  return (
    <div className="card-dropdown">
      <div className="card-items">
        {items.map((item) => (
          <CardItem {...item} />
        ))}
      </div>
      <CustomButton type="button"> Go to Checkout </CustomButton>
    </div>
  );
};

export default CardDropdown;
