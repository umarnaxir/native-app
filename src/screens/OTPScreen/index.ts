// export * from './OTPScreen';
// import React, { useRef, useState } from "react";
// import { ScreenContainer, Text } from "../../elements";
// import { View, TextInput, StyleSheet } from 'react-native';

// export const OTPScreen = () => {
//   const [codes, setCodes] = useState<string[]>(['', '', '']);
//   const ref0 = useRef<TextInput | null>(null);
//   const ref1 = useRef<TextInput | null>(null);
//   const ref2 = useRef<TextInput | null>(null);
//   const inputs = [ref0, ref1, ref2];

//   const handleChange = (text: string, index: number) => {
//     // keep only last character if user pastes more
//     if (text.length > 1) text = text.slice(-1);
//     const newCodes = [...codes];
//     newCodes[index] = text;
//     setCodes(newCodes);
//     if (text && index < inputs.length - 1) {
//       inputs[index + 1].current?.focus();
//     }
//   };

//   const handleKeyPress = ({ nativeEvent }: { nativeEvent: { key: string } }, index: number) => {
//     if (nativeEvent.key === 'Backspace') {
//       if (codes[index]) {
//         // clear current
//         const newCodes = [...codes];
//         newCodes[index] = '';
//         setCodes(newCodes);
//       } else if (index > 0) {
//         // move focus to previous and clear it
//         inputs[index - 1].current?.focus();
//         const newCodes = [...codes];
//         newCodes[index - 1] = '';
//         setCodes(newCodes);
//       }
//     }
//   };

//   return (
//     <ScreenContainer>
//       <Text>Enter OTP</Text>
//       <View style={styles.otpContainer}>
//         {codes.map((val, i) => (
//           <TextInput
//             key={i}
//             ref={inputs[i]}
//             value={val}
//             onChangeText={(t) => handleChange(t, i)}
//             onKeyPress={(e) => handleKeyPress(e, i)}
//             keyboardType="number-pad"
//             maxLength={1}
//             style={styles.otpInput}
//             textAlign="center"
//             returnKeyType="done"
//             autoFocus={i === 0}
//           />
//         ))}
//       </View>
//     </ScreenContainer>
//   );
// };

// const styles = StyleSheet.create({
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 16,
//     width: '60%',
//   },
//   otpInput: {
//     width: 48,
//     height: 48,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     fontSize: 18,
//   },
// });
