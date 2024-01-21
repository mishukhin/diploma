import { CATEGORIES_ACTION_TYPES } from "./category.types"

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action
  
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGOIRES_START:
    case CATEGORIES_ACTION_TYPES.FETCH_DIRECTORY_START:
      return {...state, isLoading: true }
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGOIRES_SUCCESS:
      return {
        ...state,
        categories: payload,
        isLoading: false
      }
    case CATEGORIES_ACTION_TYPES.FETCH_DIRECTORY_SUCCESS:
      return {
        ...state, 
        directory: payload,
        isLoading: false,
      }
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGOIRES_FAILED:
    case CATEGORIES_ACTION_TYPES.FETCH_DIRECTORY_FAILED:
      return {...state, error: payload, isLoading: false }
    default:
      return state
  }
}