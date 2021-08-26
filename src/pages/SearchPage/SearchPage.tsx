import React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { CollectionMap } from "../../components/CollectionMap/CollectionMap";
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
  const title = "Search result";
  if (!items)
    return (
      <CollectionMap
        error={{
          msg: `Sorry, your search "${name}" did not match any products. Please try again.`,
        }}
        title={title}
      />
    );
  return <CollectionMap title={title} items={items} />;
};
