export const breakpoints = {
  sm: '640px',   // Small devices (phones)
  md: '768px',   // Medium devices (tablets)
  lg: '1024px',  // Large devices (laptops)
  xl: '1280px',  // Extra large devices (large laptops)
  '2xl': '1536px' // Very large devices
} as const;

export const spacing = {
  container: {
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },
    maxWidth: {
      DEFAULT: '80rem',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    }
  }
} as const;

export const colors = {
  primary: {
    DEFAULT: '#2563eb', // blue-600
    hover: '#1d4ed8',   // blue-700
  },
  danger: {
    DEFAULT: '#dc2626', // red-600
    hover: '#b91c1c',   // red-700
  },
  warning: {
    DEFAULT: '#f59e0b', // amber-500
    hover: '#d97706',   // amber-600
  },
  success: {
    DEFAULT: '#16a34a', // green-600
    hover: '#15803d',   // green-700
  },
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  }
} as const;
