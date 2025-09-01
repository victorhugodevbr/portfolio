// src/components/Button.tsx
import { styled } from 'styled-system/jsx';

export const DescriptionBlockContent = styled('div', {
  base: {
    display: 'flex',
    zIndex: 1,
    alignItems: 'start',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: ['5vh', '6.85vh', '8.85vh'],
    gap: 'clamp(4px, 1.5vw, 10px)',
  },
});

export const DescriptionBlock = styled('div', {
  base: {
    position: 'relative', 
    display: 'flex',
    width: '100%',
    height: '100%',
    overflow: 'visible',
  },
});