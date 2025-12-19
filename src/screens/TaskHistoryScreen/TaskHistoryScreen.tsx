import React, { useState, useMemo } from 'react';
import { ScrollView, Platform, Pressable } from 'react-native';
import { Calendar, TrendingUp, BarChart3 } from 'lucide-react-native';
import { useThemeContext } from '../../context/ThemeContext';
import { useHistory } from '../../context/HistoryContext';
import { Box, Text } from '../../elements';
import ScreenHeader from '../../components/common/ScreenHeader';
import { HistoryPeriod } from '../../utils/taskHistory';

type TabButtonProps = {
  label: string;
  isActive: boolean;
  onPress: () => void;
  icon: React.ReactNode;
};

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onPress, icon }) => {
  const { colors } = useThemeContext();
  return (
    <Pressable onPress={onPress} style={{ flex: 1 }}>
      <Box
        flex={1}
        backgroundColor={isActive ? 'primary' : 'card'}
        borderColor={isActive ? 'primary' : 'border'}
        borderWidth={1}
        borderRadius={12}
        paddingVertical={12}
        paddingHorizontal={16}
        alignItems="center"
        justifyContent="center"
        style={{
          opacity: isActive ? 1 : 0.7,
        }}
      >
        <Box marginBottom={6}>{icon}</Box>
        <Text
          fontSize={13}
          fontWeight={isActive ? '600' : '500'}
          color={isActive ? 'buttonText' : 'text'}
        >
          {label}
        </Text>
      </Box>
    </Pressable>
  );
};

type StatCardProps = {
  label: string;
  value: string | number;
  color?: 'text' | 'success' | 'danger' | 'warning';
  icon?: React.ReactNode;
};

const StatCard: React.FC<StatCardProps> = ({ label, value, color = 'text', icon }) => {
  const { colors } = useThemeContext();
  const colorMap = {
    text: colors.text,
    success: colors.success,
    danger: colors.danger,
    warning: colors.warning || colors.danger,
  };

  return (
    <Box
      backgroundColor="card"
      borderColor="border"
      borderWidth={1}
      borderRadius={12}
      padding={16}
      flex={1}
      minWidth="45%"
      marginBottom={0}
    >
      {icon && (
        <Box marginBottom={8} alignItems="flex-start">
          {icon}
        </Box>
      )}
      <Text fontSize={24} fontWeight="700" color={color} marginBottom={4}>
        {value}
      </Text>
      <Text fontSize={12} color="mutedText">
        {label}
      </Text>
    </Box>
  );
};

const EmptyState: React.FC<{ period: HistoryPeriod }> = ({ period }) => {
  const periodLabels = {
    daily: 'today',
    weekly: 'this week',
    monthly: 'this month',
  };

  return (
    <Box paddingVertical={40} alignItems="center" justifyContent="center">
      <Text fontSize={16} color="mutedText" marginBottom={8}>
        No activity {periodLabels[period]} yet
      </Text>
      <Text fontSize={14} color="mutedText" textAlign="center">
        Start creating tasks to see your history
      </Text>
    </Box>
  );
};

const TaskHistoryScreen: React.FC = () => {
  const { colors } = useThemeContext();
  const {
    dailyHistory,
    weeklyHistory,
    monthlyHistory,
    getHistoryByPeriod,
  } = useHistory();
  const [activeTab, setActiveTab] = useState<HistoryPeriod>('daily');

  const currentHistory = useMemo(() => {
    return getHistoryByPeriod(activeTab);
  }, [activeTab, getHistoryByPeriod]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined,
    });
  };

  const formatWeekRange = (start: string, end: string) => {
    return `${formatDate(start)} - ${formatDate(end)}`;
  };

  const formatMonth = (monthStr: string) => {
    const [year, month] = monthStr.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const renderDailyContent = () => {
    const history = dailyHistory;
    if (history.stats.total === 0 && history.tasksCreated === 0) {
      return <EmptyState period="daily" />;
    }

    return (
      <Box>
        <Box marginBottom={16}>
          <Text fontSize={14} color="mutedText" marginBottom={12}>
            {formatDate(history.date)}
          </Text>
          <Box flexDirection="row" flexWrap="wrap" justifyContent="space-between" gap={12}>
            <StatCard
              label="Tasks Created"
              value={history.tasksCreated}
              color="text"
              icon={<Calendar size={18} color={colors.primary} />}
            />
            <StatCard
              label="Tasks Completed"
              value={history.tasksCompleted}
              color="success"
              icon={<TrendingUp size={18} color={colors.success} />}
            />
          </Box>
        </Box>

        <Box
          backgroundColor="card"
          borderColor="border"
          borderWidth={1}
          borderRadius={12}
          padding={16}
        >
          <Text fontSize={16} fontWeight="600" color="text" marginBottom={16}>
            Overall Statistics
          </Text>
          <Box flexDirection="row" flexWrap="wrap" justifyContent="space-between" gap={12}>
            <StatCard label="Total Tasks" value={history.stats.total} />
            <StatCard label="Completed" value={history.stats.completed} color="success" />
            <StatCard label="Pending" value={history.stats.pending} color="text" />
            <StatCard label="Overdue" value={history.stats.overdue} color="danger" />
          </Box>
          <Box marginTop={16} paddingTop={16} borderTopWidth={1} borderTopColor={colors.border}>
            <Text fontSize={14} color="mutedText" marginBottom={4}>
              Completion Rate
            </Text>
            <Text fontSize={32} fontWeight="700" color="success">
              {history.stats.completionPercentage}%
            </Text>
          </Box>
        </Box>
      </Box>
    );
  };

  const renderWeeklyContent = () => {
    const history = weeklyHistory;
    if (history.stats.total === 0) {
      return <EmptyState period="weekly" />;
    }

    return (
      <Box>
        <Box marginBottom={16}>
          <Text fontSize={14} color="mutedText" marginBottom={12}>
            {formatWeekRange(history.weekStart, history.weekEnd)}
          </Text>
        </Box>

        <Box
          backgroundColor="card"
          borderColor="border"
          borderWidth={1}
          borderRadius={12}
          padding={16}
        >
          <Text fontSize={16} fontWeight="600" color="text" marginBottom={16}>
            Week Summary
          </Text>
          <Box flexDirection="row" flexWrap="wrap" justifyContent="space-between" gap={12}>
            <StatCard label="Total Tasks" value={history.stats.total} />
            <StatCard label="Completed" value={history.stats.completed} color="success" />
            <StatCard label="Pending" value={history.stats.pending} color="text" />
            <StatCard label="Overdue" value={history.stats.overdue} color="danger" />
          </Box>
          <Box marginTop={16} paddingTop={16} borderTopWidth={1} borderTopColor={colors.border}>
            <Text fontSize={14} color="mutedText" marginBottom={4}>
              Completion Rate
            </Text>
            <Text fontSize={32} fontWeight="700" color="success">
              {history.stats.completionPercentage}%
            </Text>
          </Box>
        </Box>
      </Box>
    );
  };

  const renderMonthlyContent = () => {
    const history = monthlyHistory;
    if (history.stats.total === 0) {
      return <EmptyState period="monthly" />;
    }

    return (
      <Box>
        <Box marginBottom={16}>
          <Text fontSize={14} color="mutedText" marginBottom={12}>
            {formatMonth(history.month)}
          </Text>
        </Box>

        <Box
          backgroundColor="card"
          borderColor="border"
          borderWidth={1}
          borderRadius={12}
          padding={16}
        >
          <Text fontSize={16} fontWeight="600" color="text" marginBottom={16}>
            Month Summary
          </Text>
          <Box flexDirection="row" flexWrap="wrap" justifyContent="space-between" gap={12}>
            <StatCard label="Total Tasks" value={history.stats.total} />
            <StatCard label="Completed" value={history.stats.completed} color="success" />
            <StatCard label="Pending" value={history.stats.pending} color="text" />
            <StatCard label="Overdue" value={history.stats.overdue} color="danger" />
          </Box>
          <Box marginTop={16} paddingTop={16} borderTopWidth={1} borderTopColor={colors.border}>
            <Text fontSize={14} color="mutedText" marginBottom={4}>
              Completion Rate
            </Text>
            <Text fontSize={32} fontWeight="700" color="success">
              {history.stats.completionPercentage}%
            </Text>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box flex={1} backgroundColor="background">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >

        <Box marginHorizontal={20} marginTop={16}>
          <Box marginBottom={16}>
            <Text fontSize={14} color="mutedText" lineHeight={20}>
              Track your productivity and task completion over time
            </Text>
          </Box>

          {/* Tab Selector */}
          <Box
            flexDirection="row"
            gap={12}
            marginBottom={20}
            backgroundColor="background"
          >
            <TabButton
              label="Daily"
              isActive={activeTab === 'daily'}
              onPress={() => setActiveTab('daily')}
              icon={<Calendar size={18} color={activeTab === 'daily' ? colors.buttonText : colors.primary} />}
            />
            <TabButton
              label="Weekly"
              isActive={activeTab === 'weekly'}
              onPress={() => setActiveTab('weekly')}
              icon={<TrendingUp size={18} color={activeTab === 'weekly' ? colors.buttonText : colors.primary} />}
            />
            <TabButton
              label="Monthly"
              isActive={activeTab === 'monthly'}
              onPress={() => setActiveTab('monthly')}
              icon={<BarChart3 size={18} color={activeTab === 'monthly' ? colors.buttonText : colors.primary} />}
            />
          </Box>

          {/* Content */}
          {activeTab === 'daily' && renderDailyContent()}
          {activeTab === 'weekly' && renderWeeklyContent()}
          {activeTab === 'monthly' && renderMonthlyContent()}
        </Box>
      </ScrollView>
    </Box>
  );
};

export default TaskHistoryScreen;

