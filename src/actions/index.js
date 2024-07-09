// src/actions/index.js

// Action types
export const TOGGLE_ACCORDION = 'TOGGLE_ACCORDION';

// Action creators
export const toggleAccordion = (index) => ({
  type: TOGGLE_ACCORDION,
  payload: index
});
