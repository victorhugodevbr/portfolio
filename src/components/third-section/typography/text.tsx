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
    fontSize: '128px',
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
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '0.9',
  },
  variants: {
    type: {
      primary: {
        color: 'secondaryMaranata',
        fontSize: '96px',
      },
      secondary: {
        color: 'primaryMaranata',
        fontSize: '48px',
      },
    },
  },
});

export const BrasilcardText = styled('text', {
  base: {
    textAlign: 'start',
    fontFamily: 'Roboto Slab',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '0.9',
    color: 'white',
    fontSize: '96px'
  },
});