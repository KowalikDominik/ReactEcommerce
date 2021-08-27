import React from "react";
import { ReactComponent as Magnifying } from "../../assets/magnifying.svg";

import "./SearchInput.scss";

interface Props {
  placeholder: string;
  value: string;
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
  click: () => void;
  send: (e: React.SyntheticEvent) => void;
}

export const SearchInput: React.FC<Props> = ({
  placeholder,
  change,
  value,
  click,
  send,
}) => {
  return (
    <form onSubmit={send} className="search-input">
      <input
        name="search"
        className="input"
        type="search"
        placeholder={placeholder}
        onChange={change}
        value={value}
        onClick={click}
      />
      <button type="submit" className="submit">
        <Magnifying />
      </button>
    </form>
  );
};
