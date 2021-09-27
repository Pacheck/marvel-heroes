import styled from 'styled-components';
import background from '../../assets/detail-background.png';

export const Container = styled.div`
  background: url(${background});
  background-repeat: no-repeat;
  background-size: 162% 100%;
  background-position: 100% 200%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const Footer = styled.footer`
  height: 90%;

  h2 {
    text-align: center !important;
    padding: 1rem;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #c4c4c4;
  }
`;

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
  height: 10rem;
  overflow-y: auto;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #fbfbfb;

  ::-webkit-scrollbar {
    width: 15px;
    height: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background: #c41616;
    border: 0.3px solid #fffafa;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #f74349;
  }
  ::-webkit-scrollbar-track {
    background: #333030;
    border-radius: 0px;
    box-shadow: inset 0px 0px 0px 0px #f0f0f0;
  }
`;

export const CharImage = styled.img`
  width: 269px;
  height: 404px;
  object-fit: cover;
`;

export const EditCharacter = styled.button`
  margin-top: 1rem;
  border: 1px solid red;
  background-color: transparent;
  color: red;
  padding: 0.5rem 1rem;
  cursor: pointer;

  :hover {
    background-color: red;
    color: black;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterCardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
