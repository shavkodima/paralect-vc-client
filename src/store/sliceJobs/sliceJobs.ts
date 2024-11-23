import { Action, createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import {
  ApiResponse,
  JobType,
  responseAllJobs,
} from '../../types/listJobs.type';
import { getListJobsServices } from '../../services/getListJobsServices';
import { deleteListJobService } from '../../services/deleteListJobService';
import { createListJobService } from '../../services/createListJobService';
import { updateJobService } from '../../services/updateJobService';

interface IInitialStateSliceJobs {
  isLoading: boolean;
  listJobs: JobType[];
  isSuccess: ApiResponse | null;
  counterJobs: number;
  error: ApiResponse | null;
  page: number;
}

const initialStateSliceJob: IInitialStateSliceJobs = {
  isLoading: false,
  listJobs: [],
  isSuccess: null,
  counterJobs: 0,
  error: null,
  page: 1,
};

const sliceJobs = createSlice({
  name: 'sliceJobs',
  initialState: initialStateSliceJob,
  reducers: {
    setListJobsSlice: (state, action: PayloadAction<responseAllJobs>) => {
      state.listJobs = action.payload.listJobs;
      state.counterJobs = action.payload.counterJobs;
    },
    addJobSlice: (state, action: PayloadAction<JobType[]>) => {
      state.listJobs = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<ApiResponse | null>) => {
      state.error = action.payload;
    },
    setSuccess: (state, action: PayloadAction<ApiResponse | null>) => {
      state.isSuccess = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const {
  addJobSlice,
  setListJobsSlice,
  setError,
  setLoading,
  setPage,
  setSuccess,
} = sliceJobs.actions;

export const createListJob =
  (dataJob: JobType) => async (dispatch: Dispatch, getState: any) => {
    try {
      dispatch(setLoading(true));
      const createResponse = await createListJobService(dataJob);
      if (createResponse.status === 200) {
        dispatch(setSuccess(createResponse));
      } else {
        throw createResponse;
      }
      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch(setError(error));
      dispatch(setLoading(false));
    }
  };

export const updateJob =
  (dataJob: JobType, id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const responseUpdateJob = await updateJobService(dataJob, id);
      if (responseUpdateJob.status === 200) {
        dispatch(setSuccess(responseUpdateJob));
      } else {
        throw updateJob;
      }
      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch(setError(error));
      dispatch(setLoading(false));
    }
  };

export const getListJob =
  (page: number) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch(setLoading(true));
      const res = await getListJobsServices(page);
      dispatch(setListJobsSlice(res));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
    }
  };

export const deleteListJob = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const responseDelete = await deleteListJobService(id);
    if (responseDelete.status === 200) {
      dispatch(setSuccess(responseDelete));
    } else {
      throw responseDelete;
    }
    dispatch(setLoading(false));
  } catch (error: any) {
    dispatch(setError(error));
    dispatch(setLoading(false));
  }
};

export default sliceJobs.reducer;
