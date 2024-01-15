'use client';

import React from 'react';
import './app.header.scss';
import {
  Box,
  Flex,
  Grid,
  GridCol,
  Group,
  Image,
  Menu,
  em,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import ButtonCustom from '../Button/app.button';
import { IconShoppingCart } from '@tabler/icons-react';

export interface IMenuItems {
  id: number;
  label: string;
  link: string;
  img?: boolean;
}

const menuItems: IMenuItems[] = [
  { id: 1, label: 'How To Use', link: '/about' },
  { id: 2, label: 'Demo', link: '/contact' },
  { id: 3, label: 'Document', link: '/contact' },
  {
    id: 4,
    label: 'Support',
    link: '/contact',
    img: true,
  },
];

const Header = () => {
  const theme = useMantineTheme();
  const isTabled = useMediaQuery(`(max-width: ${em(992)})`);

  return (
    <header id="header">
      <Menu shadow="md" width={200} />
      <Grid align="center">
        <GridCol span={{ base: 6, md: 1 }}>
          <Box className="header-logo">
            {!isTabled ? (
              <Image src="/assets/img/logo_header.svg" w={79} h={28} />
            ) : (
              <Image src="/assets/img/logo_header.svg" w={79} h={28} />
            )}
          </Box>
        </GridCol>

        <GridCol className="header-nav" span={6} style={{ paddingLeft: rem('20px') }}>
          <Menu>
            <Flex gap={66} direction="row" wrap="wrap" align="center">
              {menuItems.map((item) => (
                <Link key={item.id} to={item.link} className="header-nav_link">
                  {item.img ? (
                    <Image
                      w={18.4}
                      h={20.59}
                      fit="contain"
                      src="/assets/img/header_icon_support.png"
                      style={{ paddingRight: rem('5px') }}
                    />
                  ) : (
                    ''
                  )}
                  {item.label}
                </Link>
              ))}
            </Flex>
          </Menu>
        </GridCol>

        <GridCol className="header-auth" span={3.5}>
          <Group justify="start">
            <ButtonCustom
              height={rem('48px')}
              width={rem('152px')}
              color={theme.colors.white[0]}
              background={`linear-gradient(to right, ${theme.colors.blue[2]} 0%, ${theme.colors.blue[3]} 100%)`}
            >
              Join Now
            </ButtonCustom>

            <ButtonCustom
              height={rem('48px')}
              width={rem('152px')}
              color={theme.colors.violet[1]}
              background="transparent"
              border={`2px solid ${theme.colors.violet[1]}`}
            >
              Sign In
            </ButtonCustom>
          </Group>
        </GridCol>

        {/* Cart */}
        <GridCol span={0.75}>
          <div className="header-cart">
            <IconShoppingCart
              style={{ width: rem('30px'), height: rem('30px'), marginLeft: rem('25px') }}
              color={theme.colors.violet[1]}
            />
          </div>
        </GridCol>
      </Grid>
    </header>
  );
};

export default Header;
