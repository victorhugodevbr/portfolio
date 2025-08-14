import { styled } from 'styled-system/jsx';

export const FirstProjectBackground = styled('div', {
    base: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: "url('/images/third-section/first-project-background.png')",
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
    },
});

