const initialState = {};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "typeName":
      return { ...state };

    default:
      return state;
  }
};
