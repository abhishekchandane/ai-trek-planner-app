/**
 * Below are the colors that are used in the app.
 * The colors are structured for light and dark themes.
 */

const tintColorLight = '#0a7ea4'; // Tint color for light mode
const tintColorDark = '#fff'; // Tint color for dark mode

export const Colors = {
  WHITE: '#fff', // Global white color
  PRIMARY: '#000', // Global primary color

  light: {
    text: '#11181C', // Text color for light theme
    background: '#fff', // Background color for light theme
    tint: tintColorLight, // Tint color for light theme
    icon: '#687076', // Icon color for light theme
    tabIconDefault: '#687076', // Default tab icon color for light theme
    tabIconSelected: tintColorLight, // Selected tab icon color for light theme
  },

  dark: {
    text: '#ECFDFE', // Text color for dark theme
    background: '#000', // Background color for dark theme
    tint: tintColorDark, // Tint color for dark theme
    icon: '#fff', // Icon color for dark theme
    tabIconDefault: '#ccc', // Default tab icon color for dark theme
    tabIconSelected: tintColorDark, // Selected tab icon color for dark theme
  },
};
