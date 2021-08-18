import React from "react";
import { Spinner } from "../Spinner/Spinner";

import "./withSpinner.scss";

interface Props {}

export const withSpinner =
  <P extends object>(
    Component: React.ComponentType<P>,
    { isLoading }
  ): React.FC<P & Props> =>
  ({ ...anyProps }: Props) => {
    if (isLoading)
      return (
        <div className="spinner-backdrop">
          <div className="spinner">
            <Spinner />
          </div>
        </div>
      );
    else return <Component {...(anyProps as P)} />;
  };
