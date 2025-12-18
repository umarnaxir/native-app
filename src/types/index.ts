export type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
};

export type RootTabParamList = {
  Home: undefined;
  AllTasks: undefined;
  PendingTasks: undefined;
  Settings: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
};

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};


