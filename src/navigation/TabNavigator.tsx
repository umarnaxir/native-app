import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, List, Clock, Settings as SettingsIcon } from 'lucide-react-native';
import { RootTabParamList, Task } from '../types';
import HomeScreen from '../screens/HomeScreen';
import AllTasksScreen from '../screens/AllTasksScreen';
import PendingTasksScreen from '../screens/PendingTasksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { useThemeContext } from '../context/ThemeContext';
import { getStorageItem, setStorageItem } from '../storage/asyncStorage';
import { STORAGE_KEYS } from '../utils/constants';

type TasksContextValue = {
  tasks: Task[];
  addTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  deleteTask: (id: string) => void;
  toggleTaskCompleted: (id: string) => void;
};

const TasksContext = createContext<TasksContextValue | undefined>(undefined);

export const useTasks = (): TasksContextValue => {
  const ctx = useContext(TasksContext);
  if (!ctx) {
    throw new Error('useTasks must be used within a TasksContext provider');
  }
  return ctx;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

type TasksProviderProps = {
  children: ReactNode;
};

const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await getStorageItem<Task[]>(STORAGE_KEYS.TASKS);
      if (storedTasks) {
        setTasks(storedTasks);
      }
      setIsHydrated(true);
    };
    loadTasks();
  }, []);

  useEffect(() => {
    if (isHydrated) {
      void setStorageItem(STORAGE_KEYS.TASKS, tasks);
    }
  }, [tasks, isHydrated]);

  const addTask = (title: string) => {
    const trimmed = title.trim();
    if (!trimmed) {
      return;
    }
    const newTask: Task = {
      id: Date.now().toString(),
      title: trimmed,
      completed: false,
      createdAt: Date.now(),
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const updateTask = (id: string, title: string) => {
    const trimmed = title.trim();
    if (!trimmed) {
      return;
    }
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? {
              ...task,
              title: trimmed,
            }
          : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTaskCompleted = (id: string) => {
    setTasks(prev => prev.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const value = useMemo(
    () => ({
      tasks,
      addTask,
      updateTask,
      deleteTask,
      toggleTaskCompleted,
    }),
    [tasks],
  );

  if (!isHydrated) {
    return null;
  }

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
};

const TabNavigator: React.FC = () => {
  const { colors } = useThemeContext();

  return (
    <TasksProvider>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.tabBarActive,
          tabBarInactiveTintColor: colors.tabBarInactive,
          tabBarStyle: {
            backgroundColor: colors.tabBarBackground,
            borderTopColor: colors.border,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="AllTasks"
          component={AllTasksScreen}
          options={{
            title: 'All Tasks',
            tabBarIcon: ({ color, size }) => <List color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="PendingTasks"
          component={PendingTasksScreen}
          options={{
            title: 'Pending',
            tabBarIcon: ({ color, size }) => <Clock color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => <SettingsIcon color={color} size={size} />,
          }}
        />
      </Tab.Navigator>
    </TasksProvider>
  );
};

export default TabNavigator;


