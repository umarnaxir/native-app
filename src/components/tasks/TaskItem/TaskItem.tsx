import React from 'react';
import { CheckCircle2, Circle, Edit2, Trash2, Check, Clock, AlertCircle, Pin, PinOff } from 'lucide-react-native';
import { Task, TaskPriority } from '../../../types';
import { useTaskItem } from '../../../hooks';
import { Box, Text, Input, IconButton } from '../../../elements';
import { useThemeContext } from '../../../context/ThemeContext';
import { triggerHaptic } from '../../../utils/hapticFeedback';
import { styles } from './TaskItem.styles';

type TaskItemProps = {
  task: Task;
  onToggleCompleted: () => void;
  onUpdate: (id: string, title: string) => void;
  onDelete: () => void;
  onTogglePinned?: () => void;
};

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleCompleted,
  onUpdate,
  onDelete,
  onTogglePinned,
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

  const handleToggleCompleted = () => {
    triggerHaptic(task.completed ? 'light' : 'success');
    onToggleCompleted();
  };

  const handleDelete = () => {
    triggerHaptic('error');
    onDelete();
  };

  const handleStartEditPress = () => {
    triggerHaptic('light');
    handleStartEdit();
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const taskDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    if (taskDate.getTime() === today.getTime()) {
      return `Today, ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
    }
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (taskDate.getTime() === tomorrow.getTime()) {
      return `Tomorrow, ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
    }
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const getBorderColor = () => {
    if (task.status === 'overdue') return 'danger';
    if (task.completed) return 'success';
    if (task.pinned) return 'primary';
    return 'border';
  };

  const getPriorityColor = (priority?: TaskPriority) => {
    switch (priority) {
      case 'high':
        return colors.danger;
      case 'medium':
        return colors.primary;
      case 'low':
        return colors.success;
      default:
        return colors.mutedText;
    }
  };

  const getPriorityLabel = (priority?: TaskPriority) => {
    switch (priority) {
      case 'high':
        return 'High';
      case 'medium':
        return 'Medium';
      case 'low':
        return 'Low';
      default:
        return null;
    }
  };

  return (
    <Box
      backgroundColor="card"
      borderColor={getBorderColor()}
      borderWidth={task.status === 'overdue' || task.pinned ? 2 : 1}
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
            ) : task.status === 'overdue' ? (
              <AlertCircle size={22} color={colors.danger} />
            ) : (
              <Circle size={22} color={colors.primary} />
            )
          }
          variant="ghost"
          size="small"
          onPress={handleToggleCompleted}
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
            <Box flexDirection="row" alignItems="center" gap={6} marginBottom={6}>
              {task.pinned && (
                <Pin size={14} color={colors.primary} fill={colors.primary} />
              )}
              <Text
                fontSize={15}
                fontWeight="600"
                color={task.status === 'overdue' && !task.completed ? 'danger' : 'text'}
                textDecorationLine={task.completed ? 'line-through' : 'none'}
                opacity={task.completed ? 0.6 : 1}
                lineHeight={22}
                flex={1}
              >
                {task.title}
              </Text>
            </Box>
            <Box flexDirection="row" alignItems="center" gap={6} flexWrap="wrap">
              <Text fontSize={12} color="mutedText">
                Created: {new Date(task.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </Text>
              {task.priority && (
                <Box
                  style={{
                    backgroundColor: getPriorityColor(task.priority) + '20',
                    paddingHorizontal: 6,
                    paddingVertical: 2,
                    borderRadius: 4,
                  }}
                >
                  <Text
                    fontSize={11}
                    color={task.priority === 'high' ? 'danger' : task.priority === 'medium' ? 'primary' : 'success'}
                    fontWeight="600"
                  >
                    {getPriorityLabel(task.priority)}
                  </Text>
                </Box>
              )}
              {task.dueDate && (
                <Box flexDirection="row" alignItems="center" gap={4}>
                  <Clock size={12} color={task.status === 'overdue' ? colors.danger : colors.mutedText} />
                  <Text
                    fontSize={12}
                    color={task.status === 'overdue' ? 'danger' : 'mutedText'}
                    fontWeight={task.status === 'overdue' ? '600' : '400'}
                  >
                    Due: {formatDate(task.dueDate)}
                  </Text>
                </Box>
              )}
              {task.completed && task.completedAt && (
                <Text fontSize={12} color="success">
                  Completed: {new Date(task.completedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </Text>
              )}
            </Box>
          </>
        )}
      </Box>

      {!isEditing && (
        <Box flexDirection="row" gap={6} marginLeft={8} paddingTop={2}>
          {onTogglePinned && (
            <IconButton
              icon={task.pinned ? <Pin size={18} color={colors.primary} fill={colors.primary} /> : <PinOff size={18} color={colors.mutedText} />}
              variant="ghost"
              size="small"
              onPress={() => {
                triggerHaptic('light');
                onTogglePinned();
              }}
            />
          )}
          <IconButton
            icon={<Edit2 size={18} color={colors.primary} />}
            variant="ghost"
            size="small"
            onPress={handleStartEditPress}
          />
          <IconButton
            icon={<Trash2 size={18} color={colors.danger} />}
            variant="ghost"
            size="small"
            onPress={handleDelete}
          />
        </Box>
      )}
    </Box>
  );
};

export default TaskItem;

