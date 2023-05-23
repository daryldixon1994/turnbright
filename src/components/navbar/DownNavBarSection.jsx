import React from "react";
import tw from "twin.macro";
import Logo from "../../assets/images/logo.svg";
const Container = tw.div`box-border bg-white`;
const ImageBox = tw.div`box-border flex justify-center`;
const Ul = tw.ul`flex justify-center gap-[50px] p-2`;
const Li = tw.li`uppercase font-semibold cursor-pointer text-[#001436]`;
const Image = tw.img`w-[150px]`;
Image.defaultProps = {
  src: Logo,
};
function DownNavBarSection() {
  return (
    <Container>
      <ImageBox>
        <Image />
      </ImageBox>
      <Ul>
        <Li>News</Li>
        <Li>Events</Li>
        <Li>Articles</Li>
        <Li>Videos</Li>
        <Li>Newsletters</Li>
      </Ul>
    </Container>
  );
}

export default DownNavBarSection;
