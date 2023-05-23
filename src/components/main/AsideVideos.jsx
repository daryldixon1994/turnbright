import React from "react";
import tw from "twin.macro";
import "./styles.css";
const Container = tw.div`relative box-border lg:h-[446.5px] w-[32%] flex flex-col overflow-y-auto px-4 pb-4 font-poppins text-[#323030] shadow-gray-500 rounded-lg`;
const H1 = tw.h1`font-black uppercase text-xl text-center mt-0 sticky top-0 bg-white`;
const Title = tw.h4`ml-[15px] text-left uppercase`;
const Duration = tw.h4``;
const VideoItem = tw.div`box-border flex mb-4 p-1`;
const videos = [
  {
    title: "Erst Heim, dann Job: Was Schweizer Firmen Geflüchteten bieten",
    duration: "11:12",
  },
  {
    title:
      "Jobs für ukrainische Menschen - «Genügend Unternehmen wollen ukrainische Flüchtlinge ausbilden»",
    duration: "14:12",
  },
  {
    title:
      "Jobs für ukrainische Menschen - «Genügend Unternehmen wollen ukrainische Flüchtlinge ausbilden»",
    duration: "18:50",
  },
  {
    title:
      "Jobs für ukrainische Menschen - «Genügend Unternehmen wollen ukrainische Flüchtlinge ausbilden»",
    duration: "10:12",
  },
  {
    title:
      "Jobs für ukrainische Menschen - «Genügend Unternehmen wollen ukrainische Flüchtlinge ausbilden»",
    duration: "22:30",
  },
  {
    title:
      "Jobs für ukrainische Menschen - «Genügend Unternehmen wollen ukrainische Flüchtlinge ausbilden»",
    duration: "09:00",
  },
  {
    title:
      "Jobs für ukrainische Menschen - «Genügend Unternehmen wollen ukrainische Flüchtlinge ausbilden»",
    duration: "25:32",
  },
  {
    title:
      "Jobs für ukrainische Menschen - «Genügend Unternehmen wollen ukrainische Flüchtlinge ausbilden»",
    duration: "13:13",
  },
];
function AsideVideos() {
  return (
    <Container id="aside-video-sugg">
      <H1>flashbacks Videos</H1>
      {videos.map((video, i) => (
        <VideoItem key={i}>
          <Duration> {video.duration} </Duration>
          <Title> {video.title} </Title>
        </VideoItem>
      ))}
    </Container>
  );
}

export default AsideVideos;
