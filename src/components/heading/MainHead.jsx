import React from "react";
import tw from "twin.macro";
const Container = tw.div`font-poppins `;
const Headers = tw.div`mb-2 flex`;
export const H1 = tw.h1`text-4xl uppercase text-[#323030]`;
export const H2 = tw(H1)` ml-2 font-black `;
const Lines = tw.div`m-0 flex`;
const L1 = tw.div`w-[5%] m-0 border border-[#323030]`;
const L2 = tw.div`w-[95%] m-0 border border-[#D9D9D9]`;
function MainHead({ headOne, headTwo }) {
  return (
    <Container>
      <Headers>
        <H1> {headOne} </H1>
        <H2> {headTwo} </H2>
      </Headers>
      <Lines>
        <L1 />
        <L2 />
      </Lines>
    </Container>
  );
}

export default MainHead;
