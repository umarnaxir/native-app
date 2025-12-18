import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Task } from '../../../types';
import TaskItem from '../TaskItem';
import { Box, Text } from '../../../elements';
import { STRINGS } from '../../../utils/constants';

type TaskListProps = {
  tasks: Task[];
  onToggleCompleted: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
  onDelete: (id: string) => void;
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null;
  containerPadding?: number;
};

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleCompleted,
  onUpdate,
  onDelete,
  ListHeaderComponent,
  containerPadding = 24,
}) => {
  const renderItem: ListRenderItem<Task> = ({ item }) => {
    return (
      <TaskItem
        task={item}
        onToggleCompleted={() => onToggleCompleted(item.id)}
        onUpdate={onUpdate}
        onDelete={() => onDelete(item.id)}
      />
    );
  };

  if (tasks.length === 0) {
    return (
      <Box flex={1}>
        {ListHeaderComponent && <ListHeaderComponent />}
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
    />
  );
};

export default TaskList;

