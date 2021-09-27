import React from 'react';
import { CharacterProp } from '../../types';

import { Container, CardImage, CardName } from './styles';
const MiniCard = ({ name, thumbnail }: CharacterProp) => {
  return (
    <Container>
      <CardImage src={`${thumbnail.path}.${thumbnail.extension}`} />
      <CardName>{name}</CardName>
    </Container>
  );
};

export default MiniCard;
