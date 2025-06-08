type Exprience = 'Junior' | 'Mid' | 'Senior';
type JobType = 'Full time' | 'Part-time' | 'Freelance' | 'Internship';

export type JobPost = {
	id: string;
	date: Date;
	isBookmarked: boolean;
	image: string;
	title: string;
	company: string;
	experience: Exprience;
	salary: number;
	type: JobType;
	description: string;
	tags: string[];
};
