// src/components/Button.tsx
import { styled } from 'styled-system/jsx';

export const Button = styled('button', {
  // 1. Estilos base, aplicados a todas as variantes
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'lg',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'colors 0.2s ease-in-out',
  },
  // 2. Variantes, assim como nas recipes
  variants: {
    visual: {
      primary: {
        bg: 'blue.600',
        color: 'white',
        _hover: { bg: 'blue.700' },
      },
      secondary: {
        border: '1px solid',
        borderColor: 'gray.300',
        bg: 'white',
        color: 'gray.800',
        _hover: { bg: 'gray.100' },
      },
    },
    size: {
      md: {
        px: '4',
        h: '10',
        fontSize: 'md',
      },
      lg: {
        px: '6',
        h: '12',
        fontSize: 'lg',
      },
    },
  },
  // 3. Variantes padrão
  defaultVariants: {
    visual: 'primary',
    size: 'md',
  },
});

// O tipo das props é inferido automaticamente.
// Você pode exportá-lo se precisar, mas geralmente não é necessário.
// export type ButtonProps = Parameters<typeof Button>[0];