import React from "react";

import { ICollectionItem } from "../../interfaces";
import CollectionSlider from "../CollectionSlider/CollectionSlider";
import "./CollectionPreview.scss";

interface Props {
  title: string;
  items: ICollectionItem[];
}

export const CollectionPreview: React.FC<Props> = ({ title, items }) => {
  const data = items.filter((item, idx) => idx < 9);
  return <CollectionSlider title={title} items={data} />;
};
