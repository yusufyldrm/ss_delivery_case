import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
`;

export const ProfileDetail = styled.div`

`;

export const Info = styled.div`
  background-color: #f5f5f5;  
  padding: 10px;
  display: flex;
`;

export const Text = styled.span`
  margin-right: 5px;
  color: ${({$color}) => $color ? $color : '#212121'};
`;

export const SubTitle = styled.h3`
  margin-top: 20px;
`;

export const AddressContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
`;

export const Address = styled.address`
  width: fit-content;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
