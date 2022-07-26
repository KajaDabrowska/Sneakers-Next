import { ButtonHTMLAttributes, FC, useRef, useEffect } from "react";

import "./button.styles.scss";

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

  return (
    <button ref={btnRef} className={`btn ${btnType}`} {...otherProps}>
      {children}
    </button>
  );
};
export default Button;
