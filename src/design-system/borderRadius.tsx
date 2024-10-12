const borderRadius = {
    none: '0rem',         // No border radius
    sm: '0.125rem',       // 2px
    md: '0.25rem',        // 4px
    lg: '0.5rem',         // 8px
    xl: '0.75rem',        // 12px
    '2xl': '1rem',        // 16px
    '3xl': '1.5rem',      // 24px
    full: '9999px',       // Fully rounded
};

export type BorderRadiusSizes = keyof typeof borderRadius;

export default borderRadius;

