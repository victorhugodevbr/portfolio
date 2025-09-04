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

export const RubBankText = styled('text', {
  base: {
    textAlign: 'start',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: '0.9',
    color: 'white',
    fontSize: 'clamp(64px, 8vw, 128px)',
  },
  variants: {
    color: {
      secondaryRubBank: {
        color: 'secondaryRubBank',
      },
    },
  }
});

export const ProjectContentText = styled('text', {
  base: {
    textAlign: 'start',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '1.2',
    color: 'white',
    fontSize: 'clamp(14px, 1.25vw, 24px)',
  },
});

export const MaranataText = styled('text', {
  base: {
    textAlign: 'start',
    lineBreak: ['anywhere', 'auto', 'auto'],
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '0.9',
  },
  variants: {
    type: {
      primary: {
        color: 'secondaryMaranata',
        fontSize: 'clamp(48px, 6vw, 96px)',
      },
      secondary: {
        color: 'primaryMaranata',
        fontSize: 'clamp(24px, 3vw, 48px)',
        textShadow: ['0px 0px clamp(10px, 0vw, 20px) rgba(0, 0, 0, 0.3)', '0 0'],
      },
    },
  },
});

export const BrasilcardText = styled('text', {
  base: {
    textAlign: 'start',
    lineBreak: 'anywhere',
    fontFamily: 'Roboto Slab',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '0.9',
    color: 'white',
    fontSize: 'clamp(48px, 6vw, 96px)'
  },
});