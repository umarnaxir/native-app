import React from 'react';
import { Plus } from 'lucide-react-native';
import { Box, Text, Input, Button } from '../../../../elements';

type AddTaskFormProps = {
  title: string;
  setTitle: (text: string) => void;
  isSubmitting: boolean;
  handleSubmit: () => void;
  placeholder: string;
  buttonText: string;
  buttonTextColor: string;
};

const AddTaskForm: React.FC<AddTaskFormProps> = ({
  title,
  setTitle,
  isSubmitting,
  handleSubmit,
  placeholder,
  buttonText,
  buttonTextColor,
}) => {
  return (
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
        placeholder={placeholder}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
        size="medium"
      />
      <Button
        title={buttonText}
        onPress={handleSubmit}
        disabled={!title.trim() || isSubmitting}
        loading={isSubmitting}
        leftIcon={<Plus size={18} color={buttonTextColor} />}
        fullWidth
        size="medium"
      />
    </Box>
  );
};

export default AddTaskForm;

