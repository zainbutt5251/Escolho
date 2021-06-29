export const setUser = (data) => async (dispatch) => {
    try {
      dispatch({
        type: "SET_USER",
        payload: data,
      });
    //   console.log('why');
    } catch (error) {
      if (error)
        dispatch({
          type: "ERROR",
        });
    }
  };