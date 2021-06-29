const initialState = {
    user: null,
  };
  export default function (state = initialState, action) {
    const {type, payload} = action;
  
    switch (type) {
      case 'SET_USER':
        // console.log(payload);

        return {
          ...state,
          user: payload,
        };
  
      default:
        return state;
    }
  }
  