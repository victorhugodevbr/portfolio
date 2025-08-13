import { styled } from 'styled-system/jsx';

export const ThirdDescriptionBackground = styled('div', {
    base: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundImage: "url('/images/second-section/third-description-background.png')",
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 0,
        pointerEvents: 'none',
    },
});

