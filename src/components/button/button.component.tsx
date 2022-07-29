import { ButtonHTMLAttributes, FC, useRef, useEffect } from "react";

import styles from "./button.module.scss";

type BtnTypes = "google" | "checkout";

type ButtonProps = {
  btnType?: BtnTypes;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, btnType, ...otherProps }) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  // Focus when to checkout btn renders
  useEffect(() => {
    if (btnType === "checkout" && btnRef.current) {
      btnRef.current.focus();
    }
  }, []);

  //FIXME btn type
  return (
    <button ref={btnRef} className={`${styles.btn} ${btnType}`} {...otherProps}>
      {children}
    </button>
  );
};
export default Button;
