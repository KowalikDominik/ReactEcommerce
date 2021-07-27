import React from "react";

import { MenuItem } from "../MenuItem/MenuItem";
import "./Directory.scss";

interface Props {}

const menuItems = [
  {
    title: "HATS",
    imageUrl: `${process.env.PUBLIC_URL}/directory/hats.jpg`,
    id: 1,
    size: "",
  },
  {
    title: "SHORTS",
    imageUrl: `${process.env.PUBLIC_URL}/directory/shorts.jpg`,
    id: 2,
    size: "",
  },
  {
    title: "SNEAKERS",
    imageUrl: `${process.env.PUBLIC_URL}/directory/sneakers.jpg`,
    id: 3,
    size: "",
  },
  {
    title: "WOMAN",
    imageUrl: `${process.env.PUBLIC_URL}/directory/womens.jpg`,
    id: 4,
    size: "large",
  },
  {
    title: "MAN",
    imageUrl: `${process.env.PUBLIC_URL}/directory/mens.jpg`,
    id: 5,
    size: "large",
  },
];

export const Directory: React.FC<Props> = () => {
  return (
    <div className="directory-menu">
      {menuItems.map(({ id, title, imageUrl, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};
