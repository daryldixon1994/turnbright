import React from "react";
import tw from "twin.macro";
import UpNavbarSection from "./UpNavbarSection";
import DownNavBarSection from "./DownNavBarSection";
import "./style.css"
const Container = tw.div`box-border`;
function NavBar() {
  return (
    <Container id="navbar-container">
      <UpNavbarSection />
      <DownNavBarSection />
    </Container>
  );
}

export default NavBar;
