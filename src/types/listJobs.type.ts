export type JobType = {
  _id: string;
  nameCompany: string;
  nameVacancy: string;
  salary: string;
  status: boolean;
  desc?: string;
  __v: number;
};

export type responseAllJobs = {
  listJobs: JobType[];
  counterJobs: number;
};

export type ApiResponse = {
  message: string;
  name?: string;
  response?: string;
  status: number;
};
