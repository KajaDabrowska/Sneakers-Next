import { InputHTMLAttributes, FC } from "react";

import "./form-input.styles.scss";

type Props = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<Props> = ({ label, ...otherProps }) => {
  // I take the label from id
  const labelFor = otherProps.id;

  const value = otherProps.value;

  return (
    <div className="form-input">
      <input {...otherProps} className="labels-input" />
      <label
        htmlFor={labelFor}
        className={`label ${
          typeof value === "string" && value.length ? "shrink" : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
