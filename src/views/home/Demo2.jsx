import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

import HeaderNormal from "../../components/header/HeaderNormal";
import PortfolioSwiper from "../../components/portfolio/PortfolioSwiper";
import TitleSection from "../../components/heading/TitleSection";
import ServiceOne from "../../components/services/ServiceOne";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import HeroSection from "../../components/hero-section/HeroSection";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import DsnGrid from "../../components/DsnGrid";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import Footer from "../../components/footer/Footer";
import Team from "../../components/team/Team";
import Contact from "../Contact";
import {Helmet} from "react-helmet";
import SocialHero from "../../components/social-hero/SocialHero";


const heroContent = {
    title: "SamerPro",
    description: `Works`,

}

function Demo2(props) {
    return (
      <>
        <Helmet>
          <title>SamerPro</title>
        </Helmet>
        <HeaderNormal
          className="background-section"
          description={heroContent.description}
        >
          {heroContent.title}
        </HeaderNormal>


        {/*Start Portfolio Swiper*/}
        <Container className="under-header section-margin">
          <Row>
            <Col lg={{ span: 8, offset: 4 }}>
              <PortfolioSwiper desktop={{ slidesPerView: 2.5 }} grabCursor />
            </Col>
          </Row>
        </Container>
        {/*End Portfolio Swiper*/}



        {/*Start Service Section*/}
        <Container className="section-margin">
          <TitleSection description="what i can offer">
            Scope of Work
          </TitleSection>
          <ServiceOne
            className="text-center"
            col={3}
            colMobile={1}
            colGap={0}
            colGapTablet={30}
          />
        </Container>
        {/*End Service Section*/}

       
        {/*Start Hero Section*/}
        <Container className="section-margin dsn-right-container">
          <HeroSection />
        </Container>
        {/*End Hero Section*/}

        {/*Start Box Info With Image*/}
        <BoxImageVertical
          src="/assets/img/project/project1/TikTok.jpeg"
          className="section-margin"
        >
          <TitleCover>SamerPro</TitleCover>
          <FadeUpTrigger tag={DsnGrid} col={1} rowGap={30} rowGapTablet={20}>
            <h2 className="title-section border-line-left">Content Creator</h2>
            <h6>As a passionate web developer and content creator:</h6>
            <p>
              I enjoy exploring the latest trends in technology and sharing my
              knowledge with a wider audience. Through my TikTok account
              (@SamerPro), I create engaging content about web development, tech
              tips, and innovations, connecting with over 60k followers.
            </p>
            <div className="button-box">
              <ButtonDefault text="Take me.." icon={faAngleRight} href="https://www.tiktok.com/@samerpro_" />
            </div>
          </FadeUpTrigger>
        </BoxImageVertical>
        {/*End  Box Info With Image*/}
        <SocialHero />

        {/*Start Team*/}
        <Container className="section-margin dsn-right-container">
          <TitleSection description="Tools">
            What I Can Use
          </TitleSection>
          <Team loop grabCursor />
        </Container>
        {/*End Team*/}

        <Contact />
        <Footer />
      </>
    );
}

export default Demo2;