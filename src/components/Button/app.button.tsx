import React from 'react';
import { Button, rem } from '@mantine/core';

type Props = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  height?: string | number;
  width?: string | number;
  background?: string;
  color?: string;
  border?: string;
  fontSize?: string;
  px?: string | number;
  py?: string | number;
};

const ButtonCustom = ({
  children,
  onClick,
  height,
  width,
  background,
  color,
  border,
  fontSize,
  px,
  py,
}: Props) => {
  return (
    <>
      <Button
        onClick={onClick}
        style={{
          fontFamily: "'Outfit', sans-serif",
          letterSpacing: '5%',
          fontWeight: 700,
          fontSize: fontSize ? fontSize : rem('20px'),
          gap: rem('10px'),
          borderRadius: rem('30px'),
          cursor: 'pointer',
          padding: px || py ? `${rem(py)} ${rem(px)}` : `${rem(12)} ${rem(30)}`,
          alignItems: 'center',
          height: height ? height : rem('50px'),
          width: width ? width : rem('220px'),
          border: border,
          color: color ? color : '#ffffff',
          background: background
            ? background
            : 'linear-gradient(to right, #5d8fda 0%, #5da7da 100%)',
        }}
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonCustom;
