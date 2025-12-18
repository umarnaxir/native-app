import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { useThemeContext } from '../../context/ThemeContext';

type AppInputProps = TextInputProps;

const AppInput: React.FC<AppInputProps> = (props) => {
  const { colors } = useThemeContext();

  return (
    <TextInput
      {...props}
      placeholderTextColor={colors.placeholder}
      style={[
        styles.input,
        {
          backgroundColor: colors.inputBackground,
          borderColor: colors.border,
          color: colors.text,
        },
        props.style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
});

export default AppInput;


