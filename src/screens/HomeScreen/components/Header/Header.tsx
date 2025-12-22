import React from 'react';
import { Box, Text } from '../../../../elements';

type HeaderProps = {
  greetingText: string;
  subtitleText: string;
  greetingFontFamily?: string;
};

const Header: React.FC<HeaderProps> = ({
  greetingText,
  subtitleText,
  greetingFontFamily,
}) => {
  return (
    <Box marginBottom={20}>
      <Text
        fontSize={24}
        fontWeight="700"
        fontFamily={greetingFontFamily}
        color="text"
        marginBottom={6}
      >
        {greetingText}
      </Text>
      <Text fontSize={14} fontFamily="regular" color="mutedText" lineHeight={20}>
        {subtitleText}
      </Text>
    </Box>
  );
};

export default Header;

