// src/reducers/index.js
import { TOGGLE_ACCORDION } from '../actions';

// Initial state
const initialState = {
  openIndex: null
};

// Reducer function
const accordionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ACCORDION:
      return {
        ...state,
        openIndex: state.openIndex === action.payload ? null : action.payload
      };
    default:
      return state;
  }
};

export default accordionReducer;
