import styled from 'styled-components';

export const Wrapper = styled.div`
  
`;

export const Logo = styled.h1`
  text-align: center;
  color: #212121;
  margin-top: 50px;
  user-select: none;
`;

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const Description = styled.p`
  margin: 0 auto;
  color: #282828;
  margin-top: 10%;
  margin-bottom: 20px;
  text-align: center;
  width: 40%;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 4;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  line-height: 23px;
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.error};
  background-color: ${({ theme }) => theme.colors.errorBackground};
  padding: 10px 20px;
`;
