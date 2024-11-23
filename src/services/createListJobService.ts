import ApiInstance from '../api/ApiInstance';
import { ApiResponse, JobType } from '../types/listJobs.type';

export const createListJobService = async (
  dataJob: JobType
): Promise<ApiResponse> => {
  try {
    const { data } = await ApiInstance().post<ApiResponse>(`jobs`, dataJob);
    return data;
  } catch (error) {
    throw error;
  }
};
