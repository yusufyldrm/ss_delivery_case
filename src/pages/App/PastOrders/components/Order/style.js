import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  min-height: 200px;
  border: 1px solid #ccc;
  overflow: hidden;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const TitleContainer = styled.div`
  padding: 2px 5px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Date = styled.div`
  padding: 2px 5px;
`;

export const RestaurantName = styled(Link)`
  width: 80%;
  font-size: 20px;
  font-weight: bold;
`;

export const Badge = styled.span`
  top: 0;
  right: 0;
  background-color: ${({ $isSuccess }) => $isSuccess ? '#00b300' : '#ff0000'};
  color: #fff;
  padding: 5px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  width: fit-content;
`;

export const InfoContainer = styled.div`
  display: flex;
  
`;

export const ItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px 5px;
`;

export const Address = styled.address`
  padding: 2px 5px;

`;
