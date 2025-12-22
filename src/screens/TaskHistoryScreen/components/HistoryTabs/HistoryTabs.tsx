import React from 'react';
import { Calendar, TrendingUp, BarChart3 } from 'lucide-react-native';
import { Box } from '../../../../elements';
import { useThemeContext } from '../../../../context/ThemeContext';
import { HistoryPeriod } from '../../../../utils/taskHistory';
import TabButton from '../TabButton';

type HistoryTabsProps = {
  activeTab: HistoryPeriod;
  onTabChange: (tab: HistoryPeriod) => void;
};

const HistoryTabs: React.FC<HistoryTabsProps> = ({ activeTab, onTabChange }) => {
  const { colors } = useThemeContext();

  return (
    <Box
      flexDirection="row"
      gap={12}
      marginBottom={20}
      backgroundColor="background"
    >
      <TabButton
        label="Daily"
        isActive={activeTab === 'daily'}
        onPress={() => onTabChange('daily')}
        icon={<Calendar size={18} color={activeTab === 'daily' ? colors.buttonText : colors.primary} />}
      />
      <TabButton
        label="Weekly"
        isActive={activeTab === 'weekly'}
        onPress={() => onTabChange('weekly')}
        icon={<TrendingUp size={18} color={activeTab === 'weekly' ? colors.buttonText : colors.primary} />}
      />
      <TabButton
        label="Monthly"
        isActive={activeTab === 'monthly'}
        onPress={() => onTabChange('monthly')}
        icon={<BarChart3 size={18} color={activeTab === 'monthly' ? colors.buttonText : colors.primary} />}
      />
    </Box>
  );
};

export default HistoryTabs;

