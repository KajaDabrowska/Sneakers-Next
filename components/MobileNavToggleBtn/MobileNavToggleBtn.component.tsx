import { Fragment, useRef, useEffect } from "react";

import styles from "./MobileNavToggleBtn.module.scss";

type Props = {
  toggleNavMenu: () => void;
  isExpanded: boolean;
};

const MobileNavToggleBtn = ({ toggleNavMenu, isExpanded }: Props) => {
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isExpanded && btn.current) {
      btn.current.focus();
    }
  }, [isExpanded]);

  return (
    <Fragment>
      <button
        ref={btn}
        onClick={toggleNavMenu}
        className={styles.btn}
        aria-controls="primary-nav"
        aria-expanded={isExpanded}
      >
        <span className="sr-only">Menu</span>
      </button>
    </Fragment>
  );
};
export default MobileNavToggleBtn;
