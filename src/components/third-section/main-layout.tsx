// src/components/layout/main-layout.tsx
import { styled } from 'styled-system/jsx';

export const MainLayout = styled('section', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 10.73vw',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: "url('/images/third-section/third-section-background.png')",
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    gap: '2vw',
    width: '100%',
    aspectRatio: '1920 / 2842',
  },
});