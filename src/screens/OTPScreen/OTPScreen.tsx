import React, { useRef } from "react";
import { ScreenContainer, Text } from "../../elements";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

export const OTPScreen = () => {
  const ref0 = useRef<TextInput | null>(null);
  const ref1 = useRef<TextInput | null>(null);
  const ref2 = useRef<TextInput | null>(null);

  const otp0 = useRef("");
  const otp1 = useRef("");
  const otp2 = useRef("");

  const handleChange = (value: string, index: number) => {
    if (index === 0) {
      otp0.current = value;
      if (value) ref1.current?.focus();
    }

    if (index === 1) {
      otp1.current = value;
      if (value) ref2.current?.focus();
    }

    if (index === 2) {
      otp2.current = value;
    }
  };

  const handleBackspace = (key: string, index: number) => {
    if (key === "Backspace") {
      if (index === 2 && !otp2.current) ref1.current?.focus();
      if (index === 1 && !otp1.current) ref0.current?.focus();
    }
  };

  const handleSubmit = () => {
    const otp = otp0.current + otp1.current + otp2.current;

    if (otp.length < 3) {
      Alert.alert("Error", "Please enter complete OTP");
      return;
    }

    Alert.alert("OTP Submitted", otp);
  };

  return (
    <ScreenContainer>
      <Text>Enter OTP</Text>

      <View style={styles.container}>
        <TextInput
          ref={ref0}
          keyboardType="number-pad"
          maxLength={1}
          autoFocus
          style={styles.input}
          onChangeText={(v) => handleChange(v, 0)}
          onKeyPress={(e) => handleBackspace(e.nativeEvent.key, 0)}
        />

        <TextInput
          ref={ref1}
          keyboardType="number-pad"
          maxLength={1}
          style={styles.input}
          onChangeText={(v) => handleChange(v, 1)}
          onKeyPress={(e) => handleBackspace(e.nativeEvent.key, 1)}
        />

        <TextInput
          ref={ref2}
          keyboardType="number-pad"
          maxLength={1}
          style={styles.input}
          onChangeText={(v) => handleChange(v, 2)}
          onKeyPress={(e) => handleBackspace(e.nativeEvent.key, 2)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 16,
    gap: 12,
  },
  input: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
  },
  button: {
    marginTop: 24,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
});