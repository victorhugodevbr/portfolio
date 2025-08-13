// src/components/Button.tsx
import { styled } from 'styled-system/jsx';

export const TitleText = styled('text', {
  base: {
    textAlign: 'center',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '1.2',
    color: 'white',
    fontSize: 'clamp(24px, 2.1vw, 40px)',
    textShadow: '0px 0px clamp(2px, 0.5vw, 8px) white',
    paddingLeft: 'clamp(16px, 3vw, 36px)',
  },
});

export const CardTitleText = styled('text', {
  base: {
    textAlign: 'center',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '1.2',
    color: 'white',
    fontSize: 'clamp(20px, 1.8vw, 32px)',
  },
});

export const CardContentText = styled('text', {
  base: {
    textAlign: 'start',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '200',
    lineHeight: '1.2',
    color: 'white',
    fontSize: 'clamp(16px, 1.5vw, 20px)',
  },
});