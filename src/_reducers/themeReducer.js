
const initialState = {
  theme: false,
};

export default function (state = initialState, action) {
  const {payload, type} = action;
  switch (type) {
    case 'DARK_THEME':
      console.log('theme Changes');
      return {
        ...state,
        theme: payload,
      };
    case 'LIGHT_THEME':
      console.log('theme Changes');
      return {
        ...state,
        theme: payload,
      };

    default:
      return state;
  }
}
