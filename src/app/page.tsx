'use client';

import { Box, Container, em, rem } from '@mantine/core';
import Header from '@/components/Header/app.header';
import Hero from '@/components/Hero/app.hero';
import Intro from '@/components/Intro/app.intro';
import Plan from '@/components/Plan/app.plan';
import Feature from '@/components/Feature/app.feature';
import Service from '@/components/Service/app.service';
import Question from '@/components/Questions/app.question';
import Rift from '@/components/Rift/app.rift';
import CarouselLol from '@/components/Carousel/app.carousel';

export default function HomePage() {
  return (
    <>
      <div
        className="wrapper"
        style={{
          maxWidth: '1440px',
          margin: '0px auto',
        }}
      >
        <Container
          size={1140}
          style={{ maxWidth: 1140, marginTop: 60, padding: 0 }}
          className="home-page"
        >
          <Header />
          <Hero />
          <Intro />
          <Plan />
          <Feature />
          <Service />
          <Question />
          <Rift />
          <CarouselLol />
        </Container>
      </div>
    </>
  );
}
