import React, { createContext } from "react";

// type TypesP = {
//   ref: React.MutableRefObject<HTMLButtonElement | undefined>;
// };
//<TypesP>
//{
// ref: null as <React.RefObject<HTMLButtonElement>>,
// ref: null,
// ref: React.createRef(),
//}
export const AddBtnContext = createContext();

// type Props = {
//   children: React.ReactNode;
// };
//: Props
export const AddBtnContextProvider = ({ children }) => {
  //<HTMLButtonElement>
  const ref = React.createRef();

  const value = {
    addBtnRef: ref,
  };

  return (
    //TODO to ts
    <AddBtnContext.Provider value={value}>{children}</AddBtnContext.Provider>
  );
};
