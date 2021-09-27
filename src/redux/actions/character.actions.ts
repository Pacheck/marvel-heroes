import api from '../../services/api';
import { Dispatch } from 'redux';

const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL';

export const getAllCharacters = () => async (dispatch: Dispatch) => {
  const characters = await api.get('characters');
  console.log(characters);
  dispatch({ type: GET_ALL_CHARACTERS, payload: characters.data.data.results });
};

export const getCharacterDetails =
  (characterID: number) => async (dispatch: Dispatch) => {
    try {
      // 1017100
      const characterDetail = await api.get(`characters/${characterID}`);
      //   dispatch({ type: GET_CHARACTER_DETAIL, payload:  });
      console.log(characterDetail.data.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };
