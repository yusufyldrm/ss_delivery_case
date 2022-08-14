import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  position: sticky;
  padding: 0 20px;
  height: 60px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 5;
  inset: 0;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #ebebeb;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LogoArea = styled(Link)`
  user-select: none;
`;


export const Nav = styled.nav`
  align-items: center;
  display: flex; 
  flex-direction: row;
  user-select: none;
  color: #212121;
  & > * {
    border: 1px solid #ebebeb;
    align-items: center;
    display: flex;
    padding: 10px;
    border-radius: 5px;
    :hover {
      /* background-color: #f5f5f5;
      border: 1px solid ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.blue}; */
      background-color: ${({ theme }) => theme.colors.blue};
      color: #fff;
    }
    
    & > svg {
      margin-left: 10px;
      transition: color 0s;
    }
    
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;


export const Links = styled(Link)`

`;

export const LogoutButton = styled.p`
  cursor: pointer;
  height: fit-content;
`;

