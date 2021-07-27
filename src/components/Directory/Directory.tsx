import React from "react";

import MenuItem from "../MenuItem/MenuItem";
import "./Directory.scss";

interface Props {}

const menuItems = [
  {
    title: "HATS",
    imageUrl: `${process.env.PUBLIC_URL}/directory/hats.jpg`,
    id: 1,
    size: "",
    linkUrl: "hats",
  },
  {
    title: "SHORTS",
    imageUrl: `${process.env.PUBLIC_URL}/directory/shorts.jpg`,
    id: 2,
    size: "",
    linkUrl: "shorts",
  },
  {
    title: "SNEAKERS",
    imageUrl: `${process.env.PUBLIC_URL}/directory/sneakers.jpg`,
    id: 3,
    size: "",
    linkUrl: "sneakers",
  },
  {
    title: "WOMAN",
    imageUrl: `${process.env.PUBLIC_URL}/directory/womens.jpg`,
    id: 4,
    size: "large",
    linkUrl: "woman",
  },
  {
    title: "MAN",
    imageUrl: `${process.env.PUBLIC_URL}/directory/mens.jpg`,
    id: 5,
    size: "large",
    linkUrl: "man",
  },
];

export const Directory: React.FC<Props> = () => {
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
