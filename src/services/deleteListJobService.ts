import ApiInstance from '../api/ApiInstance';
import { ApiResponse } from '../types/listJobs.type';

export const deleteListJobService = async (
  id: string
): Promise<ApiResponse> => {
  try {
    const { data } = await ApiInstance().delete<ApiResponse>(`jobs/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
