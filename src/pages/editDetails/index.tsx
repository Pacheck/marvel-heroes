import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCharacterDetails } from '../../redux/actions/character.actions';
import ArrowBackComponent from '../../components/backarrow';

import { Container, Form } from './styles';

type charProps = {
  name: string | null;
  description: string | null;
};
const EditDetails = () => {
  const [char, setChar] = useState<charProps>({
    name: null,
    description: null,
  });
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const store = useSelector((state: any) => state.character);

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
  return (
    <Container>
      <ArrowBackComponent path={`/details/${id}`} />
      <Form onSubmit={(e) => e.preventDefault()}>
        <h1>Edit Character Details</h1>
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

        <button onClick={handleSave}>Salvar alterações</button>
      </Form>
    </Container>
  );
};

export default EditDetails;
