import React, { Fragment, useEffect, useState } from "react";
import TopBar from "./TopBarMenu/TopBarMenu";
import TopStickyMenu from "./TopStickyMenu/TopStickyMenu";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  let pageGap: number;

  useEffect(() => {
    pageGap = (window.screen.availHeight / 100) * 30;
    window.addEventListener("scroll", () => {
      window.pageYOffset > pageGap ? setSticky(true) : setSticky(false);
    });

  });

  return (
    <Fragment>
      <TopBar isSticky={isSticky} />
      <TopStickyMenu isSticky={isSticky} />
    </Fragment>
  );
};

export default Header;
