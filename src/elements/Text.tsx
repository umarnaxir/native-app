import React from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';

export type TextElementProps = TextProps & {
  color?: keyof ReturnType<typeof useThemeContext>['colors'];
  fontSize?: number;
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  margin?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  padding?: number | string;
  opacity?: number;
  lineHeight?: number;
};

const Text: React.FC<TextElementProps> = ({
  color = 'text',
  fontSize,
  fontWeight,
  textAlign,
  textDecorationLine,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  opacity,
  lineHeight,
  style,
  ...props
}) => {
  const { colors } = useThemeContext();

  const computedStyle: TextStyle = {
    color: colors[color],
    ...(fontSize !== undefined && { fontSize }),
    ...(fontWeight && { fontWeight }),
    ...(textAlign && { textAlign }),
    ...(textDecorationLine && { textDecorationLine }),
    ...(margin !== undefined && { margin: typeof margin === 'string' ? margin : margin }),
    ...(marginTop !== undefined && { marginTop: typeof marginTop === 'string' ? marginTop : marginTop }),
    ...(marginBottom !== undefined && { marginBottom: typeof marginBottom === 'string' ? marginBottom : marginBottom }),
    ...(marginLeft !== undefined && { marginLeft: typeof marginLeft === 'string' ? marginLeft : marginLeft }),
    ...(marginRight !== undefined && { marginRight: typeof marginRight === 'string' ? marginRight : marginRight }),
    ...(padding !== undefined && { padding: typeof padding === 'string' ? padding : padding }),
    ...(opacity !== undefined && { opacity }),
    ...(lineHeight !== undefined && { lineHeight }),
  };

  return <RNText style={[computedStyle, style]} {...props} />;
};

export default Text;

