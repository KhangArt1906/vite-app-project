import {
  Box,
  Flex,
  Grid,
  GridCol,
  Group,
  Image,
  Text,
  em,
  rem,
  useMantineTheme,
} from '@mantine/core';
import TextClamp from '../TextClamp/app.textclamp';
import { useMediaQuery } from '@mantine/hooks';

export type IntroItemsType = {
  id: number;
  icon: string;
  text: string;
};

const introItems: IntroItemsType[] = [
  {
    id: 1,
    icon: '4k_icon.png',
    text: 'All resolutions',
  },
  {
    id: 2,
    icon: 'undetected_icon.png',
    text: 'Undetected',
  },
  {
    id: 3,
    icon: 'zero_wifi.png',
    text: 'Zero Performance Loss',
  },
  {
    id: 4,
    icon: 'icon_face_check.png',
    text: 'Compitable With All Champions',
  },
];

const Intro = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);
  const isTableb = useMediaQuery(`(max-width: ${em(992)})`);

  return (
    <section className="intro-wrapper">
      <Box
        className="intro"
        style={{
          borderRadius: rem('7px'),
        }}
        ff={theme.headings.fontFamily}
        px={rem('41px')}
        py={rem('31px')}
        mt={!isTableb ? rem('170px') : rem('30px')}
        lh={rem('24px')}
        bg={theme.colors.blue[4]}
      >
        <Flex gap={rem('57px')} wrap="wrap">
          {introItems &&
            introItems.map((item) => (
              <Group
                key={item.id}
                gap={!isTableb ? rem('12px') : rem('8px')}
                wrap="nowrap"
                w={isMobile ? '100%' : isTableb ? '40%' : 'auto'}
              >
                <Image src={`/assets/img/${item.icon}`} />

                <TextClamp
                  size={!isTableb ? theme.fontSizes.fs_20 : theme.fontSizes.fs_12}
                  fw={theme.other.fontWeights.normal}
                  lines={2}
                  text={item.text}
                />
              </Group>
            ))}
        </Flex>
      </Box>
    </section>
  );
};

export default Intro;
