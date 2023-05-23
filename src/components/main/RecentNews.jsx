import React from "react";
import tw from "twin.macro";
import MainHead from "../heading/MainHead";
import Article from "./Article";
import OtherArticles from "./OtherArticles";
const Container = tw.div`mb-24`;
function RecentNews() {
  const title = "Passion for Music Unites Generations";
  const title2 = "Turn B. Right is a representative of Generation Z. ";
  return (
    <Container>
      <MainHead headOne="Recent" headTwo="News" />
      <Article primaryHead={title} secondaryHead={title2} />
      <OtherArticles />
    </Container>
  );
}

export default RecentNews;
