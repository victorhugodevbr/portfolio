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
  },
});

export const LeftBigText = styled('text', {
  base: {
    textAlign: 'start',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '0.9',
    color: 'white',
    fontSize: '64px',
  },
});

export const LeftInfoText = styled('a', {
  base: {
    textAlign: 'start',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '1.2',
    color: 'white',
    textDecoration: 'none',
    display: 'inline-block',
  },
  variants: {
    size: {
      md: {
        fontSize: 'clamp(16px, 1.5vw, 20px)',
        cursor: 'pointer',
        transition: 'color 0.2s ease-in-out',
        _hover: {
          color: 'rgba(255, 255, 255, 0.8)',
          textDecoration: 'underline',
        }
      },
      lg: {
        fontSize: 'clamp(20px, 1.8vw, 24px)',
      },
    },
  }
});

export const QuestionText = styled('text', {
  base: {
    textAlign: 'start',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '1.2',
    color: 'black',
    fontSize: 'clamp(20px, 1.8vw, 24px)',
  },
});

export const AnswerText = styled('text', {
  base: {
    textAlign: 'left',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '1.2',
    color: 'black',
    fontSize: '20px',
  },
});

export const BottomBigText = styled('text', {
  base: {
    textAlign: 'start',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '1.2',
    color: 'white',
    fontSize: 'clamp(24px, 2.1vw, 40px)',
    zIndex: 1,
  },
});

export const BottomSmallText = styled('text', {
  base: {
    textAlign: 'start',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '1.2',
    color: 'white',
    fontSize: '16px',
    zIndex: 1,
  },
});

export const BlackButtonText = styled('text', {
  base: {
    textAlign: 'center',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '1.2',
    color: 'white',
    fontSize: '16px',
    whiteSpace: 'nowrap',
  },
});