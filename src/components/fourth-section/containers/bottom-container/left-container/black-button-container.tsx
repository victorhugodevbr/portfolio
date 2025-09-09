// src/components/Button.tsx
import { styled } from 'styled-system/jsx';

export const BlackButtonContainer = styled('div', {
  base: {
    display: 'flex',
    position: 'relative',
    flexDirection: ['column', 'column', 'row'],
    // alignItems: 'start',
    // justifyContent: 'start',
    width: '100%',
    height: '100%',
    gap: '12px',
  },
});