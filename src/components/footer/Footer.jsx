import React from "react";
import tw from "twin.macro";
import Flag from "react-world-flags";
import Logo from "../../assets/images/logo.svg";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import { TbChevronUpRight } from "react-icons/tb";
import { FaTiktok } from "react-icons/fa";
const Container = tw.div`box-border font-poppins px-12 py-4 bg-[#1d78cb] lg:h-[300px] lg:grid grid-cols-1 grid-rows-2`;
const Bloc1 = tw.div`row-span-2 grid grid-cols-4 lg:w-[75%] lg:mx-auto`;
const Bloc2 = tw.div`flex items-center justify-around gap-[20px]`;
const Head = tw.div`flex items-center`;
const H1 = tw.h1`m-0 text-2xl text-white`;
const LogoContainer = tw.div`box-border flex justify-center items-center`;
const LogoImg = tw.img`w-[250px]`;
const LinksContainer = tw.div`flex justify-center font-light gap-[10px] h-fit text-white`;
const Navigation = tw.div`p-4`;
const NavigationBody = tw.div`flex flex-col gap-[6px] lg:mt-6 lg:ml-8`;
const Link = tw.a``;
const LinkTag = tw.a`text-white hover:text-white text-sm`;
const Contact = tw.div`text-base p-4`;
const ContactBody = tw.div`flex flex-col gap-[6px] lg:mt-6 lg:ml-8`;
const ContactItem = tw.h6`text-base font-normal m-0 text-white flex items-center gap-[2px]`;
const SocialLinksContainer = tw.div`p-4`;
const SocialLink = tw.a`cursor-pointer text-white hover:text-gray-100 text-base border-solid border-[1.5px] border-white p-1 rounded-lg flex items-center gap-[5px]`;
const SocialBody = tw.div`grid grid-cols-2 grid-rows-3 gap-2 w-[75%] lg:mt-6 lg:ml-8`;
const CopyrightText = tw.p`text-center font-medium tracking-wide text-sm text-white`;
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Container>
      <Bloc1>
        <LogoContainer>
          <LogoImg src={Logo} />
        </LogoContainer>
        <Navigation>
          <Head>
            <TbChevronUpRight size={40} color="white" />
            <H1>Navigation</H1>
          </Head>
          <NavigationBody>
            <LinkTag>
              <Link
                style={{
                  all: "unset",
                  cursor: "pointer",
                }}
              >
                News
              </Link>
            </LinkTag>
            <LinkTag>
              <Link style={{ all: "unset", cursor: "pointer" }}>Events</Link>
            </LinkTag>
            <LinkTag>
              <Link style={{ all: "unset", cursor: "pointer" }}>Videos</Link>
            </LinkTag>
            <LinkTag>
              <Link style={{ all: "unset", cursor: "pointer" }}>Articles</Link>
            </LinkTag>
            <LinkTag>
              <Link style={{ all: "unset", cursor: "pointer" }}>
                Newsletters
              </Link>
            </LinkTag>
          </NavigationBody>
        </Navigation>
        <Contact>
          <Head>
            <TbChevronUpRight size={40} color="white" />
            <H1>Contact us</H1>
          </Head>
          <ContactBody>
            <ContactItem
              style={{ color: "black", textDecoration: "underline" }}
            >
              support@dynaskills-dynajobs.com
            </ContactItem>
            <ContactItem>Martin Disteli-Strasse 9</ContactItem>
            <ContactItem>
              CH-4600 Olten. Switzerland <Flag code="ch" width={15} />
            </ContactItem>
            <ContactItem>+41 079 240 39 01</ContactItem>
          </ContactBody>
        </Contact>
        <SocialLinksContainer>
          <Head>
            <TbChevronUpRight size={40} color="white" />
            <H1>Follow us</H1>
          </Head>
          <SocialBody>
            <SocialLink
              target="_blank"
              href="https://www.facebook.com/Dynajobs-AG-104046158924976"
            >
              <BsFacebook />
              Facebook
            </SocialLink>
            <SocialLink target="_blank" href="https://twitter.com/TinoSenoner">
              <AiFillTwitterCircle />
              Twitter
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://www.youtube.com/channel/UC0Ltsu_2FrfUneg0jk8ol2Q"
            >
              <RiLinkedinBoxFill />
              LinkedIn
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://www.youtube.com/channel/UC0Ltsu_2FrfUneg0jk8ol2Q"
            >
              <BsYoutube />
              Youtube
            </SocialLink>

            <SocialLink
              target="_blank"
              href="https://www.youtube.com/channel/UC0Ltsu_2FrfUneg0jk8ol2Q"
            >
              <RiInstagramFill />
              Instagram
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://www.youtube.com/channel/UC0Ltsu_2FrfUneg0jk8ol2Q"
            >
              <FaTiktok />
              Tik Tok
            </SocialLink>
          </SocialBody>
        </SocialLinksContainer>
      </Bloc1>
      <Bloc2>
        <CopyrightText>
          &copy; Copyright 2023, dynaskills.CH. All Rights Reserved.
        </CopyrightText>
        <LinksContainer>
          <LinkTag style={{ all: "unset", cursor: "pointer" }}>
            Privacy Policy
          </LinkTag>
          <LinkTag style={{ all: "unset", cursor: "pointer" }}>
            Terms and Conditions
          </LinkTag>
        </LinksContainer>
      </Bloc2>
    </Container>
  );
};
