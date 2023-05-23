import React from "react";
import tw from "twin.macro";
import SocialMedia from "./SocialMedia";
const Container = tw.div`box-border w-fit absolute top-[55%] lg:left-[20%] min-[2000px]:left-[25%] min-[3000px]:left-[35%]`;
const Text = tw.div`bg-[#001436]  text-[#FECB36] pl-4 pr-28 py-6 font-poppins font-bold uppercase border-l-8 border-l-[#FECB36] lg:mb-2`;
const H1 = tw.h1`text-6xl mb-8 `;
const H2 = tw.h2`text-3xl`;
function Slogant() {
  return (
    <Container>
      <Text>
        <H1>Turn B. Right</H1>
        <H2>Passion for Music</H2>
        <H2>Unites Generations</H2>
      </Text>
      <SocialMedia colorIcon="#001436" />
    </Container>
  );
}

export default Slogant;
