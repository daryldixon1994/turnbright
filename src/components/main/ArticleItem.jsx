import React from "react";
import tw from "twin.macro";
const Container = tw.div`w-[21%] text-[#323030]`;
const Title = tw.h3`font-black uppercase font-poppins mb-4 `;
const Date = tw.h6`mb-8`;
const P = tw.p`uppercase text-sm`;
function ArticleItem({ img, title, body, date }) {
  const Image = tw.img`mb-8`;
  Image.defaultProps = {
    src: img,
  };
  return (
    <Container>
      <Image />
      <Title> {title} </Title>
      <Date> {date} </Date>
      <P> {body} </P>
    </Container>
  );
}

export default ArticleItem;
