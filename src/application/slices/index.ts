import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import uiPersistentSlice from './uiPersistentSlice';
import uiSlice from './uiSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  uiPersistent: uiPersistentSlice,
  ui: uiSlice,
});

// Crear una funcion para borrar todos los reducers
export const resetAllReducers = () => {
  return rootReducer(undefined, { type: 'RESET_ALL_REDUCERS' });
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
