// src/components/layout/main-layout.tsx
import { styled } from 'styled-system/jsx';

export const MainLayout = styled('section', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100dvh',
    paddingTop: ['8vh', '10vh', '11.85vh'],
    padding: '0 4vw',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: "url('/images/first-section/main-background.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
});