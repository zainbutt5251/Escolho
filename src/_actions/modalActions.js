// import axios from 'axios';

//Load User
export const viewModal = () => async (dispatch) => {
    try {
      // const res = await axios.get('/api/auth');

      dispatch({
        type: 'VIEW_MODAL',
        payload: true,
      });
    } catch (err) {
      dispatch({
        type: 'MODAL_ERROR',
      });
    }
//   alert('hi there !!');
};
export const hideModal = () => async (dispatch) => {
    try {
      // const res = await axios.get('/api/auth');

      dispatch({
        type: 'HIDE_MODAL',
        payload: false,
      });
    } catch (err) {
      dispatch({
        type: 'MODAL_ERROR',
      });
    }
//   alert('hi there !!');
};


export const viewComplModal = () => async (dispatch) => {
  try {
    // const res = await axios.get('/api/auth');

    dispatch({
      type: 'VIEW_COMPL_MODAL',
      payload: true,
    });
  } catch (err) {
    dispatch({
      type: 'MODAL_ERROR',
    });
  }
//   alert('hi there !!');
};

export const hideComplModal = () => async (dispatch) => {
  try {
    // const res = await axios.get('/api/auth');

    dispatch({
      type: 'HIDE_COMPL_MODAL',
      payload: false,
    });
  } catch (err) {
    dispatch({
      type: 'MODAL_ERROR',
    });
  }
//   alert('hi there !!');
};



export const viewCreateGroupModal = () => async (dispatch) => {
  try {
    // const res = await axios.get('/api/auth');
console.log('/////////////');
    dispatch({
      type: 'VIEW_CREATE_GROUP_MODAL',
      payload: true,
    });
  } catch (err) {
    dispatch({
      type: 'MODAL_ERROR',
    });
  }
//   alert('hi there !!');
};

export const hideCreateGroupModal = () => async (dispatch) => {
  try {
    // const res = await axios.get('/api/auth');

    dispatch({
      type: 'HIDE_CREATE_GROUP_MODAL',
      payload: false,
    });
  } catch (err) {
    dispatch({
      type: 'MODAL_ERROR',
    });
  }
//   alert('hi there !!');
};


export const viewAdminModal = () => async (dispatch) => {
  try {
    // const res = await axios.get('/api/auth');
console.log('/////////////');
    dispatch({
      type: 'VIEW_ADMIN_MODAL',
      payload: true,
    });
  } catch (err) {
    dispatch({
      type: 'MODAL_ERROR',
    });
  }
//   alert('hi there !!');
};

export const hideAdminModal = () => async (dispatch) => {
  try {
    // const res = await axios.get('/api/auth');

    dispatch({
      type: 'HIDE_ADMIN_MODAL',
      payload: false,
    });
  } catch (err) {
    dispatch({
      type: 'MODAL_ERROR',
    });
  }
//   alert('hi there !!');
};

