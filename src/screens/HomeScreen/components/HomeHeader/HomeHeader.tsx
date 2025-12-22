import React, { useRef, useEffect, useMemo } from 'react';
import { Animated, AnimatedProps } from 'react-native';
import { Box } from '../../../../elements';
import Header from '../Header';
import TaskSummary from '../TaskSummary';
import AddTaskForm from '../AddTaskForm';
import TasksSectionHeader from '../TasksSectionHeader';

type StatItem = {
  label: string;
  value: number;
  valueColor: 'text' | 'danger' | 'success';
};

type HomeHeaderProps = {
  title: string;
  setTitle: (text: string) => void;
  isSubmitting: boolean;
  handleSubmit: () => void;
  stats: StatItem[];
  buttonTextColor: string;
  greetingText: string;
  subtitleText: string;
  placeholder: string;
  buttonText: string;
  greetingFontFamily?: string;
};

const HomeHeader: React.FC<HomeHeaderProps> = ({
  title,
  setTitle,
  isSubmitting,
  handleSubmit,
  stats,
  buttonTextColor,
  greetingText,
  subtitleText,
  placeholder,
  buttonText,
  greetingFontFamily,
}) => {
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

  const animatedStyle = useMemo<AnimatedProps<any>['style']>(
    () => ({
      opacity: fadeAnim,
      transform: [{ translateY: slideAnim }],
    }),
    [fadeAnim, slideAnim]
  );

  return (
    <Animated.View style={animatedStyle}>
      <Box paddingTop={50} paddingBottom={20}>
        <Header
          greetingText={greetingText}
          subtitleText={subtitleText}
          greetingFontFamily={greetingFontFamily}
        />
        <TaskSummary stats={stats} />
        <AddTaskForm
          title={title}
          setTitle={setTitle}
          isSubmitting={isSubmitting}
          handleSubmit={handleSubmit}
          placeholder={placeholder}
          buttonText={buttonText}
          buttonTextColor={buttonTextColor}
        />
        <TasksSectionHeader totalTasks={stats[0]?.value || 0} />
      </Box>
    </Animated.View>
  );
};

export default HomeHeader;

