import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from './category.types.js'

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGOIRES_START)

export const fetchCategoriesSuccess = (categories) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGOIRES_SUCCESS, categories)

export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGOIRES_FAILED, error)

export const fetchDirectoryStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_DIRECTORY_START)

export const fetchDirectorySuccess = (categories) => createAction(CATEGORIES_ACTION_TYPES.FETCH_DIRECTORY_SUCCESS, categories)

export const fetchDirectoryFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_DIRECTORY_FAILED, error)
