import { useColorScheme } from 'react-native';

export type Theme = {
  background: string;
  text: string;
  titleBar: string;
  buttonBackground: string;
  statusBarBackground: string;
  statusBarStyle: 'dark-content' | 'light-content';
};

export const lightTheme: Theme = {
  background: 'rgba(255, 223, 223, 1)',
  text: '#333333',
  titleBar: 'rgba(255, 191, 191, 1)', // Light Red
  buttonBackground: 'rgba(255, 127, 127, 1)',
  statusBarBackground: 'rgba(255, 191, 191, 1)',
  statusBarStyle: 'dark-content',
};

export const darkTheme: Theme = {
  background: 'rgba(127, 0, 0, 1)',
  text: '#FFFFFF',
  titleBar: 'rgba(255, 31, 31, 1)', // Dark Red
  buttonBackground: 'rgba(255, 31, 31, 1)',
  statusBarBackground: 'rgba(255, 31, 31, 1)',
  statusBarStyle: 'light-content',
};

export const useTheme = (): { theme: Theme; isDarkMode: boolean } => {
  const colorScheme = useColorScheme(); // 'light' or 'dark'
  const isDarkMode = colorScheme === 'dark';
  const theme = isDarkMode ? darkTheme : lightTheme;
  
  return { theme, isDarkMode };
};