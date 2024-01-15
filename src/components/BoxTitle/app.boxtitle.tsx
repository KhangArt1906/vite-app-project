import React from 'react';
import { Box, Flex, Image, MantineBreakpoint, Text, em, rem, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
export type StyleProp<Value> = Value | Partial<Record<MantineBreakpoint | (string & {}), Value>>;

type BoxTileProps = {
  top: string;
  title: string;
  desc: string;
  align?: StyleProp<React.CSSProperties['textAlign']>;
  children?: React.ReactNode;
};

const BoxTitle = (props: BoxTileProps) => {
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);
  const theme = useMantineTheme();
  const { align } = props;
  return (
    <Flex gap={!isMobile ? 28 : 9} direction="column" wrap="wrap" ff={theme.headings.fontFamily}>
      <Text
        className="top"
        lh={!isMobile ? rem('24px') : rem('16.8px')}
        size={!isMobile ? theme.fontSizes.fs_20 : theme.fontSizes.fs_14}
        c={theme.colors.blue[3]}
        fw={theme.other.fontWeights.bold}
        ta={align ? align : 'center'}
        ff={"'Roboto', sans-serif"}
      >
        {props.top}
      </Text>

      <Text
        className="title"
        // w={isMobile ? rem('250px') : 'auto'}
        lh={!isMobile ? rem('60px') : rem('28.8px')}
        size={!isMobile ? theme.fontSizes.fs_50 : theme.fontSizes.fs_24}
        c={theme.colors.violet[1]}
        fw={theme.other.fontWeights.bold}
        ta={align ? align : 'center'}
        m={'0px auto'}
      >
        {props.title}
      </Text>

      <Box ta={align ? align : 'center'} m={align ? '0px auto' : ''}>
        {props.children}
      </Box>

      <Text
        className="desc"
        lh={!isMobile ? rem('24px') : rem('16.8px')}
        size={!isMobile ? theme.fontSizes.fs_20 : theme.fontSizes.fs_14}
        c={theme.colors.violet[1]}
        fw={theme.other.fontWeights.fw_300}
        ta={align ? align : 'center'}
      >
        {props.desc}
      </Text>
    </Flex>
  );
};

export default BoxTitle;
