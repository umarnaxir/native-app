import React, { useState, useMemo } from 'react';
import { ScrollView, ViewStyle } from 'react-native';
import { Box, Text, IconButton } from '../../elements';
import { useHistory } from '../../context/HistoryContext';
import { HistoryPeriod } from '../../utils/taskHistory';
import HistoryTabs from './components/HistoryTabs';
import DailyHistory from './components/DailyHistory';
import WeeklyHistory from './components/WeeklyHistory';
import MonthlyHistory from './components/MonthlyHistory';
import ScreenHeader from '../../components/common/ScreenHeader';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { useThemeContext } from '../../context/ThemeContext';

const TaskHistoryScreen: React.FC = () => {
  const { dailyHistory, weeklyHistory, monthlyHistory } = useHistory();
  const [activeTab, setActiveTab] = useState<HistoryPeriod>('daily');
  const navigation = useNavigation();
  const { colors } = useThemeContext();

  const scrollContentStyle = useMemo<ViewStyle>(
    () => ({ paddingBottom: 32 }),
    []
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'daily':
        return <DailyHistory history={dailyHistory} />;
      case 'weekly':
        return <WeeklyHistory history={weeklyHistory} />;
      case 'monthly':
        return <MonthlyHistory history={monthlyHistory} />;
      default:
        return <DailyHistory history={dailyHistory} />;
    }
  };

  return (
    <Box flex={1} backgroundColor="background">
        <ScreenHeader
            title="Task History"
            subtitle="Track your productivity over time"
            leftIcon={
                <IconButton
                icon="menu"
                variant="ghost"
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                color={colors.text}
                size={24}
                style={{ width: 24, height: 24, padding: 0 }}
                />
            }
        />
      <ScrollView
        contentContainerStyle={scrollContentStyle}
        showsVerticalScrollIndicator={false}
      >
        <Box marginHorizontal={20} marginTop={16}>
          <Box marginBottom={16}>
            <Text fontSize={14} color="mutedText" lineHeight={20}>
              Track your productivity and task completion over time
            </Text>
          </Box>
          <HistoryTabs activeTab={activeTab} onTabChange={setActiveTab} />
          {renderContent()}
        </Box>
      </ScrollView>
    </Box>
  );
};

export default TaskHistoryScreen;

