// src/components/layout/main-layout.tsx
import { styled } from 'styled-system/jsx';

export const MainLayout = styled('section', {
  base: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: ['0 3.2vw', '0 10.73vw'],
    overflow: 'hidden',
    backgroundImage: "url('/images/third-section/third-section-background.png')",
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    gap: '2vw',
    minHeight: '100vh',
    width: '100%',
    aspectRatio: ['0', '0', '1920 / 2842'],
  },
});