
export const darkTheme = () => async (dispatch) => {
  try {
    // const res = await axios.get('/api/auth');
    dispatch({
      type: 'DARK_THEME',
      payload: true,
    });
    console.log('hi saad');
  } catch (err) {
    dispatch({
      type: 'THEME_ERROR',
    });
  }
  //   alert('hi there !!');
};
export const lightTheme = () => async (dispatch) => {
  try {
    // const res = await axios.get('/api/auth');
    
    dispatch({
      type: 'LIGHT_THEME',
      payload: false,
    });
    console.log('hi saad');
  } catch (err) {
    dispatch({
      type: 'THEME_ERROR',
    });
  }
  //   alert('hi there !!');
};
