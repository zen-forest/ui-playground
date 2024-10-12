const spacing = {
    sm: '0.25rem', // 4px
    md: '0.5rem',  // 8px
    lg: '0.75rem', // 12px
    xl: '1rem',    // 16px
    '2xl': '1.5rem', // 24px
    '3xl': '2rem',   // 32px
    '4xl': '3rem',   // 48px
    '5xl': '4rem',   // 64px
};

export type SpacingSizes = keyof typeof spacing;

export default spacing;

