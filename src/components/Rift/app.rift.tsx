import { Box, Container, Flex, Group, Image, Title, em, rem, useMantineTheme } from '@mantine/core';
import React from 'react';
import BoxTitle from '../BoxTitle/app.boxtitle';
import ButtonCustom from '../Button/app.button';
import { useMediaQuery } from '@mantine/hooks';

const GetTool = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);
  const isTableb = useMediaQuery(`(max-width: ${em(992)})`);
  return (
    <section className="gettool-wrapper">
      <Box
        mt={!isTableb ? theme.other.marginTop.marginTop_230 : theme.other.marginTop.marginTop_125}
      >
        <Flex
          gap={theme.other.gap.gap_6}
          justify="flex-start"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          <Box w={rem('650px')}>
            <BoxTitle
              top={'Rise in Summoner Rift'}
              title={'Get iron to Challanger Easily'}
              children={
                <Box hiddenFrom="md">
                  <Image
                    w={rem('220px')}
                    h={rem('220px')}
                    src={'/assets/img/gettool_img_moblie.png'}
                  />
                </Box>
              }
              desc={
                'Lorem ipsum dolor sit amet consectetur. Egestas habitant lorem in turpis aenean nunc elit orci sit. Purus tempus sit semper velit aliquet scelerisque sed massaLorem ipsum dolor sit.'
              }
              align="left"
            />
            {/* <Box hiddenFrom="md">
              <Image src={'/asset/img/gettool_img_moblie.png'} />
            </Box> */}
            <Group
              gap={!isMobile ? theme.other.gap.gap_30 : theme.other.gap.gap_10}
              mt={theme.other.marginTop.marginTop_40}
            >
              <ButtonCustom
                width={!isMobile ? rem('271px') : '100%'}
                height={!isMobile ? rem('72px') : rem('60px')}
                fontSize=""
              >
                <Image
                  pr={rem('10px')}
                  fit="cover"
                  src="/assets/img/gettool_icon.png"
                  alt="Buy LoL Tools"
                />
                Buy Lol Tools
              </ButtonCustom>

              <ButtonCustom
                width={!isMobile ? rem('271px') : '100%'}
                height={!isMobile ? rem('72px') : rem('60px')}
                background="transparent"
                color="#3B3089"
                border="2px solid #3b3089"
              >
                <Image
                  pr={rem('10px')}
                  fit="cover"
                  src="/assets/img/gettool_icon_free.png"
                  alt="Get Free Trial"
                />
                Get Free Trial
              </ButtonCustom>
            </Group>
          </Box>
          <Box
            visibleFrom="md"
            style={{
              position: 'relative',
            }}
          >
            <Box
              className="overplay"
              style={{
                background: theme.colors.violet[0],
                borderRadius: theme.other.borderRadius.borderRadius_circle,
                filter: `${theme.other.fillter.blur_100}`,
                position: 'absolute',
                zIndex: 1,
                width: rem('400px'),
                height: rem('400px'),
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <Image visibleFrom="md" src={'/assets/img/gettool_img.png'} />
          </Box>
        </Flex>
      </Box>
    </section>
  );
};

export default GetTool;
