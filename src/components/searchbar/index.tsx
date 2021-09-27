import React, { useState } from 'react';

import Search from '../../assets/search.svg';
import { CharacterProp } from '../../types';

import { Container, SearchImg, Input } from './styles';

type CharProps = {
  characterList: CharacterProp[];
};
const Searchbar = ({ characterList }: CharProps) => {
  const [modal, setModal] = useState();
  const [inputValue, setInputValue] = useState<any>();
  const [newLista, setNewList] = useState<any>([]);

  const handleChange = (e: any) => {
    const { value } = e.target;
    setInputValue(value);
    const lista = characterList.filter((char: any) => char.name === inputValue);
    setNewList(lista);
  };
  return (
    <Container>
      <SearchImg src={Search} />
      <Input
        name="name"
        defaultValue={inputValue}
        type="text"
        placeholder="Pesquisar..."
        onChange={handleChange}
      />
      <div>{newLista}</div>
    </Container>
  );
};

export default Searchbar;
