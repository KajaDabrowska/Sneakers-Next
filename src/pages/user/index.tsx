import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import SignInForm from "../../components/sign-in/sign-in.component";
import Button from "../../components/button/button.component";

import { signOutUser } from "../../firebase/firebase.utils";

import { selectCurrentUser } from "../../store/user/user.selector";

import styles from "./user.module.scss";

const User = () => {
  // const navigate = useNavigate();
  const router = useRouter();
  const currentUser = useSelector(selectCurrentUser);

  const handleSignOut = () => {
    signOutUser();
    router.push("/");
    // navigate("/");
  };

  return (
    <main id="main" className="container">
      <div className={styles.user}>
        <SignInForm />

        <p>
          Don&apos;t have an account?&nbsp;
          <Link href="/sign-up">
            <a className={styles.signUpLink}>Sign up</a>
          </Link>
        </p>

        {currentUser ? (
          <div className={styles.signOutBtn}>
            <Button onClick={handleSignOut}>SING OUT</Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </main>
  );
};
export default User;

//response.user :
//displayName, email, accessToken, uid, photoUrl
