import React from 'react';
import { CheckCircle2, Circle, Edit2, Trash2, Check } from 'lucide-react-native';
import { Task } from '../../../types';
import { useTaskItem } from '../../../hooks';
import { Box, Text, Input, IconButton } from '../../../elements';
import { useThemeContext } from '../../../context/ThemeContext';
import { styles } from './TaskItem.styles';

type TaskItemProps = {
  task: Task;
  onToggleCompleted: () => void;
  onUpdate: (id: string, title: string) => void;
  onDelete: () => void;
};

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleCompleted,
  onUpdate,
  onDelete,
}) => {
  const { colors } = useThemeContext();
  const {
    isEditing,
    editTitle,
    setEditTitle,
    handleStartEdit,
    handleSave,
    handleCancel,
  } = useTaskItem(task, onUpdate);

  return (
    <Box
      backgroundColor="card"
      borderColor="border"
      borderWidth={1}
      borderRadius={12}
      paddingHorizontal={14}
      paddingTop={14}
      paddingBottom={12}
      marginBottom={10}
      flexDirection="row"
      alignItems="flex-start"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
      }}
    >
      <Box marginRight={12} paddingTop={2}>
        <IconButton
          icon={
            task.completed ? (
              <CheckCircle2 size={22} color={colors.success} />
            ) : (
              <Circle size={22} color={colors.primary} />
            )
          }
          variant="ghost"
          size="small"
          onPress={onToggleCompleted}
        />
      </Box>

      <Box flex={1}>
        {isEditing ? (
          <Box flexDirection="row" alignItems="center" gap={8}>
            <Box flex={1}>
              <Input
                value={editTitle}
                onChangeText={setEditTitle}
                autoFocus
                style={styles.editInput}
                returnKeyType="done"
                onSubmitEditing={handleSave}
                size="medium"
              />
            </Box>
            <IconButton
              icon={<Check size={20} color={colors.success} />}
              variant="secondary"
              size="small"
              onPress={handleSave}
            />
            <IconButton
              icon={<Trash2 size={18} color={colors.mutedText} />}
              variant="ghost"
              size="small"
              onPress={handleCancel}
            />
          </Box>
        ) : (
          <>
            <Text
              fontSize={15}
              fontWeight="600"
              color="text"
              marginBottom={6}
              textDecorationLine={task.completed ? 'line-through' : 'none'}
              opacity={task.completed ? 0.6 : 1}
              lineHeight={22}
            >
              {task.title}
            </Text>
            <Box flexDirection="row" alignItems="center" gap={6}>
              <Text fontSize={12} color="mutedText">
                {new Date(task.createdAt).toLocaleString()}
              </Text>
            </Box>
          </>
        )}
      </Box>

      {!isEditing && (
        <Box flexDirection="row" gap={6} marginLeft={8} paddingTop={2}>
          <IconButton
            icon={<Edit2 size={18} color={colors.primary} />}
            variant="ghost"
            size="small"
            onPress={handleStartEdit}
          />
          <IconButton
            icon={<Trash2 size={18} color={colors.danger} />}
            variant="ghost"
            size="small"
            onPress={onDelete}
          />
        </Box>
      )}
    </Box>
  );
};

export default TaskItem;

