import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { isDev } from '../config';

import rootReducer, { RESET_STORE_ACTION_TYPE } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  devTools: isDev,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({ thunk: true, serializableCheck: false });

    if (isDev) {
      const logger = createLogger({ collapsed: true, duration: true });
      middlewares.push(logger);
    }

    return middlewares;
  },
  preloadedState: rootReducer(undefined, { type: RESET_STORE_ACTION_TYPE, payload: undefined }),
});

export type AppDispatchType = typeof store.dispatch;
export type AppStateType = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

export const resetStore = () => store.dispatch({ type: RESET_STORE_ACTION_TYPE });

export default store;
