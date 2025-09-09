// src/components/Button.tsx
import { styled } from 'styled-system/jsx';

export const RightContainer = styled('div', {
  base: {
    display: 'flex',
    position: 'relative', 
    zIndex: ['1', 'auto'], // [mobile, tablet+]
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    width: '100%',
    paddingTop: ['5vh', '7vh', '7vh'],
    padding: '0 2.6vw 5.93vh 2.6vw',
    gap: '2.78vh',
  },
});
