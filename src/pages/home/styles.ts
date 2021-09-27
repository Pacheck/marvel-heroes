import styled from 'styled-components';

import bgImg from '../../assets/background.png';

export const Container = styled.div`
  display: relative;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Navbar = styled.nav`
  margin-left: 15rem;
`;
export const Logo = styled.img`
  margin-right: 15rem;
`;
export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  min-width: 34rem;
`;
export const NavigationItem = styled.li`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: right;
  color: #fefbfb;

  :hover {
    /* color: #333; */
    color: yellow;
    text-decoration: underline;
  }
`;

export const MainContent = styled.main``;
export const TextContainer = styled.div`
  width: 32rem;
  height: 20rem;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-left: 10rem;
`;
export const MainText = styled.h1`
  font-family: 'Roboto';
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  margin-bottom: 2rem;
`;
export const SubText = styled.p`
  font-family: 'Inter';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #c4c4c4;
`;

export const CarrouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 80%;
  top: 8rem;
  left: 10%;
`;
