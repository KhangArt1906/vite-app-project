import { Title } from '@mantine/core';

interface TextClamProps {
  ff?: string;
  size?: string;
  lines?: number;
  fw?: number;
  c?: string;
  text: string;
  className?: string;
}

const TextClamp: React.FC<TextClamProps> = ({ ff, size, lines, fw, c, text, className }) => {
  const textClampStyle: React.CSSProperties = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: lines,
    fontFamily: ff,
    fontSize: size,
    fontWeight: fw,
    color: c,
  };

  return (
    <Title className={className} style={textClampStyle}>
      {text}
    </Title>
  );
};

export default TextClamp;
