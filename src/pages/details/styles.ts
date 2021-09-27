import styled from 'styled-components';
import background from '../../assets/detail-background.png';

export const Container = styled.div`
  background: url(${background});
  background-repeat: no-repeat;
  background-size: 162% 100%;
  background-position: 100% 200%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  > img {
    width: 269px;
    height: 404px;
    object-fit: cover;
  }
`;

export const Footer = styled.footer``;

export const InfoWrapper = styled.div`
  width: 35rem;
`;

export const Name = styled.h1`
  padding: 2rem 0rem;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #e72c35;
`;

export const Details = styled.p`
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #fbfbfb;
`;

export const Series = styled.h2`
  padding: 3rem 0rem;
  color: #e62c35;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Text = styled.div`
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #fbfbfb;
`;

export const CharImage = styled.img``;

export const EditCharacter = styled.button`
  position: absolute;
`;
