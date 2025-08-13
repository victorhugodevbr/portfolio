import { styled } from 'styled-system/jsx';

export const SecondDescriptionBackground = styled('div', {
    base: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundImage: "url('/images/second-section/second-description-background.png')",
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 0,
        pointerEvents: 'none',
    },
});

