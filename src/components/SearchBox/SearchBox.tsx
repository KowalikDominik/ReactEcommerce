import React from "react";

import "./SearchBox.scss";

interface Props {
  placeholder: string;
  value: string;
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
  click: () => void;
}

export const SearchBox: React.FC<Props> = ({
  placeholder,
  change,
  value,
  click,
}) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={change}
      value={value}
      onClick={click}
    />
  );
};
