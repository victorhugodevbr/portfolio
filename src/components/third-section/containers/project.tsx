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
      animation: "flicker 7s infinite",
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
    padding: ['8vh 8vw' , '10vh 8vw', '20vh 6.29vw'],
    gap: '3.33vw',
  },
});

export const ProjectBlockContentLeft = styled('div', {
  base: {
    display: 'flex',
    zIndex: 1,
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
    position: ['absolute', 'absolute', 'relative'],
    opacity: ['0', '0', '1'],
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});