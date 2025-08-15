import { styled } from 'styled-system/jsx';

export const MainLayout = styled('section', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    minHeight: '100vh',
    padding: '11.85vh 10.73vw',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: "url('/images/fourth-section/fourth-section-background.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    gap: '2vw',
  },
});