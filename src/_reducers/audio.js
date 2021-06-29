const iniTisalState = {
  data: {},
};

export const AudioReducer = (state = iniTisalState, action) => {
  switch (action.type) {
    case 'SET_Audio':
      console.log(action.payload)
      return {...state, data: action.payload};

      case 'SET_Null_Audio':
        console.log('log from Reducer');
      console.log(action.payload)
      return { data: null};
    default:
      return state;
  }
};
