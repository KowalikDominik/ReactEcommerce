import React from "react";

import "./SearchBox.scss";

interface Props {
  placeholder: string;
  value: string;
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox: React.FC<Props> = ({ placeholder, change, value }) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={change}
      value={value}
    />
  );
};
