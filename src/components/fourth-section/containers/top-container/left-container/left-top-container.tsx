// src/components/Button.tsx
import { styled } from 'styled-system/jsx';

export const LeftTopContainer = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    width: '100%',
    height: '100%',
    gap: '16px',
  },
});