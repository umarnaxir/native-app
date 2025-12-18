import React from 'react';
import { Alert, ScrollView } from 'react-native';
import { LogOut } from 'lucide-react-native';
import { useThemeContext } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import ThemeToggle from '../../components/common/ThemeToggle';
import { Box, Text, Button } from '../../elements';
import ScreenHeader from '../../components/common/ScreenHeader';
import { STRINGS } from '../../utils/constants';

const SettingsScreen: React.FC = () => {
  const { colors } = useThemeContext();
  const { logout } = useAuth();

  const handleLogout = async () => {
    Alert.alert('Logged out', 'You have been signed out successfully.', [
      {
        text: 'OK',
        onPress: async () => {
          await logout();
        },
      },
    ]);
  };

  return (
    <Box flex={1} backgroundColor="background">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <ScreenHeader
          title={STRINGS.settingsTitle}
          subtitle="Personalize your experience and manage your account."
        />

        <Box marginHorizontal={20} marginTop={16}>
          <Box
            backgroundColor="card"
            borderColor="border"
            borderWidth={1}
            borderRadius={16}
            padding={16}
            marginBottom={16}
          >
            <Text fontSize={16} fontWeight="600" color="text" marginBottom={12}>
              Appearance
            </Text>
            <ThemeToggle />
          </Box>

          <Box
            backgroundColor="card"
            borderColor="border"
            borderWidth={1}
            borderRadius={16}
            padding={16}
          >
            <Text fontSize={16} fontWeight="600" color="text" marginBottom={12}>
              Account
            </Text>
            <Button
              title={STRINGS.logoutButton}
              onPress={handleLogout}
              variant="danger"
              leftIcon={<LogOut size={18} color={colors.buttonText} />}
              fullWidth
            />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default SettingsScreen;

