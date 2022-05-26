import Img from "next/image";

import { navIconSize, icon } from "../utils/constant";

const Index = () => {
  return (
    <div className="logo-entry">
      <Img
        src={icon}
        height={navIconSize * 2}
        width={navIconSize * 2}
        layout="fixed"
        alt="singapore software engineer portfolio gjchoo"
      />
    </div>
  );
};

export default Index;
