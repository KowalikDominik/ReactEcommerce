import React from "react";
import { connect } from "react-redux";

import { CardItem } from "../CardItem/CardItem";
import { CustomButton } from "../CustomButton/CustomButton";

import "./CardDropdown.scss";

interface Props {
  items: [];
}

const CardDropdown: React.FC<Props> = ({ items }) => {
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

const mapStateToProps = ({ card: { items } }) => ({
  items,
});

export default connect(mapStateToProps)(CardDropdown);
