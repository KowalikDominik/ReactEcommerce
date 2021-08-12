import React from "react";

import "./withSpinner.scss";

interface Props {
  isLoading: boolean;
}

export const withSpinner =
  <P extends object>(Component: React.ComponentType<P>): React.FC<P & Props> =>
  ({ isLoading, ...props }: Props) => {
    if (isLoading)
      return (
        <div className="spinner-backdrop">
          <div className="spinner">Loading</div>
        </div>
      );
    else return <Component {...(props as P)} />;
  };
