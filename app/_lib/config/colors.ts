// Centralized Color Palette
// Use these constants instead of hardcoded color values

export const COLORS = {
    // Primary Brand Colors
    primary: {
        main: '#124090',
        light: '#1C5CA3',
        dark: '#1C2A7D',
    },

    // Secondary Colors
    secondary: {
        purple: '#261769',
        gold: '#E0C56E',
        goldLight: '#E7D291',
        goldDark: '#E3C979',
    },

    // Text Colors
    text: {
        primary: '#252B5C',
        secondary: '#7D848D',
        muted: '#6B7280',
    },

    // Background Colors
    background: {
        white: '#FFFFFF',
        light: '#F5F7FA',
        gray: '#F2F2F2',
    },

    // Decorative Colors
    decorative: {
        yellow: '#FDE598',
        blue: '#80ADE2',
    },

    // Status Colors
    status: {
        error: '#f87171',
        errorBorder: '#fca5a5',
        success: '#10b981',
        successBorder: '#6ee7b7',
    },
} as const;

// Type for accessing colors
export type ColorKey = keyof typeof COLORS;
