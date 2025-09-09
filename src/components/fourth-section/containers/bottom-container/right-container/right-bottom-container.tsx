// src/components/Button.tsx
import { styled } from 'styled-system/jsx';

export const RightBottomContainer = styled('div', {
  base: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    gap: ['5px', '8px', '10px'],
    padding: ['8vh', '8vh 4vw', '13.33vh 6.15vw'],
  },
});