import React from "react";
import tw from "twin.macro";
const Container = tw.div`max-w-screen-xl mx-auto mb-8 box-border uppercase py-2 flex flex-col items-end`;
const SubContainer = tw.div`lg:w-[30.3%]  flex flex-col justify-end`;
const H1 = tw.h1`text-[#001436] text-3xl font-poppins font-bold lg:mb-6 w-fit`;
const H6 = tw.h6`text-[#001436] text-base font-normal w-fit`;
const InputBox = tw.div``;
const Input = tw.input`border-2 border-slate-400 focus:outline-none py-1 px-2 rounded lg:w-[78.5%]`;
const Button = tw.button`ml-1 bg-[#FECB36] p-1.5 rounded`;
function NewLetterSection() {
  return (
    <Container>
      <SubContainer>
        <H1>Newsletter Every Week</H1>
        <InputBox>
          <H6>E-mail adress</H6>
          <Input />
          <Button>Register</Button>
        </InputBox>
      </SubContainer>
    </Container>
  );
}

export default NewLetterSection;
