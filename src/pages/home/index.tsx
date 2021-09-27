import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCharacters } from '../../redux/actions/character.actions';

import CardItem from '../../components/card';
import Logo from '../../components/searchbar';

import MarvelLogo from '../../assets/marvel-icon.png';
import * as S from './styles';
import ForwardArrow from '../../components/forward-arrow';
import BackwardArrow from '../../components/backward-arrow';
import { CharacterProp } from '../../types';

const NavItems = [
  { path: '/', name: 'Home' },
  { path: '/series', name: 'Séries' },
  { path: '/filmes', name: 'Filmes' },
  { path: '/animes', name: 'Animes' },
  { path: '/games', name: 'Games' },
];

const Home = () => {
  const dispatch = useDispatch();
  const characterStore = useSelector((state: any) => state.characters);
  const [cardPosition, setCardPosition] = useState([0, 3]);
  const [disableArrows, setDisableArrows] = useState({
    backwardArrow: true,
    forwardArrow: false,
  });

  const whichCardsRender = (item: CharacterProp, index: number) => {
    if (index >= cardPosition[0] && index <= cardPosition[1]) {
      return <CardItem key={item.id} {...item} />;
    }
    return null;
  };

  const handleNextCards = () => {
    if (cardPosition[1] < characterStore.characters.length - 1) {
      setCardPosition([cardPosition[0] + 3, cardPosition[1] + 3]);
      setDisableArrows({ ...disableArrows, backwardArrow: false });
    }
  };

  const handlePreviousCards = () => {
    if (cardPosition[0] > 0) {
      setCardPosition([cardPosition[0] - 3, cardPosition[1] - 3]);
      setDisableArrows({ ...disableArrows, forwardArrow: false });
    }
  };

  useEffect(() => {
    if (characterStore.characters.length <= 0) {
      dispatch(getAllCharacters());
    }
  }, []);

  useEffect(() => {
    if (cardPosition[0] - 1 < 0) {
      setDisableArrows({ ...disableArrows, backwardArrow: true });
    }
    if (cardPosition[1] + 1 > 100) {
      setDisableArrows({ ...disableArrows, forwardArrow: true });
    }
  }, [cardPosition]);

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
          {!disableArrows.backwardArrow && (
            <BackwardArrow handleClick={handlePreviousCards} />
          )}
          {characterStore.characters.map(whichCardsRender)}
          {!disableArrows.forwardArrow && (
            <ForwardArrow handleClick={handleNextCards} />
          )}
        </S.CarrouselContainer>
      </S.MainContent>
    </S.Container>
  );
};

export default Home;
