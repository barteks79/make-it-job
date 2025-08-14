export type Experience = 'Junior' | 'Mid' | 'Senior';
export type JobType = 'Full time' | 'Part-time' | 'Freelance' | 'Internship';
export type WorkType = 'On-site' | 'Remote' | 'Hybrid';

export type JobPost = {
  id: string;
  date: Date;
  isBookmarked: boolean;
  image: string;
  title: string;
  company: string;
  companyDescription: string;
  experience: Experience;
  salary: number;
  type: JobType;
  description: string;
  tags: string[];
  work: WorkType;
  jobInfo: string[];
  requirements: string[];
};
