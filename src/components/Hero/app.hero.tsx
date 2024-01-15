import React from 'react';

import {
  Box,
  Flex,
  Grid,
  GridCol,
  Group,
  Image,
  Text,
  Title,
  em,
  rem,
  useMantineTheme,
} from '@mantine/core';
import ButtonCustom from '../Button/app.button';
import { useMediaQuery } from '@mantine/hooks';
const Hero = () => {
  const isTableb = useMediaQuery(`(max-width: ${em(992)})`);
  const theme = useMantineTheme();
  return (
    <section className="hero-wrapper">
      {/* Nội dung trong container */}
      <Grid
        gutter={20}
        className="hero"
        justify="space-between"
        pt={!isTableb ? rem('100px') : rem('15px')}
      >
        {/* Các cột của hệ thống grid */}
        <GridCol span={{ base: 12, md: 6.5 }}>
          <Box ff={theme.headings.fontFamily} fs={'normal'}>
            <Box className="hero-heading" pb={rem('25px')}>
              {!isTableb ? (
                <Image
                  fit="contain"
                  w={rem('596.36px')}
                  h={rem('134.08px')}
                  src="/assets/img/legend.png"
                />
              ) : (
                <Title
                  ta={'center'}
                  fw={theme.other.fontWeights.blod}
                  c={theme.colors.violet[1]}
                  size={rem('30px')}
                >
                  LoL Tool For League of Legends
                </Title>
              )}
            </Box>

            <Box className="hero-desc" pb={rem('50px')} visibleFrom="md">
              <Text
                c={theme.colors.violet[1]}
                size={theme.fontSizes.fs_20}
                fw={theme.other.fontWeights.fw_300}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cupiditate consequatur
                nulla vel modi autem molestiae? Dolores unde esse ab fugit minus quod
              </Text>
            </Box>

            <Group visibleFrom="md" className="hero-btn" gap={28}>
              <ButtonCustom width={rem('300px')} height={rem('72px')}>
                Getting Started
              </ButtonCustom>
              <ButtonCustom
                width={rem('187px')}
                height={rem('72px')}
                background="transparent"
                color="#3B3089"
                border="2px solid #3b3089"
              >
                Demo
              </ButtonCustom>
            </Group>
          </Box>
        </GridCol>

        <GridCol span={{ base: 12, md: 5.5 }}>
          <Box className="hero-img">
            <Image
              visibleFrom="md"
              w={rem('481px')}
              h={rem('435px')}
              src="/assets/img/hero_image.png"
              style={{
                transform: `translateX(${150 - 131}px)`,
              }}
            />
            <Image
              mx={'auto'}
              hiddenFrom="md"
              w={rem('250px')}
              h={rem('219px')}
              src="/asset/img/hero_main_img.png"
            />
            <Box className="hero-desc" pb={rem('50px')} hiddenFrom="md">
              <Text
                ta={'center'}
                c={theme.colors.violet[2]}
                size={theme.fontSizes.fs_14}
                fw={theme.other.fontWeights.fw_300}
              >
                Lorem ipsum dolor sit amet consectetur. Egestas habitant lorem in turpis aenean nunc
                elit orci sit. Purus tempus sit semper velit aliquet scelerisque sed massaLorem
                ipsum dolor sit amet consectetur. Egestas habitant lorem in turpis aenean nunc elit
                orci sit. Purus tempus sit semper velit aliquet scelerisque sed massa..
              </Text>
            </Box>
          </Box>

          <Flex hiddenFrom="md" className="hero-btn" gap={20} justify={'center'}>
            <ButtonCustom
              width={rem('200px')}
              height={rem('50px')}
              fontSize={rem('14px')}
              px={'auto'}
              py={'auto'}
            >
              Getting Started
            </ButtonCustom>
            <ButtonCustom
              width={rem('130px')}
              height={rem('50px')}
              background="transparent"
              color="#3B3089"
              border="2px solid #3b3089"
              fontSize={rem('14px')}
              px={'auto'}
              py={'auto'}
            >
              Demo
            </ButtonCustom>
          </Flex>
        </GridCol>
      </Grid>
    </section>
  );
};

export default Hero;
