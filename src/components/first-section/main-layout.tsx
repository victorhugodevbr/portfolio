// src/components/layout/main-layout.tsx
import { styled } from 'styled-system/jsx';

export const MainLayout = styled('section', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100vh',
    paddingTop: ['8vh', '10vh', '11.85vh'],
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: "url('/images/first-section/main-background.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    gap: '2vw',
  },
});