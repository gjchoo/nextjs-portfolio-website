import Img from "next/image";

import { navIconSize } from "../../../utils/constant";

const PreLoader = () => {
  return (
    <div className="logo-entry" data-testid="storybook-preloader">
      <Img
        src={"/gj.svg"}
        height={navIconSize * 2}
        width={navIconSize * 2}
        layout="fixed"
        alt="singapore software engineer portfolio gjchoo"
      />
    </div>
  );
};

export default PreLoader;
