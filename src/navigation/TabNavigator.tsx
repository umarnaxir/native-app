import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import { IconButton } from '../elements';
import {
  Home,
  List,
  Clock,
  Settings as SettingsIcon,
  School,
} from 'lucide-react-native';
import {
  RootTabParamList,
  SettingsStackParamList,
  Task,
  TaskPriority,
} from '../types';
import HomeScreen from '../screens/HomeScreen';
import AllTasksScreen from '../screens/AllTasksScreen';
import PendingTasksScreen from '../screens/PendingTasksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TaskHistoryScreen from '../screens/TaskHistoryScreen';
import RumieScreen from '../screens/RumieScreen';
import { useThemeContext } from '../context/ThemeContext';
import { HistoryProvider } from '../context/HistoryContext';
import { getStorageItem, setStorageItem } from '../storage/asyncStorage';
import { STORAGE_KEYS } from '../utils/constants';
import { calculateTaskStatus } from '../utils/taskHistory';

type TasksContextValue = {
  tasks: Task[];
  addTask: (
    title: string,
    dueDate?: number,
    priority?: TaskPriority,
    pinned?: boolean,
  ) => void;
  updateTask: (
    id: string,
    title: string,
    dueDate?: number,
    priority?: TaskPriority,
  ) => void;
  deleteTask: (id: string) => void;
  toggleTaskCompleted: (id: string) => void;
  toggleTaskPinned: (id: string) => void;
  updateTaskPriority: (id: string, priority: TaskPriority) => void;
  showTemporaryTasks: (durationMs?: number) => Promise<void>;
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
const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsNavigator: React.FC = () => {
  const { colors } = useThemeContext();
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}
    >
      <SettingsStack.Screen
        name="SettingsMain"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen
        name="TaskHistory"
        component={TaskHistoryScreen}
        options={{
          title: 'Task History',
          headerBackTitle: 'Settings',
        }}
      />
    </SettingsStack.Navigator>
  );
};

type TasksProviderProps = {
  children: ReactNode;
};

// Migrate old tasks to new format
const migrateTask = (task: any): Task => {
  const status = calculateTaskStatus({
    ...task,
    status:
      task.status ||
      (task.completed
        ? 'completed'
        : task.dueDate && task.dueDate < Date.now()
        ? 'overdue'
        : 'pending'),
  });
  return {
    id: task.id,
    title: task.title,
    completed: task.completed || false,
    createdAt: task.createdAt || Date.now(),
    completedAt: task.completedAt,
    dueDate: task.dueDate,
    status,
    priority: task.priority || undefined,
    pinned: task.pinned || false,
  };
};

const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await getStorageItem<any[]>(STORAGE_KEYS.TASKS);
      if (storedTasks) {
        // Migrate old tasks to new format
        const migratedTasks = storedTasks.map(migrateTask);
        setTasks(migratedTasks);
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

  // Auto-update overdue tasks every minute
  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setTasks(prev =>
        prev.map(task => {
          const newStatus = calculateTaskStatus(task);
          if (task.status !== newStatus) {
            return { ...task, status: newStatus };
          }
          return task;
        }),
      );
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [isHydrated]);

  const addTask = (
    title: string,
    dueDate?: number,
    priority?: TaskPriority,
    pinned?: boolean,
  ) => {
    const trimmed = title.trim();
    if (!trimmed) {
      return;
    }
    const newTask: Task = {
      id: Date.now().toString(),
      title: trimmed,
      completed: false,
      createdAt: Date.now(),
      dueDate,
      status: dueDate && dueDate < Date.now() ? 'overdue' : 'pending',
      priority: priority || undefined,
      pinned: pinned || false,
    };
    setTasks(prev => {
      const newTasks = [newTask, ...prev];
      // Sort: pinned first, then by creation date (newest first)
      return newTasks.sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return b.createdAt - a.createdAt;
      });
    });
  };

  const updateTask = (
    id: string,
    title: string,
    dueDate?: number,
    priority?: TaskPriority,
  ) => {
    const trimmed = title.trim();
    if (!trimmed) {
      return;
    }
    setTasks(prev =>
      prev.map(task => {
        if (task.id === id) {
          const updatedTask = {
            ...task,
            title: trimmed,
            dueDate: dueDate !== undefined ? dueDate : task.dueDate,
            priority: priority !== undefined ? priority : task.priority,
          };
          return {
            ...updatedTask,
            status: calculateTaskStatus(updatedTask),
          };
        }
        return task;
      }),
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTaskCompleted = (id: string) => {
    setTasks(prev =>
      prev.map(task => {
        if (task.id === id) {
          const newCompleted = !task.completed;
          const updatedTask: Task = {
            ...task,
            completed: newCompleted,
            completedAt: newCompleted ? Date.now() : undefined,
            status: newCompleted
              ? 'completed'
              : calculateTaskStatus({ ...task, completed: false }),
          };
          return updatedTask;
        }
        return task;
      }),
    );
  };

  const toggleTaskPinned = (id: string) => {
    setTasks(prev => {
      const updated = prev.map(task =>
        task.id === id ? { ...task, pinned: !task.pinned } : task,
      );
      // Sort: pinned first, then by creation date (newest first)
      return updated.sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return b.createdAt - a.createdAt;
      });
    });
  };

  const updateTaskPriority = (id: string, priority: TaskPriority) => {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, priority } : task)),
    );
  };

  // Sort tasks: pinned first, then by creation date (newest first)
  const sortedTasks = useMemo(() => {
    return [...tasks].sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return b.createdAt - a.createdAt;
    });
  }, [tasks]);

  const tempTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showTemporaryTasks = async (durationMs = 5000) => {
    try {
      // If temp tasks are already present, just reset the timer and don't re-add them
      const hasTemp = tasks.some(t => t.id.startsWith('temp-'));

      if (tempTimerRef.current) {
        clearTimeout(tempTimerRef.current);
        tempTimerRef.current = null;
      }

      if (!hasTemp) {
        const now = Date.now();
        const temp1: Task = {
          id: `temp-${now}-1`,
          title: 'Task 5',
          completed: false,
          createdAt: now,
          status: 'pending',
          priority: undefined,
          pinned: false,
        };
        const temp2: Task = {
          id: `temp-${now}-2`,
          title: 'Task 6',
          completed: false,
          createdAt: now + 1,
          status: 'pending',
          priority: undefined,
          pinned: false,
        };

        setTasks(prev => [temp2, temp1, ...prev.filter(t => !t.id.startsWith('temp-'))]);
      }

      // Schedule removal after durationMs
      tempTimerRef.current = setTimeout(() => {
        setTasks(prev => prev.filter(t => !t.id.startsWith('temp-')));
        tempTimerRef.current = null;
      }, durationMs);
    } catch (e) {
      console.warn('showTemporaryTasks failed', e);
    }
  };

  const value = useMemo(
    () => ({
      tasks: sortedTasks,
      addTask,
      updateTask,
      deleteTask,
      toggleTaskCompleted,
      toggleTaskPinned,
      updateTaskPriority,
      showTemporaryTasks,
    }),
    [
      sortedTasks,
      addTask,
      updateTask,
      deleteTask,
      toggleTaskCompleted,
      toggleTaskPinned,
      updateTaskPriority,
      showTemporaryTasks,
    ],
  );

  if (!isHydrated) {
    return null;
  }

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

const TabNavigator: React.FC = () => {
  const { colors } = useThemeContext();
  const navigation = useNavigation();

  return (
    <TasksProvider>
      <HistoryProvider>
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
              headerShown: true,
              headerStyle: {
                backgroundColor: colors.background,
              },
              headerTintColor: colors.text,
              headerTitle: '',
              headerLeft: () => (
                <IconButton
                  icon="menu"
                  variant="ghost"
                  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                  color={colors.text}
                  size={24}
                  style={{ width: 24, height: 24, padding: 0, marginLeft: 15 }}
                />
              ),
              tabBarIcon: ({ color, size }) => (
                <Home color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="AllTasks"
            component={AllTasksScreen}
            options={{
              title: 'All Tasks',
              tabBarIcon: ({ color, size }) => (
                <List color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="PendingTasks"
            component={PendingTasksScreen}
            options={{
              title: 'Pending',
              tabBarIcon: ({ color, size }) => (
                <Clock color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Rumie"
            component={RumieScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <School color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsNavigator}
            options={{
              tabBarIcon: ({ color, size }) => (
                <SettingsIcon color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </HistoryProvider>
    </TasksProvider>
  );
};

export default TabNavigator;
