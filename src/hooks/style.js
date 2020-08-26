import { useDimensions } from '@react-native-community/hooks';

export const useLayout = () => {
  const { window } = useDimensions();
  return { ...window, isDesktop: window.width > 780 };
};

// TODO
export const useTheme = () => '';
