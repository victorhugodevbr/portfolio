import { styled } from "styled-system/jsx";

export const BlackButton = styled('button', {
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, var(--colors-tertiary) 0%, var(--colors-black) 100%)',
    border: '1px solid var(--colors-tertiary)',
    boxShadow: '0px 0px 15px var(--colors-primary)',
    borderRadius: '8px',
    padding: '16px 32px',
    width: '100%',
    fontFamily: 'SF Pro Display',
    position: 'relative',
    cursor: 'pointer',
    gap: '16px',
    transition: 'background 0.3s',
    _hover: {
      boxShadow: '0px 0px 15px var(--colors-white)',
    }
  },
});