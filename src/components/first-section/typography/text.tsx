// src/components/Button.tsx
import { styled } from 'styled-system/jsx';

export const Text = styled('text', {
  base: {
    textAlign: 'center',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '1.2',
    color: 'white',
  },
  variants: {
    size: {
      md: {
        fontSize: 'clamp(24px, 2.1vw, 40px)', 
        textShadow: '0px 0px clamp(2px, 0.5vw, 4px) white'
      },
      lg: {
        fontSize: 'clamp(40px, 3.75vw, 72px)',
        textShadow: '0px 0px clamp(6px, 1vw, 12px) white'
      },
      xl: {
        fontSize: 'clamp(60px, 5vw, 96px)',
        textShadow: '0px 0px clamp(8px, 1.5vw, 16px) white'
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});