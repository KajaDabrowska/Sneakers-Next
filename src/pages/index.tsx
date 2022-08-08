import type { NextPage } from "next";
import { useEffect, useState } from "react";

import Collections from "../components/collections";

const IndexPage: NextPage = () => {
  // This is a workaround for a hydration error
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <main>{mounted && <Collections />}</main>
    </div>
  );
};

export default IndexPage;
