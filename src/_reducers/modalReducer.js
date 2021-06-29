const initialState = {
  visible: false,
  visibleCompl: false,
  visibleCreate: false,
  visibleModal: false,

};

export default function (state = initialState, action) {
  const {payload, type} = action;
  switch (type) {
    case 'VIEW_MODAL':
      console.log('Modal Open');
      return {
        ...state,
        visible: payload,
      };
    case 'HIDE_MODAL':
      console.log('Modal Closes');
      return {
        ...state,
        visible: payload,
      };
    
  case 'VIEW_COMPL_MODAL':
    console.log('Modal Open');
    return {
      ...state,
      visibleCompl: payload,
    };
  case 'HIDE_COMPL_MODAL':
    console.log('Modal Closes');
    return {
      ...state,
      visibleCompl: payload,
    };

    case 'VIEW_CREATE_GROUP_MODAL':
      console.log('\\\\\\\\\\//////');
    console.log('Modal Open');
    return {
      ...state,
      visibleCreate: payload,
    };
  case 'HIDE_CREATE_GROUP_MODAL':
    console.log('Modal Closes');
    return {
      ...state,
      visibleCreate: payload,
    };

    case 'VIEW_ADMIN_MODAL':
      console.log('\\\\\\\\\\//////');
    console.log('Modal Open');
    return {
      ...state,
      visibleModal: payload,
    };
  case 'HIDE_ADMIN_MODAL':
    console.log('Modal Closes');
    return {
      ...state,
      visibleModal: payload,
    };


  default:
    return state;
}
}
