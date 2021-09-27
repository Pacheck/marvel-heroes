import { CharacterProp } from '../../types';

const initialState: {
  characters: CharacterProp[];
  character: CharacterProp | null;
  errors: string[];
} = {
  characters: [],
  character: null,
  errors: [],
};

const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL';
const GET_ALL_CHARACTERS_ERROR = 'GET_ALL_CHARACTERS_ERROR';
const GET_CHARACTER_DETAIL_ERROR = 'GET_CHARACTER_DETAIL_ERROR';
const CLEAR_CHARACTER_DETAIL = 'CLEAR_CHARACTER_DETAIL';
const CharacterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CLEAR_CHARACTER_DETAIL:
      return { ...state, character: null };
    case GET_ALL_CHARACTERS:
      return { ...state, characters: action.payload };
    case GET_CHARACTER_DETAIL:
      const { id } = action.payload;
      const character = state.characters.find((char) => id === char.id);
      return { ...state, character };
    case 'SET_CHARACTER_DETAIL':
      const oldState = state.characters;
      const oldChar = state.characters.find(
        (char) => char.id === action.payload.id
      );
      const oldCharIndex = state.characters.findIndex(
        (char) => char.id === action.payload.id
      );
      const newCharProps = {
        ...oldChar,
        ...action.payload,
      };
      oldState[oldCharIndex] = newCharProps;
      console.log({ newCharProps });
      return { ...state, characters: oldState };
    case GET_CHARACTER_DETAIL_ERROR:
      return { ...state, errors: [action.payload] };
    case GET_ALL_CHARACTERS_ERROR:
      return { ...state, errors: [action.payload] };
    default:
      return state;
  }
};

export default CharacterReducer;
