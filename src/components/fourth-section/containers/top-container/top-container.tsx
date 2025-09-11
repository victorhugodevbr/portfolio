// src/components/Button.tsx
import { styled } from 'styled-system/jsx';

export const TopContainer = styled('div', {
  base: {
    display: 'flex',
    flexDirection: ['column', 'column', 'column', 'row'],
    alignItems: 'start',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    gap: '5vh',
    paddingRight: ['0', '0', '0', '2.60vw']
  },
});