import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 0 15px;
  margin-top: 20px;
`;

export const Center = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
`;

export const IconContainer = styled.div`
  float: right;
`;

export const Image = styled.img`
  margin-right: 10px;
  margin-top: 10px;
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

export const Description = styled.p`
  width: 70%;
  text-align: center;
  margin: 20px auto;
  white-space: break-spaces;
`;

export const Badge = styled.span`
  background: #EB1C1C;
  color: #fff;
  padding: 2px 5px;
  border-radius: 10px;
  margin-left: 10px;
  user-select: none;
`;

export const Address = styled.p`
  text-align: right;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Type = styled.p`
  background: #f5f5f5;
  border: 1px solid #e5e5e5;
  padding: 2px 3px;
  height: fit-content;
  margin-top: 5px;
  &:not(:last-child) {
    margin-right: 5px;
  }
`;
