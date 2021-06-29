export const audio = (data) => {
  return {
    type: 'SET_Audio',
    payload: data,
  };
};

export const nullAudio = () => {
  console.log('null from action');
  return {
    type: 'SET_Null_Audio',
    payload: null,
  };
};

