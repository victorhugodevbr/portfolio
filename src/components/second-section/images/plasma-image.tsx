// src/components/layout/main-layout.tsx
import { styled } from 'styled-system/jsx';

export const PlasmaImage = styled('div', {
    base: {
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundImage: "url('/images/left-content.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
});