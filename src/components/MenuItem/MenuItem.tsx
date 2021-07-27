import React from "react";

import "./MenuItem.scss";

interface Props {
  title: string;
  imageUrl: string;
  size: string;
}

export const MenuItem: React.FC<Props> = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <div className="title">{title}</div>
        <div className="subtitle">SHOP NOW</div>
      </div>
    </div>
  );
};
