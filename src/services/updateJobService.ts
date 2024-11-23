import ApiInstance from '../api/ApiInstance';
import { ApiResponse, JobType } from '../types/listJobs.type';

export const updateJobService = async (
  dataJob: JobType,
  id: string
): Promise<ApiResponse> => {
  try {
    const { data } = await ApiInstance().patch<ApiResponse>(`jobs/${id}`, {
      ...dataJob,
      _id: dataJob._id,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
