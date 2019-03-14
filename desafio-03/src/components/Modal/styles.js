import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  transition: background-color 0.2s;
`;

export const Box = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 2px;
`;
