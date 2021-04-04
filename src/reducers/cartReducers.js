import { ADD_TO_CART, REMOVE_FROM_CART ,  FETCH_CART} from "../action/types";

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, items: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { ...state, items: action.payload.cartItems };
    case FETCH_CART:
      return { ...state, items: action.payload, filteredItems: action.payload };

    default:
      return state;
  }
}
