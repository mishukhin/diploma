import { all, call, put, takeLatest } from "redux-saga/effects"
import { getCategoriesAndDocuments, getDirectoryAndDocuments } from "../../utils/firebase/firebase.utils"
import { fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess, fetchDirectoryFailed, fetchDirectorySuccess } from "./category.action"
import { CATEGORIES_ACTION_TYPES } from "./category.types"

export function* fetchCategoriesAsync() {
  try {
    const categories = yield call(getCategoriesAndDocuments)
    yield put(fetchCategoriesSuccess(categories))
  }
  catch (error) {
    yield put(fetchCategoriesFailed(error))
  }
}

export function* fetchDirectoryAsync() {
  try {
    const categories = yield call(getDirectoryAndDocuments)
    yield put(fetchDirectorySuccess(categories))
  }
  catch (error) {
    yield put(fetchDirectoryFailed(error))
  }
}

export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGOIRES_START, fetchCategoriesAsync)
}

export function* onFetchDirectory() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_DIRECTORY_START, fetchDirectoryAsync)
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories), call(onFetchDirectory)])
}