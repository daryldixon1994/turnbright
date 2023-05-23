import React from "react";
import tw from "twin.macro";
import NavBar from "../components/navbar/NavBar";
import IntroSection from "../components/home/IntroSection";
import NewLetterSection from "../components/news/NewLetterSection";
import RecentNews from "../components/main/RecentNews";
import RecentVideos from "../components/main/RecentVideos";
import Footer from "../components/footer/Footer";
const Container = tw.div`box-border`;
const Main = tw.main`max-w-screen-xl mx-auto min-h-[694px]`;
function Home() {
  return (
    <Container>
      <NavBar />
      <IntroSection />
      <NewLetterSection />
      <Main>
        <RecentNews />
        <RecentVideos />
      </Main>
      <Footer />
    </Container>
  );
}

export default Home;
