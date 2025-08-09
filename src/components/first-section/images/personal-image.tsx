// src/components/layout/main-layout.tsx
import { styled } from 'styled-system/jsx';

export const PersonalImage = styled('div', {
    base: {
        width: '33.23vw',     
        aspectRatio: '1 / 1', 
        overflow: 'hidden',
        backgroundImage: "url('/images/personal-image.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
});