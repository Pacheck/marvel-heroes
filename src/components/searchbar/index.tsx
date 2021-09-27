import React from 'react';

import Search from '../../assets/search.svg';

import { Container, SearchImg, Input } from './styles';
const Searchbar = () => {
  return (
    <Container>
      <SearchImg src={Search} />
      <Input type="text" placeholder="Pesquisar..." />
    </Container>
  );
};

export default Searchbar;
