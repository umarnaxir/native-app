import { useState, useEffect } from 'react';
import { Task } from '../types';

export const useTaskItem = (task: Task, onUpdate: (id: string, title: string) => void) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  useEffect(() => {
    if (!isEditing) {
      setEditTitle(task.title);
    }
  }, [task.title, isEditing]);

  const handleStartEdit = () => {
    setEditTitle(task.title);
    setIsEditing(true);
  };

  const handleSave = () => {
    const trimmed = editTitle.trim();
    if (trimmed && trimmed.length > 0) {
      onUpdate(task.id, trimmed);
      setIsEditing(false);
    } else {
      setEditTitle(task.title);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(task.title);
    setIsEditing(false);
  };

  return {
    isEditing,
    editTitle,
    setEditTitle,
    handleStartEdit,
    handleSave,
    handleCancel,
  };
};

