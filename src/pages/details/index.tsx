import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import ArrowComponent from '../../components/backarrow';
import DetailCard from '../../components/detail-card';

import {
  clearDetailedCharacter,
  getCharacterDetails,
} from '../../redux/actions/character.actions';
import { CharacterProp } from '../../types';

import {
  Container,
  ContentWrapper,
  Footer,
  InfoWrapper,
  Name,
  Series,
  Text,
  Details,
  CharImage,
  EditCharacter,
  LeftWrapper,
  FooterCardsContainer,
} from './styles';

const CharacterDetail = () => {
  const [cardsElements, setCardsElements] = useState([]);
  const [randomNumbers, setRandomNumbers] = useState([
    Number((Math.random() * 100).toFixed(0)),
    Number((Math.random() * 100).toFixed(0)),
    Number((Math.random() * 100).toFixed(0)),
    Number((Math.random() * 100).toFixed(0)),
  ]);
  const store = useSelector((state: any) => state.characters);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEditInfo = () => history.push(`/details/${id}/edit`);

  const handleCharDetail = (description: string) => {
    if (description.length > 0) {
      return description;
    }
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet convallis magna, sed pharetra tellus maximus id. Mauris ut feugiat ipsum, sollicitudin cursus turpis. Phasellus at congue mi. Cras ullamcorper.';
  };

  const renderFooterContent = () => {
    return <FooterCardsContainer>{cardsElements}</FooterCardsContainer>;
  };
  const renderContent = () => {
    return (
      !!store.character && (
        <>
          <ArrowComponent path={`/`} />
          <ContentWrapper>
            <LeftWrapper>
              <CharImage
                src={`${store.character.thumbnail.path}.${store.character.thumbnail.extension}`}
                alt="character picture"
              />
              <EditCharacter onClick={handleEditInfo}>
                Editar informações
              </EditCharacter>
            </LeftWrapper>
            <InfoWrapper>
              <Name>{store.character.name}</Name>
              <Details>{handleCharDetail(store.character.description)}</Details>
              <Series>Series</Series>
              <Text>
                {store.character.series.items.map((serie: any) => (
                  <p key={serie.resourceURI}>{serie.name}</p>
                ))}
              </Text>
            </InfoWrapper>
          </ContentWrapper>
        </>
      )
    );
  };

  useEffect(() => {
    dispatch(getCharacterDetails(Number(id)));

    return () => {
      dispatch(clearDetailedCharacter);
    };
  }, [dispatch]);

  useEffect(() => {
    const data = store.characters.map((char: CharacterProp, index: number) => {
      if (
        index === randomNumbers[0] ||
        index === randomNumbers[1] ||
        index === randomNumbers[2] ||
        index === randomNumbers[3]
      ) {
        return <DetailCard key={char.id} {...char} />;
      }
      return null;
    });
    setCardsElements(data);
  }, []);

  return (
    <Container>
      {store.character && console.log(store)}
      {renderContent()}
      <Footer>
        <h2>Outros personagens</h2>
        {renderFooterContent()}
      </Footer>
    </Container>
  );
};

export default CharacterDetail;
