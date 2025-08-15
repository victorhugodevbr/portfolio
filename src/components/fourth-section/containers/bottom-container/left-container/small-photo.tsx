import { styled } from 'styled-system/jsx';

export const PersonalImage = styled('div', {
  base: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundImage: "url('/images/first-section/personal-image.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'black',
  },
});