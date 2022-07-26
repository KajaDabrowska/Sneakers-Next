import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import SignInForm from "../../components/sign-in/sign-in.component";
import Button from "../../components/button/button.component";

import { signOutUser } from "../../src/utils/firebase/firebase.utils";

import { selectCurrentUser } from "../../src/store/user/user.selector";

import "./user.styles.scss";

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
      <div className="user">
        <SignInForm />

        <p>
          Don't have an account?&nbsp;
          <Link className="sign-up__link" href="/sign-up">
            Sign up
          </Link>
        </p>

        {currentUser ? (
          <div className="user__sign-out-btn">
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
