import { configureStore } from '@reduxjs/toolkit';

import todos from "../data-access/Todo/reducers/todos";
import visibilityFilter from "../data-access/Todo/reducers/visibilityFilters";

export const store = configureStore({
  reducer: {
    todos,
    visibilityFilter
  },
});
