export type TaskStatus = 'pending' | 'completed' | 'overdue';

export type TaskPriority = 'low' | 'medium' | 'high';

export type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
  completedAt?: number;
  dueDate?: number;
  status: TaskStatus;
  priority?: TaskPriority;
  pinned?: boolean;
};

export type RootTabParamList = {
  Home: undefined;
  AllTasks: undefined;
  PendingTasks: undefined;
  Settings: undefined;
};

export type SettingsStackParamList = {
  SettingsMain: undefined;
  TaskHistory: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
};

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};


