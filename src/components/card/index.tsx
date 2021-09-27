import React from 'react';

import { Container, InfoWrapper, Image, ReadMore } from './styles';

type Series = {
  resourceURI: string;
  name: string;
};

type CharacterProp = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    available: number;
    items: Series[];
  };
};
const CardItem = ({
  id,
  name,
  description,
  thumbnail,
  series,
}: CharacterProp) => {
  const handleDescriptionLength = () => {
    if (description.length < 1)
      return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae egestas augue...';
    if (description.length > 100) return description.substring(0, 100) + '...';

    return description;
  };
  return (
    <Container>
      <Image src={`${thumbnail.path}.${thumbnail.extension}`} alt="hero img" />
      <InfoWrapper>
        <h1>{name}</h1>
        <p>{handleDescriptionLength()}</p>
        <ReadMore to={`/details/${id}`}>Ler mais</ReadMore>
      </InfoWrapper>
    </Container>
  );
};

export default CardItem;
