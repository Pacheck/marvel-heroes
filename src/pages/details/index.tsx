import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import ArrowComponent from '../../components/backarrow';

import {
  clearDetailedCharacter,
  getCharacterDetails,
} from '../../redux/actions/character.actions';

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
} from './styles';

const CharacterDetail = () => {
  const store = useSelector((state: any) => state.characters);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEditInfo = () => history.push(`/details/${id}/edit`);
  const renderContent = () => {
    return (
      !!store.character && (
        <ContentWrapper>
          <CharImage
            src={`${store.character.thumbnail.path}.${store.character.thumbnail.extension}`}
            alt="character picture"
          />
          <InfoWrapper>
            <Name>{store.character.name}</Name>
            <Details>{store.character.description}</Details>
            <Series>Series</Series>
            <Text>
              {store.character.series.items.map((serie: any) => (
                <p key={serie.resourceURI}>{serie.name}</p>
              ))}
            </Text>
          </InfoWrapper>
          <EditCharacter onClick={handleEditInfo}>
            Editar informações
          </EditCharacter>
        </ContentWrapper>
      )
    );
  };

  useEffect(() => {
    dispatch(getCharacterDetails(Number(id)));

    return () => {
      dispatch(clearDetailedCharacter);
    };
  }, [dispatch]);

  return (
    <Container>
      {store.character && console.log(store)}
      <ArrowComponent path={`/`} />
      {renderContent()}
      <Footer>foot</Footer>
    </Container>
  );
};

export default CharacterDetail;
