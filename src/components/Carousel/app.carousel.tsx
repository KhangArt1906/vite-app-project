import { Carousel, CarouselSlide } from '@mantine/carousel';
import {
  Box,
  Card,
  Flex,
  Grid,
  GridCol,
  Image,
  Text,
  em,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import './app.carousel.scss';
import CustomCarousel from './carousel_custom.module.css';
import TextClamp from '../TextClamp/app.textclamp';
import { Link } from 'react-router-dom';

const CarouselLol = () => {
  const theme = useMantineTheme();

  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);
  const isTableb = useMediaQuery(`(max-width: ${em(992)})`);

  return (
    <section className="carousel_wrapper">
      <Grid mt={!isTableb ? rem('250px') : rem('150px')}>
        <GridCol span={12}>
          <Carousel
            w={'100%'}
            align="start"
            withControls={false}
            withIndicators
            loop
            slidesToScroll={'auto'}
            classNames={CustomCarousel}
            height={isMobile ? 510 : isTableb ? 680 : 500}
          >
            <Carousel.Slide className="carousel_item">
              <Grid gutter={288}>
                <GridCol span={{ base: 12, md: 7 }}>
                  <Box className="carousel_image">
                    <Image
                      // ml={'auto'}
                      w={!isMobile ? rem('600px') : rem('315px')}
                      src={'/assets/img/carousel_image_1.png'}
                    />
                  </Box>
                </GridCol>
                <GridCol span={{ base: 12, md: 5 }}>
                  <Card h={'100%'} p={0}>
                    <Flex
                      className="carousel_content"
                      direction={'column'}
                      justify={'space-between'}
                      h={'100%'}
                      ff={theme.headings.fontFamily}
                    >
                      <Box>
                        <Flex
                          wrap="nowrap"
                          align={'center'}
                          gap={!isMobile ? theme.other.gap.gap_30 : theme.other.gap.gap_10}
                        >
                          <Flex className="carousel_date" align={'center'} gap={rem('9px')}>
                            <Image
                              src={'/assets/img/icon_carousel_clock.png'}
                              w={rem('16px')}
                              h={rem('15px')}
                            />
                            <Text
                              c={theme.colors.blue[5]}
                              size={!isMobile ? '' : theme.fontSizes.fs_12}
                            >
                              2023-06-10
                            </Text>
                          </Flex>
                          <Flex className="carousel_avatar" align={'center'} gap={rem('9px')}>
                            <Image
                              src={'/assets/img/icon_carousel_avatar.png'}
                              w={rem('16px')}
                              h={rem('15px')}
                            />
                            <Text
                              c={theme.colors.blue[5]}
                              size={!isMobile ? '' : theme.fontSizes.fs_12}
                            >
                              Admin Jimmy
                            </Text>
                          </Flex>
                        </Flex>
                        <Box
                          fs={theme.fontSizes.normal}
                          c={theme.colors.violet[1]}
                          mt={theme.other.marginTop.marginTop_20}
                        >
                          <TextClamp
                            ff={"'Roboto', sans-serif"}
                            size={!isMobile ? theme.fontSizes.fs_24 : theme.fontSizes.fs_20}
                            lines={1}
                            text="2023 League of Legends Tier List listasdsad"
                          />
                          <Box mt={theme.other.marginTop.marginTop_20}>
                            <TextClamp
                              ff={"'Outfit', sans-serif"}
                              size={!isMobile ? theme.fontSizes.fs_16 : theme.fontSizes.fs_14}
                              fw={300}
                              lines={3}
                              text="Introduction:As the world of League of Legends evolves with each passing year, new champions rise to prominence while others fall out of favor. In this article, we'll delve ..."
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Box className="carousel-readmore">
                        <Box className="carousel-readmore_btn" pt={!isTableb ? '0px' : rem('30px')}>
                          <Text
                            c={theme.colors.violet[1]}
                            size={!isMobile ? theme.fontSizes.fs_20 : theme.fontSizes.fs_16}
                          >
                            Read More
                          </Text>
                          <Image src={'/assets/img/icon_carousel_arrow.png'} />
                        </Box>
                      </Box>
                    </Flex>
                  </Card>
                </GridCol>
              </Grid>
            </Carousel.Slide>

            <Link to="#">
              <Image
                src="/assets/img/Group 63.png"
                fit="contain"
                h={14}
                mt={63}
                className="carousel_icon_slider"
              />
            </Link>
          </Carousel>
        </GridCol>
      </Grid>
    </section>
  );
};

export default CarouselLol;
