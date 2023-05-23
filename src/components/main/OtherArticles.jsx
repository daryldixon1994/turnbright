import React from "react";
import tw from "twin.macro";
import IMG1 from "../../assets/images/recent-news-thumbnail-1.svg";
import IMG2 from "../../assets/images/recent-news-thumbnail-2.svg";
import IMG3 from "../../assets/images/recent-news-thumbnail-3.svg";
import IMG4 from "../../assets/images/recent-news-thumbnail-4.svg";
import ArticleItem from "./ArticleItem";
const Container = tw.div`box-border flex justify-between mt-24`;

const data = [
  {
    img: IMG1,
    title: "Helvetia Versicherungen als Top Employer 2021 ",
    date: "10.05.2023",
    body: "Die Internetseite des BSV bietet neu Informationen in leichter Sprache und Videos in Gebärdensprache. Das Angebot ist direkt von der Startseite aus zugänglich.",
  },
  {
    img: IMG2,
    title: "Helvetia Versicherungen als Top Employer 2021",
    date: "10.05.2023",
    body: "Die Internetseite des BSV bietet neu Informationen in leichter Sprache und Videos in Gebärdensprache. Das Angebot ist direkt von der Startseite aus zugänglich.",
  },
  {
    img: IMG3,
    title: "Helvetia Versicherungen als Top Employer 2021 ",
    date: "10.05.2023",
    body: "Die Internetseite des BSV bietet neu Informationen in leichter Sprache und Videos in Gebärdensprache. Das Angebot ist direkt von der Startseite aus zugänglich.",
  },
  {
    img: IMG4,
    title: "Helvetia Versicherungen als Top Employer 2021",
    date: "10.05.2023",
    body: "Die Internetseite des BSV bietet neu Informationen in leichter Sprache und Videos in Gebärdensprache. Das Angebot ist direkt von der Startseite aus zugänglich.",
  },
];
function OtherArticles() {
  return (
    <Container>
      {data.map((article, i) => (
        <ArticleItem key={i} {...article} />
      ))}
    </Container>
  );
}

export default OtherArticles;
