import React from 'react';
import { MainServiceItem } from '../Service/app.service';
import { useMediaQuery } from '@mantine/hooks';
import {
  Box,
  Flex,
  Grid,
  GridCol,
  Image,
  Text,
  Title,
  em,
  rem,
  useMantineTheme,
} from '@mantine/core';

interface ComparisionProps {
  data: MainServiceItem;
}

const Comparsion: React.FC<ComparisionProps> = ({ data }) => {
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);
  const isTableb = useMediaQuery(`(max-width: ${em(992)})`);
  const theme = useMantineTheme();

  return (
    <>
      <Box
        style={{
          borderRadius: theme.other.borderRadius.borderRadius_10,
          border: `${
            data.free !== true ? `2px solid ${theme.other.borderColor.borderColor_0}` : ''
          }`,
        }}
        w={rem('557px')}
        p={!isTableb ? `${rem('65px')} ${rem('43px')}` : rem('30px')}
        bg={data.bg}
      >
        <Flex
          display={'flex'}
          direction={'column'}
          gap={10}
          align={'center'}
          ff={theme.headings.fontFamily}
          fs={theme.fontSizes.normal}
          c={theme.colors.black[0]}
        >
          <Title
            c={theme.colors.black[0]}
            fw={theme.other.fontWeights.bold}
            size={!isMobile ? theme.fontSizes.title_30 : theme.fontSizes.title_20}
          >
            {data.title}
          </Title>

          <Text
            size={theme.fontSizes.desc_16}
            fw={theme.other.fontWeights.normal}
            c={theme.colors.black[0]}
          >
            {data.desc}
          </Text>
        </Flex>
        <Box pos={'relative'} mt={theme.other.marginTop.marginTop_60}>
          {data.free !== true && (
            <Box
              className="overlay"
              style={{
                background: theme.colors.blue[0],
                borderRadius: theme.other.borderRadius.borderRadius_389,
                filter: `${theme.other.fillter.blur_100}`,
                position: 'absolute',
                zIndex: 1,
                width: '100%',
                height: '100%',
              }}
            />
          )}
          {data &&
            data?.listService.map((item) => {
              return (
                <Grid
                  key={`abc-${item.id}`}
                  align="center"
                  mt={theme.other.marginTop.marginTop_35}
                  ff={theme.headings.fontFamily}
                  style={{ color: theme.colors.black[0], zIndex: 2 }}
                >
                  <GridCol span={{ base: 2, xs: 1 }}>
                    <Image src={`/assets/img/${item.iconLeft}`}></Image>
                  </GridCol>
                  <GridCol span={{ base: 8, xs: 10 }}>
                    <Text size={!isMobile ? theme.fontSizes.text_20 : theme.fontSizes.text_16}>
                      {item.titleService}
                    </Text>
                  </GridCol>
                  <GridCol span={{ base: 2, xs: 1 }}>
                    <Image src={`/assets/img/${item.iconRight}`}></Image>
                  </GridCol>
                </Grid>
              );
            })}
        </Box>
      </Box>
    </>
  );
};

export default Comparsion;
