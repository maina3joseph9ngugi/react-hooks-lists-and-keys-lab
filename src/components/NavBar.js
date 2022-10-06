import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  return <nav>{links.map((link,ind)=><a 
      href={"#"+link}
      key={ind}
    >{link}</a>)}</nav>;
}

export default NavBar;