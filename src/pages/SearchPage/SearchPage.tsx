import React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { filteringCollectionsSelector } from "../../store/collection/collection.selectors";

import "./SearchPage.scss";

interface Props extends RouteComponentProps {}

export const SearchPage: React.FC<Props> = ({ location: { search } }) => {
  const query = new URLSearchParams(search);
  let name;
  query.forEach((value) => {
    name = value;
  });
  const items = useSelector(filteringCollectionsSelector(name));
  return (
    <div className="search-page">
      <h1 className="title">Search Result:</h1>
      <div className="items">
        {items
          ? items.map((collection) => (
              <CollectionItem key={collection.id} {...collection} />
            ))
          : "null"}
      </div>
    </div>
  );
};
