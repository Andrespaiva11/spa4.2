import { createGlobalStyle, keyframes } from 'styled-components';

export const theme = {
  colors: {
    primary: '#B76E79',       // Oro Rosa / Rose Gold refinado
    primaryLight: '#D39EA7',  // Soft Rose Gold
    primaryDark: '#8C4E58',   // Ciruela / Negro Baya elegante
    secondary: '#FFEBF0',     // Blush rosa suave
    accent: '#D4AF37',        // Oro Metálico sofisticado
    text: '#2D1E20',          // Chocolate oscuro / Baya negro (Texto Principal)
    textLight: '#3D2D30',     // Gris-baya muy oscuro (Texto Secundario)
    textMuted: '#6D585B',     // Muted baya grisáceo (Texto Terciario)
    contentBgLight: '#FFFDFD', // Blanco limpio con matiz rosa suave
    contentBgWarm: '#FCF6F7',  // Crema cálida de rubor
    navbarBg: '#1A0E10',      // Ciruela profundo oscuro (Navbar)
    navbarText: '#EAC7CC',     // Rosa oro suave para texto en Navbar
    navbarLinkHover: '#E5A93B', // Oro brillante para hover
    footerBg: '#1A0E10',      // Ciruela profundo oscuro (Footer)
    footerText: '#EAC7CC',     // Rosa oro suave para texto de footer
    danger: '#e74c3c',
    success: '#27ae60',
    cardBg: '#ffffff',
    overlay: 'rgba(26, 14, 16, 0.65)',
  },
  fonts: {
    primary: "'Cormorant Garamond', Georgia, serif",
    secondary: "'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  spacing: {
    xs: '0.25rem',
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  borderRadius: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xl: '32px',
    pill: '50px',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.08)',
    medium: '0 4px 20px rgba(0, 0, 0, 0.1)',
    large: '0 12px 40px rgba(0, 0, 0, 0.15)',
    xl: '0 20px 60px rgba(0, 0, 0, 0.2)',
    glow: '0 0 20px rgba(153, 101, 21, 0.3)',
    cardHover: '0 12px 35px rgba(153, 101, 21, 0.15)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
  },
  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
    bounce: '0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
};

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${theme.fonts.secondary};
    font-size: 1.2rem;
    background-color: #FCF6F7;
    color: ${theme.colors.text};
    line-height: 1.65;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (max-width: 768px) {
      font-size: 1.05rem;
    }
  }

  h1 {
    font-size: 3.5rem;
    @media (max-width: 768px) {
      font-size: 2.25rem;
    }
  }
  h2 {
    font-size: 2.8rem;
    @media (max-width: 768px) {
      font-size: 1.85rem;
    }
  }
  h3 {
    font-size: 2.2rem;
    @media (max-width: 768px) {
      font-size: 1.55rem;
    }
  }
  h4 {
    font-size: 1.8rem;
    @media (max-width: 768px) {
      font-size: 1.35rem;
    }
  }
  h5 {
    font-size: 1.5rem;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  h6 {
    font-size: 1.35rem;
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.primary};
    margin-bottom: 0.85rem;
    line-height: 1.25;
  }

  a {
    color: ${theme.colors.accent};
    text-decoration: none;
    transition: color ${theme.transitions.normal};
  }

  a:hover {
    color: ${theme.colors.primaryLight};
    text-decoration: none;
  }

  button {
    cursor: pointer;
    font-family: ${theme.fonts.secondary};
  }

  input, select, textarea {
    font-family: ${theme.fonts.secondary};
  }

  ::selection {
    background: rgba(153, 101, 21, 0.2);
    color: ${theme.colors.text};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primaryDark};
  }
`;
