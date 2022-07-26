import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
// import { Outlet, Link } from "react-router-dom";

// import logo from "../../public/assets/logo.svg";
// import user from "../../public/images/image-avatar.png";
// import blancUser from "../../public/images/image-blanc-avatar.png";

import "./navigation.styles.scss";
import MobileNavToggleBtn from "../MobileNavToggleBtn/MobileNavToggleBtn.component";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import FocusTrap from "../focus-trap/focus-trap.component";

import { selectCurrentUser } from "../../src/store/user/user.selector";
import { selectCartDropdownHidden } from "../../src/store/cart/cart.selector";

//TODO image from email data?
const Navigation = () => {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);
  const [menuIsHidden, setMenuIsHidden] = useState<boolean>(true);

  const currentUser = useSelector(selectCurrentUser);
  const cartDropdownHidden = useSelector(selectCartDropdownHidden);

  const toggleNavMenu = () => {
    menuIsVisible ? setMenuIsVisible(false) : setMenuIsVisible(true);
    !menuIsHidden ? setMenuIsHidden(true) : setMenuIsHidden(false);
  };

  const btnRef = React.createRef<HTMLButtonElement>();

  const userImgSrc = currentUser
    ? "../../public/images/image-avatar.png"
    : "../../public/images/image-blanc-avatar.png";

  return (
    <Fragment>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <div className="navigation-container">
        <MobileNavToggleBtn
          toggleNavMenu={toggleNavMenu}
          isExpanded={menuIsVisible}
        />

        <Link href="/" className="logo-link">
          <Image
            src="../../public/assets/logo.svg"
            className="logo"
            alt="Sneakers home"
          />
        </Link>

        <nav
          aria-label="primary navigation"
          className="primary-nav"
          id="primary-nav"
          data-visible={menuIsVisible}
          aria-hidden={menuIsHidden}
        >
          <FocusTrap isActive={menuIsVisible}>
            <div className="primary-nav__mobile-btn">
              <MobileNavToggleBtn
                toggleNavMenu={toggleNavMenu}
                isExpanded={menuIsVisible}
              />
            </div>

            <ul className="primary-nav__list">
              <li className="primary-nav__list-item">
                <Link
                  href="/collections"
                  onClick={() => setMenuIsVisible(false)}
                >
                  Collecions
                </Link>
              </li>
              <li className="primary-nav__list-item">
                <Link href="/men" onClick={() => setMenuIsVisible(false)}>
                  Men
                </Link>
              </li>
              <li className="primary-nav__list-item">
                <Link href="/women" onClick={() => setMenuIsVisible(false)}>
                  Women
                </Link>
              </li>
              <li className="primary-nav__list-item">
                <Link href="/about" onClick={() => setMenuIsVisible(false)}>
                  About
                </Link>
              </li>
              <li className="primary-nav__list-item">
                <Link href="/contact" onClick={() => setMenuIsVisible(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </FocusTrap>
        </nav>

        <nav
          aria-label="cart and profile navigation"
          className="secondary-nav"
          id="secondary-nav"
        >
          <ul>
            <li>
              <CartIcon ref={btnRef} />
            </li>

            {!cartDropdownHidden && <CartDropdown cartIconToggleRef={btnRef} />}

            <li>
              <Link href="/user">
                <Image
                  src={userImgSrc}
                  className={`user ${currentUser ? "" : "user--blanc"}`}
                  alt="User profile"
                />
                {/* <img src={currentUser ? user : blancUser} /> */}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/*FIXME here was an outlet  */}
      {/* <Outlet /> */}
    </Fragment>
  );
};

export default Navigation;
