import Navigation from "./navigation/navigation.component";

//@ts-ignore
export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
