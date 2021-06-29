const initialState = {
  roomId: '',
  roomName: '',
  voiceUrl: 'Here is uyrllmjknv,m  lknkljasbnddf bssm ',
  recordingURL:''
};
export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case 'CHNAGE_ROOM':
      //   console.log(payload);
      return {
        ...state,
        roomId: payload,
      };
    case 'SAVE_VOICE_URL':
      return {
        ...state,
        recordingURL: payload,
      };
    case 'CHNAGE_ROOM_NAME':
      console.log('name : ', payload);
      return {
        ...state,
        roomName: payload,
      };
    default:
      return state;
  }
}
