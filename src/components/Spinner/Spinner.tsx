import React from "react";

import "./Spinner.scss";

interface Props {}

export const Spinner: React.FC<Props> = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
