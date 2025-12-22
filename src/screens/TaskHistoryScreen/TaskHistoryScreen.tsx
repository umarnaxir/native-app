import React, { useState, useMemo } from 'react';
import { ScrollView, ViewStyle } from 'react-native';
import { Box, Text } from '../../elements';
import { useHistory } from '../../context/HistoryContext';
import { HistoryPeriod } from '../../utils/taskHistory';
import HistoryTabs from './components/HistoryTabs';
import DailyHistory from './components/DailyHistory';
import WeeklyHistory from './components/WeeklyHistory';
import MonthlyHistory from './components/MonthlyHistory';

const TaskHistoryScreen: React.FC = () => {
  const { dailyHistory, weeklyHistory, monthlyHistory } = useHistory();
  const [activeTab, setActiveTab] = useState<HistoryPeriod>('daily');

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

