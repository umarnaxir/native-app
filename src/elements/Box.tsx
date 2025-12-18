import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';

export type BoxProps = ViewProps & {
  backgroundColor?: keyof ReturnType<typeof useThemeContext>['colors'];
  borderColor?: keyof ReturnType<typeof useThemeContext>['colors'];
  padding?: number | string;
  paddingHorizontal?: number | string;
  paddingVertical?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  margin?: number | string;
  marginHorizontal?: number | string;
  marginVertical?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  flex?: number;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  gap?: number;
  width?: number | string;
  height?: number | string;
  opacity?: number;
};

const Box: React.FC<BoxProps> = ({
  backgroundColor,
  borderColor,
  padding,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginHorizontal,
  marginVertical,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  borderRadius,
  borderWidth,
  flex,
  flexDirection,
  alignItems,
  justifyContent,
  gap,
  width,
  height,
  opacity,
  style,
  ...props
}) => {
  const { colors } = useThemeContext();

  const computedStyle: ViewStyle = {
    ...(backgroundColor && { backgroundColor: colors[backgroundColor] }),
    ...(borderColor && { borderColor: colors[borderColor] }),
    ...(padding !== undefined && { padding: typeof padding === 'string' ? padding : padding }),
    ...(paddingHorizontal !== undefined && { paddingHorizontal: typeof paddingHorizontal === 'string' ? paddingHorizontal : paddingHorizontal }),
    ...(paddingVertical !== undefined && { paddingVertical: typeof paddingVertical === 'string' ? paddingVertical : paddingVertical }),
    ...(paddingTop !== undefined && { paddingTop: typeof paddingTop === 'string' ? paddingTop : paddingTop }),
    ...(paddingBottom !== undefined && { paddingBottom: typeof paddingBottom === 'string' ? paddingBottom : paddingBottom }),
    ...(paddingLeft !== undefined && { paddingLeft: typeof paddingLeft === 'string' ? paddingLeft : paddingLeft }),
    ...(paddingRight !== undefined && { paddingRight: typeof paddingRight === 'string' ? paddingRight : paddingRight }),
    ...(margin !== undefined && { margin: typeof margin === 'string' ? margin : margin }),
    ...(marginHorizontal !== undefined && { marginHorizontal: typeof marginHorizontal === 'string' ? marginHorizontal : marginHorizontal }),
    ...(marginVertical !== undefined && { marginVertical: typeof marginVertical === 'string' ? marginVertical : marginVertical }),
    ...(marginTop !== undefined && { marginTop: typeof marginTop === 'string' ? marginTop : marginTop }),
    ...(marginBottom !== undefined && { marginBottom: typeof marginBottom === 'string' ? marginBottom : marginBottom }),
    ...(marginLeft !== undefined && { marginLeft: typeof marginLeft === 'string' ? marginLeft : marginLeft }),
    ...(marginRight !== undefined && { marginRight: typeof marginRight === 'string' ? marginRight : marginRight }),
    ...(borderRadius !== undefined && { borderRadius }),
    ...(borderWidth !== undefined && { borderWidth }),
    ...(flex !== undefined && { flex }),
    ...(flexDirection && { flexDirection }),
    ...(alignItems && { alignItems }),
    ...(justifyContent && { justifyContent }),
    ...(gap !== undefined && { gap }),
    ...(width !== undefined && { width: typeof width === 'string' ? width : width }),
    ...(height !== undefined && { height: typeof height === 'string' ? height : height }),
    ...(opacity !== undefined && { opacity }),
  };

  return <View style={[computedStyle, style]} {...props} />;
};

export default Box;

