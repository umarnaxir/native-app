import React, { useState } from 'react';
import { FlatList, ListRenderItem, RefreshControl } from 'react-native';
import { Task } from '../../../types';
import TaskItem from '../TaskItem';
import { Box, Text } from '../../../elements';
import { STRINGS } from '../../../utils/constants';
import { useThemeContext } from '../../../context/ThemeContext';

type TaskListProps = {
  tasks: Task[];
  onToggleCompleted: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
  onDelete: (id: string) => void;
  onTogglePinned?: (id: string) => void;
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null;
  containerPadding?: number;
  onRefresh?: () => void | Promise<void>;
};

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleCompleted,
  onUpdate,
  onDelete,
  onTogglePinned,
  ListHeaderComponent,
  containerPadding = 24,
  onRefresh,
}) => {
  const { colors } = useThemeContext();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    if (onRefresh) {
      setRefreshing(true);
      try {
        await onRefresh();
      } finally {
        setRefreshing(false);
      }
    }
  };

  const renderItem: ListRenderItem<Task> = ({ item }) => {
    return (
      <TaskItem
        task={item}
        onToggleCompleted={() => onToggleCompleted(item.id)}
        onUpdate={onUpdate}
        onDelete={() => onDelete(item.id)}
        onTogglePinned={onTogglePinned ? () => onTogglePinned(item.id) : undefined}
      />
    );
  };

  if (tasks.length === 0) {
    return (
      <Box flex={1}>
        {ListHeaderComponent &&
          (typeof ListHeaderComponent === 'function' ? (
            <ListHeaderComponent />
          ) : (
            ListHeaderComponent
          ))}
        <Box paddingHorizontal={containerPadding} paddingVertical={24} alignItems="center" justifyContent="center">
          <Text fontSize={14} color="mutedText">
            {STRINGS.noTasks}
          </Text>
        </Box>
      </Box>
    );
  }

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListHeaderComponent={ListHeaderComponent}
      contentContainerStyle={{ 
        paddingHorizontal: containerPadding, 
        paddingVertical: 0, 
        paddingBottom: 32 
      }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      refreshControl={
        onRefresh ? (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor={colors.primary}
            colors={[colors.primary]}
          />
        ) : undefined
      }
    />
  );
};

export default TaskList;

