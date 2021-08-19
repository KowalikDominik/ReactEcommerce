import React, { useState } from "react";
import { useSelector } from "react-redux";
import { filteringCollectionsSelector } from "../../store/collection/collection.selectors";
import { SearchBox } from "../SearchBox/SearchBox";

import "./HeaderSearchBox.scss";

interface Props {}

export const HeaderSearchBox: React.FC<Props> = () => {
  const [searchValue, setSearchValue] = useState("");
  const results = useSelector(filteringCollectionsSelector(searchValue));
  console.log(results);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="header-search-box">
      <SearchBox
        value={searchValue}
        placeholder="Search..."
        change={onChangeHandler}
      />
    </div>
  );
};
