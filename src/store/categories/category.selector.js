import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectDirectory = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.directory?.sort((a, b) => a.id - b.id)
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, slug, items } = category;
      acc[slug.toLowerCase()] = {title, items};
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
