import React from "react";
import { useSelector } from "react-redux";
import { directorySelector } from "../../store/directory/directory.selectors";

import MenuItem from "../MenuItem/MenuItem";
import "./Directory.scss";

interface Props {}

export const Directory: React.FC<Props> = () => {
  const menuItems = useSelector(directorySelector);

  return (
    <div className="directory-menu">
      {menuItems.map(({ id, title, imageUrl, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};
