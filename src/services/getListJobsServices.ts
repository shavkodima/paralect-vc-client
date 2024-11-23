import ApiInstance from '../api/ApiInstance';
import { JobType, responseAllJobs } from '../types/listJobs.type';

export const getListJobsServices = async (
  page: number
): Promise<responseAllJobs> => {
  try {
    const { data } = await ApiInstance().get<responseAllJobs>(`/jobs/${page}`);
    return data;
  } catch (error) {
    throw error;
  }
};
