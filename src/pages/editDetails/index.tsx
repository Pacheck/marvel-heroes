import React, { FormEvent, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { setCharacterDetails } from '../../redux/actions/character.actions';

import { Container, Form, InsertDataContainer, Title } from './styles';

type charProps = {
  name: string | null;
  description: string | null;
};
const EditDetails = () => {
  const [char, setChar] = useState<charProps>({
    name: null,
    description: null,
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const handleChangeBio = (e: any) => {
    const { name, value } = e.target;
    console.log([name, value]);
    setChar({ ...char, [name]: value } as Pick<charProps, keyof charProps>);
  };

  const handleSave = () => {
    const newChar = {
      id: Number(id),
      ...char,
    };
    dispatch(setCharacterDetails(newChar));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (char.name && char.description) {
      handleSave();
      history.push(`/details/${id}`);
    } else {
      alert('Name and Description are required');
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Edit Character Details</Title>
        <InsertDataContainer>
          <input
            type="text"
            name="name"
            placeholder="nome"
            onChange={handleChangeBio}
          />
          <textarea
            name="description"
            id="sobre"
            cols={41}
            rows={5}
            placeholder="sobre"
            onChange={handleChangeBio}
          ></textarea>
        </InsertDataContainer>

        <button type="submit">Salvar alterações</button>
      </Form>
    </Container>
  );
};

export default EditDetails;
