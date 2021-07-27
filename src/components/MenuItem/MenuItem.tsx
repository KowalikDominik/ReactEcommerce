import React from "react";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";

import "./MenuItem.scss";

interface Props extends RouteComponentProps<any> {
  title: string;
  imageUrl: string;
  size: string;
  linkUrl: string;
}

const MenuItem: React.FC<Props> = ({
  title,
  imageUrl,
  size,
  history,
  match,
  linkUrl,
}) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);
