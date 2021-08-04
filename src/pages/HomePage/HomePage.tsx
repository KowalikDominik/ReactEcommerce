import React from "react";
import { Directory } from "../../components/Directory/Directory";

import "./HomePage.scss";

interface Props {}

export const HomePage: React.FC<Props> = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};
