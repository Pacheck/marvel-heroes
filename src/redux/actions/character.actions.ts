import api from '../../services/api';
import { Dispatch } from 'redux';

const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL';

const GET_ALL_CHARACTERS_ERROR = 'GET_ALL_CHARACTERS_ERROR';
const GET_CHARACTER_DETAIL_ERROR = 'GET_CHARACTER_DETAIL_ERROR';
const SET_CHARACTER_DETAIL = 'SET_CHARACTER_DETAIL';
const CLEAR_CHARACTER_DETAIL = 'CLEAR_CHARACTER_DETAIL';

export const getAllCharacters = () => async (dispatch: Dispatch) => {
  try {
    const characters = await api.get('characters');
    console.log(characters);
    dispatch({
      type: GET_ALL_CHARACTERS,
      payload: characters.data.data.results,
    });
  } catch (err) {
    // dispatch({ type: GET_ALL_CHARACTERS_ERROR, payload: err });
  }
};

export const getCharacterDetails =
  (characterID: number | string) => (dispatch: Dispatch) => {
    console.log('action', characterID);
    dispatch({ type: GET_CHARACTER_DETAIL, payload: { id: characterID } });
  };

export const setCharacterDetails = (character: any) => (dispatch: Dispatch) => {
  dispatch({ type: SET_CHARACTER_DETAIL, payload: character });
};

export const clearDetailedCharacter = (dispatch: Dispatch) => {
  dispatch({ type: CLEAR_CHARACTER_DETAIL });
};
