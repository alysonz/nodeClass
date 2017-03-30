function updateFormData(payload){
  return {
    type: "UPDATE_FORM_DATA",
    payload: payload
  }
}


export function saveData(payload) {
  return function(dispatch) {
    // window.fetch()
    // .then(function(result){
    //   dispatch(updateFormData({
    //     email: result.email,
    //     name: result.name
    //   }));
    // });
    dispatch(updateFormData({
      email: payload.email,
      name: payload.name
    }));
  }
}
