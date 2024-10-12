const colors = {
    light: {
      background: '#ffffff',
      foreground: '#000000',
    },
    dark: {
      background: '#1a202c',
      foreground: '#f7fafc',
    },
    custom: {
      background: '#f0e68c',  // Example custom theme
      foreground: '#4b0082',
    },
  };
  
  export type ThemeColors = keyof typeof colors;
  
  export default colors;