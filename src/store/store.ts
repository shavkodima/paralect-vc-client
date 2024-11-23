import {
  combineReducers,
  combineSlices,
  configureStore,
} from '@reduxjs/toolkit';
import sliceJobs from './sliceJobs/sliceJobs';

const combineReducer = combineSlices({ sliceJobs });

export const store = configureStore({
  reducer: combineReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
