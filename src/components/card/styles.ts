import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  min-width: 20rem;
  min-height: 14rem;
  display: flex;
  background-color: #49474b63;
  margin-right: 5rem;
`;

export const Image = styled.img`
  width: 9.8rem;
  height: 14.8rem;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
    height: 20%;
    padding-top: 10px;
  }

  p {
    width: 80%;
    font-family: 'Lexend Deca';
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    height: 60%;
  }
`;

export const ReadMore = styled(Link)`
  height: 10%;
  color: #fff;
  font-weight: 600;
  :hover {
    color: yellow;
  }
`;
