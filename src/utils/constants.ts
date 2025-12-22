export const STORAGE_KEYS = {
  IS_LOGGED_IN: 'isLoggedIn',
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  IS_DARK_MODE: 'isDarkMode',
  TASKS: 'tasks',
} as const;

export const AUTH_CREDENTIALS = {
  username: 'umar',
  password: '1122',
} as const;

export const STRINGS = {
  appName: 'Todo App',
  loginTitle: 'Welcome back',
  usernamePlaceholder: 'Username',
  passwordPlaceholder: 'Password',
  loginButton: 'Login',
  logoutButton: 'Logout',
  addTaskPlaceholder: 'Add a new task',
  addTaskButton: 'Add Task',
  noTasks: 'No tasks yet. Start by adding one!',
  pendingTasksTitle: 'Pending Tasks',
  allTasksTitle: 'All Tasks',
  homeGreeting: 'Hello, Umar 👋',
  settingsTitle: 'Settings',
} as const;

// Base URL for images. Falls back to the value in .env or the known S3 bucket.
export const IMAGE_BASE_URL = process.env.IMAGE_BASE_URL ?? 'https://rumie-files.s3.us-east-2.amazonaws.com/original/';


