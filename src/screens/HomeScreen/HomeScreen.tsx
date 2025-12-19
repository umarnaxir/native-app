import React, { useMemo, useRef, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, Animated, StyleSheet } from 'react-native';
import { Plus } from 'lucide-react-native';
import { useThemeContext } from '../../context/ThemeContext';
import { useTasks } from '../../navigation/TabNavigator';
import { useTaskForm } from '../../hooks';
import { Box, Text, Input, Button } from '../../elements';
import TaskList from '../../components/tasks/TaskList';
import StatsCard from '../../components/common/StatsCard';
import { STRINGS } from '../../utils/constants';
import { fonts } from '../../utils/fonts';

const CONTAINER_PADDING = 16; // Consistent padding for all elements

type HomeHeaderProps = {
  title: string;
  setTitle: (text: string) => void;
  isSubmitting: boolean;
  handleSubmit: () => void;
  stats: Array<{ label: string; value: number; valueColor: 'text' | 'danger' | 'success' }>;
  buttonTextColor: string;
};

const HomeHeader: React.FC<HomeHeaderProps> = React.memo(
  ({ title, setTitle, isSubmitting, handleSubmit, stats, buttonTextColor }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(20)).current;

    useEffect(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start();
    }, []);

    return (
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        }}
      >
        <Box paddingTop={50} paddingBottom={20}>
          {/* Header Section */}
          <Box marginBottom={20}>
            {/* <Text fontSize={24} fontWeight="700" fontFamily="meowScript" color="text" marginBottom={6}>
              {STRINGS.homeGreeting}
            </Text> */}

            <Text style={styles.testfont}>Hey! Umar</Text>
            <Text fontSize={14} fontFamily="regular" color="mutedText" lineHeight={20}>
              Stay on top of your day with a focused task list.
            </Text>
          </Box>

          {/* Stats Cards Section */}
          <Box marginBottom={10}>
            <StatsCard stats={stats} />
          </Box>

          {/* Add Task Section */}
          <Box 
            backgroundColor="card"
            borderColor="border"
            borderWidth={1}
            borderRadius={12}
            padding={10}
            marginBottom={10}
          >
            <Text fontSize={14} fontWeight="600" color="text" marginBottom={10}>
              Create New Task
            </Text>
            <Input
              value={title}
              onChangeText={setTitle}
              placeholder={STRINGS.addTaskPlaceholder}
              returnKeyType="done"
              onSubmitEditing={handleSubmit}
              size="medium"
              // style={{ marginBottom: 10}}
            />
            <Button
              title={STRINGS.addTaskButton}
              onPress={handleSubmit}
              disabled={!title.trim() || isSubmitting}
              loading={isSubmitting}
              leftIcon={<Plus size={18} color={buttonTextColor} />}
              fullWidth
              size="medium"
            />
          </Box>

          {/* Tasks Section Header */}
          <Box marginBottom={12}>
            <Text fontSize={16} fontWeight="600"  color="text">
              Your Tasks
            </Text>
            <Text fontSize={12} fontFamily="regular" color="mutedText" marginTop={3}>
              {stats[0].value} {stats[0].value === 1 ? 'task' : 'tasks'} total
            </Text>
          </Box>
        </Box>
      </Animated.View>
    );
  }
);

HomeHeader.displayName = 'HomeHeader';

const HomeScreen: React.FC = () => {
  const { colors } = useThemeContext();
  const { tasks, addTask, updateTask, deleteTask, toggleTaskCompleted, toggleTaskPinned } = useTasks();
  const { title, setTitle, isSubmitting, handleSubmit } = useTaskForm(addTask);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => task.status === 'pending').length;
  const overdueTasks = tasks.filter((task) => task.status === 'overdue').length;

  const stats = useMemo(
    () => [
      { label: 'Total', value: totalTasks, valueColor: 'text' as const },
      { label: 'Pending', value: pendingTasks, valueColor: 'text' as const },
      { label: 'Overdue', value: overdueTasks, valueColor: 'danger' as const },
      { label: 'Completed', value: completedTasks, valueColor: 'success' as const },
    ],
    [totalTasks, pendingTasks, overdueTasks, completedTasks]
  );

  const ListHeaderComponent = useMemo(
    () => (
      <HomeHeader
        title={title}
        setTitle={setTitle}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
        stats={stats}
        buttonTextColor={colors.buttonText}
      />
    ),
    [title, setTitle, isSubmitting, handleSubmit, stats, colors.buttonText]
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.background }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TaskList
        tasks={tasks}
        onToggleCompleted={toggleTaskCompleted}
        onUpdate={updateTask}
        onDelete={deleteTask}
        onTogglePinned={toggleTaskPinned}
        ListHeaderComponent={ListHeaderComponent}
        containerPadding={CONTAINER_PADDING}
        onRefresh={async () => {
          // Refresh logic - tasks are already reactive
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;



const styles  = StyleSheet.create({
  testfont:{
    fontFamily:fonts.meowScript,
    fontSize:24,
    fontWeight:"700",
    color:"text",
    marginBottom:6,
  }
})