import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import { User as UserType } from "firebase/auth";
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from "../../firebase/firebase.utils";

import { AppDispatchType } from "../../store/store";
import { fetchCategories } from "../../store/category/categoryReducer";

import MobileNavToggleBtn from "../MobileNavToggleBtn/MobileNavToggleBtn.component";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import FocusTrap from "../focus-trap/focus-trap.component";

import { selectCurrentUser } from "../../store/user/user.selector";
import { setUser } from "../../store/user/userSlice";
import { selectCartDropdownHidden } from "../../store/cart/cart.selector";

import sneakersLogo from "../../public/assets/logo.svg";
import avatarImg from "../../public/images/image-avatar.jpg";
import blancAvatarImg from "../../public/images/image-blanc-avatar.png";

import styles from "./navigation.module.scss";

//TODO image from email data?
const Navigation = () => {
  const dispatch: AppDispatchType = useDispatch();

  // GET CATEGORIES
  // useEffect(() => {
  //   dispatch(fetchCategories());
  // }, []);

  // // GET USER
  // useEffect(() => {
  //   // if user comes in make user doc(or just get the reference)
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     const getUserSnapshotAndSetUser = async (user: UserType) => {
  //       const userSnapshot = await createUserDocFromAuth(user);
  //       if (userSnapshot) {
  //         dispatch(setUser({ ...userSnapshot.data(), id: userSnapshot.id }));
  //       }
  //     };

  //     if (user) {
  //       getUserSnapshotAndSetUser(user);
  //     } else {
  //       // there is no user
  //       dispatch(setUser(user));
  //     }
  //   });

  //   return unsubscribe;

  //   // dispatch never changes but react does not know
  // }, []);

  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);
  // const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);
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

      <div className={styles.container}>
        <MobileNavToggleBtn
          toggleNavMenu={toggleNavMenu}
          isExpanded={menuIsVisible}
        />

        <Link
          href="/"
          //FIXME please margin omg
          // className={styles.logoLink}
        >
          <Image
            src={sneakersLogo}
            className={`${styles.logo} ${styles.logoLink}`}
            alt="Sneakers home"
          />
        </Link>

        <nav
          aria-label="primary navigation"
          className={styles.primaryNav}
          id="primary-nav"
          data-visible={menuIsVisible}
          aria-hidden={menuIsHidden}
        >
          <FocusTrap isActive={menuIsVisible}>
            <div className={styles.mobileBtn}>
              <MobileNavToggleBtn
                toggleNavMenu={toggleNavMenu}
                isExpanded={menuIsVisible}
              />
            </div>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link href="/">
                  <a onClick={() => setMenuIsVisible(false)}>Collecions</a>
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/category/men">
                  <a onClick={() => setMenuIsVisible(false)}>Men</a>
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/category/women">
                  <a onClick={() => setMenuIsVisible(false)}>Women</a>
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/about">
                  <a onClick={() => setMenuIsVisible(false)}>About</a>
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/contact">
                  <a onClick={() => setMenuIsVisible(false)}>Contact</a>
                </Link>
              </li>
            </ul>
          </FocusTrap>
        </nav>

        <nav
          aria-label="cart and profile navigation"
          className={styles.secondaryNav}
          id="secondary-nav"
        >
          <ul>
            {/*BUG  */}
            {/* <li><CartIcon ref={btnRef} /></li> */}

            {!cartDropdownHidden && <CartDropdown cartIconToggleRef={btnRef} />}

            <li>
              <Link href="/user">
                <Image
                  src={currentUser ? avatarImg : blancAvatarImg}
                  className={`${styles.user} ${
                    currentUser ? "" : styles.userBlanc
                  }`}
                  alt="User profile"
                />
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