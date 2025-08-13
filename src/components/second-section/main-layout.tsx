// src/components/layout/main-layout.tsx
import { styled } from 'styled-system/jsx';

export const MainLayout = styled('section', {
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'black',
  },
});