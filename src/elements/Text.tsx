import React from 'react';
import { Text as RNText, TextProps, TextStyle, DimensionValue } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';
import { fonts, FontWeight } from '../utils/fonts';

// Valid font weights that can be used as React Native fontWeight (excludes custom fonts like meowScript)
type ValidFontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'regular' | 'medium';

export type TextElementProps = TextProps & {
  color?: keyof ReturnType<typeof useThemeContext>['colors'];
  fontSize?: number;
  fontWeight?: ValidFontWeight;
  fontFamily?: FontWeight;
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
  fontFamily,
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

  let fontFamilyValue: string | undefined;
  if (fontFamily) {
    fontFamilyValue = fonts[fontFamily];
  } else if (fontWeight && (fontWeight === 'regular' || fontWeight === 'medium' || fontWeight === 'bold')) {
    fontFamilyValue = fonts[fontWeight];
  }

  const fontWeightValue = fontWeight && !['regular', 'medium', 'bold'].includes(fontWeight) 
    ? (fontFamilyValue ? undefined : fontWeight)
    : undefined;

  const computedStyle: TextStyle = {
    color: colors[color],
    ...(fontSize !== undefined && { fontSize }),
    ...(fontFamilyValue && { fontFamily: fontFamilyValue }),
    ...(fontWeightValue && { fontWeight: fontWeightValue }),
    ...(textAlign && { textAlign }),
    ...(textDecorationLine && { textDecorationLine }),
    ...(margin !== undefined && { margin: margin as DimensionValue }),
    ...(marginTop !== undefined && { marginTop: marginTop as DimensionValue }),
    ...(marginBottom !== undefined && { marginBottom: marginBottom as DimensionValue }),
    ...(marginLeft !== undefined && { marginLeft: marginLeft as DimensionValue }),
    ...(marginRight !== undefined && { marginRight: marginRight as DimensionValue }),
    ...(padding !== undefined && { padding: padding as DimensionValue }),
    ...(opacity !== undefined && { opacity }),
    ...(lineHeight !== undefined && { lineHeight }),
  };

  return <RNText style={[computedStyle, style]} {...props} />;
};

export default Text;

