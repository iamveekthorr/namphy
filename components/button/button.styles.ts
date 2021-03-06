import styled from 'styled-components';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum Variants {
  WHITE = 'WHITE',
  PRIMARY = 'PRIMARY',
  DISABLED = 'DISABLED',
}

export interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
  variants: Variants;
  children: ReactNode;
  filled?: boolean;
  disabledState?: boolean;
}

export const Btn = styled.button<IButtonProps>`
  padding: calc(16rem / 16) calc(48rem / 16);
  border: none;
  border-radius: 5px;
  font-size: inherit;
  text-transform: capitalize;
  font-family: inherit;
  cursor: pointer;
  height: calc(48rem / 16);
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ variants }) =>
    variants === Variants.PRIMARY &&
    `
        background:#E63946;
        color: white;
    `}

  ${({ variants }) =>
    variants === Variants.WHITE &&
    `
        background: #1D3557;
        color: white;
    `}
    
    ${({ variants }) =>
    variants === Variants.DISABLED &&
    `
        background: grey;
        color: grey;
    `};
`;
