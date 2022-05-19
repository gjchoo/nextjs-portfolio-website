import Img from "next/image";

import { navIconSize } from "../utils/constant";

const Index = () => {
  return (
    <div className="logo-entry">
      <Img
        src={"/gj.svg"}
        height={navIconSize * 2}
        width={navIconSize * 2}
        layout="fixed"
      />
    </div>
  );
};

export default Index;
