import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Animated } from 'react-native';
import { LogIn, User, Lock, Eye, EyeOff } from 'lucide-react-native';
import { Box, Text, Input, Button, Logo } from '../../../elements';
import { useThemeContext } from '../../../context/ThemeContext';
import { useAuth } from '../../../context/AuthContext';
import { STRINGS } from '../../../utils/constants';
import { useLoginMutation } from '../../../hooks/mutations/useLogin';
import { Platform as GqlPlatform } from '../../../graphql/generated/types';

const LoginScreen: React.FC = () => {
  const { colors } = useThemeContext();
  const { setAuthState } = useAuth();
  const { mutate, loading: isSubmitting, error: loginError } = useLoginMutation();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [usernameFocused, setUsernameFocused] = useState<boolean>(false);
  const [passwordFocused, setPasswordFocused] = useState<boolean>(false);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    if (loginError) {
      setError(loginError.message);
    }
  }, [loginError]);

  const handleLogin = async () => {
    setError('');
    try {
      const gqlPlatform = Platform.OS === 'ios' ? GqlPlatform.Ios : Platform.OS === 'android' ? GqlPlatform.Android : GqlPlatform.Web;

      const result = await mutate({
        variables: {
          data: {
            email: username,
            password,
            platform: gqlPlatform,
            deviceModel: `${Platform.OS} ${Platform.Version ?? ''}`,
            deviceToken: '',
          },
        },
      });

      if (result.data?.login.accessToken) {
        await setAuthState(result.data.login);
      } else {
        setError(result.data?.login.msg ?? 'Invalid credentials. Please try again.');
      }
    } catch (e: any) {
      setError(e.message ?? 'An unexpected error occurred.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getIconColor = (focused: boolean) => {
    return focused ? colors.primary : colors.placeholder;
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Box flex={1} paddingHorizontal={24} justifyContent="center" alignItems="center">
        <Animated.View style={[styles.animatedContainer, { opacity: fadeAnim }]}>
          {/* Logo */}
          <Box marginBottom={32}>
            <Logo size={100} />
          </Box>

          {/* Title */}
          <Text fontSize={32} fontWeight="700" color="text" marginBottom={8} textAlign="center">
            {STRINGS.loginTitle}
          </Text>
          <Text fontSize={16} color="mutedText" marginBottom={40} textAlign="center">
            Sign in to continue managing your tasks
          </Text>

          {/* Form */}
          <Box width="100%" marginBottom={16}>
            <Input
              value={username}
              onChangeText={(text) => {
                setUsername(text);
                setError('');
              }}
              onFocus={() => setUsernameFocused(true)}
              onBlur={() => setUsernameFocused(false)}
              placeholder={STRINGS.usernamePlaceholder}
              autoCapitalize="none"
              autoCorrect={false}
              leftIcon={<User size={20} color={getIconColor(usernameFocused)} />}
              error={!!error}
              variant={usernameFocused ? 'outline' : 'default'}
            />
          </Box>

          <Box width="100%" marginBottom={16}>
            <Input
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setError('');
              }}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              placeholder={STRINGS.passwordPlaceholder}
              secureTextEntry={!showPassword}
              leftIcon={<Lock size={20} color={getIconColor(passwordFocused)} />}
              rightIcon={
                showPassword ? (
                  <EyeOff size={20} color={getIconColor(passwordFocused)} />
                ) : (
                  <Eye size={20} color={getIconColor(passwordFocused)} />
                )
              }
              onRightIconPress={togglePasswordVisibility}
              error={!!error}
              variant={passwordFocused ? 'outline' : 'default'}
            />
          </Box>

          {error && (
            <Box width="100%" marginBottom={16}>
              <Text fontSize={14} color="danger" textAlign="center">
                {error}
              </Text>
            </Box>
          )}

          <Box width="100%" marginTop={8}>
            <Button
              title={STRINGS.loginButton}
              onPress={handleLogin}
              disabled={isSubmitting || !username || !password}
              loading={isSubmitting}
              leftIcon={<LogIn size={20} color={colors.buttonText} />}
              fullWidth
              size="large"
            />
          </Box>
        </Animated.View>
      </Box>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animatedContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default LoginScreen;

