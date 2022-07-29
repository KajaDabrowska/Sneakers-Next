import { InputHTMLAttributes, FC } from "react";

import styles from "./form-input.module.scss";

type Props = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<Props> = ({ label, ...otherProps }) => {
  // I take the label from id
  const labelFor = otherProps.id;

  const value = otherProps.value;

  const addStyles =
    typeof value === "string" && value.length ? styles.shrink : "";

  return (
    <div className={styles.container}>
      <input {...otherProps} className={styles.input} />
      <label htmlFor={labelFor} className={`${styles.label} ${addStyles}`}>
        {label}
      </label>
    </div>
  );
};

export default FormInput;
