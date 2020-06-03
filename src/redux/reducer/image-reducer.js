const initialState = { listOfImages: [] };
export default function (state = initialState, action) {
  switch (action.type) {
    case "IMAGESLIST":
      return {
        ...state,
        listOfImages: action.payload,
      };
    default:
      return state;
  }
}
