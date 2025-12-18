import { useState, useCallback } from 'react';

export const useTaskForm = (onSubmit: (title: string) => void) => {
  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(() => {
    const trimmed = title.trim();
    if (!trimmed || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    try {
      onSubmit(trimmed);
      setTitle('');
    } finally {
      setIsSubmitting(false);
    }
  }, [title, isSubmitting, onSubmit]);

  const reset = useCallback(() => {
    setTitle('');
    setIsSubmitting(false);
  }, []);

  return {
    title,
    setTitle,
    isSubmitting,
    handleSubmit,
    reset,
  };
};

