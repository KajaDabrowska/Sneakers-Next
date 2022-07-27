// ===================
// THIS WAS APP.JS
// ===================
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User as UserType } from "firebase/auth"; // I already have a "User" component
// import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from "../src/utils/firebase/firebase.utils";

import { AddBtnContextProvider } from "../src/contexts/add-btn-context";

import { store, persistor } from "../src/store/store";
import { setUser } from "../src/store/user/userSlice";
import { fetchCategories } from "../src/store/category/categoryReducer";
import { selectCategories } from "../src/store/category/category.selector";

import { AppDispatchType } from "../src/store/store";

export default function App() {
  const categories = useSelector(selectCategories);

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

  return (
    <div className="">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AddBtnContextProvider>{/* <App /> */}</AddBtnContextProvider>
        </PersistGate>
      </Provider>

      {/* <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Collections />} />
          <Route path="collections" element={<Collections />} />

          <Route path="men" element={<Category title={"men"} />} />
          <Route path="women" element={<Category title={"women"} />} />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="user" element={<User />} />
          <Route path="sign-up" element={<SignUpForm />} />

          {Object.values(categories).map((category) =>
            category.map((product) => (
              <Route
                key={product.id}
                path={`product-${product.id}`}
                element={<ItemPage item={product} />}
              />
            ))
          )}
        </Route>
      </Routes> */}
    </div>
  );
}
