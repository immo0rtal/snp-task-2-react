import ActionTypes from "#/store/actions/constants.js";

const initialState = {
  formFields: localStorage.getItem("formData")
    ? JSON.parse(localStorage.getItem("formData"))
    : {
        fullname: "",
        email: "",
        phone: "",
        birthdate: "",
        message: "",
      },
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_FIELD:
      return {
        ...state,
        formFields: {
          ...state.formFields,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};
