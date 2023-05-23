import React from "react";
import MainHead from "../heading/MainHead";
import { H1, H2 } from "../heading/MainHead";
import tw from "twin.macro";
import AsideVideos from "./AsideVideos";
import Video from "../../assets/images/VIDEO.svg";
const Container = tw.div``;
const Headers = tw.div`box-border mt-16 mb-8`;
const SecHead = tw(H1)`text-2xl ml-2`;
const Body = tw.div`box-border mb-24 flex justify-between`;
const VideoContainer = tw.div``;
const Image = tw.img`w-[803px]`;
Image.defaultProps = {
  src: Video,
};
function RecentVideos() {
  return (
    <Container>
      <MainHead headOne="Recent" headTwo="Videos" />
      <Headers>
        <H2>Passion for Music Unites Generations</H2>
        <SecHead>dynaskills® present Turn B. Right </SecHead>
      </Headers>
      <Body>
        <VideoContainer>
          <Image />
        </VideoContainer>
        <AsideVideos />
      </Body>
    </Container>
  );
}

export default RecentVideos;
