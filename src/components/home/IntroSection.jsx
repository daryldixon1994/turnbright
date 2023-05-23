import React from "react";
import tw from "twin.macro";
import "./style.css";

import Slogant from "./Slogant";
const Container = tw.div`box-border h-[600px] flex flex-col justify-end w-[100%] mx-auto relative`;
function IntroSection() {
  return (
    <Container className="intro-container">
        <Slogant />
    </Container>
  );
}

export default IntroSection;
