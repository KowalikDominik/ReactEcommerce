import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { filteringCollectionsSelector } from "../../store/collection/collection.selectors";
import { SearchInput } from "../SearchInput/SearchInput";

import "./SearchBox.scss";

interface Props extends RouteComponentProps {}

const SearchBox: React.FC<Props> = ({ history }) => {
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchDropdown, setsearchDropdown] = useState(false);
  let resultsList;
  const results = useSelector(filteringCollectionsSelector(searchValue));

  const onSendHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string } & HTMLElement;
    };
    target.search.blur();
    if (searchValue) showResult(searchValue);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (e.target.value.length > 0) setsearchDropdown(true);
    else setsearchDropdown(false);
  };

  const onClickSearchBoxHandler = () => {
    if (searchValue.length > 0) setsearchDropdown(true);
  };

  const showResult = (name: string) => {
    setsearchDropdown(false);
    history.push({
      pathname: "/search",
      search: `?query=${encodeURIComponent(name)}`,
    });
  };

  if (results && searchValue.length > 0) {
    const list = results.map((item) => (
      <li className="item" key={item.id} onClick={() => showResult(item.name)}>
        <span>{item.name}</span>
      </li>
    ));
    resultsList = <ul>{list}</ul>;
  }

  useEffect(() => {
    /**
     * HideDropdown if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target)
      ) {
        setsearchDropdown(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setsearchDropdown]);

  return (
    <div className="header-search-box" ref={searchBoxRef}>
      <SearchInput
        value={searchValue}
        placeholder="Search..."
        change={onChangeHandler}
        click={onClickSearchBoxHandler}
        send={onSendHandler}
      />
      {searchDropdown ? (
        <div className="search-results">{resultsList}</div>
      ) : null}
    </div>
  );
};
export default withRouter(SearchBox);
