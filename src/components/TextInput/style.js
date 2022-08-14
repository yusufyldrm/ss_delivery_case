import styled, { css } from 'styled-components';

export const TextField = styled.input`
  border-radius: ${({ rounded }) => (rounded ? '6px' : '0')};
  background-color: #fff;
  color: #282828;
  border: 1px solid ${({ theme, $hasError }) => $hasError ? theme.colors.error : '#8692A6'};
  box-sizing: border-box;
  font-size: ${({ size }) => (size === 'lg' ? '17px' : size === 'sm' ? '13.5px' : '15px')};
  padding: ${({ size }) => (size === 'lg' ? '0.8rem' : size === 'sm' ? '0.35rem' : '0.55rem')};
  padding-left: ${({ hasIcon }) => hasIcon && '2rem'};
  margin: 5px 0;
  transition: all 0.2s ease, color 0.2s ease;
  height: ${({ size }) => (size === 'lg' ? '55px' : size === 'sm' ? '35px' : '45px')};
  width: 100%;
  letter-spacing: .3px;

  :disabled {
    cursor: default;
    background-color: #ffffff50;
    border: 1px solid #21212130;
    color: #00000090;
    opacity: .8;
  };
  
  &[type="password"] {
    letter-spacing: 2px;
  };

  &::placeholder {
    color: ${({ theme, $hasError }) => $hasError ? theme.colors.error : theme.colors.placeholder};
    letter-spacing: normal;
    user-select: none;
  };
  
  &:-webkit-autofill {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: #282828;
  };
  
  ${({ responsive, theme }) =>
    responsive &&
    css`
      @media (max-width: ${theme.breakpoints.tablet}) {
        padding: 0.35rem;
        font-size: 13.5px;
      }
      @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 0.26rem;
        font-size: 12.2px;
      }
    `}
`;

export const IconContainer = styled.div`
  position: absolute;
  left: 5px;
  top: ${({ size }) => size === 'lg' ? 55 / 3 + 'px' : size === 'sm' ? 35 / 3 + 'px' : 45 / 3 + 'px'};
`;

export const Label = styled.label`
  color: ${({ theme, $hasError }) => $hasError ? theme.colors.error : '#393d72'};
  user-select: none;
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  margin-bottom: 15px;
`;

export const Container = styled.div`
  margin-bottom: 10px;
`;
