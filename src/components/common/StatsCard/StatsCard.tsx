import React from 'react';
import { List, Clock, CheckCircle2, AlertCircle } from 'lucide-react-native';
import { Box, Text } from '../../../elements';
import { useThemeContext } from '../../../context/ThemeContext';

type StatItem = {
  label: string;
  value: number | string;
  valueColor?: 'text' | 'primary' | 'danger' | 'success' | 'mutedText';
};

type StatsCardProps = {
  stats: StatItem[];
};

const StatsCard: React.FC<StatsCardProps> = ({ stats }) => {
  const { colors } = useThemeContext();

  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'total':
        return <List size={18} color={colors.primary} />;
      case 'pending':
        return <Clock size={18} color={colors.primary} />;
      case 'overdue':
        return <AlertCircle size={18} color={colors.danger} />;
      case 'completed':
        return <CheckCircle2 size={18} color={colors.success} />;
      default:
        return null;
    }
  };

  const getBackgroundColor = (stat: StatItem) => {
    if (stat.valueColor === 'text') {
      return colors.primarySoft;
    }
    if (stat.valueColor === 'danger') {
      return 'rgba(239, 68, 68, 0.15)';
    }
    return 'rgba(34, 197, 94, 0.15)'; 
  };

  return (
    <Box
      flexDirection="row"
      gap={8}
      marginBottom={0}
    >
      {stats.map((stat, index) => (
        <Box
          key={index}
          backgroundColor="card"
          borderColor="border"
          borderWidth={1}
          borderRadius={12}
          paddingHorizontal={12}
          paddingVertical={12}
          flex={1}
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          gap={10}
        >
          <Box 
            style={{ backgroundColor: getBackgroundColor(stat) }}
            borderRadius={8}
            padding={8}
            alignItems="center"
            justifyContent="center"
          >
            {getIcon(stat.label)}
          </Box>
          <Text fontSize={20} fontWeight="700" color={stat.valueColor || 'text'}>
            {stat.value}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default StatsCard;

