import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin-bottom: 40px;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  };
  overflow: hidden;
  position: relative;
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0.5};
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: fill;
  border-radius: 5px;
  margin-bottom: 20px;
  user-select: none;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const RestaurantTypeContainer = styled.data`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const RestaurantType = styled.span`
  background: #f5f5f5;
  border: 1px solid #e5e5e5;
  padding: 2px 3px;
  height: fit-content;
  margin-top: 5px;
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export const NewBage = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: #EB1C1C;
  color: #fff;
  padding: 2px 5px;
  border-radius: 10px;
`;

export const MinPrice = styled.span`
  font-size: 12px;
  margin-right: 5px;
`;

export const TopContent = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
