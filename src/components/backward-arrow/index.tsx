import React from 'react';

import Backward from '../../assets/backward.svg';
import { Image, Container } from './styles';

type ArrowProps = {
  handleClick: () => void;
};
const Forward = ({ handleClick }: ArrowProps) => {
  return (
    <Container onClick={handleClick}>
      <Image src={Backward} alt="forward arrow" />;
    </Container>
  );
};

export default Forward;
