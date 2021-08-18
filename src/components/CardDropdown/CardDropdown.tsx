import React, { useEffect, useRef } from "react";
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * HideCard if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        document.querySelector(".card-icon") &&
        !document.querySelector(".card-icon")?.contains(event.target)
      ) {
        dispatch(cardToggleHidden());
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch, dropdownRef]);

  if (hidden) return null;

  return (
    <div className="card-dropdown" ref={dropdownRef}>
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
