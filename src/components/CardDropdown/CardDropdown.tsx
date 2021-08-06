import React from "react";

import { CustomButton } from "../CustomButton/CustomButton";

import "./CardDropdown.scss";

interface Props {}

export const CardDropdown: React.FC<Props> = () => {
  return (
    <div className="card-dropdown">
      <div className="card-items"></div>
      <CustomButton type="button"> Go to Card </CustomButton>
    </div>
  );
};
