import React from 'react';

import { Image, Container } from './styles';
import ForwardArrow from '../../assets/forward.svg';

type ArrowProps = {
  handleClick: () => void;
};
const Forward = ({ handleClick }: ArrowProps) => {
  return (
    <Container onClick={handleClick}>
      <Image src={ForwardArrow} alt="forward arrow" />;
    </Container>
  );
};

export default Forward;
