import { baseColors } from '../theme/colors';
export const fetchThemeOverrides = async (): Promise<Partial<typeof baseColors>> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        orange: '#22C55E', // green
      });
    }, 300);
  });
};
