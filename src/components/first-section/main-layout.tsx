// src/components/layout/main-layout.tsx
import { styled } from 'styled-system/jsx';

export const MainLayout = styled('section', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100vh',
    paddingTop: ['8vh', '10vh', '11.85vh'],
    paddingLeft: ['2.6vw', '2.6vw', '2.6vw'],
    paddingRight: ['2.6vw', '2.6vw', '2.6vw'],
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: "url('/images/first-section/main-background.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
});