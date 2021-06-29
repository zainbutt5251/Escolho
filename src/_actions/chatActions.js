export const changeChat = (id, name, voiceUrl) => async (dispatch) => {
  try {
    dispatch({
      type: 'CHNAGE_ROOM',
      payload: id,
    });
    dispatch({
      type: 'CHNAGE_ROOM_NAME',

      payload: name,
    });

    console.log(voiceUrl);
    // console.log('why');
  } catch (error) {
    if (error)
      dispatch({
        type: 'ERROR',
      });
  }
};
export const addVoiceUrl = (url) => async (dispatch) => {
  console.log('========= from Action' + url);
  dispatch({
    type: 'SAVE_VOICE_URL',
    payload: url,
  });
};
