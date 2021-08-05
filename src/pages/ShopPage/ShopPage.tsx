import React, { useState } from "react";
import { CollectionPreview } from "../../components/CollectionPreview/CollectionPreview";

import { SHOP_DATA } from "./ShopPage.data";

interface Props {}

export const ShopPage: React.FC<Props> = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div>
      {collections.map(({ id, ...otherCollectioProps }) => (
        <CollectionPreview key={id} {...otherCollectioProps} />
      ))}
    </div>
  );
};
