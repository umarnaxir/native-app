import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import { useTasks } from '../navigation/TabNavigator';
import {
  getDailyHistory,
  getWeeklyHistory,
  getMonthlyHistory,
  getAllDailyHistory,
  getAllWeeklyHistory,
  getAllMonthlyHistory,
  HistoryPeriod,
  DailyHistory,
  WeeklyHistory,
  MonthlyHistory,
} from '../utils/taskHistory';

type HistoryContextValue = {
  dailyHistory: DailyHistory;
  weeklyHistory: WeeklyHistory;
  monthlyHistory: MonthlyHistory;
  allDailyHistory: DailyHistory[];
  allWeeklyHistory: WeeklyHistory[];
  allMonthlyHistory: MonthlyHistory[];
  getHistoryByPeriod: (period: HistoryPeriod) => DailyHistory | WeeklyHistory | MonthlyHistory;
};

const HistoryContext = createContext<HistoryContextValue | undefined>(undefined);

export const useHistory = (): HistoryContextValue => {
  const ctx = useContext(HistoryContext);
  if (!ctx) {
    throw new Error('useHistory must be used within a HistoryProvider');
  }
  return ctx;
};

type HistoryProviderProps = {
  children: ReactNode;
};

export const HistoryProvider: React.FC<HistoryProviderProps> = ({ children }) => {
  const { tasks } = useTasks();

  const value = useMemo(() => {
    const dailyHistory = getDailyHistory(tasks);
    const weeklyHistory = getWeeklyHistory(tasks);
    const monthlyHistory = getMonthlyHistory(tasks);
    const allDailyHistory = getAllDailyHistory(tasks);
    const allWeeklyHistory = getAllWeeklyHistory(tasks);
    const allMonthlyHistory = getAllMonthlyHistory(tasks);

    const getHistoryByPeriod = (period: HistoryPeriod) => {
      switch (period) {
        case 'daily':
          return dailyHistory;
        case 'weekly':
          return weeklyHistory;
        case 'monthly':
          return monthlyHistory;
        default:
          return dailyHistory;
      }
    };

    return {
      dailyHistory,
      weeklyHistory,
      monthlyHistory,
      allDailyHistory,
      allWeeklyHistory,
      allMonthlyHistory,
      getHistoryByPeriod,
    };
  }, [tasks]);

  return <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>;
};

