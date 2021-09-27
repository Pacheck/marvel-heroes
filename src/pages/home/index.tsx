import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import {
  getAllCharacters,
  getCharacterDetails,
} from '../../redux/actions/character.actions';

import CardItem from '../../components/card';
import Logo from '../../components/searchbar';

import MarvelLogo from '../../assets/marvel-icon.png';
import * as S from './styles';

import Img1 from '../../assets/1.png';
import Img2 from '../../assets/2.png';
import Img3 from '../../assets/3.png';

const NavItems = [
  { path: '/', name: 'Home' },
  { path: '/series', name: 'Séries' },
  { path: '/filmes', name: 'Filmes' },
  { path: '/animes', name: 'Animes' },
  { path: '/games', name: 'Games' },
];

const mock = [
  {
    img: Img1,
    name: '3-D Man',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
  },
  {
    img: Img2,
    name: 'A-Bomb (HAS)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
  },
  {
    img: Img3,
    name: 'A.I.M',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
  },
  {
    img: Img1,
    name: '3-D Man',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
  },
  {
    img: Img2,
    name: 'A-Bomb (HAS)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
  },
  {
    img: Img3,
    name: 'A.I.M',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
  },
  {
    img: Img1,
    name: '3-D Man',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
  },
  {
    img: Img2,
    name: 'A-Bomb (HAS)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
  },
  {
    img: Img3,
    name: 'A.I.M',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const characterStore = useSelector((state: any) => state.characters);

  useEffect(() => {
    dispatch(getAllCharacters());
    // dispatch(getCharacterDetails(1017100));
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.Logo src={MarvelLogo} />
        <S.Navbar>
          <S.NavigationList>
            {NavItems.map(({ path, name }) => (
              <Link to={path} key={path}>
                <S.NavigationItem>{name}</S.NavigationItem>
              </Link>
            ))}
            <Logo />
          </S.NavigationList>
        </S.Navbar>
      </S.Header>
      <S.MainContent>
        <S.TextContainer>
          <S.MainText>The World of Marvel</S.MainText>
          <S.SubText>
            O Marvel Heroes pode ser sua fonte de informações sobre o mundo
            marvel e outros assuntos relacionados.
          </S.SubText>
        </S.TextContainer>
        <S.CarrouselContainer>
          {characterStore.characters.map((item: any) => (
            <CardItem key={Math.random()} {...item} />
          ))}
        </S.CarrouselContainer>
      </S.MainContent>
    </S.Container>
  );
};

export default Home;
