import React from "react";
import { ReactComponent as Magnifying } from "../../assets/magnifying.svg";

import "./SearchInput.scss";

interface Props {
  placeholder: string;
  value: string;
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
  click: () => void;
  send: (event: React.FormEvent<HTMLFormElement>) => void;
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
