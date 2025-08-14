import { styled } from "styled-system/jsx";

export const ProjectBlock = styled('div', {
  base: {
    position: 'relative', 
    display: 'flex',
    width: '100%',
    height: '100%',
    overflow: 'visible',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    willChange: 'transform',
    '&:hover': {
      transform: 'scale(1.04)',
    },
  },
});

export const ProjectBlockContent = styled('div', {
  base: {
    display: 'flex',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '11.29vh 6.29vw',
    gap: '3.33vw',
  },
});

export const ProjectBlockContentLeft = styled('div', {
  base: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    width: '100%',
    gap: '2.96vh',
  },
});

export const ProjectBlockContentRight = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});