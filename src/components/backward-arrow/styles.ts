import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  background: black;
  opacity: 0.5;
  height: 100%;
  width: 3rem;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
export const Image = styled.img`
  position: absolute;
  top: 50%;
  right: 25%;
`;
