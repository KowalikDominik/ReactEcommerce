import React from "react";

import "./SearchBox.scss";

interface Props {
  placeholder: string;
  value: string;
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
  click: () => void;
  send: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const SearchBox: React.FC<Props> = ({
  placeholder,
  change,
  value,
  click,
  send,
}) => {
  return (
    <form onSubmit={send}>
      <input
        className="search-box"
        type="search"
        placeholder={placeholder}
        onChange={change}
        value={value}
        onClick={click}
      />
    </form>
  );
};
