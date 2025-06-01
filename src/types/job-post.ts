type Exprience = 'Junior' | 'Mid' | 'Senior';
type JobType = 'Full time' | 'Part-time' | 'Freelance' | 'Internship';

export type JobPost = {
	date: Date;
	isBookmarked: boolean;
	title: string;
	company: string;
	experience: Exprience;
	salary: number;
	type: JobType;
	description: string;
	tags: string[];
};
