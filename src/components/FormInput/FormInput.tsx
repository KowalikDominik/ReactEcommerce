import React from "react";

import "./FormInput.scss";

interface Props {
  type: string;
  name: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  label: string;
  value: string;
}

export const FormInput: React.FC<Props> = ({
  changeHandler,
  label,
  ...otherProps
}) => {
  return (
    <div className="group">
      <input className="form-input" onChange={changeHandler} {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
