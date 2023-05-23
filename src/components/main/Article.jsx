import React from "react";
import tw from "twin.macro";
import { H1, H2 } from "../heading/MainHead";
import Img from "../../assets/images/recent-news-img.svg";
import SocialMedia from "../home/SocialMedia";

const Container = tw.div`box-border`;
const SecHead = tw(H1)`text-2xl ml-2`;
const Intro = tw.div`box-border mt-16`;
const Media = tw.div` mt-8 mb-12`;
const Image = tw.img``;
Image.defaultProps = {
  src: Img,
};
const Description = tw.div``;
const P = tw.p`font-poppins text-lg mb-5`;
const HeadP = tw.span`font-extrabold uppercase`;
const ArticleFooter = tw.div`box-border flex justify-between items-center mt-16`;
const DateAndLinks = tw.div`box-border`;
const Pfooter = tw(P)`text-[#323030]`;
function Article({ primaryHead, secondaryHead }) {
  return (
    <Container>
      <Intro>
        <H2> {primaryHead} </H2>
        <SecHead> {secondaryHead} </SecHead>
      </Intro>
      <Media>
        <Image />
      </Media>
      <Description>
        <P>
          <HeadP> The Challenge of Connecting generations </HeadP> "Bridging
          generations can be tougher than bridging distant villages over
          continents"
        </P>
        <P>
          Turn B. Right is a representative of Generation Z. The life ahead of
          him is much longer than what is already behind him. He is not hindered
          by years of experience and vividly envisions how he will change the
          world according to his own ideas. Turn B. Right is all about being
          cool, proactive, and he know, what he wants.
        </P>
        <P>
          Exciting news! We're launching a competition."Best 5-7" Film to show:
          What does Turn B. Right truly want?” So, what does Turn B. Right truly
          want? We'd love to hear your thoughts and insights!
        </P>
        <P>
          <HeadP>Passion for Music Unites Generations </HeadP> Music bridges the
          generation gap and creates a sense of belonging and shared
          experiences, uniting generations.
        </P>
        <P>
          Passion for Music Unites Generations: Discover the timeless melody
          that resonates in the hearts of all ages. Join us on a harmonious
          journey where music bridges the generation gap and creates
          unforgettable connections.
        </P>
        <P>
          Whether you're a young enthusiast or a seasoned listener, let the
          universal language of music bring us together, fostering a sense of
          belonging and shared experiences.
        </P>
        <P>
          Embrace the power of music and witness the unbreakable bond it creates
          among generations.
        </P>
      </Description>
      <ArticleFooter>
        <DateAndLinks>
          <Pfooter>Published: 14.12.2022 at 00:02 Hour</Pfooter>
          <SocialMedia colorIcon="#323030" />
        </DateAndLinks>
        <Pfooter>
          by <HeadP>TINO SENONER</HeadP>
        </Pfooter>
      </ArticleFooter>
    </Container>
  );
}

export default Article;
