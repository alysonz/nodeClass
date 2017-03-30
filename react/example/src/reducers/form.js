const initialState = {};

export default function forms(state = initialState, action){
  switch (action.type) {
    case "UPDATE_FORM_DATA":
      console.log('INSIDE REDUCER!',state, action.payload);
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
