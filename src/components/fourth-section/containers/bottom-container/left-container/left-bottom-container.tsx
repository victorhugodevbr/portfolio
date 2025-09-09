// src/components/Button.tsx
import { styled } from 'styled-system/jsx';

export const LeftBottomContainer = styled('div', {
  base: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: ['center', 'center', 'start'],
    justifyContent: 'start',
    width: '100%',
    height: '100%',
    gap: '16px',
  },
});