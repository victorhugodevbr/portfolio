// src/components/layout/main-layout.tsx
import { styled } from 'styled-system/jsx';

export const TryMeImage = styled('div', {
    base: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: "url('/images/fourth-section/try-me-image.png')",
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 0,
    },
});