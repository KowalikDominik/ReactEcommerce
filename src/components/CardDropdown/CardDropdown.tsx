import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CardItem } from "../CardItem/CardItem";
import { CustomButton } from "../CustomButton/CustomButton";
import {
  cardHiddenSelector,
  itemsSelector,
} from "../../store/card/card.selectors";

import "./CardDropdown.scss";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { cardToggleHidden } from "../../store/card/card.slice";

interface Props extends RouteComponentProps<any> {}

const CardDropdown: React.FC<Props> = ({ history }) => {
  const items = useSelector(itemsSelector);
  const hidden = useSelector(cardHiddenSelector);
  const dispatch = useDispatch();

  if (hidden) return null;
  return (
    <div className="card-dropdown">
      <div className="card-items">
        {items.length ? (
          items.map((item) => <CardItem {...item} key={item.id} />)
        ) : (
          <span className="empty-message">Your Card is empty.</span>
        )}
      </div>
      <CustomButton
        type="button"
        onClick={() => {
          history.push(`/checkout`);
          dispatch(cardToggleHidden());
        }}
      >
        Go to Checkout
      </CustomButton>
    </div>
  );
};

export default withRouter(CardDropdown);
