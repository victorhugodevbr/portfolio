// src/components/Button.tsx
import { styled } from 'styled-system/jsx';

export const BottomContainer = styled('div', {
  base: {
    display: 'flex',
    flexDirection: ['column', 'column', 'row'],
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
});