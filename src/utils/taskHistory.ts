import { Task } from '../types';

export type HistoryPeriod = 'daily' | 'weekly' | 'monthly';

export type HistoryStats = {
  total: number;
  completed: number;
  pending: number;
  overdue: number;
  completionPercentage: number;
};

export type DailyHistory = {
  date: string; // YYYY-MM-DD
  stats: HistoryStats;
  tasksCreated: number;
  tasksCompleted: number;
  tasksMissed: number;
};

export type WeeklyHistory = {
  weekStart: string; // YYYY-MM-DD
  weekEnd: string; // YYYY-MM-DD
  stats: HistoryStats;
};

export type MonthlyHistory = {
  month: string; // YYYY-MM
  stats: HistoryStats;
};

/**
 * Calculate task status based on completion and due date
 */
export const calculateTaskStatus = (task: Task): Task['status'] => {
  if (task.completed) {
    return 'completed';
  }
  if (task.dueDate && task.dueDate < Date.now()) {
    return 'overdue';
  }
  return 'pending';
};

/**
 * Check if a date is today
 */
const isToday = (timestamp: number): boolean => {
  const today = new Date();
  const date = new Date(timestamp);
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

/**
 * Check if a date is in the current week
 */
const isInCurrentWeek = (timestamp: number): boolean => {
  const date = new Date(timestamp);
  const today = new Date();
  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - today.getDay());
  weekStart.setHours(0, 0, 0, 0);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  weekEnd.setHours(23, 59, 59, 999);
  return date >= weekStart && date <= weekEnd;
};

/**
 * Check if a date is in the current month
 */
const isInCurrentMonth = (timestamp: number): boolean => {
  const date = new Date(timestamp);
  const today = new Date();
  return (
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

/**
 * Get start and end of a week for a given date
 */
const getWeekRange = (date: Date): { start: Date; end: Date } => {
  const start = new Date(date);
  start.setDate(date.getDate() - date.getDay());
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  end.setHours(23, 59, 59, 999);
  return { start, end };
};

/**
 * Format date to YYYY-MM-DD
 */
const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Format date to YYYY-MM
 */
const formatMonth = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
};

/**
 * Calculate statistics from tasks
 */
const calculateStats = (tasks: Task[]): HistoryStats => {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === 'completed').length;
  const pending = tasks.filter((t) => t.status === 'pending').length;
  const overdue = tasks.filter((t) => t.status === 'overdue').length;
  const completionPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return {
    total,
    completed,
    pending,
    overdue,
    completionPercentage,
  };
};

/**
 * Get daily history for today
 */
export const getDailyHistory = (tasks: Task[]): DailyHistory => {
  const today = new Date();
  const todayStr = formatDate(today);

  // Tasks created today
  const tasksCreated = tasks.filter((task) => isToday(task.createdAt)).length;

  // Tasks completed today
  const tasksCompletedToday = tasks.filter(
    (task) => task.completed && task.completedAt && isToday(task.completedAt)
  ).length;

  // Tasks that were due today but not completed
  const tasksMissed = tasks.filter(
    (task) =>
      !task.completed &&
      task.dueDate &&
      isToday(task.dueDate) &&
      task.status === 'overdue'
  ).length;

  // All tasks (for overall stats)
  const stats = calculateStats(tasks);

  return {
    date: todayStr,
    stats,
    tasksCreated,
    tasksCompleted: tasksCompletedToday,
    tasksMissed,
  };
};

/**
 * Get weekly history for current week
 */
export const getWeeklyHistory = (tasks: Task[]): WeeklyHistory => {
  const today = new Date();
  const { start, end } = getWeekRange(today);

  // Tasks created or completed in this week
  const weekTasks = tasks.filter(
    (task) =>
      isInCurrentWeek(task.createdAt) ||
      (task.completedAt && isInCurrentWeek(task.completedAt))
  );

  const stats = calculateStats(weekTasks);

  return {
    weekStart: formatDate(start),
    weekEnd: formatDate(end),
    stats,
  };
};

/**
 * Get monthly history for current month
 */
export const getMonthlyHistory = (tasks: Task[]): MonthlyHistory => {
  const today = new Date();
  const month = formatMonth(today);

  // Tasks created or completed in this month
  const monthTasks = tasks.filter(
    (task) =>
      isInCurrentMonth(task.createdAt) ||
      (task.completedAt && isInCurrentMonth(task.completedAt))
  );

  const stats = calculateStats(monthTasks);

  return {
    month,
    stats,
  };
};

/**
 * Get all daily history entries (for past days)
 */
export const getAllDailyHistory = (tasks: Task[]): DailyHistory[] => {
  const historyMap = new Map<string, DailyHistory>();

  tasks.forEach((task) => {
    const createdDate = formatDate(new Date(task.createdAt));
    if (!historyMap.has(createdDate)) {
      historyMap.set(createdDate, {
        date: createdDate,
        stats: { total: 0, completed: 0, pending: 0, overdue: 0, completionPercentage: 0 },
        tasksCreated: 0,
        tasksCompleted: 0,
        tasksMissed: 0,
      });
    }
    const entry = historyMap.get(createdDate)!;
    entry.tasksCreated += 1;
    entry.stats.total += 1;

    if (task.completedAt) {
      const completedDate = formatDate(new Date(task.completedAt));
      if (!historyMap.has(completedDate)) {
        historyMap.set(completedDate, {
          date: completedDate,
          stats: { total: 0, completed: 0, pending: 0, overdue: 0, completionPercentage: 0 },
          tasksCreated: 0,
          tasksCompleted: 0,
          tasksMissed: 0,
        });
      }
      const completedEntry = historyMap.get(completedDate)!;
      completedEntry.tasksCompleted += 1;
    }
  });

  // Calculate stats for each day
  historyMap.forEach((entry) => {
    const dayTasks = tasks.filter((task) => {
      const createdDate = formatDate(new Date(task.createdAt));
      return createdDate === entry.date;
    });
    entry.stats = calculateStats(dayTasks);
  });

  return Array.from(historyMap.values()).sort((a, b) => b.date.localeCompare(a.date));
};

/**
 * Get all weekly history entries
 */
export const getAllWeeklyHistory = (tasks: Task[]): WeeklyHistory[] => {
  const weekMap = new Map<string, WeeklyHistory>();

  tasks.forEach((task) => {
    const createdDate = new Date(task.createdAt);
    const { start, end } = getWeekRange(createdDate);
    const weekKey = formatDate(start);

    if (!weekMap.has(weekKey)) {
      weekMap.set(weekKey, {
        weekStart: formatDate(start),
        weekEnd: formatDate(end),
        stats: { total: 0, completed: 0, pending: 0, overdue: 0, completionPercentage: 0 },
      });
    }

    if (task.completedAt) {
      const completedDate = new Date(task.completedAt);
      const { start: compStart, end: compEnd } = getWeekRange(completedDate);
      const compWeekKey = formatDate(compStart);

      if (!weekMap.has(compWeekKey)) {
        weekMap.set(compWeekKey, {
          weekStart: formatDate(compStart),
          weekEnd: formatDate(compEnd),
          stats: { total: 0, completed: 0, pending: 0, overdue: 0, completionPercentage: 0 },
        });
      }
    }
  });

  // Calculate stats for each week
  weekMap.forEach((entry) => {
    const weekStart = new Date(entry.weekStart);
    const weekEnd = new Date(entry.weekEnd);
    const weekTasks = tasks.filter((task) => {
      const createdDate = new Date(task.createdAt);
      return createdDate >= weekStart && createdDate <= weekEnd;
    });
    entry.stats = calculateStats(weekTasks);
  });

  return Array.from(weekMap.values()).sort((a, b) => b.weekStart.localeCompare(a.weekStart));
};

/**
 * Get all monthly history entries
 */
export const getAllMonthlyHistory = (tasks: Task[]): MonthlyHistory[] => {
  const monthMap = new Map<string, MonthlyHistory>();

  tasks.forEach((task) => {
    const createdMonth = formatMonth(new Date(task.createdAt));
    if (!monthMap.has(createdMonth)) {
      monthMap.set(createdMonth, {
        month: createdMonth,
        stats: { total: 0, completed: 0, pending: 0, overdue: 0, completionPercentage: 0 },
      });
    }

    if (task.completedAt) {
      const completedMonth = formatMonth(new Date(task.completedAt));
      if (!monthMap.has(completedMonth)) {
        monthMap.set(completedMonth, {
          month: completedMonth,
          stats: { total: 0, completed: 0, pending: 0, overdue: 0, completionPercentage: 0 },
        });
      }
    }
  });

  // Calculate stats for each month
  monthMap.forEach((entry) => {
    const monthTasks = tasks.filter((task) => {
      const createdMonth = formatMonth(new Date(task.createdAt));
      return createdMonth === entry.month;
    });
    entry.stats = calculateStats(monthTasks);
  });

  return Array.from(monthMap.values()).sort((a, b) => b.month.localeCompare(a.month));
};

