const initialState = {
  characters: [],
  character: {},
};
const CharacterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'GET_ALL_CHARACTERS':
      console.log(action.payload);
      return { ...state, characters: action.payload };
    case 'GET_CHARACTER_DETAIL':
      return { ...state, character: action.payload };
    default:
      return state;
  }
};

export default CharacterReducer;
