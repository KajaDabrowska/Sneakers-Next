import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import { User as UserType } from "firebase/auth";
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from "../../src/utils/firebase/firebase.utils";

import { AppDispatchType } from "../../src/store/store";
import { fetchCategories } from "../../src/store/category/categoryReducer";

import MobileNavToggleBtn from "../MobileNavToggleBtn/MobileNavToggleBtn.component";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import FocusTrap from "../focus-trap/focus-trap.component";

import { selectCurrentUser } from "../../src/store/user/user.selector";
import { setUser } from "../../src/store/user/userSlice";
import { selectCartDropdownHidden } from "../../src/store/cart/cart.selector";

import sneakersLogo from "../../public/assets/logo.svg";
import avatarImg from "../../public/images/image-avatar.png";
import blancAvatarImg from "../../public/images/image-blanc-avatar.png";

import styles from "./navigation.module.scss";

//TODO image from email data?
const Navigation = () => {
  const dispatch: AppDispatchType = useDispatch();

  // GET CATEGORIES
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  // GET USER
  useEffect(() => {
    // if user comes in make user doc(or just get the reference)
    const unsubscribe = onAuthStateChangedListener((user) => {
      const getUserSnapshotAndSetUser = async (user: UserType) => {
        const userSnapshot = await createUserDocFromAuth(user);
        if (userSnapshot) {
          dispatch(setUser({ ...userSnapshot.data(), id: userSnapshot.id }));
        }
      };

      if (user) {
        getUserSnapshotAndSetUser(user);
      } else {
        // there is no user
        dispatch(setUser(user));
      }
    });

    return unsubscribe;

    // dispatch never changes but react does not know
  }, []);

  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);
  const [menuIsHidden, setMenuIsHidden] = useState<boolean>(true);

  const currentUser = useSelector(selectCurrentUser);
  const cartDropdownHidden = useSelector(selectCartDropdownHidden);

  const toggleNavMenu = () => {
    menuIsVisible ? setMenuIsVisible(false) : setMenuIsVisible(true);
    !menuIsHidden ? setMenuIsHidden(true) : setMenuIsHidden(false);
  };

  const btnRef = React.createRef<HTMLButtonElement>();

  // const userImgSrc = currentUser ? avatarImg : blancAvatarImg;

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
          sneakers
          {/* <Image src={sneakersLogo} className="logo" alt="Sneakers home" /> */}
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
                {/* <Image
                  src={userImgSrc}
                  className={`user ${currentUser ? "" : "user--blanc"}`}
                  alt="User profile"
                /> */}
                user
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
